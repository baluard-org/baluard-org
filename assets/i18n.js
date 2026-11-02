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
      'hero-pitch': "We don't want custody of your passwords; and we don't want anyone else having it either. Your vault stays encrypted on the hardware you own, versioned with git, on your server of choice. No Baluard account to lock, no servers to breach, no middleman.",
      'hero-btn-download': 'Download',
      'hero-btn-paper': 'Security White Paper &rarr;',
      'trust-offline': '100% Offline Capable',
      'trust-license': 'GPL-3.0 Free Software',
      'trust-buckets': 'Size-Padded Buckets',

      'arch-eyebrow': 'Zero-Server Architecture',
      'arch-heading': 'Why the architecture is the security model.',
      'arch-lede': 'Hosted password managers concentrate risk into a single vendor database; and venture capital can change the rules, alter licenses, or take your workflow away without prior notice. Baluard keeps your vault in an encrypted git repository on hardware you control, with no central point of failure.',
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
      'dl-heading': 'Get Baluard for your platforms.',
      'dl-lede': 'Stand-alone binaries with cryptographic release checksums. No account creation, no cloud activation.',
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
      'footer-link-src': 'Source Code (GitHub)',
      'footer-link-rel': 'Release Notes &amp; Checksums',
      'footer-col-integrity': 'Integrity &amp; Freedom',
      'footer-link-lic': 'License (GPL-3.0)',
      'footer-link-vuln': 'Vulnerability Reporting',
      'footer-link-pkg': 'APT &amp; DNF Packages',
      'footer-bottom-lic': 'Free software under <a href="https://github.com/baluard-org/baluard/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">GPL-3.0</a>. No trackers, no telemetry, no cloud lock-in.',
      'footer-built-by': 'Built by <a href="https://github.com/EstebanForge" target="_blank" rel="noopener noreferrer">Esteban</a>'
    },

    es: {
      'nav-arch': 'Arquitectura',
      'nav-features': 'Capacidades',
      'nav-security': 'Modelo de Seguridad',
      'nav-download': 'Descargar',
      'nav-source': 'Código',
      'nav-get-baluard': 'Obtener Baluard',

      'hero-title': 'Nadie te lo puede quitar. Ni siquiera nosotros.',
      'hero-pitch': 'No queremos la custodia de tus contraseñas; y no queremos que nadie más la tenga. Tu bóveda permanece cifrada en el hardware de tu propiedad, versionada con git, en el servidor que elijas. Sin cuenta de Baluard que bloquear, sin servidores que vulnerar, sin intermediarios.',
      'hero-btn-download': 'Descargar',
      'hero-btn-paper': 'Libro Blanco de Seguridad &rarr;',
      'trust-offline': '100% Funcional Fuera de Línea',
      'trust-license': 'Software Libre GPL-3.0',
      'trust-buckets': 'Cubetas con Relleno de Tamaño',

      'arch-eyebrow': 'Arquitectura Sin Servidor',
      'arch-heading': 'Por qué la arquitectura es el modelo de seguridad.',
      'arch-lede': 'Los gestores de contraseñas alojados concentran el riesgo en la base de datos de un solo proveedor; y el capital de riesgo puede cambiar las reglas, alterar licencias o quitarte tu flujo de trabajo sin previo aviso. Baluard guarda tu bóveda en un repositorio git cifrado en hardware bajo tu control, sin puntos centrales de falla.',
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

      'sec-eyebrow': 'Garantía Auditabile',
      'sec-heading': 'Lee el Libro Blanco de Seguridad',
      'sec-lede': 'Baluard publica su arquitectura criptográfica completa y modelo de amenazas. Todo lo afirmado en este sitio puede verificarse en código abierto público y auditarse directamente.',
      'sec-btn': 'Leer el Libro Blanco (13 Secciones) &rarr;',
      'spec-t1': 'Cifrado de Bóveda',
      'spec-t2': 'Derivación de Claves (KDF)',
      'spec-t3': 'Sellado Asimétrico',
      'spec-t4': 'Integridad de Commits',
      'spec-t5': 'Higiene de Memoria',

      'dl-eyebrow': 'Centro de Descargas',
      'dl-heading': 'Obtén Baluard para tus plataformas.',
      'dl-lede': 'Binarios independientes con sumas de comprobación criptográficas. Sin creación de cuenta, sin activación en la nube.',
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
      'footer-link-src': 'Código Fuente (GitHub)',
      'footer-link-rel': 'Notas de Versión y Checksums',
      'footer-col-integrity': 'Integridad y Libertad',
      'footer-link-lic': 'Licencia (GPL-3.0)',
      'footer-link-vuln': 'Reporte de Vulnerabilidades',
      'footer-link-pkg': 'Paquetes APT y DNF',
      'footer-bottom-lic': 'Software libre bajo <a href="https://github.com/baluard-org/baluard/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">GPL-3.0</a>. Sin rastreadores, sin telemetría, sin dependencia de la nube.',
      'footer-built-by': 'Construido por <a href="https://github.com/EstebanForge" target="_blank" rel="noopener noreferrer">Esteban</a>'
    },

    fr: {
      'nav-arch': 'Architecture',
      'nav-features': 'Capacités',
      'nav-security': 'Modèle de Sécurité',
      'nav-download': 'Télécharger',
      'nav-source': 'Code Source',
      'nav-get-baluard': 'Obtenir Baluard',

      'hero-title': 'Personne ne peut vous le retirer. Même pas nous.',
      'hero-pitch': 'Nous ne voulons pas de la garde de vos mots de passe ; et nous ne voulons pas que quiconque d\'autre l\'ait non plus. Votre coffre reste chiffré sur votre propre matériel, versionné avec git, sur le serveur de votre choix. Aucun compte Baluard à bloquer, aucun serveur à pirater, aucun intermédiaire.',
      'hero-btn-download': 'Télécharger',
      'hero-btn-paper': 'Livre Blanc de Sécurité &rarr;',
      'trust-offline': '100% Utilisable Hors Ligne',
      'trust-license': 'Logiciel Libre GPL-3.0',
      'trust-buckets': 'Buckets à Taille Rembourrée',

      'arch-eyebrow': 'Architecture Sans Serveur',
      'arch-heading': 'Pourquoi l\'architecture est le modèle de sécurité.',
      'arch-lede': 'Les gestionnaires de mots de passe hébergés concentrent le risque dans la base de données d\'un seul fournisseur ; et le capital-risque peut modifier les règles, changer les licences ou supprimer votre flux de travail sans préavis. Baluard conserve votre coffre dans un dépôt git chiffré sur du matériel que vous contrôlez, sans point de défaillance unique.',
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
      'dl-heading': 'Obtenez Baluard pour vos plateformes.',
      'dl-lede': 'Binaires autonomes avec sommes de contrôle cryptographiques. Aucune création de compte, aucune activation cloud.',
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
      'footer-link-src': 'Code Source (GitHub)',
      'footer-link-rel': 'Notes de Version &amp; Sommes de Contrôle',
      'footer-col-integrity': 'Intégrité et Liberté',
      'footer-link-lic': 'Licence (GPL-3.0)',
      'footer-link-vuln': 'Signalement de Vulnérabilités',
      'footer-link-pkg': 'Paquets APT &amp; DNF',
      'footer-bottom-lic': 'Logiciel libre sous <a href="https://github.com/baluard-org/baluard/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">GPL-3.0</a>. Aucun traqueur, aucune télémétrie, aucun verrouillage cloud.',
      'footer-built-by': 'Conçu par <a href="https://github.com/EstebanForge" target="_blank" rel="noopener noreferrer">Esteban</a>'
    },

    pt: {
      'nav-arch': 'Arquitetura',
      'nav-features': 'Capacidades',
      'nav-security': 'Modelo de Segurança',
      'nav-download': 'Baixar',
      'nav-source': 'Código',
      'nav-get-baluard': 'Obter Baluard',

      'hero-title': 'Ninguém pode tirar de você. Nem mesmo nós.',
      'hero-pitch': 'Não queremos a custódia das suas senhas; e não queremos ninguém mais com elas. Seu cofre permanece criptografado no hardware que você possui, versionado com git, no servidor de sua escolha. Nenhuma conta Baluard para bloquear, nenhum servidor para invadir, nenhum intermediário.',
      'hero-btn-download': 'Baixar',
      'hero-btn-paper': 'Relatório de Segurança &rarr;',
      'trust-offline': '100% Funcional Offline',
      'trust-license': 'Software Livre GPL-3.0',
      'trust-buckets': 'Buckets com Preenchimento de Tamanho',

      'arch-eyebrow': 'Arquitetura Sem Servidor',
      'arch-heading': 'Por que a arquitetura é o modelo de segurança.',
      'arch-lede': 'Gerenciadores de senhas hospedados concentram o risco no banco de dados de um único fornecedor; e o capital de risco pode mudar as regras, alterar licenças ou tirar seu fluxo de trabalho sem aviso prévio. O Baluard mantém seu cofre em um repositório git criptografado no hardware que você controla, sem ponto central de falha.',
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
      'dl-heading': 'Obtenha o Baluard para suas plataformas.',
      'dl-lede': 'Binários autônomos com somas de verificação criptográficas. Sem criação de conta, sem ativação na nuvem.',
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
      'footer-link-src': 'Código Fonte (GitHub)',
      'footer-link-rel': 'Notas de Versão e Checksums',
      'footer-col-integrity': 'Integridade e Liberdade',
      'footer-link-lic': 'Licença (GPL-3.0)',
      'footer-link-vuln': 'Relatório de Vulnerabilidades',
      'footer-link-pkg': 'Pacotes APT e DNF',
      'footer-bottom-lic': 'Software livre sob licença <a href="https://github.com/baluard-org/baluard/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">GPL-3.0</a>. Sem rastreadores, sem telemetria, sem bloqueio de nuvem.',
      'footer-built-by': 'Construído por <a href="https://github.com/EstebanForge" target="_blank" rel="noopener noreferrer">Esteban</a>'
    }
  };

  var STORAGE_KEY = 'baluard_lang';
  var SUPPORTED = ['en', 'es', 'fr', 'pt'];

  function getSavedLanguage() {
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
  }

  function resolveLatestReleases() {
    var CACHE_KEY = 'baluard_latest_release_cache';
    var CACHE_TTL = 3600000; // 1 hour

    function applyReleaseData(release) {
      if (!release || !release.assets) return;

      var typeMap = {
        appimage: /\.AppImage$/i,
        deb: /\.deb$/i,
        rpm: /\.rpm$/i,
        cli: /baluard-cli.*\.tar\.gz$/i,
        manifest: /SHA256SUMS$/i
      };

      for (var type in typeMap) {
        var regex = typeMap[type];
        for (var i = 0; i < release.assets.length; i++) {
          var asset = release.assets[i];
          if (regex.test(asset.name)) {
            var card = document.querySelector('[data-dl-type="' + type + '"]');
            if (card) {
              card.href = asset.browser_download_url;
              var sizeEl = card.querySelector('.dl-size');
              if (sizeEl && asset.size) {
                var mb = (asset.size / (1024 * 1024)).toFixed(1);
                sizeEl.textContent = mb + ' MB';
              }
            }
            break;
          }
        }
      }
    }

    try {
      var cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        var parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL) {
          applyReleaseData(parsed.data);
          return;
        }
      }
    } catch (e) {}

    fetch('https://api.github.com/repos/baluard-org/baluard/releases/latest', {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Release fetch status: ' + res.status);
        return res.json();
      })
      .then(function (data) {
        applyReleaseData(data);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: data }));
        } catch (e) {}
      })
      .catch(function () {
        // Fallback: stay with native /releases/latest/download/ URLs
      });
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
    resolveLatestReleases();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangSwitcher);
  } else {
    initLangSwitcher();
  }
})();
