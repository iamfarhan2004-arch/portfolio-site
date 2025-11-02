// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeTypedText();
    initializeSkillsChart();
    initializeParticles();
    initializeScrollEffects();
});

// Initialize all animations
function initializeAnimations() {
    // Animate skill items on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        anime({
            targets: item,
            translateY: [50, 0],
            opacity: [0, 1],
            delay: index * 100,
            duration: 800,
            easing: 'easeOutExpo'
        });
    });

    // Animate cards on scroll
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach((card, index) => {
        anime({
            targets: card,
            translateY: [30, 0],
            opacity: [0, 1],
            delay: index * 150,
            duration: 1000,
            easing: 'easeOutExpo'
        });
    });
}

// Initialize typewriter effect
function initializeTypedText() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Transforming Data into Insights',
            'Python & SQL Expert',
            'Power BI & Tableau Specialist',
            'AI & Machine Learning Enthusiast'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Initialize skills radar chart
function initializeSkillsChart() {
    const chartDom = document.getElementById('skills-chart');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item'
        },
        radar: {
            indicator: [
                { name: 'Python', max: 100 },
                { name: 'SQL', max: 100 },
                { name: 'Power BI', max: 100 },
                { name: 'Tableau', max: 100 },
                { name: 'Machine Learning', max: 100 },
                { name: 'Data Visualization', max: 100 }
            ],
            radius: '70%',
            axisName: {
                color: '#64748b',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: '#e2e8f0'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#e2e8f0'
                }
            }
        },
        series: [{
            name: 'Skills',
            type: 'radar',
            data: [{
                value: [90, 85, 88, 82, 75, 92],
                name: 'Proficiency Level',
                areaStyle: {
                    color: 'rgba(45, 212, 191, 0.2)'
                },
                lineStyle: {
                    color: '#2dd4bf',
                    width: 2
                },
                itemStyle: {
                    color: '#2dd4bf'
                }
            }],
            animationDuration: 2000,
            animationEasing: 'cubicOut'
        }]
    };
    
    myChart.setOption(option);
    
    // Responsive chart
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Initialize floating particles
function initializeParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 12000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 300);
    
    // Initial particles
    for (let i = 0; i < 20; i++) {
        setTimeout(createParticle, i * 200);
    }
}

// Initialize scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animation
    const animatedElements = document.querySelectorAll('.skill-item, .card-hover');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Skills data for interactive features
const skillsData = {
    python: {
        level: 90,
        tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
        projects: ['Data Cleaning Automation', 'Predictive Analytics', 'Visualization Dashboards']
    },
    sql: {
        level: 85,
        tools: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
        projects: ['Database Design', 'Query Optimization', 'Data Migration']
    },
    visualization: {
        level: 92,
        tools: ['Power BI', 'Tableau', 'Excel', 'Plotly'],
        projects: ['Executive Dashboards', 'Interactive Reports', 'Business Intelligence']
    },
    machineLearning: {
        level: 75,
        tools: ['Scikit-learn', 'TensorFlow', 'Keras', 'NLTK'],
        projects: ['Classification Models', 'Chatbot Development', 'Predictive Analytics']
    }
};

// Project data for filtering and display
const projectsData = [
    {
        id: 1,
        title: 'Deloitte Data Analytics Simulation',
        company: 'Deloitte',
        type: 'Job Simulation',
        technologies: ['Python', 'Power BI', 'SQL'],
        category: 'forensic',
        description: 'Performed data analysis and forensic technology tasks in a simulated environment.',
        year: 2025,
        image: 'resources/dashboard-1.png'
    },
    {
        id: 2,
        title: 'Tata GenAI Powered Analytics',
        company: 'Tata',
        type: 'Certification',
        technologies: ['Python', 'GenAI', 'Machine Learning'],
        category: 'ai',
        description: 'Developed AI-powered financial chatbot and delinquency prediction models.',
        year: 2025,
        image: 'resources/dashboard-2.png'
    },
    {
        id: 3,
        title: 'Quantium Customer Analytics',
        company: 'Quantium',
        type: 'Job Simulation',
        technologies: ['SQL', 'Tableau', 'Statistics'],
        category: 'customer',
        description: 'Conducted customer analytics, experimentation, and uplift testing.',
        year: 2025,
        image: 'resources/dashboard-1.png'
    },
    {
        id: 4,
        title: 'BCG X GenAI Development',
        company: 'BCG X',
        type: 'Job Simulation',
        technologies: ['GenAI', 'Python', 'Data Analysis'],
        category: 'ai',
        description: 'Applied GenAI for data extraction, analysis, and chatbot development.',
        year: 2025,
        image: 'resources/dashboard-2.png'
    }
];

// Contact form handling
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Message sent successfully!', 'success');
        event.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutExpo'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInExpo',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Smooth scroll for navigation links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});

// Add loading animation
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        anime({
            targets: loader,
            opacity: [1, 0],
            duration: 500,
            easing: 'easeOutExpo',
            complete: () => {
                loader.style.display = 'none';
            }
        });
    }
});

// Export functions for use in other pages
window.portfolioJS = {
    skillsData,
    projectsData,
    handleContactForm,
    showNotification,
    scrollToSection,
    initializeSkillsChart
};