const facultyDirectoryUrl = 'https://mituniversity.ac.in/academics/faculty/';
const leadershipUrl = 'https://mituniversity.ac.in/about-us/leadership/';
const civilEngineeringProjectUrl =
  'https://mituniversity.ac.in/news/mit-adt-university-partners-with-bentley-systems-launches-centre-of-excellence-for-infrastructure-innovation';

export const UNIVERSITY_DATA = {
  institution: 'MIT Art, Design and Technology University',
  campus: 'Vishwaraj Baug, Loni Kalbhor, Pune, Maharashtra',
  website: 'https://mituniversity.ac.in/',
  lastVerified: '2026-10-10',
  sources: [
    {
      label: 'Official faculty and schools directory',
      url: facultyDirectoryUrl,
      note: 'Published faculty groupings, unit names, and academic descriptions.'
    },
    {
      label: 'Official university leadership',
      url: leadershipUrl,
      note: 'Published leadership roles and names.'
    },
    {
      label: 'Civil Engineering and Bentley CoE announcement',
      url: civilEngineeringProjectUrl,
      note: 'Published project context, lead department, and named participants.'
    },
    {
      label: 'University profile',
      url: 'https://mituniversity.ac.in/about-us/',
      note: 'Institutional overview. Its stated constituent-school count differs from the unit list on the faculty directory.'
    }
  ],
  peopleDirectoryNotice:
    'The public university website does not provide a complete searchable directory of faculty, employees, students, expertise, or contact details. Only people and roles explicitly published on the cited pages are included.',
  structureNotice:
    'The faculty and school groupings below reproduce the official academics directory. They describe academic grouping, not individual reporting or supervisory relationships.',
  people: [
    {
      id: 'leader-founder',
      name: 'Dr. Vishwanath D. Karad',
      title: 'Founder and President',
      designation: 'Founder and President',
      department: 'University leadership',
      deptCode: 'LEADERSHIP',
      roleCategory: 'University leadership',
      reportsTo: null,
      expertise: [],
      bio: 'The official leadership page identifies Dr. Vishwanath D. Karad as Founder and President of MIT Art, Design and Technology University.',
      responsibilities: ['Founder and President of the University'],
      sourceUrl: leadershipUrl,
      projects: []
    },
    {
      id: 'leader-executive-president',
      name: 'Dr. Mangesh T. Karad',
      title: 'Executive President',
      designation: 'Executive President',
      department: 'University leadership',
      deptCode: 'LEADERSHIP',
      roleCategory: 'University leadership',
      reportsTo: null,
      expertise: [],
      bio: 'The official leadership page identifies Dr. Mangesh T. Karad as Executive President of MIT Art, Design and Technology University.',
      responsibilities: ['Executive President of the University'],
      sourceUrl: leadershipUrl,
      projects: ['project-bentley-coe']
    },
    {
      id: 'leader-vice-chancellor',
      name: 'Prof. Dr. Rajesh S.',
      title: 'Vice Chancellor',
      designation: 'Vice Chancellor',
      department: 'University leadership',
      deptCode: 'LEADERSHIP',
      roleCategory: 'University leadership',
      reportsTo: null,
      expertise: [],
      bio: 'The official leadership page identifies Prof. Dr. Rajesh S. as Vice Chancellor of MIT Art, Design and Technology University.',
      responsibilities: ['Vice Chancellor of the University'],
      sourceUrl: leadershipUrl,
      projects: ['project-bentley-coe']
    },
    {
      id: 'project-pro-vice-chancellor',
      name: 'Dr. Ramchandra Pujeri',
      title: 'Pro-Vice Chancellor',
      designation: 'Pro-Vice Chancellor',
      department: 'University leadership',
      deptCode: 'LEADERSHIP',
      roleCategory: 'University leadership',
      reportsTo: null,
      expertise: [],
      bio: 'The official Bentley Centre of Excellence announcement identifies Dr. Ramchandra Pujeri as Pro-Vice Chancellor and records his remarks on academia-industry collaboration in Civil Engineering.',
      responsibilities: ['Pro-Vice Chancellor', 'Welcomed participants at the Bentley Centre of Excellence inauguration'],
      sourceUrl: civilEngineeringProjectUrl,
      projects: ['project-bentley-coe']
    },
    {
      id: 'project-executive-director',
      name: 'Dr. Sunita Karad',
      title: 'Executive Director',
      designation: 'Executive Director',
      department: 'University leadership',
      deptCode: 'LEADERSHIP',
      roleCategory: 'University leadership',
      reportsTo: null,
      expertise: [],
      bio: 'The official Bentley Centre of Excellence announcement identifies Dr. Sunita Karad as Executive Director and records her remarks on innovation-driven education and industry engagement.',
      responsibilities: ['Executive Director', 'Addressed the Bentley Centre of Excellence inauguration'],
      sourceUrl: civilEngineeringProjectUrl,
      projects: ['project-bentley-coe']
    },
    {
      id: 'project-civil-hod',
      name: 'Dr. Yuvaraj Bhirud',
      title: 'Professor and Head, Department of Civil Engineering',
      designation: 'Professor and Head of Department',
      department: 'Department of Civil Engineering',
      deptCode: 'SOES',
      roleCategory: 'Faculty leadership',
      reportsTo: null,
      expertise: ['Civil Engineering', 'Digital infrastructure', 'Infrastructure innovation'],
      bio: 'The official Bentley Centre of Excellence announcement identifies Dr. Yuvaraj Bhirud as Professor and Head of the Department of Civil Engineering.',
      responsibilities: ['Professor and Head, Department of Civil Engineering'],
      sourceUrl: civilEngineeringProjectUrl,
      projects: ['project-bentley-coe']
    }
  ],
  faculties: [
    {
      id: 'arts-performing-arts',
      name: 'Faculty of Arts, Fine Arts and Performing Arts',
      responsibility: 'Brings together art, music, dance, filmmaking, and television programmes.',
      sourceUrl: facultyDirectoryUrl,
      schools: [
        {
          id: 'school-fine-arts',
          name: 'School of Fine Arts and Applied Arts',
          abbreviation: 'SOFA',
          responsibility: 'Fine arts and applied arts education.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-art-fine-art-and-performing-art/mit-school-of-fine-arts-&-applied-arts/'
        },
        {
          id: 'vishwashanti-sangeet-kala',
          name: 'Vishwashanti Sangeet Kala Academy',
          abbreviation: 'VSKA',
          responsibility: 'Music and performing arts programmes.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-art-fine-art-and-performing-art/mit-vishwashanti-sangeet-kala-academy/'
        }
      ]
    },
    {
      id: 'design',
      name: 'Faculty of Design',
      responsibility: 'Design education and research, delivered through the MIT Institute of Design.',
      sourceUrl: facultyDirectoryUrl,
      schools: [
        {
          id: 'institute-design',
          name: 'MIT Institute of Design',
          abbreviation: 'IOD',
          responsibility: 'Design education and research and training.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-design/mit-institute-of-design/'
        }
      ]
    },
    {
      id: 'architecture-planning',
      name: 'Faculty of Architecture and Planning',
      responsibility: 'Architectural education and training, innovative design, and sustainable planning.',
      sourceUrl: facultyDirectoryUrl,
      schools: [
        {
          id: 'school-architecture-planning',
          name: 'School of Architecture and Planning',
          abbreviation: 'SAP',
          responsibility: 'Architecture and planning education.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-design-and-architecture/mit-school-of-architecture/'
        }
      ]
    },
    {
      id: 'computer-science-it',
      name: 'Faculty of Computer Engineering and Information Technology',
      responsibility: 'Computing and artificial-intelligence education.',
      sourceUrl: facultyDirectoryUrl,
      schools: [
        {
          id: 'school-computing',
          name: 'MIT School of Computing',
          abbreviation: 'SOC',
          responsibility: 'Computing programmes and computer science education.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-engineering/school-of-computing/mit-school-of-computing/'
        },
        {
          id: 'school-artificial-intelligence',
          name: 'MIT School of Artificial Intelligence',
          abbreviation: 'SOAI',
          responsibility: 'Artificial-intelligence education and innovation.',
          sourceUrl: 'https://mituniversity.ac.in/MIT-SOAI/'
        }
      ]
    },
    {
      id: 'engineering-sciences',
      name: 'Faculty of Engineering and Sciences',
      responsibility: 'Engineering education with project-based learning, internships, entrepreneurship development, and interdisciplinary research.',
      sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-engineering-and-sciences/',
      schools: [
        {
          id: 'school-engineering-sciences',
          name: 'MIT School of Engineering and Sciences',
          abbreviation: 'SOES',
          responsibility: 'Engineering and science programmes, project-based learning, and interdisciplinary research.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-engineering/MIT-School-of-Engineering-and-Sciences/'
        }
      ]
    },
    {
      id: 'technology',
      name: 'Faculty of Technology',
      responsibility: 'Technology-focused education and research.',
      sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-technology/',
      schools: [
        {
          id: 'school-food-technology',
          name: 'MIT School of Food Technology',
          abbreviation: 'SOFT',
          responsibility: 'Food technology education.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-technology/mit-school-of-food-technology/'
        },
        {
          id: 'school-bioengineering',
          name: 'MIT School of Bio-Engineering Sciences and Research',
          abbreviation: 'SBSR',
          responsibility: 'Bio-engineering sciences and research.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-technology/mit-school-of-bio-engineering-sciences-and-research/'
        }
      ]
    },
    {
      id: 'maritime',
      name: 'Faculty of Maritime Studies',
      responsibility: 'Maritime education and training for seafaring careers.',
      sourceUrl: facultyDirectoryUrl,
      schools: [
        {
          id: 'manet',
          name: 'Maharashtra Academy of Naval Education and Training',
          abbreviation: 'MANET',
          responsibility: 'Naval and maritime education and training.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-maritime-studies/maharashtra-academy-of-naval-education-training/'
        }
      ]
    },
    {
      id: 'humanities-social-sciences',
      name: 'Faculty of Humanities and Social Sciences',
      responsibility: 'Humanities, social sciences, education, Vedic sciences, and civil-services preparation.',
      sourceUrl: facultyDirectoryUrl,
      schools: [
        {
          id: 'school-education-research',
          name: 'MIT School of Education and Research',
          abbreviation: 'SOER',
          responsibility: 'Education programmes and research.',
          sourceUrl: 'https://mituniversity.ac.in/soer/'
        },
        {
          id: 'school-vedic-sciences',
          name: 'MIT School of Vedic Sciences',
          abbreviation: 'SVS',
          responsibility: 'Vedic sciences education.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-humanities-and-social-sciences/mit-school-of-vedic-sciences/'
        },
        {
          id: 'school-humanities',
          name: 'MIT School of Humanities',
          abbreviation: 'SOH',
          responsibility: 'Humanities education.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-humanities-and-social-sciences/mit-school-of-humanities/'
        },
        {
          id: 'school-indian-civil-services',
          name: 'MIT School of Indian Civil Services',
          abbreviation: 'SICS',
          responsibility: 'Civil-services education and preparation.',
          sourceUrl: 'https://mitsics.edu.in/'
        }
      ]
    },
    {
      id: 'commerce-management',
      name: 'Faculty of Commerce, Management and Computer Applications',
      responsibility: 'Management education and sector-specific business and technology programmes.',
      sourceUrl: facultyDirectoryUrl,
      schools: [
        {
          id: 'school-business-computer-applications',
          name: 'School of Business and Computer Applications',
          abbreviation: 'SOB & CA',
          responsibility: 'Business and computer-application education, including leadership and entrepreneurship.',
          sourceUrl: 'https://mituniversity.ac.in/SOBCA/about'
        },
        {
          id: 'college-management-computer-applications',
          name: 'College of Management and Computer Applications',
          abbreviation: 'COM & CA',
          responsibility: 'Management and computer-application education.',
          sourceUrl: 'https://mituniversity.ac.in/COMCA/about'
        },
        {
          id: 'distance-online-education',
          name: 'Centre of Distance and Online Education',
          abbreviation: 'CDOE',
          responsibility: 'Distance and online education.',
          sourceUrl: 'https://mituniversity.ac.in/school-of-open-distance-learning/odl'
        }
      ]
    },
    {
      id: 'film-media',
      name: 'Faculty of Film and Media Studies',
      responsibility: 'Media education and training for the film and entertainment industries.',
      sourceUrl: facultyDirectoryUrl,
      schools: [
        {
          id: 'school-film-television',
          name: 'MIT School of Film and Television',
          abbreviation: 'SFT',
          responsibility: 'Film and television education.',
          sourceUrl: 'https://sft.mituniversity.ac.in/'
        },
        {
          id: 'school-drama',
          name: 'MIT School of Drama',
          abbreviation: 'SOD',
          responsibility: 'Drama and performing arts education.',
          sourceUrl: 'https://mituniversity.ac.in/Drama/'
        }
      ]
    },
    {
      id: 'law',
      name: 'Faculty of Law',
      responsibility: 'Legal education in an inclusive learning environment, preparing responsible legal professionals.',
      sourceUrl: facultyDirectoryUrl,
      schools: [
        {
          id: 'school-law',
          name: 'MIT School of Law',
          abbreviation: 'SOL',
          responsibility: 'Legal education and professional preparation.',
          sourceUrl: 'https://mituniversity.ac.in/academics/faculty/faculty-of-law/MIT-School-of-Law/'
        }
      ]
    }
  ],
  projects: [
    {
      id: 'project-bentley-coe',
      title: 'Centre of Excellence for Infrastructure Innovation',
      status: 'Launched; current operating status not stated',
      timeframe: 'Not stated on the announcement',
      agency: 'Bentley Systems',
      leadDept: 'Department of Civil Engineering · MIT School of Engineering and Sciences',
      owner: 'Department of Civil Engineering, under the School of Engineering and Sciences',
      ownerPersonId: null,
      description: 'A university-announced Centre of Excellence and Bentley Student Club intended to support digital infrastructure education, smart construction technologies, sustainable engineering, collaborative research, workshops, certifications, and training.',
      participants: [
        { personId: 'project-pro-vice-chancellor', role: 'Pro-Vice Chancellor; welcomed participants' },
        { personId: 'project-executive-director', role: 'Executive Director; addressed the inauguration' },
        { personId: 'project-civil-hod', role: 'Professor and Head, Department of Civil Engineering' },
        { personId: 'leader-executive-president', role: 'Executive President; named as providing guidance' },
        { personId: 'leader-vice-chancellor', role: 'Vice Chancellor; named as providing guidance' }
      ],
      ownershipNote: 'The announcement identifies the lead department and named participants, but does not name a project principal investigator or current operational owner.',
      sourceUrl: civilEngineeringProjectUrl
    }
  ]
};
