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
      'trust-buckets': 'Size-Padded Buckets',

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
      'arch-node-p-3': 'Sync your vault through a private Git repo, your home server, or a USB drive. The remote host sees only scrambled ciphertext. Even a total breach of the sync host exposes zero passwords.',
      'arch-c1-title': 'Hardware You Own',
      'arch-c1-desc': 'Data stays at rest on your physical devices. Master keys are derived locally with Argon2id and never transmitted anywhere.',
      'arch-c2-title': 'Encrypted Git Commits',
      'arch-c2-desc': 'Every change is a signed, auditable commit. Roll back, inspect history, or resolve conflicts with standard git tooling.',
      'arch-c3-title': 'Any Git Remote',
      'arch-c3-desc': 'Sync over SSH to your self-hosted Forgejo, Gitea, GitLab, or personal Linux box. No proprietary sync daemon required.',

      'cap-eyebrow': 'Core Capabilities',
      'cap-heading': 'Engineered for daily resilience and cryptographic rigor.',
      'cap-p1-title': 'Padded Buckets (Traffic Defense)',
      'cap-p1-desc': 'Ciphertext lengths reveal metadata. Baluard clusters entries into uniform padded buckets so observers cannot distinguish between a single credential and fifty.',
      'cap-p2-title': 'Ed25519 Commit Signatures',
      'cap-p2-desc': 'Every vault change is committed and signed with a per-device Ed25519 cryptographic key. Rogue remotes cannot inject foreign entries without failing verification.',
      'cap-p3-title': 'Modern Cryptographic Primitives',
      'cap-p3-desc': 'Argon2id for memory-hard key derivation. AES-256-GCM for symmetric bucket sealing. RFC 9180 HPKE (DHKEM-X25519) for zero-knowledge inter-device key exchange.',
      'cap-p4-title': 'Local Keyrings &amp; Biometrics',
      'cap-p4-desc': 'Integrates natively with Linux Secret Service, macOS Keychain, and Windows DPAPI. Unlock with biometrics without compromising master key isolation.',
      'cap-p5-title': 'Conflict Resolution via Standard Git',
      'cap-p5-desc': 'Two devices updated simultaneously? Baluard merges discrete entry changes cleanly. Conflicting changes are surfaced in standard visual git diff format.',

      'cli-eyebrow': 'First-Class CLI',
      'cli-heading': 'Scriptable, daemon-backed terminal client.',
      'cli-lede': 'The baluard CLI gives you 35 commands with daemon-first speed and an offline --direct fallback. Perfect for dev environments, headless servers, and CI pipelines.',

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
      'copy-btn': 'Copy',
      'copy-btn-copied': 'Copied \u2713',
      'dl-coming-soon': 'Coming soon',
      'dl-heading': 'Get Baluard for your platforms.',
      'dl-lede': 'Stand-alone binaries with cryptographic release checksums. No account creation, no cloud activation. This is a beta release.',
      'dl-linux-title': 'Linux Desktop &amp; CLI',
      'dl-linux-desc': 'AppImage, DEB, RPM, and statically compiled CLI. Supports Wayland, X11, and headless server environments.',
      'dl-linux-btn': 'Download for Linux (x86_64)',
      'dl-android-title': 'Android',
      'dl-android-desc': 'Biometric authentication, local SQLite/Git caching, and full autofill service integration without Google Play dependencies.',
      'dl-android-btn': 'Download APK (v0.1.0)',
      'dl-ext-title': 'Browser Extension',
      'dl-ext-desc': 'MV3 companion with inline autofill and local capability-token authentication.',
      'dl-ext-btn': 'Web Store listing pending',
      'dl-macwin-title': 'macOS &amp; Windows',
      'dl-macwin-desc': 'Universal binary for Apple Silicon / Intel and Windows 10/11 installers with native DPAPI keystore backing.',
      'dl-macwin-btn': 'Build from Source',

      'footer-desc': "Git-native, sovereign password manager with padded-bucket encryption and device-identity bootstrapping. Built so your credentials stay on your machines, where no one can take them away. Synced under your terms.",
      'footer-col-project': 'Project',
      'footer-link-dl': 'Download Release',
      'footer-link-sec': 'Security White Paper',
      'footer-link-support': 'Support',
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
      'trust-offline': '100% Funcional Fuera de Línea',
      'trust-noserver': 'Cero Servidores Centrales',
      'trust-license': 'Software Libre GPL-3.0',
      'trust-buckets': 'Cubetas con Relleno de Tamaño',

      'arch-eyebrow': 'Arquitectura Sin Servidor',
      'arch-heading': 'Por qué la arquitectura es el modelo de seguridad.',
      'arch-lede': 'La mayoría de los gestores guardan las bóvedas de todos en una base de datos central en la nube. Si esa empresa sufre un ataque o es vendida, tus contraseñas quedan expuestas. Baluard funciona como una caja fuerte en tu propia casa: tus contraseñas se quedan en tu hardware, por lo que no existe una base de datos central que vulnerar.',
      'arch-node-tag-1': 'CAPA 1 / DÓNDE VIVEN TUS DATOS',
      'arch-node-h4-1': 'Una Caja Fuerte en tu Casa',
      'arch-node-p-1': 'Tu bóveda permanece en tu teléfono y computadora física, cifrada con una clave que solo tú tienes. Cada entrada se rellena a un tamaño idéntico para que nadie pueda adivinar qué hay dentro.',
      'arch-node-tag-2': 'CAPA 2 / CÓMO SE CONECTAN TUS DISPOSITIVOS',
      'arch-node-h4-2': 'Intercambio de Claves en Persona',
      'arch-node-p-2': 'Tu teléfono y tu computadora se vinculan directamente entre sí, como dos personas entregándose una llave en mano. Sin cuenta central, sin inicio de sesión corporativo y sin servidores en el medio.',
      'arch-node-tag-3': 'CAPA 3 / CÓMO SE SINCRONIZAN TUS BÓVEDAS',
      'arch-node-h4-3': 'Sincroniza a Través de tu Propio Cuaderno',
      'arch-node-p-3': 'Sincroniza mediante un repositorio Git privado, tu servidor doméstico o una unidad USB. El servidor remoto solo ve datos cifrados ilegibles. Incluso si vulneran el servidor de sincronización por completo, no exponen ninguna contraseña.',
      'arch-c1-title': 'Hardware de tu Propiedad',
      'arch-c1-desc': 'Tus datos descansan en tus dispositivos físicos. Las claves maestras se derivan localmente con Argon2id y nunca se transmiten a ninguna parte.',
      'arch-c2-title': 'Commits de Git Cifrados',
      'arch-c2-desc': 'Cada cambio es un commit firmado y auditable. Vuelve atrás, inspecciona el historial o resuelve conflictos con herramientas estándar de git.',
      'arch-c3-title': 'Cualquier Servidor Git Remoto',
      'arch-c3-desc': 'Sincroniza mediante SSH con tu instancia auto-alojada de Forgejo, Gitea, GitLab o tu servidor Linux personal. Sin demonios propietarios de sincronización.',

      'cap-eyebrow': 'Capacidades Principales',
      'cap-heading': 'Diseñado para la resiliencia diaria y el rigor criptográfico.',
      'cap-p1-title': 'Cubetas con Relleno de Tamaño (Defensa de Tráfico)',
      'cap-p1-desc': 'La longitud del texto cifrado revela metadatos. Baluard agrupa secretos en cubetas de tamaño uniforme para que observadores no distingan entre una sola credencial y cincuenta.',
      'cap-p2-title': 'Firmas de Dispositivo Ed25519',
      'cap-p2-desc': 'Cada cambio en la bóveda se registra y firma con una clave criptográfica Ed25519 única por dispositivo. Servidores remotos rebeldes no pueden inyectar cambios sin fallar la verificación.',
      'cap-p3-title': 'Primitivas Criptográficas Modernas',
      'cap-p3-desc': 'Argon2id para derivación de claves exigente en memoria. AES-256-GCM para sellado simétrico de cubetas. RFC 9180 HPKE (DHKEM-X25519) para intercambio de claves entre dispositivos con conocimiento cero.',
      'cap-p4-title': 'Llaveros Locales y Biometría',
      'cap-p4-desc': 'Integración nativa con Linux Secret Service, macOS Keychain y Windows DPAPI. Desbloquea con biometría sin comprometer el aislamiento de la clave maestra.',
      'cap-p5-title': 'Resolución de Conflictos vía Git Estándar',
      'cap-p5-desc': '¿Dos dispositivos actualizados al mismo tiempo? Baluard fusiona cambios discretos con limpieza. Los conflictos se presentan en el formato visual estándar de diff de git.',

      'cli-eyebrow': 'CLI de Primer Nivel',
      'cli-heading': 'Cliente de terminal programable respaldado por demonio.',
      'cli-lede': 'El CLI de baluard te ofrece 35 comandos con velocidad basada en demonio y respaldo fuera de línea --direct. Ideal para entornos dev, servidores sin pantalla y pipelines de CI.',

      'sec-eyebrow': 'Garantía Auditable',
      'sec-heading': 'Lee el Libro Blanco de Seguridad',
      'sec-lede': 'Baluard publica su arquitectura criptográfica completa y modelo de amenazas. Todo lo afirmado en este sitio puede verificarse en código abierto público y auditarse directamente.',
      'sec-btn': 'Leer el Libro Blanco (13 Secciones) &rarr;',
      'spec-t1': 'Cifrado de Bóveda',
      'spec-t2': 'Derivación de Claves (KDF)',
      'spec-t3': 'Sellado Asimétrico',
      'spec-t4': 'Integridad de Commits',
      'spec-t5': 'Higiene de Memoria',

      'dl-eyebrow': 'Centro de Descargas',
      'copy-btn': 'Copiar',
      'copy-btn-copied': 'Copiado \u2713',
      'dl-coming-soon': 'Próximamente',
      'dl-heading': 'Obtén Baluard para tus plataformas.',
      'dl-lede': 'Binarios independientes con sumas de comprobación criptográficas. Sin creación de cuenta, sin activación en la nube. Esta es una versión beta.',
      'dl-linux-title': 'Linux Desktop y CLI',
      'dl-linux-desc': 'AppImage, DEB, RPM y CLI compilado estáticamente. Compatible con Wayland, X11 y entornos de servidor sin interfaz.',
      'dl-linux-btn': 'Descargar para Linux (x86_64)',
      'dl-android-title': 'Android',
      'dl-android-desc': 'Autenticación biométrica, caché local SQLite/Git e integración de autocompletado sin dependencias de Google Play.',
      'dl-android-btn': 'Descargar APK (v0.1.0)',
      'dl-ext-title': 'Extensión de Navegador',
      'dl-ext-desc': 'Compañero MV3 con autocompletado en línea y autenticación local por token de capacidad.',
      'dl-ext-btn': 'Publicación en tiendas pendiente',
      'dl-macwin-title': 'macOS y Windows',
      'dl-macwin-desc': 'Binario universal para Apple Silicon / Intel e instaladores de Windows 10/11 con respaldo de almacén de claves DPAPI.',
      'dl-macwin-btn': 'Compilar desde Código Fuente',

      'footer-desc': 'Gestor de contraseñas soberano nativo en git con cifrado en cubetas con relleno y arranque por identidad de dispositivo. Construido para que tus credenciales permanezcan en tus máquinas, donde nadie te las puede quitar. Sincronizado bajo tus términos.',
      'footer-col-project': 'Proyecto',
      'footer-link-dl': 'Descargar Versión',
      'footer-link-sec': 'Libro Blanco de Seguridad',
      'footer-link-support': 'Soporte',
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
      'trust-buckets': 'Buckets à Taille Rembourrée',

      'arch-eyebrow': 'Architecture Sans Serveur',
      'arch-heading': 'Pourquoi l\'architecture est le modèle de sécurité.',
      'arch-lede': 'La plupart des gestionnaires stockent tous les coffres dans une base de données cloud unique. Si cette entreprise est piratée ou rachetée, vos identifiants sont menacés. Baluard fonctionne comme un coffre-fort chez vous : vos mots de passe restent sur votre propre matériel, sans base de données centrale à compromettre.',
      'arch-node-tag-1': 'COUCHE 1 / OÙ VIVENT VOS DONNÉES',
      'arch-node-h4-1': 'Un Coffre-Fort Chez Vous',
      'arch-node-p-1': 'Votre coffre reste sur vos appareils physiques, chiffré par une clé que vous êtes seul à détenir. Chaque entrée a une taille identique pour empêcher quiconque de deviner son contenu.',
      'arch-node-tag-2': 'COUCHE 2 / CONNEXION ENTRE APPAREILS',
      'arch-node-h4-2': 'Échange de Clés en Main Propre',
      'arch-node-p-2': 'Votre téléphone et votre ordinateur s\'associent directement entre eux, comme deux personnes échangeant une clé en face à face. Aucun compte central, aucune connexion d\'entreprise et aucun serveur au milieu.',
      'arch-node-tag-3': 'COUCHE 3 / SYNCHRONISATION DES COFFRES',
      'arch-node-h4-3': 'Synchronisation via Votre Propre Carnet',
      'arch-node-p-3': 'Synchronisez via un dépôt Git privé, votre serveur personnel ou une clé USB. Le serveur distant ne voit que des blocs chiffrés illisibles. Même un piratage total du serveur n\'expose aucun mot de passe.',
      'arch-c1-title': 'Matériel que Vous Possédez',
      'arch-c1-desc': 'Vos données restent au repos sur vos appareils physiques. Les clés maîtresses sont dérivées localement avec Argon2id et ne sont jamais transmises où que ce soit.',
      'arch-c2-title': 'Commits Git Chiffrés',
      'arch-c2-desc': 'Chaque modification est un commit signé et vérifiable. Annulez, inspectez l\'historique ou résolvez les conflits avec les outils git standards.',
      'arch-c3-title': 'N\'importe quel Serveur Git',
      'arch-c3-desc': 'Synchronisez via SSH vers votre instance auto-hébergée Forgejo, Gitea, GitLab ou votre serveur Linux personnel. Aucun démon propriétaire requis.',

      'cap-eyebrow': 'Capacités Fondamentales',
      'cap-heading': 'Conçu pour la résilience quotidienne et la rigueur cryptographique.',
      'cap-p1-title': 'Buckets Rembourrés (Défense de Trafic)',
      'cap-p1-desc': 'La longueur des données chiffrées révèle des métadonnées. Baluard regroupe les secrets dans des compartiments de taille uniforme pour que nul ne puisse distinguer un secret unique de cinquante.',
      'cap-p2-title': 'Signatures de Commits Ed25519',
      'cap-p2-desc': 'Chaque modification est signée à l\'aide d\'une clé Ed25519 unique par appareil. Un serveur distant corrompu ne peut injecter de modifications sans échouer à la vérification.',
      'cap-p3-title': 'Primitives Cryptographiques Modernes',
      'cap-p3-desc': 'Argon2id pour une dérivation mémoire-dure. AES-256-GCM pour le scellement symétrique. RFC 9180 HPKE (DHKEM-X25519) pour l\'échange de clés inter-appareils à divulgation nulle.',
      'cap-p4-title': 'Porte-clés Locaux et Biométrie',
      'cap-p4-desc': 'Intégration native avec Linux Secret Service, macOS Keychain et Windows DPAPI. Déverrouillez avec vos données biométriques sans exposer la clé maîtresse.',
      'cap-p5-title': 'Résolution de Conflits via Git Standard',
      'cap-p5-desc': 'Deux appareils mis à jour simultanément ? Baluard fusionne les données avec précision. Les conflits sont affichés au format visuel standard de diff git.',

      'cli-eyebrow': 'CLI de Premier Ordre',
      'cli-heading': 'Client terminal scriptable adossé à un démon.',
      'cli-lede': 'Le CLI baluard offre 35 commandes ultra-rapides et un mode hors ligne --direct. Idéal pour environnements dev, serveurs headless et pipelines CI.',

      'sec-eyebrow': 'Assurance Auditable',
      'sec-heading': 'Lisez le Livre Blanc de Sécurité',
      'sec-lede': 'Baluard publie son architecture cryptographique complète et son modèle de menaces. Tout ce qui est présenté ici peut être audité directement dans le code source public.',
      'sec-btn': 'Lire le Livre Blanc (13 Sections) &rarr;',
      'spec-t1': 'Chiffrement du Coffre',
      'spec-t2': 'Dérivation de Clés (KDF)',
      'spec-t3': 'Scellement Asymétrique',
      'spec-t4': 'Intégrité des Commits',
      'spec-t5': 'Hygiène de la Mémoire',

      'dl-eyebrow': 'Centre de Téléchargement',
      'copy-btn': 'Copier',
      'copy-btn-copied': 'Copi\u00e9 \u2713',
      'dl-coming-soon': 'Bientôt disponible',
      'dl-heading': 'Obtenez Baluard pour vos plateformes.',
      'dl-lede': 'Binaires autonomes avec sommes de contrôle cryptographiques. Aucune création de compte, aucune activation cloud. Il s\'agit d\'une version bêta.',
      'dl-linux-title': 'Linux Desktop et CLI',
      'dl-linux-desc': 'AppImage, DEB, RPM et CLI compilé statiquement. Compatible avec Wayland, X11 et environnements serveurs.',
      'dl-linux-btn': 'Télécharger pour Linux (x86_64)',
      'dl-android-title': 'Android',
      'dl-android-desc': 'Authentification biométrique, cache local SQLite/Git et saisie automatique complète sans dépendance Google Play.',
      'dl-android-btn': 'Télécharger l\'APK (v0.1.0)',
      'dl-ext-title': 'Extension Navigateur',
      'dl-ext-desc': 'Extension MV3 avec saisie automatique intégrée et authentification par jeton de capacité locale.',
      'dl-ext-btn': 'Publication sur les stores en attente',
      'dl-macwin-title': 'macOS et Windows',
      'dl-macwin-desc': 'Binaire universel Apple Silicon / Intel et installateurs Windows 10/11 adossés à DPAPI.',
      'dl-macwin-btn': 'Compiler depuis les Sources',

      'footer-desc': 'Gestionnaire de mots de passe souverain natif sous git avec chiffrement par buckets rembourrés et identité par appareil. Conçu pour que vos identifiants restent sur vos machines, où nul ne peut vous les enlever. Synchronisé selon vos propres conditions.',
      'footer-col-project': 'Projet',
      'footer-link-dl': 'Télécharger la Version',
      'footer-link-sec': 'Livre Blanc de Sécurité',
      'footer-link-support': 'Support',
      'footer-link-ai': "Instructions pour l'IA",
      'footer-link-src': 'Code Source (GitHub)',
      'footer-link-rel': 'Notes de Version &amp; Sommes de Contrôle',
      'footer-col-integrity': 'Intégrité et Liberté',
      'footer-link-privacy': 'Politique de Confidentialité',
      'footer-link-tos': 'Conditions d’Utilisation',
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
      'hero-pitch': 'Suas senhas permanecem em seus dispositivos e sincronizam pelo armazenamento sob seu controle. Sem contas para bloquear, sem banco de dados central para invadir e sem intermediários lendo seus dados.',
      'hero-btn-download': 'Baixar',
      'hero-btn-paper': 'Relatório de Segurança &rarr;',
      'trust-offline': '100% Funcional Offline',
      'trust-noserver': 'Zero Servidores Centrais',
      'trust-license': 'Software Livre GPL-3.0',
      'trust-buckets': 'Buckets com Preenchimento de Tamanho',

      'arch-eyebrow': 'Arquitetura Sem Servidor',
      'arch-heading': 'Por que a arquitetura é o modelo de segurança.',
      'arch-lede': 'A maioria dos gerenciadores guarda os cofres de todos em um banco de dados central na nuvem. Se essa empresa for invadida ou vendida, suas senhas ficam em risco. O Baluard funciona como um cofre na sua casa: suas senhas ficam no seu próprio hardware, portanto não existe um banco de dados central para violar.',
      'arch-node-tag-1': 'CAMADA 1 / ONDE SEUS DADOS FICAM',
      'arch-node-h4-1': 'Um Cofre na Sua Casa',
      'arch-node-p-1': 'Seu cofre fica no seu celular e computador físicos, criptografado com uma chave que apenas você possui. Cada registro é preenchido com tamanho idêntico para que ninguém descubra o que há dentro.',
      'arch-node-tag-2': 'CAMADA 2 / COMO OS DISPOSITIVOS SE CONECTAM',
      'arch-node-h4-2': 'Troca de Chaves Pessoalmente',
      'arch-node-p-2': 'Seu celular e computador se conectam diretamente um ao outro, como duas pessoas trocando uma chave em mãos. Sem conta central, sem login corporativo e sem servidor da empresa no meio.',
      'arch-node-tag-3': 'CAMADA 3 / COMO OS COFRES SINCRONIZAM',
      'arch-node-h4-3': 'Sincronização Através do Seu Próprio Caderno',
      'arch-node-p-3': 'Sincronize por um repositório Git privado, seu servidor doméstico ou um pen drive USB. O servidor remoto enxerga apenas texto cifrado ilegível. Mesmo uma invasão total do servidor não expõe nenhuma senha.',
      'arch-c1-title': 'Hardware que Você Possui',
      'arch-c1-desc': 'Seus dados ficam em repouso nos seus dispositivos físicos. As chaves-mestras são derivadas localmente com Argon2id e nunca são transmitidas para lugar nenhum.',
      'arch-c2-title': 'Commits Git Criptografados',
      'arch-c2-desc': 'Cada alteração é um commit assinado e auditável. Reverta, inspecione o histórico ou resolva conflitos com ferramentas padrão do git.',
      'arch-c3-title': 'Qualquer Servidor Git Remoto',
      'arch-c3-desc': 'Sincronize via SSH com sua instância auto-hospedada Forgejo, Gitea, GitLab ou seu servidor Linux pessoal. Nenhum daemon proprietário necessário.',

      'cap-eyebrow': 'Recursos Principais',
      'cap-heading': 'Projetado para resiliência diária e rigor criptográfico.',
      'cap-p1-title': 'Buckets com Preenchimento (Defesa de Tráfego)',
      'cap-p1-desc': 'O comprimento do texto criptografado revela metadados. O Baluard agrupa credenciais em buckets de tamanho uniforme para que observadores não distingam entre um único segredo e cinquenta.',
      'cap-p2-title': 'Assinaturas de Commit Ed25519',
      'cap-p2-desc': 'Cada alteração no cofre é registrada e assinada com uma chave criptográfica Ed25519 exclusiva por dispositivo. Servidores remotos não podem injetar dados sem falhar na verificação.',
      'cap-p3-title': 'Primitivas Criptográficas Modernas',
      'cap-p3-desc': 'Argon2id para derivação de chave com alto uso de memória. AES-256-GCM para selamento simétrico. RFC 9180 HPKE (DHKEM-X25519) para troca de chaves entre dispositivos com conhecimento zero.',
      'cap-p4-title': 'Chaveiros Locais e Biometria',
      'cap-p4-desc': 'Integração nativa com Linux Secret Service, macOS Keychain e Windows DPAPI. Desbloqueie com biometria sem comprometer o isolamento da chave mestra.',
      'cap-p5-title': 'Resolução de Conflitos via Git Padrão',
      'cap-p5-desc': 'Dois dispositivos atualizados ao mesmo tempo? O Baluard mescla alterações com precisão. Conflitos são exibidos no formato visual padrão de diff do git.',

      'cli-eyebrow': 'CLI de Primeira Linha',
      'cli-heading': 'Cliente de terminal programável com suporte a daemon.',
      'cli-lede': 'O CLI baluard oferece 35 comandos com velocidade baseada em daemon e modo offline --direct. Ideal para ambientes de desenvolvimento, servidores headless e pipelines de CI.',

      'sec-eyebrow': 'Garantia Auditável',
      'sec-heading': 'Leia o Relatório de Segurança',
      'sec-lede': 'O Baluard publica sua arquitetura criptográfica completa e modelo de ameaças. Tudo afirmado neste site pode ser verificado em código-fonte público e auditado diretamente.',
      'sec-btn': 'Ler o Relatório (13 Seções) &rarr;',
      'spec-t1': 'Cifra do Cofre',
      'spec-t2': 'Derivação de Chaves (KDF)',
      'spec-t3': 'Selamento Assimétrico',
      'spec-t4': 'Integridade dos Commits',
      'spec-t5': 'Higiene de Memória',

      'dl-eyebrow': 'Central de Downloads',
      'copy-btn': 'Copiar',
      'copy-btn-copied': 'Copiado \u2713',
      'dl-coming-soon': 'Em breve',
      'dl-heading': 'Obtenha o Baluard para suas plataformas.',
      'dl-lede': 'Binários autônomos com somas de verificação criptográficas. Sem criação de conta, sem ativação na nuvem. Esta é uma versão beta.',
      'dl-linux-title': 'Linux Desktop e CLI',
      'dl-linux-desc': 'AppImage, DEB, RPM e CLI compilado estaticamente. Compatível com Wayland, X11 e servidores sem monitor.',
      'dl-linux-btn': 'Baixar para Linux (x86_64)',
      'dl-android-title': 'Android',
      'dl-android-desc': 'Autenticação biométrica, cache local SQLite/Git e integração total de preenchimento automático sem dependências do Google Play.',
      'dl-android-btn': 'Baixar APK (v0.1.0)',
      'dl-ext-title': 'Extensão para Navegador',
      'dl-ext-desc': 'Extensão MV3 com preenchimento integrado e autenticação local por token de capacidade.',
      'dl-ext-btn': 'Listagem nas lojas pendente',
      'dl-macwin-title': 'macOS e Windows',
      'dl-macwin-desc': 'Binário universal Apple Silicon / Intel e instaladores para Windows 10/11 integrados ao DPAPI.',
      'dl-macwin-btn': 'Compilar a partir do Código',

      'footer-desc': 'Gerenciador de senhas soberano nativo em git com criptografia em buckets preenchidos e identidade de dispositivo. Construído para que suas credenciais permaneçam em suas máquinas, onde ninguém pode tirá-las. Sincronizado sob seus próprios termos.',
      'footer-col-project': 'Projeto',
      'footer-link-dl': 'Baixar Versão',
      'footer-link-sec': 'Relatório de Segurança',
      'footer-link-support': 'Suporte',
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
