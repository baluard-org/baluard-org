+++
title = "Baluard Support"
description = "Get help with Baluard: desktop app, browser extension, mobile, and CLI. Contact, debug logs, and where to report security issues."
template = "page.html"
slug = "support"
path = "support"
+++

# Baluard support

Effective date: November 3, 2026

One page for every Baluard product: the desktop app, the browser extension, the mobile app, and the command line tool. Start here.

## Contact us

Email [support@baluard.app](mailto:support@baluard.app). One mailbox covers every product. Please tell us three things: the product (desktop, extension, mobile, or CLI), your operating system, and the Baluard version, which you can find in the app settings or with `baluard --version`. If a bug is hard to describe, attach the log file; logs never contain vault data or keys (see "Debug logs" below for where they live).

We read every message. Baluard is a small independent project, so please allow a few days for a reply.

## Desktop app (Windows, macOS, Linux)

- Downloads and release notes: [GitHub Releases](https://github.com/baluard-org/baluard/releases)
- Linux packages: the APT and DNF repositories hosted on this site ([setup](/#download-repo))
- Package signatures use the release key with fingerprint `2233 10EA BF1A B6FE E6BD DF3E 2A53 1D54 E6D7 4804`

## Browser extension (Chrome, Firefox)

- The extension needs the Baluard desktop app installed and running. It does nothing by itself: it talks to the app through a local channel on your machine. If the popup reports the app is missing, install or launch the desktop app first.
- Until the store listings are approved, you can load the unpacked build. Follow the [extension README](https://github.com/baluard-org/baluard/tree/main/browser) in the source repository.

## Mobile (Android)

- Install the APK from [GitHub Releases](https://github.com/baluard-org/baluard/releases)
- F-Droid repository: add `https://baluard.app/fdroid/repo/` under Settings > Repositories in F-Droid
- iOS is not available yet

## Command line

- `baluard --help` lists every command with its options
- The [source repository](https://github.com/baluard-org/baluard) carries the full documentation, including the architecture and design records

## Sync and git providers

- Sync setup, provider tokens, and troubleshooting live in the [git provider docs](https://github.com/baluard-org/baluard/blob/main/docs/dev/git-provider-apps-and-tokens.md)
- When two devices edit the same entry, the app shows a conflict panel. Your data is never lost: both versions stay available until you pick one or keep both

## Debug logs

When something breaks, the logs usually tell us why. Baluard writes them to a local folder on your machine:

- Linux: `$XDG_STATE_HOME/baluard/` (usually `~/.local/state/baluard/`)
- macOS: `~/Library/Logs/baluard/`
- Windows: `%LOCALAPPDATA%\baluard\logs\`

Logs record routing and error details, never vault contents or keys. Run the desktop app with the environment variable `BALUARD_DEBUG=1` set to capture full detail before sending them.

## Security issues

Please do not report vulnerabilities to the support mailbox. Use the private process in [SECURITY.md](https://github.com/baluard-org/baluard/blob/main/SECURITY.md) so we can fix the issue before any public detail. The full security model, including what a sync host can and cannot see, is in the [security white paper](/security/).

## Free software

Baluard is free software under GPL-3.0. There is no company behind a support contract, no telemetry funding the project, and no account to manage. The support mailbox and the public issue tracker are the whole support surface, and both are read by the people who write the code.
