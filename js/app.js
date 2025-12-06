// Import AlpineJS
import Alpine from 'alpinejs';

// Import data and components
import { siteData, dataUtils } from './data.js';
import { initComponents } from './components.js';

// Make data globally available
window.siteData = siteData;
window.dataUtils = dataUtils;

// Initialize components before Alpine starts
initComponents(Alpine, siteData, dataUtils);

// Start Alpine
window.Alpine = Alpine;
Alpine.start();
