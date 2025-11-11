import React from 'react';
import { Project, Experience, SocialLink } from './types';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Isshue22', icon: <GithubIcon /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/asish-bag-b6ba7a1b8', icon: <LinkedinIcon /> },
];

export const SKILLS = [
  'Python', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'SQL',
  'Scikit-learn', 'Machine Learning', 'Tableau', 'Big Data', 'SPSS',
  'Data Cleaning', 'Reporting', 'Predictive Modeling', 'AWS'
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Zomato Data Analysis',
    description: "Analyzed Zomato's restaurant dataset using Python and SQL to improve business decision efficiency, enhance reporting accuracy, and forecast customer preferences.",
    tags: ['Python', 'SQL', 'Data Analysis', 'Predictive Modeling'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveUrl: 'https://github.com/Isshue22/zomato-data-analysis',
    repoUrl: 'https://github.com/Isshue22/zomato-data-analysis',
  },
  {
    title: 'Flipkart Data Analysis Using Python',
    description: 'Performed cleaning, transformation, and analysis of Flipkart sales data using pandas and data visualization tools to identify sales patterns and trends.',
    tags: ['Python', 'Pandas', 'Data Visualization', 'Seaborn'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveUrl: 'https://github.com/Isshue22/flipkart-data-analysis',
    repoUrl: 'https://github.com/Isshue22/flipkart-data-analysis',
  },
  {
    title: 'Tic Tac Toe Game (Frontend Project)',
    description: 'Developed a responsive Tic Tac Toe game with HTML, CSS, JavaScript, featuring UI/UX design for win/draw logic and replay functionality.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: 'https://github.com/Isshue22/tic-tac-toe-game',
    repoUrl: 'https://github.com/Isshue22/tic-tac-toe-game',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
    {
    role: 'Classification Model Intern',
    company: 'TCS iON, Kolkata',
    period: 'Feb 2025 - Jun 2025',
    description: [
      'Developed cloud big data solutions, increasing processing speed by 40%.',
      'Led initiatives that improved client satisfaction scores by 90% annually.',
      'Built predictive models, amplifying sales by 25%.'
    ],
  },
    {
    role: 'Data Analytics Intern',
    company: 'TCS iON, Kolkata',
    period: 'Jan 2024 - Jan 2025',
    description: [
      'Built analytics strategies using SQL/Tableau, increasing reporting efficiency by 40%.',
      'Collaborated to launch 5 new services, boosting customer engagement by 25%.',
      'Improved team/product development by 30% through cross-functional initiatives.'
    ],
  },
  {
    role: 'Customer Support Executive',
    company: 'Globiva Pvt Ltd, Kolkata',
    period: 'Apr 2021 - Nov 2021',
    description: [
      'Optimized datasets and integrated new features, increasing data-driven decision making by 25%.',
      'Developed reporting tools that reduced support costs by 15%.',
      'Implemented best practices, improving customer response times by 20%.'
    ],
  },
];