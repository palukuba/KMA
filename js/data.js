// Mock Data pour Dr. KAMBALE MONDO
export const siteData = {
    // Informations Profil
    profile: {
        fullName: "Dr. KAMBALE MONDO",
        title: "Docteur en Mécanique",
        role: "Directeur Général",
        institution: "Institut Supérieur de Technique et Application (ISTA/Goma)",
        location: "Goma, RD Congo",
        photo: "assets/images/profile.jpg",
        tagline: "Excellence en Ingénierie Mécanique & Leadership Académique",
        email: "kambale.mondo@ista-goma.ac.cd",
        phone: "+243 XXX XXX XXX"
    },

    // Biographie
    biography: {
        short: "Leader visionnaire alliant expertise technique de pointe en mécanique et excellence managériale dans l'enseignement supérieur.",
        full: `Dr. KAMBALE MONDO est un expert reconnu en ingénierie mécanique avec un parcours académique exceptionnel. Titulaire d'un doctorat en Mécanique, il a consacré sa carrière à l'avancement des sciences de l'ingénieur et à la formation de la prochaine génération d'ingénieurs africains.

En tant que Directeur Général de l'Institut Supérieur de Technique et Application (ISTA) à Goma, il pilote la transformation institutionnelle vers l'excellence académique, en intégrant innovation pédagogique et recherche appliquée. Sa vision stratégique combine rigueur scientifique et développement socio-économique durable.

Ses travaux de recherche couvrent la mécanique des fluides, la conception assistée par ordinateur et l'optimisation des systèmes mécaniques. Il est également un fervent défenseur de l'entrepreneuriat technologique et de l'industrialisation locale.`,
        education: [
            {
                degree: "Doctorat en Mécanique",
                field: "Ingénierie Mécanique",
                institution: "Université de [Nom]",
                year: "20XX",
                specialization: "Mécanique des Fluides & Conception Avancée"
            },
            {
                degree: "Master en Sciences de l'Ingénieur",
                field: "Génie Mécanique",
                institution: "Université de [Nom]",
                year: "20XX"
            },
            {
                degree: "Licence en Génie Mécanique",
                institution: "Université de [Nom]",
                year: "20XX"
            }
        ],
        experience: [
            {
                role: "Directeur Général",
                institution: "ISTA/Goma",
                period: "20XX - Présent",
                description: "Direction stratégique et académique de l'institution"
            },
            {
                role: "Professeur & Chercheur",
                institution: "ISTA/Goma",
                period: "20XX - 20XX",
                description: "Enseignement et recherche en mécanique appliquée"
            }
        ]
    },

    // Expertises & Compétences
    expertise: [
        {
            category: "Expertise Technique",
            skills: [
                { name: "Mécanique des Fluides", level: 95 },
                { name: "Conception Assistée par Ordinateur (CAO)", level: 90 },
                { name: "Analyse par Éléments Finis", level: 85 },
                { name: "Thermodynamique Appliquée", level: 88 },
                { name: "Systèmes Mécaniques", level: 92 }
            ]
        },
        {
            category: "Leadership & Gestion",
            skills: [
                { name: "Management Institutionnel", level: 93 },
                { name: "Stratégie Académique", level: 90 },
                { name: "Innovation Pédagogique", level: 87 },
                { name: "Développement Organisationnel", level: 89 }
            ]
        }
    ],

    // Badges d'expertise pour la page d'accueil
    expertiseBadges: [
        {
            icon: `<svg class="w-16 h-16 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>`,
            title: "Mécanique des Fluides",
            description: "Expert en dynamique des fluides et systèmes hydrauliques"
        },
        {
            icon: `<svg class="w-16 h-16 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>`,
            title: "Conception Assistée",
            description: "Modélisation 3D et simulation numérique avancée"
        },
        {
            icon: `<svg class="w-16 h-16 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>`,
            title: "Leadership Académique",
            description: "Direction stratégique ISTA/Goma & innovation pédagogique"
        }
    ],

    // Articles de Blog
    articles: [
        {
            id: 1,
            title: "L'Avenir de l'Ingénierie Mécanique en Afrique : Défis et Opportunités",
            slug: "avenir-ingenierie-mecanique-afrique",
            excerpt: "Une analyse approfondie des enjeux de l'industrialisation africaine et du rôle crucial de la formation en ingénierie mécanique pour le développement économique durable.",
            fullContent: `
        <p>L'Afrique se trouve à un tournant décisif de son histoire industrielle. Avec une population jeune en pleine croissance et des ressources naturelles abondantes, le continent dispose d'un potentiel immense pour devenir un acteur majeur de l'ingénierie mondiale.</p>
        
        <h2>Les Défis Actuels</h2>
        <p>Malgré ce potentiel, plusieurs obstacles persistent. Le manque d'infrastructures de formation spécialisée, l'insuffisance des investissements en recherche et développement, et la fuite des cerveaux vers les pays développés constituent les principaux freins à l'essor de l'ingénierie mécanique sur le continent.</p>
        
        <p>À ISTA/Goma, nous travaillons activement pour combler ces lacunes en formant des ingénieurs capables de répondre aux besoins spécifiques de notre région tout en restant compétitifs à l'échelle internationale.</p>
        
        <h2>Opportunités de Croissance</h2>
        <p>L'industrialisation croissante de l'Afrique, notamment dans les secteurs minier, agricole et des énergies renouvelables, crée une demande sans précédent pour des ingénieurs mécaniciens qualifiés. Cette demande représente une opportunité extraordinaire pour la jeunesse africaine.</p>
        
        <blockquote>L'avenir de l'Afrique passe par la maîtrise de ses propres outils de production et par la formation d'une élite technique capable d'innover.</blockquote>
        
        <h2>Notre Vision pour l'Avenir</h2>
        <p>En tant que Directeur Général de ISTA/Goma, je suis convaincu que l'éducation technique de qualité est la clé du développement durable. Nous devons investir dans nos jeunes talents, créer des partenariats internationaux et développer des programmes de recherche adaptés à nos réalités locales.</p>
        
        <p>L'ingénierie mécanique africaine de demain sera innovante, durable et adaptée aux besoins de nos populations. C'est cette vision que nous portons chaque jour dans notre institution.</p>
      `,
            date: "2024-11-15",
            readTime: "8 min",
            category: "Leadership",
            tags: ["Ingénierie", "Afrique", "Développement", "Innovation"],
            image: "assets/images/article-1.jpg",
            featured: true
        },
        {
            id: 2,
            title: "CAO et Simulation Numérique : Révolutionner la Conception Mécanique",
            slug: "cao-simulation-numerique",
            excerpt: "Exploration des outils de conception assistée par ordinateur et leur impact sur l'optimisation des systèmes mécaniques modernes.",
            fullContent: `
        <p>La Conception Assistée par Ordinateur (CAO) a transformé radicalement la manière dont nous concevons et développons les systèmes mécaniques. Cette révolution numérique offre des possibilités infinies pour optimiser nos designs et réduire les temps de développement.</p>
        
        <h2>L'Évolution des Outils de CAO</h2>
        <p>Des premiers logiciels de dessin 2D aux puissantes suites de modélisation 3D actuelles, la CAO n'a cessé d'évoluer. Aujourd'hui, des outils comme SolidWorks, CATIA ou AutoCAD permettent de créer des modèles d'une précision remarquable.</p>
        
        <h2>La Simulation Numérique</h2>
        <p>Au-delà de la simple modélisation, la simulation numérique permet de tester virtuellement les comportements mécaniques, thermiques et dynamiques de nos conceptions. Cette approche réduit considérablement les coûts de prototypage et accélère le cycle de développement.</p>
        
        <ul>
          <li>Analyse par éléments finis (FEA)</li>
          <li>Simulation de flux thermiques</li>
          <li>Analyse dynamique multicorps</li>
          <li>Optimisation topologique</li>
        </ul>
        
        <h2>Applications Pratiques</h2>
        <p>Dans notre contexte africain, ces outils offrent des opportunités uniques pour développer des solutions adaptées à nos besoins spécifiques, que ce soit dans l'agriculture mécanisée, les infrastructures ou les énergies renouvelables.</p>
        
        <blockquote>La maîtrise des outils numériques est devenue aussi essentielle que la compréhension des principes fondamentaux de la mécanique.</blockquote>
        
        <p>À ISTA/Goma, nous formons nos étudiants à ces technologies de pointe pour qu'ils soient immédiatement opérationnels dans l'industrie moderne.</p>
      `,
            date: "2024-10-22",
            readTime: "6 min",
            category: "Technique",
            tags: ["CAO", "Simulation", "Innovation", "Technologie"],
            image: "assets/images/article-2.jpg",
            featured: true
        },
        {
            id: 3,
            title: "Mécanique des Fluides : Principes Fondamentaux et Applications Pratiques",
            slug: "mecanique-fluides-principes-applications",
            excerpt: "Un guide complet sur les principes de la mécanique des fluides appliqués aux systèmes industriels et énergétiques.",
            fullContent: `
        <p>La mécanique des fluides constitue l'un des piliers fondamentaux de l'ingénierie mécanique. La compréhension du comportement des liquides et des gaz en mouvement est essentielle pour de nombreuses applications industrielles.</p>
        
        <h2>Principes Fondamentaux</h2>
        <p>De l'équation de continuité aux équations de Navier-Stokes, les lois gouvernant le mouvement des fluides forment un corpus mathématique élégant et puissant. Ces principes théoriques trouvent leur application dans d'innombrables domaines pratiques.</p>
        
        <h3>Équation de Bernoulli</h3>
        <p>Cette équation fondamentale relie la pression, la vitesse et l'altitude d'un fluide en écoulement. Elle est à la base de nombreux systèmes hydrauliques et aérodynamiques.</p>
        
        <h2>Applications Industrielles</h2>
        <ul>
          <li>Systèmes hydrauliques industriels</li>
          <li>Turbomachines et pompes</li>
          <li>Aérodynamique des véhicules</li>
          <li>Centrales hydroélectriques</li>
          <li>Systèmes de ventilation et climatisation</li>
        </ul>
        
        <h2>Simulation CFD</h2>
        <p>La mécanique des fluides computationnelle (CFD) permet aujourd'hui de modéliser des écoulements complexes avec une précision remarquable. Ces outils sont devenus indispensables dans l'industrie moderne.</p>
        
        <blockquote>La mécanique des fluides est la science qui permet de comprendre comment l'eau coule, comment l'air circule, et comment ces phénomènes peuvent être maîtrisés pour servir l'humanité.</blockquote>
        
        <p>Ma spécialisation dans ce domaine m'a permis de contribuer à des projets innovants dans les secteurs de l'énergie et de l'industrie.</p>
      `,
            date: "2024-09-30",
            readTime: "10 min",
            category: "Recherche",
            tags: ["Mécanique des Fluides", "Recherche", "Ingénierie"],
            image: "assets/images/article-3.jpg",
            featured: true
        },
        {
            id: 4,
            title: "Transformer l'Enseignement Supérieur : Vision pour ISTA/Goma",
            slug: "vision-ista-goma",
            excerpt: "Ma vision stratégique pour positionner ISTA/Goma comme référence régionale en excellence académique et innovation technologique.",
            fullContent: `
        <p>En tant que Directeur Général de l'Institut Supérieur de Technique et Application (ISTA) à Goma, je porte une vision ambitieuse pour notre institution : devenir un pôle d'excellence reconnu dans la région des Grands Lacs et au-delà.</p>
        
        <h2>Notre Mission</h2>
        <p>Former des ingénieurs et techniciens compétents, capables de répondre aux défis du développement économique de notre région tout en restant compétitifs sur le marché international du travail.</p>
        
        <h2>Les Piliers de Notre Stratégie</h2>
        <ul>
          <li><strong>Excellence académique</strong> : Des programmes alignés sur les standards internationaux</li>
          <li><strong>Innovation pédagogique</strong> : Intégration des nouvelles technologies dans l'enseignement</li>
          <li><strong>Partenariats</strong> : Collaboration avec les industries et universités internationales</li>
          <li><strong>Recherche appliquée</strong> : Des projets répondant aux besoins locaux</li>
        </ul>
        
        <h2>Développement des Infrastructures</h2>
        <p>L'amélioration continue de nos laboratoires et équipements pédagogiques est une priorité. Nous investissons dans des équipements modernes pour offrir à nos étudiants une formation pratique de qualité.</p>
        
        <blockquote>L'éducation n'est pas seulement une transmission de connaissances, c'est la construction d'un avenir meilleur pour notre communauté et notre nation.</blockquote>
        
        <h2>Perspectives d'Avenir</h2>
        <p>Notre objectif à horizon 2030 est de faire de ISTA/Goma une référence incontournable en matière de formation technique en RD Congo. Cette ambition nécessite l'engagement de tous : étudiants, enseignants, partenaires et autorités.</p>
      `,
            date: "2024-08-18",
            readTime: "7 min",
            category: "Leadership",
            tags: ["Éducation", "Stratégie", "ISTA", "Innovation"],
            image: "assets/images/article-4.jpg",
            featured: false
        },
        {
            id: 5,
            title: "Optimisation Énergétique dans les Systèmes Mécaniques Industriels",
            slug: "optimisation-energetique-systemes",
            excerpt: "Techniques avancées pour améliorer l'efficacité énergétique des installations mécaniques dans le contexte africain.",
            fullContent: `
        <p>L'efficacité énergétique est devenue un enjeu majeur pour l'industrie mondiale. En Afrique, où l'accès à l'énergie reste un défi, l'optimisation des systèmes mécaniques prend une dimension encore plus cruciale.</p>
        
        <h2>Les Enjeux de l'Efficacité Énergétique</h2>
        <p>Réduire la consommation énergétique des systèmes industriels permet non seulement de diminuer les coûts d'exploitation, mais aussi de réduire l'empreinte environnementale et d'améliorer la compétitivité des entreprises.</p>
        
        <h2>Techniques d'Optimisation</h2>
        <ul>
          <li>Amélioration du rendement des moteurs électriques</li>
          <li>Optimisation des systèmes de transmission mécanique</li>
          <li>Récupération de chaleur résiduelle</li>
          <li>Gestion intelligente de l'énergie</li>
          <li>Maintenance prédictive pour éviter les pertes</li>
        </ul>
        
        <h2>Applications dans le Contexte Africain</h2>
        <p>L'industrie africaine peut tirer d'importants bénéfices de ces approches. Dans les secteurs minier, agricole et manufacturier, l'optimisation énergétique peut générer des économies substantielles tout en améliorant la durabilité des opérations.</p>
        
        <h3>Énergies Renouvelables</h3>
        <p>L'intégration des énergies renouvelables dans les systèmes mécaniques industriels représente une opportunité majeure pour le continent. Solar, éolien et hydroélectricité peuvent alimenter des systèmes optimisés et durables.</p>
        
        <blockquote>L'ingénieur mécanicien du 21ème siècle doit penser énergie à chaque étape de la conception et de l'optimisation des systèmes.</blockquote>
        
        <p>Cette vision guide mes travaux de recherche et mon enseignement à ISTA/Goma, où nous formons les ingénieurs de demain à ces enjeux cruciaux.</p>
      `,
            date: "2024-07-05",
            readTime: "9 min",
            category: "Technique",
            tags: ["Énergie", "Optimisation", "Industrie", "Durabilité"],
            image: "assets/images/article-5.jpg",
            featured: false
        }
    ],

    // Liens Sociaux
    social: [
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/kambale-mondo",
            icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>`
        },
        {
            platform: "ResearchGate",
            url: "https://researchgate.net/profile/kambale-mondo",
            icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68-.242.744-.364 1.627-.364 2.648 0 .862.09 1.642.27 2.34.18.7.477 1.314.888 1.842.41.53.95.925 1.617 1.185.668.26 1.479.39 2.433.39.315 0 .659-.024 1.032-.074.374-.05.748-.122 1.123-.216v-1.74c-.254.11-.51.197-.767.26-.258.064-.516.096-.774.096-.853 0-1.497-.26-1.932-.78-.434-.52-.652-1.307-.652-2.36 0-.676.073-1.26.22-1.752.145-.49.362-.888.65-1.192.287-.305.646-.526 1.078-.664.43-.137.93-.206 1.498-.206.296 0 .6.034.91.1.312.066.614.16.908.28v-1.74c-.324-.1-.656-.177-1-.23-.344-.053-.688-.08-1.032-.08zm-11.77.11c-.836.013-1.54.183-2.116.51-.575.326-1.028.77-1.36 1.332-.33.562-.514 1.21-.55 1.945h1.742c.05-.55.193-1.02.43-1.41.237-.39.558-.684.964-.882.405-.198.88-.297 1.426-.297.53 0 .977.095 1.342.285.365.19.64.466.825.83.185.364.277.798.277 1.3 0 .564-.114 1.032-.34 1.405-.228.373-.53.655-.907.846-.378.19-.794.286-1.248.286h-.88v1.56h.88c.564 0 1.05.12 1.458.36.408.24.717.575.928 1.006.21.43.315.93.315 1.498 0 .564-.117 1.056-.35 1.476-.235.42-.576.746-1.023.976-.447.23-.994.344-1.642.344-.564 0-1.053-.112-1.467-.336-.414-.224-.74-.542-.975-.955-.236-.413-.354-.904-.354-1.473h-1.742c0 .736.18 1.385.542 1.947.36.562.872 1.002 1.535 1.32.664.318 1.458.478 2.382.478.893 0 1.67-.138 2.332-.413.66-.276 1.176-.67 1.546-1.184.37-.514.555-1.13.555-1.847 0-.683-.145-1.255-.436-1.716-.29-.46-.686-.805-1.186-1.035v-.08c.45-.22.81-.528 1.08-.923.27-.395.405-.87.405-1.426 0-.683-.16-1.27-.48-1.76-.32-.49-.774-.866-1.362-1.13-.588-.264-1.282-.396-2.082-.396-.067 0-.134.002-.2.005z"/>
            </svg>`
        },
        {
            platform: "Twitter",
            url: "https://twitter.com/kambalemondo",
            icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>`
        },
        {
            platform: "Email",
            url: "mailto:kambale.mondo@ista-goma.ac.cd",
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>`
        }
    ],

    // Navigation
    navigation: [
        { label: "Accueil", url: "index.html", active: true },
        { label: "Blog", url: "blog.html", active: false },
        { label: "À Propos", url: "about.html", active: false },
        { label: "Contact", url: "contact.html", active: false }
    ]
};

// Fonctions utilitaires
export const dataUtils = {
    // Obtenir les N derniers articles
    getLatestArticles(count = 3) {
        if (!siteData.articles || !Array.isArray(siteData.articles)) {
            console.error('Articles data not available');
            return [];
        }
        return [...siteData.articles]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, count);
    },

    // Obtenir les articles en vedette
    getFeaturedArticles() {
        if (!siteData.articles) return [];
        return siteData.articles.filter(article => article.featured);
    },

    // Filtrer les articles par tag
    filterByTag(tag) {
        if (!siteData.articles || !tag) return [];
        const tagLower = tag.toLowerCase();
        return siteData.articles.filter(article =>
            article.tags?.some(t => t.toLowerCase().includes(tagLower))
        );
    },

    // Rechercher dans les articles
    searchArticles(query) {
        if (!siteData.articles || !query) return [];
        const searchTerm = query.toLowerCase().trim();
        return siteData.articles.filter(article =>
            article.title?.toLowerCase().includes(searchTerm) ||
            article.excerpt?.toLowerCase().includes(searchTerm) ||
            article.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    },

    // Formater la date
    formatDate(dateString) {
        try {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('fr-FR', options);
        } catch (error) {
            console.error('Date formatting error:', error);
            return dateString;
        }
    },

    // Obtenir tous les tags uniques
    getAllTags() {
        if (!siteData.articles) return [];
        const allTags = siteData.articles.flatMap(article => article.tags || []);
        return [...new Set(allTags)].sort();
    },

    // Obtenir un article par ID
    getArticleById(id) {
        if (!siteData.articles) return null;
        return siteData.articles.find(article => article.id === parseInt(id));
    },

    // Obtenir les catégories uniques
    getAllCategories() {
        if (!siteData.articles) return [];
        const categories = siteData.articles.map(article => article.category);
        return [...new Set(categories)].sort();
    }
};
