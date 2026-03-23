// ===== FAQ TOGGLE FUNCTIONALITY =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.faq-question').classList.remove('active');
                otherItem.querySelector('.faq-answer').style.display = 'none';
            }
        });

        // Toggle current item
        question.classList.toggle('active');
        
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});

// ===== MOBILE MENU TOGGLE =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ===== SMOOTH SCROLL FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                if (navMenu && navMenu.style.display === 'flex') {
                    navMenu.style.display = 'none';
                }
            }
        }
    });
});

// ===== BUTTON CLICK HANDLERS =====
const applyButtons = document.querySelectorAll('.btn-admission, .btn-apply');

applyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Scroll to admissions section
        const admissionsSection = document.getElementById('admissions');
        if (admissionsSection) {
            admissionsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== BUTTON ANIMATIONS =====
const allButtons = document.querySelectorAll('button');

allButtons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s';
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll(
    '.program-card, .facility-card, .staff-card, .contact-card, .faq-item'
).forEach(el => {
    observer.observe(el);
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ===== ACTIVE NAV LINK HIGHLIGHTING =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== FORM SUBMISSION (APPLY ONLINE) =====
// This would connect to backend admissions system
const admissionForm = document.querySelector('form');

if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! Our admissions team will contact you shortly.');
        admissionForm.reset();
    });
}

// ===== SEARCH FUNCTIONALITY (FOR FUTURE USE) =====
function searchFAQ(query) {
    const faqItems = document.querySelectorAll('.faq-item');
    const results = [];

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question').textContent;
        const answer = item.querySelector('.faq-answer').textContent;

        if (question.toLowerCase().includes(query.toLowerCase()) || 
            answer.toLowerCase().includes(query.toLowerCase())) {
            results.push({
                question: question,
                answer: answer
            });
        }
    });

    return results;
}

// ===== CHATBOT/VOICEBOT DATA EXPORT =====
window.schoolData = {
    // Basic Information
    schoolName: 'Pinnacle Academy',
    established: 1999,
    location: 'Jubilee Hills, Hyderabad, Telangana 500033',
    principal: 'Dr. Rajesh Sharma',
    phone: '+91-40-4000-5000',
    admissionsPhone: '+91-40-4000-5050',
    email: 'info@pinnacle.edu',
    admissionsEmail: 'admissions@pinnacle.edu',

    // Programs
    programs: [
        {
            name: 'Primary School',
            grades: '1-5',
            ageGroup: '6-11 years',
            studentTeacherRatio: '30-35 per class'
        },
        {
            name: 'Middle School',
            grades: '6-8',
            ageGroup: '11-14 years',
            studentTeacherRatio: '28-32 per class'
        },
        {
            name: 'Senior School',
            grades: '9-12',
            ageGroup: '14-18 years',
            studentTeacherRatio: '25-28 per class'
        }
    ],

    // Fees
    fees: {
        primary: { tuition: 450000, registration: 50000, total: 500000 },
        middle: { tuition: 550000, registration: 50000, total: 600000 },
        senior1: { tuition: 650000, registration: 75000, total: 725000 },
        senior2: { tuition: 700000, registration: 75000, total: 775000 }
    },

    // Academic Calendar
    academicCalendar: {
        term1: { start: 'June 3', end: 'August 31' },
        term1Exams: 'September 1-6',
        term2: { start: 'September 16', end: 'November 29' },
        term2Exams: 'December 1-10',
        winterBreak: 'December 11 - January 5',
        term3: { start: 'January 6', end: 'March 15' },
        finalExams: 'March 17 - April 10',
        summerVacation: 'May-June'
    },

    // Facilities
    facilities: [
        'Central library with 50,000+ books',
        '3 computer labs with 90+ systems',
        'Science laboratories (Physics, Chemistry, Biology)',
        'Robotics & AI lab',
        'Cricket ground & practice nets',
        'Basketball & badminton courts',
        'Tennis courts',
        'Gymnasium',
        'Visual arts studio',
        'Music practice rooms',
        'Auditorium for performances',
        'Medical center',
        'Cafeteria',
        'GPS-enabled buses'
    ],

    // Admission Requirements
    admissionRequirements: {
        grade1: {
            age: '6+ years (as of April 1)',
            requirements: ['Admission test in English & Mathematics', 'Basic reading & number recognition']
        },
        grade6: {
            requirements: ['Entrance exam (English, Math, Reasoning)', 'Performance in Grade 5', 'Interview']
        },
        grade9: {
            requirements: ['ICSE entrance examination', 'Grade 8 performance', 'Subject-specific aptitude tests']
        }
    },

    // Contact Hours
    contactHours: {
        schoolHours: '8:30 AM - 3:30 PM',
        afterSchoolCare: 'Till 5:30 PM',
        counselorHours: '10 AM - 1 PM',
        libraryHours: '7:30 AM - 5:00 PM',
        officeHours: '9 AM - 5 PM (Mon-Fri)'
    },

    // FAQ Data for Chatbot
    faq: [
        {
            question: 'What is the age requirement for Grade 1 admission?',
            answer: 'Students must be 6 years old as of April 1st of the admission year. We require an entrance test in English and Mathematics.'
        },
        {
            question: 'What is the fee structure?',
            answer: 'Annual fees range from ₹5,00,000 to ₹7,75,000 depending on grade level. Fees can be paid in 3 installments. Sibling discounts of 10% are available.'
        },
        {
            question: 'Is transportation provided?',
            answer: 'Yes, we provide GPS-enabled transport with trained drivers covering multiple routes. Transportation fee varies by zone.'
        },
        {
            question: 'What board affiliations do you have?',
            answer: 'We follow ICSE and ISC boards for Classes 1-12. IGCSE options are also available.'
        },
        {
            question: 'What sports are offered?',
            answer: 'We offer cricket, badminton, basketball, tennis, volleyball, and athletics.'
        },
        {
            question: 'How is campus safety ensured?',
            answer: 'Campus is secured with CCTV surveillance, trained security staff, and restricted entry. We have emergency protocols and regular safety drills.'
        },
        {
            question: 'What technology is integrated?',
            answer: 'We have smart classrooms, digital learning platforms, coding labs, and AI/robotics programs.'
        },
        {
            question: 'How are different learning needs supported?',
            answer: 'We have a dedicated inclusion team for students with learning differences. Individualized Education Plans and therapy services are available.'
        },
        {
            question: 'What is the university placement rate?',
            answer: 'Our Class 12 students achieve 98% university placement with an average 35% scholarship rate.'
        },
        {
            question: 'How are parents updated about student progress?',
            answer: 'Parent-teacher meetings are conducted twice yearly. Progress reports are shared every term. Urgent issues are communicated immediately.'
        }
    ],

    // Common Questions for Voice/Chatbot
    commonQueries: {
        admissions: ['How do I apply?', 'What are admission fees?', 'When is the deadline?', 'What are entry requirements?'],
        academics: ['What subjects are offered?', 'What is the curriculum?', 'What boards are available?', 'Are extracurriculars mandatory?'],
        facilities: ['Do you have sports facilities?', 'Is there a library?', 'Do you provide transport?', 'What about medical facilities?'],
        contact: ['How do I contact the school?', 'What are office hours?', 'Who should I call for admissions?', 'What is the email address?'],
        calendar: ['When does school start?', 'When are exams?', 'What are the holidays?', 'When is summer break?']
    },

    // Get method for chatbot queries
    getAdmissionInfo: function() {
        return {
            fees: this.fees,
            requirements: this.admissionRequirements,
            phone: this.admissionsPhone,
            email: this.admissionsEmail
        };
    },

    getAcademicInfo: function() {
        return {
            programs: this.programs,
            calendar: this.academicCalendar,
            facilities: this.facilities
        };
    },

    getContactInfo: function() {
        return {
            phone: this.phone,
            email: this.email,
            location: this.location,
            hours: this.contactHours
        };
    },

    searchFAQ: function(keyword) {
        return this.faq.filter(item => 
            item.question.toLowerCase().includes(keyword.toLowerCase()) ||
            item.answer.toLowerCase().includes(keyword.toLowerCase())
        );
    }
};

// ===== LOAD EVENT =====
window.addEventListener('load', () => {
    console.log('✓ School website loaded successfully');
    console.log('✓ Chatbot/Voicebot data available at window.schoolData');
    console.log('✓ FAQ search available via window.schoolData.searchFAQ()');
});

// ===== EXPORT FOR EXTERNAL USE =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.schoolData;
}
