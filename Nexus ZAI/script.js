// Dashboard Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Dashboard app navigation
    const dashboardAppLinks = document.querySelectorAll('.dashboard-app-link');
    const dashboardAppTiles = document.querySelectorAll('.dashboard-app-tile');
    const dashboardContents = document.querySelectorAll('.dashboard-content');
    
    function showDashboardContent(appName) {
        dashboardContents.forEach(content => {
            content.classList.add('hidden');
        });
        
        if (appName === 'dashboard-home') {
            document.getElementById('dashboard-home').classList.remove('hidden');
        } else {
            document.getElementById(`${appName}-content`).classList.remove('hidden');
        }
        
        // Update active state in sidebar
        dashboardAppLinks.forEach(link => {
            if (link.getAttribute('data-app') === appName) {
                link.classList.add('bg-indigo-50', 'text-indigo-700');
            } else {
                link.classList.remove('bg-indigo-50', 'text-indigo-700');
            }
        });
    }
    
    // Add click event to sidebar links
    dashboardAppLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const appName = this.getAttribute('data-app');
            showDashboardContent(appName);
        });
    });
    
    // Add click event to app tiles
    dashboardAppTiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const appName = this.getAttribute('data-app');
            showDashboardContent(appName);
        });
    });
    
    // Initialize Charts
    initializeCharts();
});

// Pricing Toggle
document.addEventListener('DOMContentLoaded', function() {
    const pricingToggle = document.getElementById('pricing-toggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');
    
    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            if (this.checked) {
                monthlyPrices.forEach(price => price.classList.add('hidden'));
                annualPrices.forEach(price => price.classList.remove('hidden'));
            } else {
                monthlyPrices.forEach(price => price.classList.remove('hidden'));
                annualPrices.forEach(price => price.classList.add('hidden'));
            }
        });
    }
});

// FAQ Toggle
document.addEventListener('DOMContentLoaded', function() {
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            content.classList.toggle('hidden');
            this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        });
    });
});

// Initialize Charts
function initializeCharts() {
    // Revenue Chart (Analytics page)
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue',
                    data: [65000, 72000, 68000, 85000, 92000, 98000],
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderColor: 'rgba(99, 102, 241, 1)',
                    borderWidth: 2,
                    tension: 0.3,
                    pointBackgroundColor: 'rgba(99, 102, 241, 1)',
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Acquisition Chart (Analytics page)
    const acquisitionCtx = document.getElementById('acquisitionChart');
    if (acquisitionCtx) {
        new Chart(acquisitionCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'New Customers',
                    data: [120, 135, 125, 160, 180, 195],
                    backgroundColor: 'rgba(16, 185, 129, 0.7)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Conversion Chart (Analytics page)
    const conversionCtx = document.getElementById('conversionChart');
    if (conversionCtx) {
        new Chart(conversionCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Conversion Rate',
                    data: [3.2, 3.5, 3.8, 4.2, 4.5, 4.8],
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderColor: 'rgba(245, 158, 11, 1)',
                    borderWidth: 2,
                    tension: 0.3,
                    pointBackgroundColor: 'rgba(245, 158, 11, 1)',
                    pointRadius: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 6,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Retention Chart (Analytics page)
    const retentionCtx = document.getElementById('retentionChart');
    if (retentionCtx) {
        new Chart(retentionCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Retention Rate',
                    data: [82, 83, 84, 85, 86, 87.2],
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderColor: 'rgba(139, 92, 246, 1)',
                    borderWidth: 2,
                    tension: 0.3,
                    pointBackgroundColor: 'rgba(139, 92, 246, 1)',
                    pointRadius: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 80,
                        max: 90,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Deal Size Chart (Analytics page)
    const dealSizeCtx = document.getElementById('dealSizeChart');
    if (dealSizeCtx) {
        new Chart(dealSizeCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Average Deal Size',
                    data: [8200, 8350, 8100, 8600, 8550, 8450],
                    backgroundColor: 'rgba(239, 68, 68, 0.7)',
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 7500,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }
}