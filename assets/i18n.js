(function () {
  'use strict';

  var TRANSLATIONS = {
    en: {
      'nav-arch': 'Architecture',
      'nav-features': 'Capabilities',
      'nav-security': 'Security Model',
      'nav-download': 'Download',
      'nav-source': 'Source',
      'nav-get-baluard': 'Get Baluard',

      'hero-title': 'No one can take it away. Including us.',
      'hero-pitch': 'Your passwords stay on your devices and sync through storage you control. No accounts to lock, no central database to breach, and no middleman reading along.',
      'hero-btn-download': 'Download',
      'hero-btn-paper': 'Security White Paper &rarr;',
      'trust-offline': '100% Offline Capable',
      'trust-noserver': 'Zero Central Servers',
      'trust-license': 'GPL-3.0 Free Software',

      'arch-eyebrow': 'Zero-Server Architecture',
      'arch-heading': 'Why the architecture is the security model.',
      'arch-lede': "Most password managers store everyone's vaults in one giant cloud database. If that company gets breached or sold, your encrypted passwords and unencrypted metadata end up in new hands. Baluard works like a personal safe in your home: your passwords stay on your own hardware, so there is no central database to break into.",
      'arch-node-tag-1': 'LAYER 1 / WHERE YOUR DATA LIVES',
      'arch-node-h4-1': 'A Safe in Your Home',
      'arch-node-p-1': 'Your vault stays on your physical phone and computer, encrypted with a key only you hold. Every entry is padded to identical size so observers cannot guess what is inside.',
      'arch-node-tag-2': 'LAYER 2 / HOW DEVICES CONNECT',
      'arch-node-h4-2': 'Keys Exchanged in Person',
      'arch-node-p-2': 'Your phone and computer pair directly with each other like two people swapping keys face-to-face. No central account, no corporate sign-in, and no company server in the middle.',
      'arch-node-tag-3': 'LAYER 3 / HOW VAULTS SYNC',
      'arch-node-h4-3': 'Sync Through Your Own Notebook',
      'arch-node-p-3': '<a href="/what-the-git/">Sync your vault through a private Git repo</a>, your home server, or a USB drive. The remote host sees only scrambled ciphertext. Even a total breach of the sync host exposes zero passwords.',

      'cap-eyebrow': 'Sovereign Capabilities',
      'cap-heading': 'Engineered for sovereignty and longevity.',
      'cap-lede': 'Built for autonomy, durability, and device-level custody.',
      'cap1-title': 'Hardware Key Vault Sealing',
      'cap1-desc': 'Enroll a YubiKey or FIDO2 hardware token to seal the entire vault. Even if an adversary extracts your master password, the vault refuses to decrypt without a physical touch on your security key.',
      'cap1-s1': 'Hardware challenge-response via FIDO2 hmac-secret',
      'cap1-s2': 'Canary verification validates authentication state without exposing master keys',
      'cap2-title': 'All 9 Cipher Types + Passkeys',
      'cap2-desc': 'Store logins (with embedded passkeys), cards, identities, SSH keys, bank accounts, driver licenses, passports, secure notes, and code signing keys.',
      'cap2-s1': 'RFC 6238 compliant integrated TOTP code generator',
      'cap2-s2': 'Native SSH and code signing key storage with public key export',
      'cap3-title': 'Spaces &amp; Family Collaboration',
      'cap3-desc': 'Share specific credential collections with family or team members without a central identity provider. Uses cryptographic invite codes and device-to-device grants.',
      'cap3-s1': 'Phrase-only emergency recovery kit for estate and family continuity',
      'cap3-s2': 'Role-based access grants: Owner, Admin, Editor, and Viewer',
      'cap4-title': 'Browser Extension &amp; Autofill',
      'cap4-desc': 'Native browser integration for Firefox, Chrome, and Chromium-based browsers. Autofill credentials, capture new logins, and sign into WebAuthn passkeys directly through local daemon IPC.',
      'cap4-s1': 'Direct local socket communication with zero cloud telemetry or analytics',
      'cap4-s2': 'Full commit history preservation for audit and rollback',
      'cap-merge-title': 'Git 3-Way Merge Conflict Resolution',
      'cap-merge-desc': '<a href="/what-the-git/">Because Baluard is built on Git</a>, concurrent edits on two offline devices never overwrite each other. When divergent changes occur, Baluard lets you inspect and resolve discrepancies field-by-field.',

      'cli-eyebrow': 'First-Class CLI',
      'cli-heading': 'Scriptable, daemon-backed terminal client.',
      'cli-lede': 'The `baluard` CLI gives you 35 commands with daemon-first speed and an offline `--direct` fallback. Perfect for dev environments, headless servers, and CI pipelines.',

      'sec-eyebrow': 'Auditable Assurance',
      'sec-heading': 'Read the Security White Paper',
      'sec-lede': 'Baluard publishes its complete cryptographic architecture and threat model. Everything claimed on this site can be verified in public source code and audited directly.',
      'sec-btn': 'Read the White Paper (Full 13 Sections) &rarr;',
      'spec-t1': 'Vault Cipher',
      'spec-t2': 'Key Derivation (KDF)',
      'spec-t3': 'Asymmetric Sealing',
      'spec-t4': 'Commit Integrity',
      'spec-t5': 'Memory Hygiene',

      'dl-eyebrow': 'Download Center',
      'dl-heading': 'Get Baluard for your platforms.',
      'dl-lede': 'Stand-alone binaries with cryptographic release checksums. No account creation, no cloud activation. This is a beta release.',
      'dl-appimage-tag': 'AppImage',
      'dl-appimage-name': 'Linux',
      'dl-appimage-desc': 'Single universal executable for any modern Linux distribution. Self-contained.',
      'dl-windows-tag': 'Installer',
      'dl-windows-name': 'Windows',
      'dl-windows-desc': 'NSIS setup for Windows 11 x64. Bundles the Baluard daemon and CLI.',
      'dl-macos-tag': 'In development',
      'dl-macos-name': 'macOS',
      'dl-macos-desc': 'Touch ID keychain integration and native Apple Silicon build.',
      'dl-card-download': 'Download &darr;',
      'dl-note': 'Beta builds of deb, rpm, and the CLI tarball also live in the <a href="https://github.com/baluard-org/baluard/releases" style="color: #38bdf8;">GitHub releases</a>.',

      'repo-summary': 'Prefer system updates via APT or DNF? (Ubuntu, Debian, Fedora)',
      'repo-open': 'View repository instructions &darr;',
      'repo-intro': 'Install from the official repository to pull beta updates directly through your system package manager.',
      'repo-apt-label': 'Ubuntu / Debian (APT):',
      'repo-apt-note': 'Uses the deb822 format (default on Ubuntu 24.04+ and Debian 13+). The armored key is used directly, no dearmor step.',
      'repo-dnf-label': 'Fedora (DNF):',
      'repo-dnf-note': 'Fedora 41+ (dnf 5). On RHEL and clones (dnf 4): <code style="color: #94a3b8;">sudo dnf config-manager --add-repo=https://packages.baluard.app/baluard.repo</code>',
      'repo-arch-label': 'Arch Linux (pacman):',
      'repo-arch-note': 'Pacman verifies the repository database and package signatures before installing. Requires pacman 6 or newer.',

      'repo-fingerprint': 'Repository signing key fingerprint: <code style="color: #b3e55c;">223310EA BF1A B6FE E6BD DF3E 2A53 1D54 E6D7 4804</code>. Always verify this fingerprint before trusting repository imports.',

      'fd-summary': 'On Android? The free and open-source build lives on F-Droid.',
      'fd-open': 'View F-Droid instructions &darr;',
      'fd-intro': 'The F-Droid distribution is free and open-source software: the build is compiled and signed by the F-Droid repository infrastructure, and updates arrive through the F-Droid client itself.',
      'fd-label': 'Android (F-Droid):',
      'fd-link-line': 'With F-Droid installed, open <a href="https://packages.baluard.app/fdroid/repo/">https://packages.baluard.app/fdroid/repo/</a> on your phone and tap <strong>Add to F-Droid</strong>.',
      'fd-manual': 'Or add it by hand: in F-Droid, open Settings &gt; Repositories, tap <strong>+</strong>, paste the URL, and enter the fingerprint below so the repository shows as verified.',
      'fd-fingerprint': 'Repository fingerprint: <code style="color: #b3e55c;">1CE90DCFE0FB1003F2F66999257B5E6F074E46EE453FB0D44F8CF8E13E6EEAAB</code>',

      'ext-heading': 'Browser Extensions',
      'ext-lede': 'MV3 companions that talk directly to the local `baluard-daemon` via native messaging. Strict origin matching, zero remote telemetry.',
      'ext-ff-name': 'Firefox Add-on',
      'ext-ff-desc': 'MV3 extension with native messaging host bridge and origin matching.',
      'ext-ff-status': 'Install from Mozilla Add-ons &rarr;',
      'ext-ch-name': 'Chromium Extension',
      'ext-ch-desc': 'MV3 companion with inline autofill and local capability-token authentication.',
      'ext-ch-status': 'Install from Chrome Web Store &rarr;',
      'ext-note': 'Every release includes a <a href="https://github.com/baluard-org/baluard/releases/latest/download/SHA256SUMS" target="_blank" rel="noopener noreferrer" data-dl-type="manifest">signed SHA256SUMS manifest</a> with cryptographic signatures.',

      'copy-btn': 'Copy',
      'copy-btn-copied': 'Copied \u2713',
      'dl-coming-soon': 'Coming soon',

      'footer-desc': "Git-native, sovereign password manager with padded-bucket encryption and device-identity bootstrapping. Built so your credentials stay on your machines, where no one can take them away. Synced under your terms.",
      'footer-col-project': 'Project',
      'footer-link-dl': 'Download Release',
      'footer-link-sec': 'Security White Paper',
      'footer-link-git': 'What the Git?',
      'footer-link-support': 'Support',
      'footer-link-docs': 'Documentation',
      'footer-link-ai': 'AI Instructions',
      'footer-link-src': 'Source Code (GitHub)',
      'footer-link-rel': 'Release Notes &amp; Checksums',
      'footer-col-integrity': 'Integrity &amp; Freedom',
      'footer-link-privacy': 'Privacy Policy',
      'footer-link-tos': 'Terms of Service',
      'footer-link-lic': 'License (GPL-3.0)',
      'footer-link-vuln': 'Vulnerability Reporting',
      'footer-link-pkg': 'APT &amp; DNF Packages',
      'footer-bottom-lic': 'Free software under <a href="https://github.com/baluard-org/baluard/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">GPL-3.0</a>. No trackers, no telemetry, no cloud lock-in.',
      'footer-built-by': 'Built by <a href="https://actitud.xyz" target="_blank" rel="noopener noreferrer">Esteban</a>'
    },

    es: {
      'nav-arch': 'Arquitectura',
      'nav-features': 'Capacidades',
      'nav-security': 'Modelo de Seguridad',
      'nav-download': 'Descargar',
      'nav-source': 'Código',
      'nav-get-baluard': 'Obtener Baluard',

      'hero-title': 'Nadie te lo puede quitar. Ni siquiera nosotros.',
      'hero-pitch': 'Tus contraseñas se quedan en tus dispositivos y se sincronizan a través de almacenamiento bajo tu control. Sin cuentas que bloquear, sin bases de datos centrales que vulnerar y sin intermediarios leyendo tus datos.',
      'hero-btn-download': 'Descargar',
      'hero-btn-paper': 'Libro Blanco de Seguridad &rarr;',
      'trust-offline': '100% Funcional sin conexión',
      'trust-noserver': 'Cero Servidores Centrales',
      'trust-license': 'Software Libre GPL-3.0',

      'arch-eyebrow': 'Arquitectura Sin Servidor',
      'arch-heading': 'Por qué la arquitectura es el modelo de seguridad.',
      'arch-lede': 'La mayoría de los gestores guardan las bóvedas de todos en una base de datos central en la nube. Si esa empresa sufre un ataque o es vendida, tus contraseñas cifradas y tus metadatos sin cifrar terminan en otras manos. Baluard funciona como una caja fuerte en tu propia casa: tus contraseñas se quedan en tu hardware, por lo que no existe una base de datos central que vulnerar.',
      'arch-node-tag-1': 'CAPA 1 / DÓNDE VIVEN TUS DATOS',
      'arch-node-h4-1': 'Una Caja Fuerte en tu Casa',
      'arch-node-p-1': 'Tu bóveda permanece en tu teléfono y computadora físicos, cifrada con una clave que solo tú tienes. Cada entrada se estandariza a un tamaño idéntico para que nadie pueda adivinar qué hay dentro.',
      'arch-node-tag-2': 'CAPA 2 / CÓMO SE CONECTAN TUS DISPOSITIVOS',
      'arch-node-h4-2': 'Intercambio de Claves en Persona',
      'arch-node-p-2': 'Tu teléfono y tu computadora se vinculan directamente entre sí, como dos personas intercambiando llaves en persona. Sin cuenta central, sin inicio de sesión corporativo y sin servidores en el medio.',
      'arch-node-tag-3': 'CAPA 3 / CÓMO SE SINCRONIZAN TUS BÓVEDAS',
      'arch-node-h4-3': 'Sincroniza a Través de tu Propio Cuaderno',
      'arch-node-p-3': '<a href="/what-the-git/">Sincroniza mediante un repositorio Git privado</a>, tu servidor doméstico o una unidad USB. El servidor remoto solo ve datos cifrados ilegibles. Incluso si vulneran el servidor de sincronización por completo, no se expone ninguna contraseña.',

      'cap-eyebrow': 'Capacidades Soberanas',
      'cap-heading': 'Diseñado para la soberanía y la longevidad.',
      'cap-lede': 'Construido para la autonomía, la durabilidad y la custodia a nivel de dispositivo.',
      'cap1-title': 'Sellado de Bóveda con Llave de Hardware',
      'cap1-desc': 'Registra una YubiKey o un token de hardware FIDO2 para sellar la bóveda completa. Aunque un adversario extraiga tu contraseña maestra, la bóveda no se descifrará sin un toque físico en tu llave de seguridad.',
      'cap1-s1': 'Desafío-respuesta de hardware vía FIDO2 hmac-secret',
      'cap1-s2': 'La verificación canary valida el estado de autenticación sin exponer las claves maestras',
      'cap2-title': 'Los 9 Tipos de Elementos + Passkeys',
      'cap2-desc': 'Guarda inicios de sesión (con passkeys integradas), tarjetas, identidades, claves SSH, cuentas bancarias, licencias de conducir, pasaportes, notas seguras y claves de firma de código.',
      'cap2-s1': 'Generador de códigos TOTP integrado compatible con RFC 6238',
      'cap2-s2': 'Almacenamiento nativo de claves SSH y de firma de código con exportación de clave pública',
      'cap3-title': 'Espacios y Colaboración Familiar',
      'cap3-desc': 'Comparte colecciones específicas de credenciales con tu familia o equipo sin un proveedor de identidad central. Usa códigos de invitación criptográficos y autorizaciones de dispositivo a dispositivo.',
      'cap3-s1': 'Kit de recuperación de emergencia solo con frase para la continuidad familiar y patrimonial',
      'cap3-s2': 'Autorizaciones de acceso por rol: Propietario, Administrador, Editor y Lector',
      'cap4-title': 'Extensión de Navegador y Autocompletado',
      'cap4-desc': 'Integración nativa con Firefox, Chrome y navegadores basados en Chromium. Autocompleta credenciales, captura nuevos inicios de sesión y firma con passkeys WebAuthn directamente vía IPC del demonio local.',
      'cap4-s1': 'Comunicación por socket local directo sin telemetría ni análisis en la nube',
      'cap4-s2': 'Conservación del historial completo de commits para auditoría y reversión',
      'cap-merge-title': 'Resolución de conflictos Git con fusión de tres vías',
      'cap-merge-desc': '<a href="/what-the-git/">Como Baluard está construido sobre Git</a>, las ediciones simultáneas en dos dispositivos sin conexión nunca se sobrescriben entre sí. Cuando hay cambios divergentes, Baluard te permite inspeccionar y resolver las discrepancias campo por campo.',

      'cli-eyebrow': 'CLI de Primer Nivel',
      'cli-heading': 'Cliente de terminal programable respaldado por demonio.',
      'cli-lede': 'El CLI de `baluard` te ofrece 35 comandos con velocidad basada en demonio y un modo sin conexión `--direct`. Ideal para entornos dev, servidores headless y pipelines de CI.',

      'sec-eyebrow': 'Garantía Auditable',
      'sec-heading': 'Lee el Libro Blanco de Seguridad',
      'sec-lede': 'Baluard publica su arquitectura criptográfica completa y modelo de amenazas. Todo lo afirmado en este sitio puede verificarse en el código fuente público y auditarse directamente.',
      'sec-btn': 'Leer el Libro Blanco (13 Secciones Completas) &rarr;',
      'spec-t1': 'Cifrado de Bóveda',
      'spec-t2': 'Derivación de Claves (KDF)',
      'spec-t3': 'Sellado Asimétrico',
      'spec-t4': 'Integridad de Commits',
      'spec-t5': 'Higiene de Memoria',

      'dl-eyebrow': 'Centro de Descargas',
      'dl-heading': 'Obtén Baluard para tus plataformas.',
      'dl-lede': 'Binarios independientes con checksums criptográficos. Sin creación de cuentas ni activación en la nube. Esta es una versión beta.',
      'dl-appimage-tag': 'AppImage',
      'dl-appimage-name': 'Linux',
      'dl-appimage-desc': 'Un único ejecutable universal para cualquier distribución Linux moderna. Autocontenido.',
      'dl-windows-tag': 'Instalador',
      'dl-windows-name': 'Windows',
      'dl-windows-desc': 'Instalador NSIS para Windows 11 x64. Incluye el demonio y el CLI de Baluard.',
      'dl-macos-tag': 'En desarrollo',
      'dl-macos-name': 'macOS',
      'dl-macos-desc': 'Integración de llavero con Touch ID y compilación nativa para Apple Silicon.',
      'dl-card-download': 'Descargar &darr;',
      'dl-note': 'Las compilaciones beta de deb, rpm y el tarball del CLI también están disponibles en las <a href="https://github.com/baluard-org/baluard/releases" style="color: #38bdf8;">releases de GitHub</a>.',

      'repo-summary': '¿Prefieres actualizaciones del sistema vía APT o DNF? (Ubuntu, Debian, Fedora)',
      'repo-open': 'Ver instrucciones del repositorio &darr;',
      'repo-intro': 'Instala desde el repositorio oficial para recibir actualizaciones beta directamente en tu gestor de paquetes del sistema.',
      'repo-apt-label': 'Ubuntu / Debian (APT):',
      'repo-apt-note': 'Usa el formato deb822 (predeterminado en Ubuntu 24.04+ y Debian 13+). La clave blindada se usa directamente, sin paso de dearmor.',
      'repo-dnf-label': 'Fedora (DNF):',
      'repo-dnf-note': 'Fedora 41+ (dnf 5). En RHEL y clones (dnf 4): <code style="color: #94a3b8;">sudo dnf config-manager --add-repo=https://packages.baluard.app/baluard.repo</code>',
      'repo-arch-label': 'Arch Linux (pacman):',
      'repo-arch-note': 'Pacman verifica las firmas de la base de datos y de los paquetes antes de instalar. Requiere pacman 6 o superior.',

      'repo-fingerprint': 'Huella digital de la clave de firma del repositorio: <code style="color: #b3e55c;">223310EA BF1A B6FE E6BD DF3E 2A53 1D54 E6D7 4804</code>. Verifica siempre esta huella antes de confiar en importaciones de repositorios.',

      'fd-summary': '¿En Android? La compilación libre y de código abierto está disponible en F-Droid.',
      'fd-open': 'Ver instrucciones de F-Droid &darr;',
      'fd-intro': 'La distribución de F-Droid es software libre y de código abierto: la compilación la realiza y firma la infraestructura del repositorio de F-Droid, y las actualizaciones llegan a través del propio cliente de F-Droid.',
      'fd-label': 'Android (F-Droid):',
      'fd-link-line': 'Con F-Droid instalado, abre <a href="https://packages.baluard.app/fdroid/repo/">https://packages.baluard.app/fdroid/repo/</a> en tu teléfono y toca <strong>Add to F-Droid</strong>.',
      'fd-manual': 'O agrégala a mano: en F-Droid, abre Ajustes &gt; Repositorios, toca <strong>+</strong>, pega la URL e ingresa la huella digital de abajo para que el repositorio aparezca como verificado.',
      'fd-fingerprint': 'Huella digital del repositorio: <code style="color: #b3e55c;">1CE90DCFE0FB1003F2F66999257B5E6F074E46EE453FB0D44F8CF8E13E6EEAAB</code>',

      'ext-heading': 'Extensiones de Navegador',
      'ext-lede': 'Extensiones MV3 que se comunican directamente con el `baluard-daemon` local vía mensajería nativa. Coincidencia estricta de orígenes, cero telemetría remota.',
      'ext-ff-name': 'Complemento de Firefox',
      'ext-ff-desc': 'Extensión MV3 con puente de host de mensajería nativa y coincidencia de orígenes.',
      'ext-ff-status': 'Instalar desde Mozilla Add-ons &rarr;',
      'ext-ch-name': 'Extensión Chromium',
      'ext-ch-desc': 'Extensión MV3 con autocompletado en línea y autenticación local por token de capacidad.',
      'ext-ch-status': 'Instalar desde Chrome Web Store &rarr;',
      'ext-note': 'Cada release incluye un <a href="https://github.com/baluard-org/baluard/releases/latest/download/SHA256SUMS" target="_blank" rel="noopener noreferrer" data-dl-type="manifest">manifiesto SHA256SUMS firmado</a> con firmas criptográficas.',

      'copy-btn': 'Copiar',
      'copy-btn-copied': 'Copiado \u2713',
      'dl-coming-soon': 'Próximamente',

      'footer-desc': 'Gestor de contraseñas soberano nativo en git con cifrado en buckets con relleno y arranque por identidad de dispositivo. Construido para que tus credenciales permanezcan en tus máquinas, donde nadie te las puede quitar. Sincronizado bajo tus términos.',
      'footer-col-project': 'Proyecto',
      'footer-link-dl': 'Descargar Versión',
      'footer-link-sec': 'Libro Blanco de Seguridad',
      'footer-link-git': '¿Qué es Git?',
      'footer-link-support': 'Soporte',
      'footer-link-docs': 'Documentación',
      'footer-link-ai': 'Instrucciones para IA',
      'footer-link-src': 'Código Fuente (GitHub)',
      'footer-link-rel': 'Notas de Versión y Checksums',
      'footer-col-integrity': 'Integridad y Libertad',
      'footer-link-privacy': 'Política de Privacidad',
      'footer-link-tos': 'Términos del Servicio',
      'footer-link-lic': 'Licencia (GPL-3.0)',
      'footer-link-vuln': 'Reporte de Vulnerabilidades',
      'footer-link-pkg': 'Paquetes APT y DNF',
      'footer-bottom-lic': 'Software libre bajo <a href="https://github.com/baluard-org/baluard/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">GPL-3.0</a>. Sin rastreadores, sin telemetría, sin dependencia de la nube.',
      'footer-built-by': 'Construido por <a href="https://actitud.xyz" target="_blank" rel="noopener noreferrer">Esteban</a>'
    },

    fr: {
      'nav-arch': 'Architecture',
      'nav-features': 'Capacités',
      'nav-security': 'Modèle de Sécurité',
      'nav-download': 'Télécharger',
      'nav-source': 'Code Source',
      'nav-get-baluard': 'Obtenir Baluard',

      'hero-title': 'Personne ne peut vous le retirer. Même pas nous.',
      'hero-pitch': 'Vos mots de passe restent sur vos appareils et se synchronisent via le stockage que vous contrôlez. Aucun compte à verrouiller, aucune base de données centrale à pirater et aucun intermédiaire pour vous espionner.',
      'hero-btn-download': 'Télécharger',
      'hero-btn-paper': 'Livre Blanc de Sécurité &rarr;',
      'trust-offline': '100% Utilisable Hors Ligne',
      'trust-noserver': 'Zéro Serveur Central',
      'trust-license': 'Logiciel Libre GPL-3.0',

      'arch-eyebrow': 'Architecture Sans Serveur',
      'arch-heading': 'Pourquoi l\'architecture est le modèle de sécurité.',
      'arch-lede': 'La plupart des gestionnaires stockent tous les coffres dans une base de données cloud unique. Si cette entreprise est piratée ou rachetée, vos mots de passe chiffrés et vos métadonnées non chiffrées se retrouvent entre de nouvelles mains. Baluard fonctionne comme un coffre-fort chez vous : vos mots de passe restent sur votre propre matériel, sans base de données centrale à compromettre.',
      'arch-node-tag-1': 'COUCHE 1 / OÙ VIVENT VOS DONNÉES',
      'arch-node-h4-1': 'Un Coffre-Fort Chez Vous',
      'arch-node-p-1': 'Votre coffre reste sur vos appareils physiques, chiffré par une clé que vous êtes seul à détenir. Chaque entrée a une taille identique pour empêcher quiconque de deviner son contenu.',
      'arch-node-tag-2': 'COUCHE 2 / CONNEXION ENTRE APPAREILS',
      'arch-node-h4-2': 'Échange de Clés en Main Propre',
      'arch-node-p-2': 'Votre téléphone et votre ordinateur s\'associent directement entre eux, comme deux personnes échangeant une clé en face à face. Aucun compte central, aucune connexion d\'entreprise et aucun serveur intermédiaire.',
      'arch-node-tag-3': 'COUCHE 3 / SYNCHRONISATION DES COFFRES',
      'arch-node-h4-3': 'Synchronisation via Votre Propre Carnet',
      'arch-node-p-3': '<a href="/what-the-git/">Synchronisez via un dépôt Git privé</a>, votre serveur personnel ou une clé USB. Le serveur distant ne voit que des blocs chiffrés illisibles. Même un piratage total du serveur n\'expose aucun mot de passe.',

      'cap-eyebrow': 'Capacités Souveraines',
      'cap-heading': 'Conçu pour la souveraineté et la longévité.',
      'cap-lede': 'Conçu pour l\'autonomie, la durabilité et la garde au niveau de l\'appareil.',
      'cap1-title': 'Scellement du Coffre par Clé Matérielle',
      'cap1-desc': 'Enregistrez une YubiKey ou un token matériel FIDO2 pour sceller la totalité du coffre. Même si un adversaire extrait votre mot de passe maître, le coffre refuse de se déchiffrer sans contact physique sur votre clé de sécurité.',
      'cap1-s1': 'Challenge-response matériel via FIDO2 hmac-secret',
      'cap1-s2': 'La vérification canary valide l\'état d\'authentification sans exposer les clés maîtresses',
      'cap2-title': 'Les 9 Types d\'Éléments + Passkeys',
      'cap2-desc': 'Stockez identifiants (avec passkeys intégrées), cartes, identités, clés SSH, comptes bancaires, permis de conduire, passeports, notes sécurisées et clés de signature de code.',
      'cap2-s1': 'Générateur de codes TOTP intégré conforme à la RFC 6238',
      'cap2-s2': 'Stockage natif des clés SSH et de signature de code avec export de clé publique',
      'cap3-title': 'Espaces et Collaboration Familiale',
      'cap3-desc': 'Partagez des collections précises d\'identifiants avec votre famille ou votre équipe sans fournisseur d\'identité central. Utilise des codes d\'invitation cryptographiques et des autorisations d\'appareil à appareil.',
      'cap3-s1': 'Kit de récupération d\'urgence par phrase seule pour la continuité familiale et successorale',
      'cap3-s2': 'Autorisations d\'accès par rôle : Propriétaire, Administrateur, Éditeur et Lecteur',
      'cap4-title': 'Extension Navigateur et Remplissage Automatique',
      'cap4-desc': 'Intégration native à Firefox, Chrome et aux navigateurs basés sur Chromium. Remplit automatiquement vos identifiants, capture les nouvelles connexions et signe avec les passkeys WebAuthn directement via l\'IPC du démon local.',
      'cap4-s1': 'Communication directe par socket local, sans télémétrie ni analyse cloud',
      'cap4-s2': 'Conservation de l\'historique complet des commits pour audit et retour arrière',
      'cap-merge-title': 'Résolution des conflits Git par fusion à trois voies',
      'cap-merge-desc': '<a href="/what-the-git/">Baluard étant construit sur Git</a>, les modifications simultanées sur deux appareils hors ligne ne s\'écrasent jamais l\'une l\'autre. En cas de changements divergents, Baluard vous permet d\'inspecter et de résoudre les différences champ par champ.',

      'cli-eyebrow': 'CLI de Premier Plan',
      'cli-heading': 'Client terminal scriptable adossé à un démon.',
      'cli-lede': 'Le CLI `baluard` offre 35 commandes avec la rapidité du démon et un mode hors ligne `--direct`. Idéal pour environnements dev, serveurs headless et pipelines CI.',

      'sec-eyebrow': 'Assurance Auditable',
      'sec-heading': 'Lisez le Livre Blanc de Sécurité',
      'sec-lede': 'Baluard publie son architecture cryptographique complète et son modèle de menaces. Tout ce qui est présenté ici peut être audité directement dans le code source public.',
      'sec-btn': 'Lire le Livre Blanc (13 Sections Complètes) &rarr;',
      'spec-t1': 'Chiffrement du Coffre',
      'spec-t2': 'Dérivation de Clés (KDF)',
      'spec-t3': 'Scellement Asymétrique',
      'spec-t4': 'Intégrité des Commits',
      'spec-t5': 'Hygiène de la Mémoire',

      'dl-eyebrow': 'Centre de Téléchargement',
      'dl-heading': 'Obtenez Baluard pour vos plateformes.',
      'dl-lede': 'Binaires autonomes avec sommes de contrôle cryptographiques. Aucune création de compte, aucune activation cloud. Il s\'agit d\'une version bêta.',
      'dl-appimage-tag': 'AppImage',
      'dl-appimage-name': 'Linux',
      'dl-appimage-desc': 'Un unique exécutable universel pour toute distribution Linux moderne. Autonome.',
      'dl-windows-tag': 'Installateur',
      'dl-windows-name': 'Windows',
      'dl-windows-desc': 'Installation NSIS pour Windows 11 x64. Inclut le démon et le CLI Baluard.',
      'dl-macos-tag': 'En développement',
      'dl-macos-name': 'macOS',
      'dl-macos-desc': 'Intégration au trousseau avec Touch ID et compilation native pour Apple Silicon.',
      'dl-card-download': 'Télécharger &darr;',
      'dl-note': 'Les builds bêta de deb, rpm et de l\'archive CLI sont aussi disponibles dans les <a href="https://github.com/baluard-org/baluard/releases" style="color: #38bdf8;">releases GitHub</a>.',

      'repo-summary': 'Vous préférez les mises à jour système via APT ou DNF ? (Ubuntu, Debian, Fedora)',
      'repo-open': 'Voir les instructions du dépôt &darr;',
      'repo-intro': 'Installez depuis le dépôt officiel pour recevoir les mises à jour bêta directement dans votre gestionnaire de paquets système.',
      'repo-apt-label': 'Ubuntu / Debian (APT) :',
      'repo-apt-note': 'Utilise le format deb822 (par défaut sur Ubuntu 24.04+ et Debian 13+). La clé blindée est utilisée directement, sans étape dearmor.',
      'repo-dnf-label': 'Fedora (DNF) :',
      'repo-dnf-note': 'Fedora 41+ (dnf 5). Sur RHEL et ses clones (dnf 4) : <code style="color: #94a3b8;">sudo dnf config-manager --add-repo=https://packages.baluard.app/baluard.repo</code>',
      'repo-arch-label': 'Arch Linux (pacman) :',
      'repo-arch-note': 'Pacman vérifie les signatures de la base de données et des paquets avant l\'installation. Nécessite pacman 6 ou supérieur.',

      'repo-fingerprint': 'Empreinte de la clé de signature du dépôt : <code style="color: #b3e55c;">223310EA BF1A B6FE E6BD DF3E 2A53 1D54 E6D7 4804</code>. Vérifiez toujours cette empreinte avant de faire confiance à des imports de dépôt.',

      'fd-summary': 'Sur Android ? Le build libre et open source est disponible sur F-Droid.',
      'fd-open': 'Voir les instructions F-Droid &darr;',
      'fd-intro': 'La distribution F-Droid est un logiciel libre et open source : le build est compilé et signé par l\'infrastructure du dépôt F-Droid, et les mises à jour arrivent via le client F-Droid lui-même.',
      'fd-label': 'Android (F-Droid) :',
      'fd-link-line': 'Avec F-Droid installé, ouvrez <a href="https://packages.baluard.app/fdroid/repo/">https://packages.baluard.app/fdroid/repo/</a> sur votre téléphone et touchez <strong>Add to F-Droid</strong>.',
      'fd-manual': 'Ou ajoutez-le à la main : dans F-Droid, ouvrez Paramètres &gt; Dépôts, touchez <strong>+</strong>, collez l\'URL et saisissez l\'empreinte ci-dessous pour que le dépôt apparaisse comme vérifié.',
      'fd-fingerprint': 'Empreinte du dépôt : <code style="color: #b3e55c;">1CE90DCFE0FB1003F2F66999257B5E6F074E46EE453FB0D44F8CF8E13E6EEAAB</code>',

      'ext-heading': 'Extensions Navigateur',
      'ext-lede': 'Extensions MV3 qui communiquent directement avec le `baluard-daemon` local via la messagerie native. Correspondance stricte des origines, zéro télémétrie distante.',
      'ext-ff-name': 'Module Firefox',
      'ext-ff-desc': 'Extension MV3 avec passerelle de messagerie native et correspondance d\'origines.',
      'ext-ff-status': 'Installer depuis Mozilla Add-ons &rarr;',
      'ext-ch-name': 'Extension Chromium',
      'ext-ch-desc': 'Extension MV3 avec remplissage automatique intégré et authentification par jeton de capacité locale.',
      'ext-ch-status': 'Installer depuis le Chrome Web Store &rarr;',
      'ext-note': 'Chaque release inclut un <a href="https://github.com/baluard-org/baluard/releases/latest/download/SHA256SUMS" target="_blank" rel="noopener noreferrer" data-dl-type="manifest">manifeste SHA256SUMS signé</a> avec signatures cryptographiques.',

      'copy-btn': 'Copier',
      'copy-btn-copied': 'Copi\u00e9 \u2713',
      'dl-coming-soon': 'Bientôt disponible',

      'footer-desc': 'Gestionnaire de mots de passe souverain natif sous git avec chiffrement par compartiments à taille constante (padded buckets) et identité par appareil. Conçu pour que vos identifiants restent sur vos machines, où nul ne peut vous les enlever. Synchronisé selon vos propres conditions.',
      'footer-col-project': 'Projet',
      'footer-link-dl': 'Télécharger la Version',
      'footer-link-sec': 'Livre Blanc de Sécurité',
      'footer-link-git': "Qu'est-ce que Git ?",
      'footer-link-support': 'Support',
      'footer-link-docs': 'Documentation',
      'footer-link-ai': "Instructions pour l'IA",
      'footer-link-src': 'Code Source (GitHub)',
      'footer-link-rel': 'Notes de Version &amp; Sommes de Contrôle',
      'footer-col-integrity': 'Intégrité et Liberté',
      'footer-link-privacy': 'Politique de Confidentialité',
      'footer-link-tos': 'Conditions d\'Utilisation',
      'footer-link-lic': 'Licence (GPL-3.0)',
      'footer-link-vuln': 'Signalement de Vulnérabilités',
      'footer-link-pkg': 'Paquets APT &amp; DNF',
      'footer-bottom-lic': 'Logiciel libre sous <a href="https://github.com/baluard-org/baluard/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">GPL-3.0</a>. Aucun traqueur, aucune télémétrie, aucun verrouillage cloud.',
      'footer-built-by': 'Conçu par <a href="https://actitud.xyz" target="_blank" rel="noopener noreferrer">Esteban</a>'
    },

    pt: {
      'nav-arch': 'Arquitetura',
      'nav-features': 'Capacidades',
      'nav-security': 'Modelo de Segurança',
      'nav-download': 'Baixar',
      'nav-source': 'Código',
      'nav-get-baluard': 'Obter Baluard',

      'hero-title': 'Ninguém pode tirar de você. Nem mesmo nós.',
      'hero-pitch': 'Suas senhas permanecem em seus dispositivos e se sincronizam pelo armazenamento sob seu controle. Sem contas para bloquear, sem banco de dados central para invadir e sem intermediários lendo seus dados.',
      'hero-btn-download': 'Baixar',
      'hero-btn-paper': 'Relatório de Segurança &rarr;',
      'trust-offline': '100% Funcional Offline',
      'trust-noserver': 'Zero Servidores Centrais',
      'trust-license': 'Software Livre GPL-3.0',

      'arch-eyebrow': 'Arquitetura Sem Servidor',
      'arch-heading': 'Por que a arquitetura é o modelo de segurança.',
      'arch-lede': 'A maioria dos gerenciadores guarda os cofres de todos em um banco de dados central na nuvem. Se essa empresa for invadida ou vendida, suas senhas criptografadas e seus metadados não criptografados acabam em outras mãos. O Baluard funciona como um cofre na sua casa: suas senhas ficam no seu próprio hardware, portanto não existe um banco de dados central para violar.',
      'arch-node-tag-1': 'CAMADA 1 / ONDE SEUS DADOS FICAM',
      'arch-node-h4-1': 'Um Cofre na Sua Casa',
      'arch-node-p-1': 'Seu cofre fica no seu celular e computador físicos, criptografado com uma chave que apenas você possui. Cada registro é preenchido com tamanho idêntico para que ninguém descubra o que há dentro.',
      'arch-node-tag-2': 'CAMADA 2 / COMO OS DISPOSITIVOS SE CONECTAM',
      'arch-node-h4-2': 'Troca de Chaves Pessoalmente',
      'arch-node-p-2': 'Seu celular e computador se conectam diretamente um ao outro, como duas pessoas trocando uma chave em mãos. Sem conta central, sem login corporativo e sem servidor da empresa no meio.',
      'arch-node-tag-3': 'CAMADA 3 / COMO OS COFRES SINCRONIZAM',
      'arch-node-h4-3': 'Sincronização Através do Seu Próprio Caderno',
      'arch-node-p-3': '<a href="/what-the-git/">Sincronize por um repositório Git privado</a>, seu servidor doméstico ou um pen drive USB. O servidor remoto enxerga apenas texto cifrado ilegível. Mesmo uma invasão total do servidor não expõe nenhuma senha.',

      'cap-eyebrow': 'Capacidades Soberanas',
      'cap-heading': 'Projetado para soberania e longevidade.',
      'cap-lede': 'Construído para autonomia, durabilidade e custódia no nível do dispositivo.',
      'cap1-title': 'Selamento do Cofre com Chave de Hardware',
      'cap1-desc': 'Cadastre uma YubiKey ou um token de hardware FIDO2 para selar o cofre inteiro. Mesmo que um adversário extraia sua senha mestra, o cofre se recusa a descriptografar sem um toque físico na sua chave de segurança.',
      'cap1-s1': 'Challenge-response de hardware via FIDO2 hmac-secret',
      'cap1-s2': 'A verificação canary valida o estado de autenticação sem expor as chaves-mestras',
      'cap2-title': 'Todos os 9 Tipos de Itens + Passkeys',
      'cap2-desc': 'Guarde logins (com passkeys incorporadas), cartões, identidades, chaves SSH, contas bancárias, carteiras de motorista, passaportes, notas seguras e chaves de assinatura de código.',
      'cap2-s1': 'Gerador de códigos TOTP integrado em conformidade com a RFC 6238',
      'cap2-s2': 'Armazenamento nativo de chaves SSH e de assinatura de código com exportação de chave pública',
      'cap3-title': 'Espaços e Colaboração Familiar',
      'cap3-desc': 'Compartilhe coleções específicas de credenciais com a família ou a equipe sem um provedor de identidade central. Usa códigos de convite criptográficos e concessões de dispositivo para dispositivo.',
      'cap3-s1': 'Kit de recuperação de emergência somente com frase para continuidade familiar e patrimonial',
      'cap3-s2': 'Concessões de acesso por papel: Proprietário, Administrador, Editor e Leitor',
      'cap4-title': 'Extensão para Navegador e Preenchimento Automático',
      'cap4-desc': 'Integração nativa com Firefox, Chrome e navegadores baseados em Chromium. Preenche credenciais, captura novos logins e assina com passkeys WebAuthn diretamente via IPC do daemon local.',
      'cap4-s1': 'Comunicação direta por socket local sem telemetria ou análise na nuvem',
      'cap4-s2': 'Preservação do histórico completo de commits para auditoria e reversão',
      'cap-merge-title': 'Resolução de conflitos Git com mesclagem de três vias',
      'cap-merge-desc': '<a href="/what-the-git/">Como o Baluard é construído sobre o Git</a>, edições simultâneas em dois dispositivos offline nunca se sobrescrevem. Quando há mudanças divergentes, o Baluard permite inspecionar e resolver as diferenças campo por campo.',

      'cli-eyebrow': 'CLI de Primeira Linha',
      'cli-heading': 'Cliente de terminal programável com suporte a daemon.',
      'cli-lede': 'O CLI `baluard` oferece 35 comandos com velocidade baseada em daemon e um modo offline `--direct`. Ideal para ambientes de desenvolvimento, servidores headless e pipelines de CI.',

      'sec-eyebrow': 'Garantia Auditável',
      'sec-heading': 'Leia o Relatório de Segurança',
      'sec-lede': 'O Baluard publica sua arquitetura criptográfica completa e modelo de ameaças. Tudo afirmado neste site pode ser verificado em código-fonte público e auditado diretamente.',
      'sec-btn': 'Ler o Relatório (13 Seções Completas) &rarr;',
      'spec-t1': 'Cifra do Cofre',
      'spec-t2': 'Derivação de Chaves (KDF)',
      'spec-t3': 'Selamento Assimétrico',
      'spec-t4': 'Integridade dos Commits',
      'spec-t5': 'Higiene de Memória',

      'dl-eyebrow': 'Central de Downloads',
      'dl-heading': 'Obtenha o Baluard para suas plataformas.',
      'dl-lede': 'Binários independentes com checksums criptográficos. Sem criação de conta, sem ativação na nuvem. Esta é uma versão beta.',
      'dl-appimage-tag': 'AppImage',
      'dl-appimage-name': 'Linux',
      'dl-appimage-desc': 'Um único executável universal para qualquer distribuição Linux moderna. Autocontido.',
      'dl-windows-tag': 'Instalador',
      'dl-windows-name': 'Windows',
      'dl-windows-desc': 'Instalador NSIS para Windows 11 x64. Inclui o daemon e o CLI do Baluard.',
      'dl-macos-tag': 'Em desenvolvimento',
      'dl-macos-name': 'macOS',
      'dl-macos-desc': 'Integração ao chaveiro com Touch ID e compilação nativa para Apple Silicon.',
      'dl-card-download': 'Baixar &darr;',
      'dl-note': 'Os builds beta de deb, rpm e do tarball do CLI também estão disponíveis nas <a href="https://github.com/baluard-org/baluard/releases" style="color: #38bdf8;">releases do GitHub</a>.',

      'repo-summary': 'Prefere atualizações do sistema via APT ou DNF? (Ubuntu, Debian, Fedora)',
      'repo-open': 'Ver instruções do repositório &darr;',
      'repo-intro': 'Instale pelo repositório oficial para receber atualizações beta diretamente no seu gerenciador de pacotes do sistema.',
      'repo-apt-label': 'Ubuntu / Debian (APT):',
      'repo-apt-note': 'Usa o formato deb822 (padrão no Ubuntu 24.04+ e Debian 13+). A chave blindada é usada diretamente, sem etapa de dearmor.',
      'repo-dnf-label': 'Fedora (DNF):',
      'repo-dnf-note': 'Fedora 41+ (dnf 5). No RHEL e clones (dnf 4): <code style="color: #94a3b8;">sudo dnf config-manager --add-repo=https://packages.baluard.app/baluard.repo</code>',
      'repo-arch-label': 'Arch Linux (pacman):',
      'repo-arch-note': 'O pacman verifica as assinaturas do banco de dados e dos pacotes antes de instalar. Requer pacman 6 ou superior.',

      'repo-fingerprint': 'Impressão digital da chave de assinatura do repositório: <code style="color: #b3e55c;">223310EA BF1A B6FE E6BD DF3E 2A53 1D54 E6D7 4804</code>. Verifique sempre esta impressão antes de confiar em importações de repositório.',

      'fd-summary': 'No Android? O build livre e de código aberto está disponível no F-Droid.',
      'fd-open': 'Ver instruções do F-Droid &darr;',
      'fd-intro': 'A distribuição F-Droid é software livre e de código aberto: o build é compilado e assinado pela infraestrutura do repositório F-Droid, e as atualizações chegam pelo próprio cliente F-Droid.',
      'fd-label': 'Android (F-Droid):',
      'fd-link-line': 'Com o F-Droid instalado, abra <a href="https://packages.baluard.app/fdroid/repo/">https://packages.baluard.app/fdroid/repo/</a> no seu celular e toque em <strong>Add to F-Droid</strong>.',
      'fd-manual': 'Ou adicione à mão: no F-Droid, abra Configurações &gt; Repositórios, toque em <strong>+</strong>, cole a URL e informe a impressão digital abaixo para que o repositório apareça como verificado.',
      'fd-fingerprint': 'Impressão digital do repositório: <code style="color: #b3e55c;">1CE90DCFE0FB1003F2F66999257B5E6F074E46EE453FB0D44F8CF8E13E6EEAAB</code>',

      'ext-heading': 'Extensões para Navegador',
      'ext-lede': 'Extensões MV3 que se comunicam diretamente com o `baluard-daemon` local via mensageria nativa. Correspondência estrita de origens, zero telemetria remota.',
      'ext-ff-name': 'Extensão do Firefox',
      'ext-ff-desc': 'Extensão MV3 com ponte de host de mensageria nativa e correspondência de origens.',
      'ext-ff-status': 'Instalar pela Mozilla Add-ons &rarr;',
      'ext-ch-name': 'Extensão Chromium',
      'ext-ch-desc': 'Extensão MV3 com preenchimento automático integrado e autenticação local por token de capacidade.',
      'ext-ch-status': 'Instalar pela Chrome Web Store &rarr;',
      'ext-note': 'Cada release inclui um <a href="https://github.com/baluard-org/baluard/releases/latest/download/SHA256SUMS" target="_blank" rel="noopener noreferrer" data-dl-type="manifest">manifesto SHA256SUMS assinado</a> com assinaturas criptográficas.',

      'copy-btn': 'Copiar',
      'copy-btn-copied': 'Copiado \u2713',
      'dl-coming-soon': 'Em breve',

      'footer-desc': 'Gerenciador de senhas soberano nativo em git com criptografia em buckets preenchidos (padding) e inicialização por identidade de dispositivo. Construído para que suas credenciais permaneçam em suas máquinas, onde ninguém pode tirá-las. Sincronizado sob seus próprios termos.',
      'footer-col-project': 'Projeto',
      'footer-link-dl': 'Baixar Versão',
      'footer-link-sec': 'Relatório de Segurança',
      'footer-link-git': 'O que é Git?',
      'footer-link-support': 'Suporte',
      'footer-link-docs': 'Documentação',
      'footer-link-ai': 'Instruções para IA',
      'footer-link-src': 'Código Fonte (GitHub)',
      'footer-link-rel': 'Notas de Versão e Checksums',
      'footer-col-integrity': 'Integridade e Liberdade',
      'footer-link-privacy': 'Política de Privacidade',
      'footer-link-tos': 'Termos de Serviço',
      'footer-link-lic': 'Licença (GPL-3.0)',
      'footer-link-vuln': 'Relatório de Vulnerabilidades',
      'footer-link-pkg': 'Pacotes APT e DNF',
      'footer-bottom-lic': 'Software livre sob licença <a href="https://github.com/baluard-org/baluard/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">GPL-3.0</a>. Sem rastreadores, sem telemetria, sem bloqueio de nuvem.',
      'footer-built-by': 'Construído por <a href="https://actitud.xyz" target="_blank" rel="noopener noreferrer">Esteban</a>'
    }
  };

  var STORAGE_KEY = 'baluard_lang';
  var SUPPORTED = ['en', 'es', 'fr', 'pt'];

  function getSavedLanguage() {
    var early = window.__baluardLang;
    if (early && SUPPORTED.indexOf(early) !== -1) {
      return early;
    }

    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) {
        return saved;
      }
    } catch (e) {}

    var navLang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(navLang) !== -1) {
      return navLang;
    }
    return 'en';
  }

  function setLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.documentElement.lang = lang;

    var dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    }

    var options = document.querySelectorAll('.lang-option');
    for (var j = 0; j < options.length; j++) {
      var opt = options[j];
      var optLang = opt.getAttribute('data-lang');
      var isCurrent = (optLang === lang);
      opt.classList.toggle('active', isCurrent);
      opt.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    }

    document.documentElement.classList.remove('i18n-pending');
  }

  function initLangSwitcher() {
    var btn = document.getElementById('lang-btn');
    var dropdown = document.getElementById('lang-dropdown');
    if (!btn || !dropdown) return;

    function openDropdown() {
      btn.setAttribute('aria-expanded', 'true');
      dropdown.classList.add('is-open');
    }

    function closeDropdown() {
      btn.setAttribute('aria-expanded', 'false');
      dropdown.classList.remove('is-open');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    dropdown.addEventListener('click', function (e) {
      var option = e.target.closest('.lang-option');
      if (!option) return;
      var lang = option.getAttribute('data-lang');
      if (lang) {
        setLanguage(lang);
        closeDropdown();
        btn.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        closeDropdown();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        closeDropdown();
        btn.focus();
      }
    });

    var current = getSavedLanguage();
    setLanguage(current);
    try { sessionStorage.removeItem('baluard_latest_release_cache'); } catch (e) {}
  }

  // Dynamic labels (copy buttons) read the active dictionary at call time.
  window.__baluardI18nDict = function () {
    return TRANSLATIONS[getSavedLanguage()] || TRANSLATIONS.en;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangSwitcher);
  } else {
    initLangSwitcher();
  }
})();
