// Alpine.js Components pour Site Dr. KAMBALE MONDO

export function initComponents(Alpine, siteData, dataUtils) {
    // Theme Store (Dark/Light Mode) - Global accessible via Alpine.store('theme')
    Alpine.store('theme', {
        darkMode: false,

        init() {
            try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                    this.darkMode = savedTheme === 'dark';
                } else {
                    this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                }
                this.applyTheme();
            } catch (error) {
                console.error('Theme initialization error:', error);
            }
        },

        toggle() {
            try {
                this.darkMode = !this.darkMode;
                this.applyTheme();
                localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
            } catch (error) {
                console.error('Theme toggle error:', error);
            }
        },

        applyTheme() {
            document.documentElement.classList.toggle('dark', this.darkMode);
        }
    });

    // Header Component avec Navigation
    Alpine.data('headerComponent', () => ({
        mobileMenuOpen: false,
        currentPage: '',
        basePath: '',

        init() {
            this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
            // Determine if we're in pages/ directory or root
            const isInPagesDir = window.location.pathname.includes('/pages/');
            this.basePath = isInPagesDir ? '../' : './';
        },

        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },

        closeMobileMenu() {
            this.mobileMenuOpen = false;
        },

        isActive(url) {
            return this.currentPage === url;
        }
    }));

    // Hero Component
    Alpine.data('heroComponent', () => ({
        profile: {},

        init() {
            this.profile = siteData.profile;
        }
    }));

    // Article Feed Component (3 derniers articles)
    Alpine.data('articleFeedComponent', () => ({
        articles: [],

        init() {
            try {
                this.articles = dataUtils.getLatestArticles(3);
            } catch (error) {
                console.error('Error loading articles:', error);
                this.articles = [];
            }
        },

        formatDate(dateString) {
            return dataUtils.formatDate(dateString);
        }
    }));

    // Expertise Badges Component
    Alpine.data('expertiseBadgesComponent', () => ({
        badges: [],

        init() {
            this.badges = siteData.expertiseBadges;
        }
    }));

    // Blog Component avec Filtrage
    Alpine.data('blogComponent', () => ({
        allArticles: [],
        filteredArticles: [],
        searchQuery: '',
        selectedTag: 'all',
        availableTags: [],
        isLoading: false,

        init() {
            try {
                this.allArticles = siteData.articles || [];
                this.filteredArticles = [...this.allArticles];
                this.availableTags = dataUtils.getAllTags();

                const urlParams = new URLSearchParams(window.location.search);
                const tagParam = urlParams.get('tag');
                if (tagParam && this.availableTags.includes(tagParam)) {
                    this.selectedTag = tagParam;
                    this.filterArticles();
                }
            } catch (error) {
                console.error('Blog initialization error:', error);
            }
        },

        filterArticles() {
            this.isLoading = true;

            setTimeout(() => {
                try {
                    let results = [...this.allArticles];

                    if (this.searchQuery.trim()) {
                        const query = this.searchQuery.toLowerCase();
                        results = results.filter(article =>
                            article.title.toLowerCase().includes(query) ||
                            article.excerpt.toLowerCase().includes(query) ||
                            article.tags.some(tag => tag.toLowerCase().includes(query))
                        );
                    }

                    if (this.selectedTag !== 'all') {
                        results = results.filter(article =>
                            article.tags.includes(this.selectedTag)
                        );
                    }

                    this.filteredArticles = results;
                } catch (error) {
                    console.error('Filter error:', error);
                    this.filteredArticles = this.allArticles;
                } finally {
                    this.isLoading = false;
                }
            }, 100);
        },

        selectTag(tag) {
            this.selectedTag = tag;
            this.filterArticles();

            try {
                const url = new URL(window.location);
                if (tag === 'all') {
                    url.searchParams.delete('tag');
                } else {
                    url.searchParams.set('tag', tag);
                }
                window.history.pushState({}, '', url);
            } catch (error) {
                console.error('URL update error:', error);
            }
        },

        formatDate(dateString) {
            return dataUtils.formatDate(dateString);
        }
    }));

    // Biography Component avec sections extensibles
    Alpine.data('biographyComponent', () => ({
        biography: {},
        educationExpanded: true,
        experienceExpanded: true,

        init() {
            this.biography = siteData.biography;
        },

        toggleEducation() {
            this.educationExpanded = !this.educationExpanded;
        },

        toggleExperience() {
            this.experienceExpanded = !this.experienceExpanded;
        }
    }));

    // Skillset Component
    Alpine.data('skillsetComponent', () => ({
        expertise: [],

        init() {
            this.expertise = siteData.expertise;
        }
    }));

    // Contact Form Component
    Alpine.data('contactFormComponent', () => ({
        formData: {
            name: '',
            email: '',
            message: ''
        },
        errors: {},
        submitted: false,
        isSubmitting: false,

        validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },

        validateForm() {
            this.errors = {};

            const name = this.formData.name.trim();
            const email = this.formData.email.trim();
            const message = this.formData.message.trim();

            if (!name) {
                this.errors.name = 'Le nom est requis';
            } else if (name.length < 2) {
                this.errors.name = 'Le nom doit contenir au moins 2 caractères';
            } else if (name.length > 100) {
                this.errors.name = 'Le nom est trop long';
            }

            if (!email) {
                this.errors.email = 'L\'email est requis';
            } else if (!this.validateEmail(email)) {
                this.errors.email = 'Format d\'email invalide';
            }

            if (!message) {
                this.errors.message = 'Le message est requis';
            } else if (message.length < 10) {
                this.errors.message = 'Le message doit contenir au moins 10 caractères';
            } else if (message.length > 1000) {
                this.errors.message = 'Le message est trop long';
            }

            return Object.keys(this.errors).length === 0;
        },

        async submitForm() {
            if (!this.validateForm() || this.isSubmitting) return;

            this.isSubmitting = true;

            try {
                console.log('Form submitted:', this.formData);

                this.submitted = true;

                setTimeout(() => {
                    this.formData = { name: '', email: '', message: '' };
                    this.submitted = false;
                    this.isSubmitting = false;
                }, 3000);
            } catch (error) {
                console.error('Form submission error:', error);
                this.errors.submit = 'Une erreur est survenue. Veuillez réessayer.';
                this.isSubmitting = false;
            }
        }
    }));

    // Social Links Component
    Alpine.data('socialLinksComponent', () => ({
        social: [],

        init() {
            this.social = siteData.social;
        }
    }));

    // Article Detail Component
    Alpine.data('articleDetailComponent', () => ({
        article: {},
        profile: {},
        relatedArticles: [],

        init() {
            try {
                this.profile = siteData.profile;

                const urlParams = new URLSearchParams(window.location.search);
                const articleId = parseInt(urlParams.get('id')) || 1;

                this.article = siteData.articles.find(a => a.id === articleId) || siteData.articles[0];

                if (this.article) {
                    document.title = `${this.article.title} - Dr. KAMBALE MONDO`;
                    this.loadRelatedArticles();
                }
            } catch (error) {
                console.error('Article initialization error:', error);
            }
        },

        loadRelatedArticles() {
            this.relatedArticles = siteData.articles
                .filter(a => a.id !== this.article.id)
                .filter(a =>
                    a.category === this.article.category ||
                    a.tags.some(tag => this.article.tags.includes(tag))
                )
                .slice(0, 2);

            if (this.relatedArticles.length === 0) {
                this.relatedArticles = siteData.articles
                    .filter(a => a.id !== this.article.id)
                    .slice(0, 2);
            }
        },

        formatDate(dateString) {
            return dataUtils.formatDate(dateString);
        }
    }));

    // Footer Component
    Alpine.data('footerComponent', () => ({
        currentYear: new Date().getFullYear(),
        profile: {},
        basePath: '',

        init() {
            this.profile = siteData.profile;
            // Determine if we're in pages/ directory or root
            const isInPagesDir = window.location.pathname.includes('/pages/');
            this.basePath = isInPagesDir ? '../' : './';
        }
    }));
}
