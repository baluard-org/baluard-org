(function () {
  'use strict';

  var SOURCE = 'https://raw.githubusercontent.com/baluard-org/baluard/main/CHANGELOG.md';

  var LABELS = {
    en: { latest: 'Latest' },
    es: { latest: 'Última' },
    fr: { latest: 'Dernière' },
    pt: { latest: 'Mais recente' }
  };

  function esc(s) {
    return s.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Escape first, then layer inline markdown on top of the escaped text, so
  // no crafted input in the changelog can break out of the generated markup.
  function inline(text) {
    var out = esc(text);
    out = out.replace(/`([^`]+)`/g, function (_, code) {
      return '<code>' + code + '</code>';
    });
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, label, url) {
      if (!/^(https?:\/\/|#)/.test(url)) { return label; }
      var external = url.charAt(0) !== '#';
      var attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return '<a href="' + url + '"' + attrs + '>' + label + '</a>';
    });
    return out;
  }

  // Parse the repo changelog shape: `## X.Y.Z - YYYY-MM-DD` sections holding
  // `- ` bullets. [UNRELEASED] stays hidden: it is dev staging, not news.
  function parse(markdown) {
    var sections = [];
    var intro = [];
    var current = null;
    markdown.split(/\r?\n/).forEach(function (line) {
      var h2 = line.match(/^## (\[(UNRELEASED)\]|(\d+\.\d+\.\d+(?:-[0-9A-Za-z.]+)?))(?:\s+-\s+(.*))?$/);
      var bullet = line.match(/^- (.*)$/);
      if (h2) {
        current = {
          version: h2[3] || null,
          unreleased: Boolean(h2[2]),
          date: (h2[4] || '').trim(),
          items: []
        };
        if (!current.unreleased) { sections.push(current); }
        return;
      }
      if (!current) {
        if (line.trim() && !/^#\s/.test(line)) { intro.push(line.trim()); }
        return;
      }
      if (bullet && !current.unreleased) { current.items.push(inline(bullet[1])); }
    });
    return { intro: intro.join(' '), sections: sections };
  }

  function render(parsed) {
    var mount = document.getElementById('changelog-versions');
    var label = (LABELS[window.__baluardLang] || LABELS.en).latest;
    var html = '';
    parsed.sections.forEach(function (s, i) {
      var id = 'v-' + s.version.replace(/[^0-9A-Za-z.-]/g, '').replace(/\./g, '-');
      html += '<section class="cl-release" id="' + esc(id) + '">';
      html += '<h2 class="cl-version"><span class="cl-number">' + esc(s.version) + '</span>';
      if (i === 0) {
        html += '<span class="cl-latest">' + esc(label) + '</span>';
      }
      if (s.date) {
        html += '<span class="cl-date">' + esc(s.date) + '</span>';
      }
      html += '</h2>';
      if (s.items.length) {
        html += '<ul class="cl-items">';
        s.items.forEach(function (item) { html += '<li>' + item + '</li>'; });
        html += '</ul>';
      }
      html += '</section>';
    });
    if (!parsed.sections.length) {
      throw new Error('no releases parsed from the changelog');
    }
    mount.innerHTML = html;
  }

  function show(which) {
    var loading = document.getElementById('changelog-loading');
    var error = document.getElementById('changelog-error');
    if (which === 'error') {
      loading.hidden = true;
      error.hidden = false;
      return;
    }
    loading.hidden = true;
  }

  fetch(SOURCE, { headers: { Accept: 'text/plain' } })
    .then(function (response) {
      if (!response.ok) { throw new Error('HTTP ' + response.status); }
      return response.text();
    })
    .then(function (markdown) {
      render(parse(markdown));
      show('done');
    })
    .catch(function () { show('error'); });
})();
