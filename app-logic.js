/* ============================================
   COMPREHENSIVE PROFESSION DATABASE (20+ Careers)
   ============================================ */

let currentStep = 1;
const totalSteps = 4;

const professionDatabase = {
    'Technology-Problem-Solving-Independent': {
        career: 'Software Developer',
        salary: '$85,000 - $130,000',
        growth: '+15% annually',
        description: 'Create applications and solve complex technical problems independently. Perfect for those who enjoy deep focus and logical thinking.'
    },
    'Technology-Problem-Solving-Team': {
        career: 'Product Engineer',
        salary: '$90,000 - $140,000',
        growth: '+16% annually',
        description: 'Work with teams to build products that solve real-world problems. Combine technical skills with collaborative problem-solving.'
    },
    'Technology-Creativity-Independent': {
        career: 'Game Developer',
        salary: '$75,000 - $120,000',
        growth: '+12% annually',
        description: 'Design and develop interactive games. Express creativity through technology and independent innovation.'
    },
    'Technology-Creativity-Team': {
        career: 'UX/UI Designer',
        salary: '$70,000 - $110,000',
        growth: '+14% annually',
        description: 'Design beautiful and intuitive digital experiences. Collaborate with teams to create products users love.'
    },
    'Technology-Communication-Team': {
        career: 'Tech Support Manager',
        salary: '$65,000 - $100,000',
        growth: '+11% annually',
        description: 'Lead technical support teams. Bridge communication between users and technical teams.'
    },
    'Technology-Leadership-Team': {
        career: 'Tech Team Lead',
        salary: '$95,000 - $150,000',
        growth: '+13% annually',
        description: 'Lead technical teams and manage projects. Combine technical expertise with people management skills.'
    },
    'Creative-Creativity-Independent': {
        career: 'Freelance Artist/Designer',
        salary: '$50,000 - $100,000',
        growth: '+10% annually',
        description: 'Express yourself through art and design. Work independently on your own creative projects.'
    },
    'Creative-Creativity-Team': {
        career: 'Creative Director',
        salary: '$75,000 - $130,000',
        growth: '+11% annually',
        description: 'Lead creative teams and vision. Shape the direction of creative projects in agencies or companies.'
    },
    'Creative-Communication-Team': {
        career: 'Marketing Manager',
        salary: '$65,000 - $110,000',
        growth: '+12% annually',
        description: 'Communicate brand messages creatively. Lead campaigns that connect with audiences.'
    },
    'Creative-Problem-Solving-Team': {
        career: 'Product Designer',
        salary: '$75,000 - $120,000',
        growth: '+13% annually',
        description: 'Solve design challenges creatively. Work with cross-functional teams to improve user experiences.'
    },
    'Creative-Leadership-Team': {
        career: 'Content Director',
        salary: '$70,000 - $115,000',
        growth: '+12% annually',
        description: 'Lead content strategy and creative teams. Create compelling narratives and media.'
    },
    'Healthcare-Leadership-Team': {
        career: 'Healthcare Administrator',
        salary: '$70,000 - $115,000',
        growth: '+18% annually',
        description: 'Lead healthcare teams and operations. Make a direct impact on patient care delivery.'
    },
    'Healthcare-Problem-Solving-Independent': {
        career: 'Medical Researcher',
        salary: '$75,000 - $120,000',
        growth: '+17% annually',
        description: 'Conduct independent research to advance medical knowledge and treatments.'
    },
    'Healthcare-Communication-Team': {
        career: 'Registered Nurse',
        salary: '$65,000 - $100,000',
        growth: '+19% annually',
        description: 'Provide patient care with compassion. Work in teams to deliver quality healthcare.'
    },
    'Healthcare-Creativity-Team': {
        career: 'Art Therapist',
        salary: '$45,000 - $80,000',
        growth: '+16% annually',
        description: 'Use creativity to help patients heal. Combine artistic expression with healthcare.'
    },
    'Business-Leadership-Team': {
        career: 'Business Manager',
        salary: '$70,000 - $120,000',
        growth: '+10% annually',
        description: 'Lead teams and manage business operations. Drive growth and success.'
    },
    'Business-Problem-Solving-Independent': {
        career: 'Management Consultant',
        salary: '$75,000 - $130,000',
        growth: '+11% annually',
        description: 'Solve complex business problems. Help companies improve operations and strategy.'
    },
    'Business-Communication-Team': {
        career: 'Business Analyst',
        salary: '$65,000 - $110,000',
        growth: '+12% annually',
        description: 'Analyze business needs and recommend solutions. Bridge between technical and business teams.'
    },
    'Business-Creativity-Team': {
        career: 'Entrepreneur/Startup Founder',
        salary: '$0 - $500,000+',
        growth: 'Unlimited potential',
        description: 'Build your own business from the ground up. Create something entirely new and innovative.'
    },
    'Science-Problem-Solving-Independent': {
        career: 'Research Scientist',
        salary: '$70,000 - $115,000',
        growth: '+8% annually',
        description: 'Conduct groundbreaking research independently. Advance scientific knowledge.'
    },
    'Science-Problem-Solving-Team': {
        career: 'Laboratory Technician',
        salary: '$45,000 - $75,000',
        growth: '+9% annually',
        description: 'Support scientific research with precision and attention to detail. Work in collaborative lab environments.'
    },
    'Science-Creativity-Team': {
        career: 'Environmental Engineer',
        salary: '$65,000 - $110,000',
        growth: '+14% annually',
        description: 'Use science creatively to solve environmental challenges. Make a positive impact on the planet.'
    },
    'Science-Leadership-Team': {
        career: 'Science Program Manager',
        salary: '$70,000 - $120,000',
        growth: '+10% annually',
        description: 'Lead scientific teams and research programs. Manage projects that advance scientific innovation.'
    }
};

// Funding calculations
const educationCosts = {
    'University': 25000,
    'College': 15000,
    'Vocational': 12000,
    'Bootcamp': 15000
};

const budgetValues = {
    '5000': 5000,
    '15000': 15000,
    '30000': 30000,
    '50000': 50000
};

/* ============================================
   KAZAKHSTAN UNIVERSITIES DATABASE
   ============================================ */

const kazakhstanUniversities = {
    'Software Developer': {
        university: 'Nazarbayev University',
        city: 'Nur-Sultan',
        specialization: 'Computer Science & Engineering',
        coordinates: { lat: 51.1694, lng: 71.4491 },
        rank: 'Top-ranked in Central Asia',
        websiteHint: 'nu.edu.kz'
    },
    'Product Engineer': {
        university: 'Kazakh-British Technical University',
        city: 'Almaty',
        specialization: 'Engineering & Technology',
        coordinates: { lat: 43.2380, lng: 77.0466 },
        rank: 'Leading tech university',
        websiteHint: 'kbtu.kz'
    },
    'Game Developer': {
        university: 'Kazakh National University',
        city: 'Almaty',
        specialization: 'Computer Science & Digital Media',
        coordinates: { lat: 43.2357, lng: 76.9504 },
        rank: 'Best for creative tech',
        websiteHint: 'kaznu.kz'
    },
    'UX/UI Designer': {
        university: 'Eurasian National University',
        city: 'Nur-Sultan',
        specialization: 'Design & Digital Arts',
        coordinates: { lat: 51.1694, lng: 71.4691 },
        rank: 'Strong design programs',
        websiteHint: 'enu.kz'
    },
    'Tech Support Manager': {
        university: 'Almaty University of Power Engineering & Telecommunications',
        city: 'Almaty',
        specialization: 'IT & Telecommunications Management',
        coordinates: { lat: 43.2450, lng: 77.0500 },
        rank: 'Tech management focus',
        websiteHint: 'aues.kz'
    },
    'Tech Team Lead': {
        university: 'Nazarbayev University',
        city: 'Nur-Sultan',
        specialization: 'Computer Science & Leadership',
        coordinates: { lat: 51.1694, lng: 71.4491 },
        rank: 'Top-ranked in Central Asia',
        websiteHint: 'nu.edu.kz'
    },
    'Freelance Artist/Designer': {
        university: 'Academy of Arts "Turan"',
        city: 'Almaty',
        specialization: 'Fine Arts & Design',
        coordinates: { lat: 43.2330, lng: 76.9400 },
        rank: 'Premier art institution',
        websiteHint: 'turan-art.kz'
    },
    'Creative Director': {
        university: 'Kazakh National University',
        city: 'Almaty',
        specialization: 'Media & Creative Industries',
        coordinates: { lat: 43.2357, lng: 76.9504 },
        rank: 'Best for creative leadership',
        websiteHint: 'kaznu.kz'
    },
    'Marketing Manager': {
        university: 'University of International Business (KIMEP)',
        city: 'Almaty',
        specialization: 'Business & Marketing',
        coordinates: { lat: 43.2380, lng: 77.0400 },
        rank: 'Premier business school',
        websiteHint: 'kimep.kz'
    },
    'Product Designer': {
        university: 'Kazakh-British Technical University',
        city: 'Almaty',
        specialization: 'Product Design & Engineering',
        coordinates: { lat: 43.2380, lng: 77.0466 },
        rank: 'Leading in product design',
        websiteHint: 'kbtu.kz'
    },
    'Content Director': {
        university: 'Eurasian National University',
        city: 'Nur-Sultan',
        specialization: 'Media & Communications',
        coordinates: { lat: 51.1694, lng: 71.4691 },
        rank: 'Strong media programs',
        websiteHint: 'enu.kz'
    },
    'Healthcare Administrator': {
        university: 'Asfendiyarov Kazakh National Medical University',
        city: 'Almaty',
        specialization: 'Healthcare Management',
        coordinates: { lat: 43.2280, lng: 76.9380 },
        rank: 'Leading medical university',
        websiteHint: 'kaznmu.kz'
    },
    'Medical Researcher': {
        university: 'Asfendiyarov Kazakh National Medical University',
        city: 'Almaty',
        specialization: 'Medical Research',
        coordinates: { lat: 43.2280, lng: 76.9380 },
        rank: 'Leading medical university',
        websiteHint: 'kaznmu.kz'
    },
    'Registered Nurse': {
        university: 'West Kazakhstan Medical University',
        city: 'Aktau',
        specialization: 'Nursing & Healthcare',
        coordinates: { lat: 43.6257, lng: 51.1694 },
        rank: 'Healthcare focus',
        websiteHint: 'wkmu.kz'
    },
    'Art Therapist': {
        university: 'Academy of Arts "Turan"',
        city: 'Almaty',
        specialization: 'Art & Therapeutic Practices',
        coordinates: { lat: 43.2330, lng: 76.9400 },
        rank: 'Arts specialization',
        websiteHint: 'turan-art.kz'
    },
    'Business Manager': {
        university: 'University of International Business (KIMEP)',
        city: 'Almaty',
        specialization: 'Business Management',
        coordinates: { lat: 43.2380, lng: 77.0400 },
        rank: 'Premier business school',
        websiteHint: 'kimep.kz'
    },
    'Management Consultant': {
        university: 'University of International Business (KIMEP)',
        city: 'Almaty',
        specialization: 'Business Consulting',
        coordinates: { lat: 43.2380, lng: 77.0400 },
        rank: 'Premier business school',
        websiteHint: 'kimep.kz'
    },
    'Business Analyst': {
        university: 'Kazakh-British Technical University',
        city: 'Almaty',
        specialization: 'Business Analytics & IT',
        coordinates: { lat: 43.2380, lng: 77.0466 },
        rank: 'Business & tech integration',
        websiteHint: 'kbtu.kz'
    },
    'Entrepreneur/Startup Founder': {
        university: 'Nazarbayev University',
        city: 'Nur-Sultan',
        specialization: 'Entrepreneurship & Innovation',
        coordinates: { lat: 51.1694, lng: 71.4491 },
        rank: 'Innovation & startup hub',
        websiteHint: 'nu.edu.kz'
    },
    'Research Scientist': {
        university: 'Nazarbayev University',
        city: 'Nur-Sultan',
        specialization: 'Advanced Research',
        coordinates: { lat: 51.1694, lng: 71.4491 },
        rank: 'Top research institution',
        websiteHint: 'nu.edu.kz'
    },
    'Laboratory Technician': {
        university: 'Kazakh National Research Technical University',
        city: 'Almaty',
        specialization: 'Laboratory Technology',
        coordinates: { lat: 43.2400, lng: 77.0500 },
        rank: 'Technical expertise',
        websiteHint: 'knrtu.kz'
    },
    'Environmental Engineer': {
        university: 'Kazakh National Research Technical University',
        city: 'Almaty',
        specialization: 'Environmental Engineering',
        coordinates: { lat: 43.2400, lng: 77.0500 },
        rank: 'Environmental focus',
        websiteHint: 'knrtu.kz'
    },
    'Science Program Manager': {
        university: 'Nazarbayev University',
        city: 'Nur-Sultan',
        specialization: 'Science Administration',
        coordinates: { lat: 51.1694, lng: 71.4491 },
        rank: 'Research leadership',
        websiteHint: 'nu.edu.kz'
    }
};

/* ============================================
   KAZAKHSTAN UNIVERSITIES DATABASE
   ============================================ */

const kazakhUniversities = {
    'Technology': [
        {
            name: 'Kazakh-British Technical University (KBTU)',
            location: 'Almaty',
            established: 2002,
            specialization: 'IT, Engineering, Technology',
            ranking: 'Top Technical University',
            website: 'www.kbtu.kz',
            description: 'Premier technical university with strong focus on engineering and IT. Known for industry partnerships and modern facilities.'
        },
        {
            name: 'Nazarbayev University',
            location: 'Nur-Sultan',
            established: 2010,
            specialization: 'Research, Engineering, IT',
            ranking: 'Top University in Kazakhstan',
            website: 'www.nu.edu.kz',
            description: 'Elite research university with world-class faculty and facilities. Offers scholarships and strong international partnerships.'
        },
        {
            name: 'Eurasian National University (L.N. Gumilyov)',
            location: 'Nur-Sultan',
            established: 1996,
            specialization: 'Computer Science, IT, Engineering',
            ranking: 'Leading Technical Institution',
            website: 'www.enu.kz',
            description: 'Major research university with strong IT and engineering programs. Extensive library and research centers.'
        }
    ],
    'Creative': [
        {
            name: 'Al-Farabi Kazakh National University',
            location: 'Almaty',
            established: 1934,
            specialization: 'Arts, Design, Humanities, Social Sciences',
            ranking: 'Oldest & Largest University',
            website: 'www.kaznu.kz',
            description: 'Oldest and largest university in Kazakhstan with strong humanities and arts programs. Rich cultural heritage.'
        },
        {
            name: 'Kazakh National Academy of Arts',
            location: 'Almaty',
            established: 1957,
            specialization: 'Fine Arts, Design, Music, Theater',
            ranking: 'Premier Arts Academy',
            website: 'www.kaznaa.kz',
            description: 'Specialized academy for visual and performing arts. Training in fine arts, music, dance, and theater.'
        },
        {
            name: 'Kazakh University of Technology and Business (KUTB)',
            location: 'Almaty',
            established: 2001,
            specialization: 'Business, Design, Commerce',
            ranking: 'Leading Business University',
            website: 'www.kutb.kz',
            description: 'Modern university with focus on business and technology. Strong industry connections and practical training.'
        }
    ],
    'Healthcare': [
        {
            name: 'Asfendiyarov Kazakh National Medical University',
            location: 'Almaty',
            established: 1930,
            specialization: 'Medicine, Healthcare, Research',
            ranking: 'Leading Medical Institution',
            website: 'www.kaznmu.kz',
            description: 'Premier medical university with modern teaching hospitals and research facilities. Strong clinical training programs.'
        },
        {
            name: 'West Kazakhstan Marat Ospanov Medical University',
            location: 'Aktau',
            established: 2014,
            specialization: 'Medicine, Healthcare',
            ranking: 'Modern Medical University',
            website: 'www.ospanova.kz',
            description: 'Modern medical university with focus on contemporary healthcare education and research.'
        },
        {
            name: 'Al-Farabi Kazakh National University',
            location: 'Almaty',
            established: 1934,
            specialization: 'Medicine, Biology, Health Sciences',
            ranking: 'Comprehensive University',
            website: 'www.kaznu.kz',
            description: 'Comprehensive university with strong health sciences and medical research programs.'
        }
    ],
    'Business': [
        {
            name: 'Kazakh University of Technology and Business (KUTB)',
            location: 'Almaty',
            established: 2001,
            specialization: 'Business, Finance, Economics',
            ranking: 'Top Business University',
            website: 'www.kutb.kz',
            description: 'Specialized business university with strong finance and management programs. Excellent corporate partnerships.'
        },
        {
            name: 'Nazarbayev University',
            location: 'Nur-Sultan',
            established: 2010,
            specialization: 'Business, Economics, Finance',
            ranking: 'Elite University',
            website: 'www.nu.edu.kz',
            description: 'Top-tier university with international business curriculum and strong career outcomes.'
        },
        {
            name: 'Al-Farabi Kazakh National University',
            location: 'Almaty',
            established: 1934,
            specialization: 'Economics, Business, Management',
            ranking: 'Comprehensive University',
            website: 'www.kaznu.kz',
            description: 'Largest university with extensive business and economics departments. Strong academic tradition.'
        }
    ],
    'Science': [
        {
            name: 'Nazarbayev University',
            location: 'Nur-Sultan',
            established: 2010,
            specialization: 'Research, Science, Engineering',
            ranking: 'Leading Research University',
            website: 'www.nu.edu.kz',
            description: 'World-class research institution with state-of-the-art laboratories and research centers.'
        },
        {
            name: 'Al-Farabi Kazakh National University',
            location: 'Almaty',
            established: 1934,
            specialization: 'Physics, Chemistry, Biology, Mathematics',
            ranking: 'Comprehensive Research University',
            website: 'www.kaznu.kz',
            description: 'Extensive science programs with research opportunities. Well-established in natural sciences.'
        },
        {
            name: 'Eurasian National University (L.N. Gumilyov)',
            location: 'Nur-Sultan',
            established: 1996,
            specialization: 'Natural Sciences, Research',
            ranking: 'Research Institution',
            website: 'www.enu.kz',
            description: 'Strong research focus with laboratories and scientific facilities for advanced research.'
        }
    ],
    'Default': [
        {
            name: 'Nazarbayev University',
            location: 'Nur-Sultan',
            established: 2010,
            specialization: 'Multiple Disciplines',
            ranking: 'Top University in Kazakhstan',
            website: 'www.nu.edu.kz',
            description: 'Elite research university offering comprehensive programs across multiple disciplines.'
        },
        {
            name: 'Al-Farabi Kazakh National University',
            location: 'Almaty',
            established: 1934,
            specialization: 'Multiple Disciplines',
            ranking: 'Oldest & Largest',
            website: 'www.kaznu.kz',
            description: 'Largest and oldest university with programs across all major fields of study.'
        },
        {
            name: 'Eurasian National University (L.N. Gumilyov)',
            location: 'Nur-Sultan',
            established: 1996,
            specialization: 'Multiple Disciplines',
            ranking: 'Leading Institution',
            website: 'www.enu.kz',
            description: 'Comprehensive university with strong academic programs and research opportunities.'
        }
    ]
};

/* ============================================
   GLOBAL UNIVERSITIES DATABASE
   ============================================ */

const globalUniversities = {
    'Asia': {
        'Kazakhstan': [
            { name: 'Nazarbayev University', city: 'Nur-Sultan', rank: '1st in Kazakhstan', specialization: 'Engineering, IT, Business', website: 'nu.edu.kz', country: 'Kazakhstan' },
            { name: 'Kazakh-British Technical University (KBTU)', city: 'Almaty', rank: 'Top Technical', specialization: 'IT, Engineering', website: 'kbtu.kz', country: 'Kazakhstan' },
            { name: 'Al-Farabi Kazakh National University', city: 'Almaty', rank: 'Largest University', specialization: 'Multiple Disciplines', website: 'kaznu.kz', country: 'Kazakhstan' }
        ],
        'Japan': [
            { name: 'Tokyo University', city: 'Tokyo', rank: 'Top University in Japan', specialization: 'Engineering, Science', website: 'u-tokyo.ac.jp', country: 'Japan' },
            { name: 'Kyoto University', city: 'Kyoto', rank: 'Leading Research University', specialization: 'Science, Technology', website: 'kyoto-u.ac.jp', country: 'Japan' },
            { name: 'Osaka University', city: 'Osaka', rank: 'Top Tech University', specialization: 'Engineering, IT', website: 'osaka-u.ac.jp', country: 'Japan' }
        ],
        'China': [
            { name: 'Tsinghua University', city: 'Beijing', rank: 'Top University in China', specialization: 'Engineering, Technology', website: 'tsinghua.edu.cn', country: 'China' },
            { name: 'Peking University', city: 'Beijing', rank: 'Leading Research University', specialization: 'Multiple Disciplines', website: 'pku.edu.cn', country: 'China' },
            { name: 'Fudan University', city: 'Shanghai', rank: 'Top University', specialization: 'Business, Science', website: 'fudan.edu.cn', country: 'China' }
        ],
        'India': [
            { name: 'Indian Institute of Technology (IIT Bombay)', city: 'Mumbai', rank: 'Premier Tech Institute', specialization: 'Engineering, IT', website: 'iitb.ac.in', country: 'India' },
            { name: 'Indian Institute of Technology (IIT Delhi)', city: 'Delhi', rank: 'Top Engineering', specialization: 'Engineering', website: 'iitd.ac.in', country: 'India' },
            { name: 'Delhi University', city: 'Delhi', rank: 'Leading University', specialization: 'Multiple Disciplines', website: 'du.ac.in', country: 'India' }
        ],
        'Singapore': [
            { name: 'National University of Singapore (NUS)', city: 'Singapore', rank: 'Top Asia University', specialization: 'Engineering, Business', website: 'nus.edu.sg', country: 'Singapore' },
            { name: 'Nanyang Technological University (NTU)', city: 'Singapore', rank: 'Leading Tech University', specialization: 'Engineering, Technology', website: 'ntu.edu.sg', country: 'Singapore' },
            { name: 'Singapore University of Technology and Design', city: 'Singapore', rank: 'Innovative University', specialization: 'Technology, Design', website: 'sutd.edu.sg', country: 'Singapore' }
        ],
        'South Korea': [
            { name: 'Seoul National University', city: 'Seoul', rank: 'Top University in Korea', specialization: 'Engineering, Science', website: 'snu.ac.kr', country: 'South Korea' },
            { name: 'Korea Advanced Institute of Science and Technology (KAIST)', city: 'Daejeon', rank: 'Premier Tech University', specialization: 'Engineering, IT', website: 'kaist.ac.kr', country: 'South Korea' },
            { name: 'Yonsei University', city: 'Seoul', rank: 'Leading University', specialization: 'Business, Engineering', website: 'yonsei.ac.kr', country: 'South Korea' }
        ]
    },
    'Europe': {
        'UK': [
            { name: 'University of Oxford', city: 'Oxford', rank: 'Top University in Europe', specialization: 'Multiple Disciplines', website: 'ox.ac.uk', country: 'UK' },
            { name: 'University of Cambridge', city: 'Cambridge', rank: 'Top University', specialization: 'Science, Engineering', website: 'cam.ac.uk', country: 'UK' },
            { name: 'Imperial College London', city: 'London', rank: 'Leading Tech University', specialization: 'Engineering, Science', website: 'imperial.ac.uk', country: 'UK' }
        ],
        'Germany': [
            { name: 'Technical University of Munich', city: 'Munich', rank: 'Top Tech University in Europe', specialization: 'Engineering, Technology', website: 'tum.de', country: 'Germany' },
            { name: 'Heidelberg University', city: 'Heidelberg', rank: 'Leading Research University', specialization: 'Science, Medicine', website: 'uni-heidelberg.de', country: 'Germany' },
            { name: 'Berlin Institute of Technology', city: 'Berlin', rank: 'Premier Tech University', specialization: 'Engineering, IT', website: 'tu-berlin.de', country: 'Germany' }
        ],
        'France': [
            { name: 'PSL University (Paris Sciences et Lettres)', city: 'Paris', rank: 'Leading French University', specialization: 'Science, Technology', website: 'psl.eu', country: 'France' },
            { name: 'Paris-Saclay University', city: 'Paris', rank: 'Top Engineering University', specialization: 'Engineering, Science', website: 'universite-paris-saclay.fr', country: 'France' },
            { name: 'Sorbonne University', city: 'Paris', rank: 'Historic Leading University', specialization: 'Multiple Disciplines', website: 'sorbonne-universite.fr', country: 'France' }
        ],
        'Netherlands': [
            { name: 'University of Amsterdam', city: 'Amsterdam', rank: 'Top University in Netherlands', specialization: 'Multiple Disciplines', website: 'uva.nl', country: 'Netherlands' },
            { name: 'Delft University of Technology', city: 'Delft', rank: 'Leading Tech University', specialization: 'Engineering, Technology', website: 'tudelft.nl', country: 'Netherlands' },
            { name: 'University of Utrecht', city: 'Utrecht', rank: 'Premier Research University', specialization: 'Science, Medicine', website: 'uu.nl', country: 'Netherlands' }
        ],
        'Switzerland': [
            { name: 'ETH Zurich', city: 'Zurich', rank: 'Top Tech University in Europe', specialization: 'Engineering, Science', website: 'ethz.ch', country: 'Switzerland' },
            { name: 'University of Zurich', city: 'Zurich', rank: 'Leading Research University', specialization: 'Multiple Disciplines', website: 'uzh.ch', country: 'Switzerland' },
            { name: 'University of Bern', city: 'Bern', rank: 'Premier University', specialization: 'Science, Technology', website: 'unibe.ch', country: 'Switzerland' }
        ]
    },
    'Americas': {
        'USA': [
            { name: 'Harvard University', city: 'Cambridge, MA', rank: 'Top University in World', specialization: 'Multiple Disciplines', website: 'harvard.edu', country: 'USA' },
            { name: 'Stanford University', city: 'Stanford, CA', rank: 'Top Tech University', specialization: 'Engineering, Technology', website: 'stanford.edu', country: 'USA' },
            { name: 'MIT (Massachusetts Institute of Technology)', city: 'Cambridge, MA', rank: 'Premier Tech University', specialization: 'Engineering, IT', website: 'mit.edu', country: 'USA' },
            { name: 'University of California Berkeley', city: 'Berkeley, CA', rank: 'Top Public University', specialization: 'Engineering, Science', website: 'berkeley.edu', country: 'USA' },
            { name: 'Yale University', city: 'New Haven, CT', rank: 'Ivy League University', specialization: 'Multiple Disciplines', website: 'yale.edu', country: 'USA' }
        ],
        'Canada': [
            { name: 'University of Toronto', city: 'Toronto', rank: 'Top University in Canada', specialization: 'Engineering, Medicine', website: 'utoronto.ca', country: 'Canada' },
            { name: 'University of British Columbia', city: 'Vancouver', rank: 'Leading Research University', specialization: 'Science, Engineering', website: 'ubc.ca', country: 'Canada' },
            { name: 'McGill University', city: 'Montreal', rank: 'Top Research University', specialization: 'Multiple Disciplines', website: 'mcgill.ca', country: 'Canada' }
        ],
        'Mexico': [
            { name: 'National Autonomous University of Mexico (UNAM)', city: 'Mexico City', rank: 'Top University in Latin America', specialization: 'Multiple Disciplines', website: 'unam.mx', country: 'Mexico' },
            { name: 'Monterrey Institute of Technology and Higher Education (ITESM)', city: 'Monterrey', rank: 'Leading Private University', specialization: 'Engineering, Business', website: 'itesm.mx', country: 'Mexico' },
            { name: 'Universidad Iberoamericana', city: 'Mexico City', rank: 'Premier Private University', specialization: 'Business, Engineering', website: 'ibero.mx', country: 'Mexico' }
        ],
        'Brazil': [
            { name: 'University of São Paulo (USP)', city: 'São Paulo', rank: 'Top University in Brazil', specialization: 'Multiple Disciplines', website: 'usp.br', country: 'Brazil' },
            { name: 'Brazilian Federal University (UFRJ)', city: 'Rio de Janeiro', rank: 'Leading Federal University', specialization: 'Engineering, Science', website: 'ufrj.br', country: 'Brazil' },
            { name: 'Campinas State University (UNICAMP)', city: 'Campinas', rank: 'Top Research University', specialization: 'Engineering, Technology', website: 'unicamp.br', country: 'Brazil' }
        ]
    }
};

/* ============================================
   PROFESSION MATCHING ALGORITHM
   ============================================ */

function findMatchingProfession(interest, skill, workStyle) {
    const matchKey = `${interest}-${skill}-${workStyle}`;
    
    if (professionDatabase[matchKey]) {
        return professionDatabase[matchKey];
    }
    
    // Fallback: Try with different work styles
    const altWorkStyles = [workStyle === 'Team' ? 'Independent' : 'Team', 'Both'];
    for (let altStyle of altWorkStyles) {
        const altKey = `${interest}-${skill}-${altStyle}`;
        if (professionDatabase[altKey]) {
            return professionDatabase[altKey];
        }
    }
    
    // Final fallback
    return professionDatabase['Technology-Problem-Solving-Team'] || {
        career: 'Professional',
        salary: '$60,000 - $100,000',
        growth: '+10% annually',
        description: 'A career matched to your interests and skills.'
    };
}

function calculateMatchScore(interest, skill, workStyle) {
    // Base score of 80, incremented by selections
    let score = 80;
    if (interest) score += 8;
    if (skill) score += 8;
    if (workStyle) score += 4;
    return Math.min(score, 100);
}

function getUniversityRecommendation(professionName) {
    // Get university based on profession name
    return kazakhstanUniversities[professionName] || kazakhstanUniversities['Software Developer'];
}

function getGlobalUniversityRecommendations(region, country, interest) {
    // If global selected, pick random region
    if (region === 'Global') {
        const regions = ['Asia', 'Europe', 'Americas'];
        region = regions[Math.floor(Math.random() * regions.length)];
    }

    // Get universities for the region
    const regionData = globalUniversities[region] || globalUniversities['Asia'];
    
    // If user specified a country, try to get universities from that country
    if (country && country !== 'Not specified') {
        // Try to find matching country (case insensitive)
        for (let countryKey in regionData) {
            if (countryKey.toLowerCase().includes(country.toLowerCase()) || country.toLowerCase().includes(countryKey.toLowerCase())) {
                return regionData[countryKey].slice(0, 3); // Return top 3
            }
        }
    }
    
    // Otherwise, get all universities from the region and pick top 3 varied countries
    let allUniversities = [];
    for (let countryKey in regionData) {
        allUniversities = allUniversities.concat(regionData[countryKey]);
    }
    
    // Return top 3, with preference for different countries
    const recommendations = [];
    const countriesUsed = new Set();
    
    for (let uni of allUniversities) {
        if (recommendations.length >= 3) break;
        if (!countriesUsed.has(uni.country)) {
            recommendations.push(uni);
            countriesUsed.add(uni.country);
        }
    }
    
    // If we still need more, add any universities
    for (let uni of allUniversities) {
        if (recommendations.length >= 3) break;
        if (!recommendations.includes(uni)) {
            recommendations.push(uni);
        }
    }
    
    return recommendations;
}

/* ============================================
   UNIVERSITY MATCHING ALGORITHM
   ============================================ */

function getMatchingUniversities(interest) {
    const universities = kazakhUniversities[interest] || kazakhUniversities['Default'];
    return universities.slice(0, 3); // Return top 3 recommendations
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const navDropdown = document.querySelector('.nav-dropdown');
    
    if (dropdownToggle && navDropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navDropdown.classList.toggle('active');
        });
        
        const dropdownLinks = navDropdown.querySelectorAll('.dropdown-menu a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', () => {
                navDropdown.classList.remove('active');
            });
        });
    }
    
    document.addEventListener('click', (e) => {
        if (navDropdown && !navDropdown.contains(e.target)) {
            navDropdown.classList.remove('active');
        }
    });
});

/* ============================================
   STEP NAVIGATION
   ============================================ */

function goToStep(step) {
    // Validate current step before allowing progression
    if (step > currentStep && !validateCurrentStep()) {
        return; // Don't proceed if validation fails
    }

    // Hide all steps
    document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
    document.getElementById('resultsSection').classList.remove('active');

    // Show selected step
    if (step <= totalSteps) {
        document.getElementById(`step${step}`).style.display = 'block';
        currentStep = step;
    }

    // Update progress bar
    updateProgressBar();

    // Scroll to top
    document.querySelector('.assessment-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function validateCurrentStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    let isValid = false;

    // Clear previous validation messages
    currentStepElement.querySelectorAll('.validation-error').forEach(el => el.remove());

    switch(currentStep) {
        case 1:
            // Check if at least one interest is selected
            const interestsSelected = currentStepElement.querySelector('input[name="interests"]:checked');
            if (!interestsSelected) {
                showValidationError(currentStepElement, 'Please select your main interests to continue.');
                return false;
            }
            // Check if at least one skill is selected
            const skillsSelected = currentStepElement.querySelector('input[name="skills"]:checked');
            if (!skillsSelected) {
                showValidationError(currentStepElement, 'Please select your strongest skill to continue.');
                return false;
            }
            // Check if work style is selected
            const workStyleSelected = currentStepElement.querySelector('input[name="workStyle"]:checked');
            if (!workStyleSelected) {
                showValidationError(currentStepElement, 'Please select your preferred work style to continue.');
                return false;
            }
            isValid = true;
            break;

        case 2:
            // Check if education type is selected
            const educationSelected = currentStepElement.querySelector('input[name="educationType"]:checked');
            if (!educationSelected) {
                showValidationError(currentStepElement, 'Please select your education path to continue.');
                return false;
            }
            // Check if budget is selected
            const budgetSelected = currentStepElement.querySelector('input[name="budget"]:checked');
            if (!budgetSelected) {
                showValidationError(currentStepElement, 'Please select your budget range to continue.');
                return false;
            }
            // Scholarship interest is optional, so no validation needed
            isValid = true;
            break;

        case 3:
            // Step 3 fields are optional, so always valid
            isValid = true;
            break;

        case 4:
            // Check if university region is selected
            const regionSelected = currentStepElement.querySelector('input[name="universityRegion"]:checked');
            if (!regionSelected) {
                showValidationError(currentStepElement, 'Please select a university region to continue.');
                return false;
            }
            // Language preference is optional
            isValid = true;
            break;
    }

    return isValid;
}

function showValidationError(stepElement, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'validation-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #dc2626;
        background-color: rgba(220, 38, 38, 0.1);
        border: 1px solid rgba(220, 38, 38, 0.2);
        border-radius: 8px;
        padding: 12px;
        margin-top: 15px;
        font-size: 0.95rem;
        text-align: center;
    `;

    // Insert error message after the button group
    const buttonGroup = stepElement.querySelector('.button-group');
    if (buttonGroup) {
        buttonGroup.insertAdjacentElement('afterend', errorDiv);
    } else {
        stepElement.appendChild(errorDiv);
    }

    // Scroll to error message
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updateProgressBar() {
    const progress = (currentStep / totalSteps) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

document.addEventListener('DOMContentLoaded', () => {
    updateProgressBar();
});

/* ============================================
   FORM SUBMISSION AND ANALYSIS
   ============================================ */

function submitAssessment() {
    // Get selected values from Step 1: Career Match
    const interest = document.querySelector('input[name="interests"]:checked')?.value || 'Technology';
    const skill = document.querySelector('input[name="skills"]:checked')?.value || 'Problem-Solving';
    const workStyle = document.querySelector('input[name="workStyle"]:checked')?.value || 'Team';
    const learningStyle = document.querySelector('input[name="learningStyle"]:checked')?.value || 'Visual';
    const workEnvironment = document.querySelector('input[name="workEnvironment"]:checked')?.value || 'Office';
    const salaryPriority = document.querySelector('input[name="salaryPriority"]:checked')?.value || 'Balanced';
    
    // Get selected values from Step 2: Funding
    const educationType = document.querySelector('input[name="educationType"]:checked')?.value || 'University';
    const budget = document.querySelector('input[name="budget"]:checked')?.value || '15000';
    const scholarshipInterest = document.querySelector('input[name="scholarshipInterest"]:checked')?.value || 'Yes';
    
    // Get selected values from Step 4: University Location
    const universityRegion = document.querySelector('input[name="universityRegion"]:checked')?.value || 'Asia';
    const universityCountry = document.getElementById('universityCountry').value || 'Not specified';
    const languagePreference = document.querySelector('input[name="languagePreference"]:checked')?.value || 'English';
    
    // Get optional info from Step 3: CV (NOT counted as answers)
    const fullName = document.getElementById('fullName').value || 'Student';
    const email = document.getElementById('email').value || 'your.email@example.com';
    const experience = document.getElementById('experience').value;
    const achievements = document.getElementById('achievements').value;
    
    // Find profession match based on interest + skill + workStyle
    const profession = findMatchingProfession(interest, skill, workStyle);
    const matchScore = calculateMatchScore(interest, skill, workStyle);
    
    // Find global universities based on region and country
    const universityRecommendations = getGlobalUniversityRecommendations(universityRegion, universityCountry, interest);
    
    // Calculate funding
    const educationCost = educationCosts[educationType] || 20000;
    const budgetAmount = budgetValues[budget] || 15000;
    const scholarshipAmount = scholarshipInterest === 'Yes' ? educationCost * 0.35 : educationCost * 0.15;
    const loanAmount = Math.max(educationCost - scholarshipAmount - budgetAmount, 0);
    
    // Display results
    displayResults({
        profession,
        matchScore,
        interest,
        skill,
        workStyle,
        learningStyle,
        workEnvironment,
        salaryPriority,
        educationType,
        educationCost,
        budgetAmount,
        scholarshipAmount,
        loanAmount,
        fullName,
        email,
        experience,
        achievements,
        universityRegion,
        universityCountry,
        languagePreference,
        universityRecommendations
    });
}

function displayResults(data) {
    // Hide form, show results
    document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
    document.getElementById('resultsSection').classList.add('active');
    
    // Populate career results
    document.getElementById('recommendedCareer').textContent = data.profession.career;
    document.getElementById('careerScore').textContent = data.matchScore;
    document.getElementById('careerDescription').textContent = `${data.profession.career} - Salary: ${data.profession.salary} (${data.profession.growth}). ${data.profession.description}`;
    
    // Populate funding results
    document.getElementById('totalCost').textContent = data.educationCost.toLocaleString();
    document.getElementById('scholarships').textContent = Math.round(data.scholarshipAmount).toLocaleString();
    document.getElementById('loans').textContent = Math.round(data.loanAmount).toLocaleString();
    document.getElementById('budget').textContent = data.budgetAmount.toLocaleString();
    
    // Populate global university recommendations
    const universitiesHTML = data.universityRecommendations.map((uni, index) => `
        <div style="margin-bottom: 15px; padding: 15px; background-color: rgba(99, 102, 241, 0.05); border-radius: 8px; border-left: 3px solid var(--primary-color);">
            <p><strong>${index + 1}. ${uni.name}</strong></p>
            <p><small>${uni.city}, ${uni.country}</small></p>
            <p><small><strong>Specialization:</strong> ${uni.specialization}</small></p>
            <p><small><strong>Ranking:</strong> ${uni.rank}</small></p>
            <a href="https://${uni.website}" target="_blank" class="btn btn-primary" style="display: inline-block; padding: 8px 15px; margin-top: 10px; font-size: 0.85rem; text-decoration: none; border-radius: 6px;">Visit Website</a>
        </div>
    `).join('');
    
    // Update or create universities section
    let universitiesSection = document.getElementById('universitiesRecommendation');
    if (!universitiesSection) {
        // Create universities section if it doesn't exist
        const careerResultCard = document.querySelector('.result-card');
        universitiesSection = document.createElement('div');
        universitiesSection.id = 'universitiesRecommendation';
        universitiesSection.className = 'result-card';
        careerResultCard.insertAdjacentElement('afterend', universitiesSection);
    }
    
    universitiesSection.innerHTML = `
        <h3>🎓 Recommended Universities in ${data.universityRegion}</h3>
        <p><small><strong>Region:</strong> ${data.universityRegion} | <strong>Language Preference:</strong> ${data.languagePreference}</small></p>
        ${universitiesHTML}
    `;
    
    // Populate CV preview
    document.getElementById('cvName').textContent = data.fullName;
    document.getElementById('cvEmail').textContent = data.email;
    document.getElementById('cvSkillsDisplay').textContent = `${data.skill}, Communication, Problem-Solving`;
    document.getElementById('cvExperienceDisplay').textContent = data.experience || 'Ready to build your experience.';
    
    // Store results globally for export
    window.assessmentResults = data;
    
    // Scroll to results
    document.querySelector('.assessment-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================
   EXPORT RESULTS TO WORD DOCUMENT
   ============================================ */

function downloadResults() {
    const data = window.assessmentResults;
    
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body {
                font-family: Calibri, Arial, sans-serif;
                max-width: 900px;
                margin: 0 auto;
                padding: 40px;
                color: #333;
                line-height: 1.6;
            }
            .header {
                background: linear-gradient(135deg, #6366f1, #ec4899);
                color: white;
                padding: 40px;
                border-radius: 10px;
                margin-bottom: 40px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 2.5em;
                font-weight: bold;
            }
            .header p {
                margin: 10px 0 0 0;
                font-size: 1.1em;
                opacity: 0.95;
            }
            .section {
                margin-bottom: 40px;
                page-break-inside: avoid;
            }
            .section-title {
                font-size: 1.4em;
                font-weight: bold;
                color: #6366f1;
                margin-bottom: 15px;
                border-bottom: 2px solid #ec4899;
                padding-bottom: 10px;
            }
            .content-box {
                background-color: #f8fafc;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #6366f1;
                margin-bottom: 15px;
            }
            .info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-bottom: 15px;
            }
            .info-item {
                background: white;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid #e2e8f0;
            }
            .info-label {
                font-weight: bold;
                color: #6366f1;
                margin-bottom: 5px;
            }
            .info-value {
                font-size: 1.1em;
                color: #333;
            }
            .resume-section {
                margin-bottom: 15px;
            }
            .resume-section h4 {
                font-weight: bold;
                color: #6366f1;
                margin: 10px 0 5px 0;
            }
            .resume-section p {
                margin: 0;
                padding-left: 20px;
                color: #555;
            }
            .footer {
                text-align: center;
                margin-top: 50px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
                color: #999;
                font-size: 0.9em;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>FutureForward Assessment</h1>
            <p>Your Personalized Career & Education Report</p>
        </div>

        <div class="section">
            <div class="section-title">🎯 Career Recommendation</div>
            <div class="content-box">
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Recommended Career</div>
                        <div class="info-value">${data.profession.career}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Career Match Score</div>
                        <div class="info-value">${data.matchScore}%</div>
                    </div>
                </div>
                <p><strong>About this career:</strong></p>
                <p>${data.profession.description}</p>
                <p><strong>Expected Salary:</strong> ${data.profession.salary}</p>
                <p><strong>Job Growth:</strong> ${data.profession.growth}</p>
            </div>
        </div>

        <div class="section">
            <div class="section-title">🎓 Recommended University (Kazakhstan)</div>
            <div class="content-box">
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">University</div>
                        <div class="info-value">${data.university.university}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Location</div>
                        <div class="info-value">${data.university.city}</div>
                    </div>
                </div>
                <p><strong>Specialization:</strong> ${data.university.specialization}</p>
                <p><strong>Ranking:</strong> ${data.university.rank}</p>
                <p style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
                    <strong>Find on Maps:</strong><br>
                    • 2GIS: https://2gis.kz<br>
                    • Google Maps: https://maps.google.com
                </p>
            </div>
        </div>

        <div class="section">
            <div class="section-title">💰 Education & Funding Plan</div>
            <div class="content-box">
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Education Type</div>
                        <div class="info-value">${data.educationType}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Annual Cost</div>
                        <div class="info-value">$${data.educationCost.toLocaleString()}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Your Budget</div>
                        <div class="info-value">$${data.budgetAmount.toLocaleString()}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Available Scholarships</div>
                        <div class="info-value">$${Math.round(data.scholarshipAmount).toLocaleString()}</div>
                    </div>
                </div>
                <p><strong>Estimated Loans Needed:</strong> $${Math.round(data.loanAmount).toLocaleString()}</p>
            </div>
        </div>

        <div class="section">
            <div class="section-title">📋 Your Professional Profile</div>
            <div class="content-box">
                <div class="resume-section">
                    <h4>Name</h4>
                    <p>${data.fullName}</p>
                </div>
                <div class="resume-section">
                    <h4>Contact</h4>
                    <p>${data.email}</p>
                </div>
                <div class="resume-section">
                    <h4>Core Skills</h4>
                    <p>${data.skill}, Communication, Problem-Solving</p>
                </div>
                ${data.experience ? `
                <div class="resume-section">
                    <h4>Experience & Projects</h4>
                    <p>${data.experience}</p>
                </div>
                ` : ''}
                ${data.achievements ? `
                <div class="resume-section">
                    <h4>Key Achievements</h4>
                    <p>${data.achievements}</p>
                </div>
                ` : ''}
            </div>
        </div>

        <div class="footer">
            <p>Generated by FutureForward on ${new Date().toLocaleDateString()}</p>
            <p>This report is based on your assessment answers. Best of luck with your future!</p>
        </div>
    </body>
    </html>
    `;

    // Create and download Word document
    const blob = new Blob([html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `FutureForward_Assessment_${new Date().getTime()}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function startOver() {
    // Reset all forms
    document.getElementById('careerForm').reset();
    document.getElementById('fundingForm').reset();
    document.getElementById('cvForm').reset();
    
    // Go back to step 1
    goToStep(1);
}

/* ============================================
   INITIALIZE APP
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the first step
    goToStep(1);
    
    // Setup dropdown menu
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const navDropdown = document.querySelector('.nav-dropdown');
    
    if (dropdownToggle && navDropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navDropdown.classList.toggle('active');
        });
        
        const dropdownLinks = navDropdown.querySelectorAll('.dropdown-menu a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', () => {
                navDropdown.classList.remove('active');
            });
        });
    }
    
    document.addEventListener('click', (e) => {
        if (navDropdown && !navDropdown.contains(e.target)) {
            navDropdown.classList.remove('active');
        }
    });
});

console.log('FutureForward Assessment App Ready ✨');
