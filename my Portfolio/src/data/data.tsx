import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Niqedimos .`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm passionate  <strong className="text-stone-100">Full Stack Software Engineer</strong> actively seeking new opportunities 
        at <strong className="text-stone-100">Instant Domains</strong> web application Development, 
            and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        when am not coding, you can find me on the  <strong className="text-stone-100"> Soccer Field</strong>,
        enjoying the beautiful game exploring the great outdoors on <strong className="text-stone-100">My Bike</strong>{' '}
        <strong className="text-stone-100"></strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a results-driven Full Stack Software Engineer with a deep passion for
   turning creative ideas into functional and user-friendly applications. My journey in the
    world of technology has been nothing short of exhilarating, marked by a constant pursuit
     of innovation and the perfect balance between creativity and precision.`,
  aboutItems: [
    {label: 'Location', text: 'Fair Field, Iowa', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Eritrean', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Soccer, Bikking', Icon: SparklesIcon},
    {label: 'Study', text: 'Maharishi Internationa Univesity', Icon: AcademicCapIcon},
    {label: 'Employment', text: ' Looking for Ne Opportunity', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Tigrigna',
        level: 10,
      },
      {
        name: 'Amharic',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Spring Boot',
        level: 8,
      },
      {
        name: 'Python',
        level: 5,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Online Banking system',
    description: ' digital platform that allows customers to perform various financial transactions and banking activities over the internet. This system provides users with secure access to their bank accounts, enabling them to check account balances, transfer funds, pay bills, view transaction history, set up automatic payments, and more, all from the convenience of their computer or mobile device. Online banking systems have revolutionized the way people manage their finances, offering 24/7 access and enhancing the efficiency and convenience of banking services.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Core Banking System',
    description: 'Core Banking System.',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Treasury Management System',
    description: 'Treasury Management System.',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'ustomer Management System',
    description: 'Customer Management System.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'E-commerce System',
    description: '.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: '.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2022 - April 2025',
    location: 'Maharishi International University, Fair Feild, Iowa',
    title: 'Masters in Computer Science',
    content: <p>During my pursuit of a master's degree in computer science at
       Maharishi International University, I developed a strong foundation in 
       programming, data structures, and problem-solving skills. This education 
       fostered a passion for continuous learning and adaptability, which has played 
       a pivotal role in shaping my successful career.</p>,
  },
  {
    date: 'July 2013',
    location: 'Eritrea Institute Of Technology, Asmara, Eritrea',
    title: 'Bachelors in computer Science',
    content: <p>During my pursuit of a bachelor's degree in computer science
       at the Eritrea Institute of Technology, I established a robust foundation 
       in programming, data structures, and problem-solving skills. This education 
       sparked a strong enthusiasm for continuous learning and adaptability, which 
       has been pivotal in shaping my career path and achievements..</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2021 - June 2022',
    location: 'IPTECH, Juba, South Sudan',
    title: 'Software Engineer',
    content: (
      <p>
       In my role, I led the development of a centralized CRM system, implemented key 
       features leading to a 20% increase in sales leads, reduced customer support response 
       times by 30%, and streamlined development through microservices. I also improved 
       performance monitoring with Distributed Tracing, established CI/CD pipelines, enhanced 
       UI libraries, and developed a time-saving email scheduling script, saving over 10 hours
        weekly. I'm skilled in Git, GitHub, Azure DevOps, and AWS services, optimizing resource
         allocation and reducing infrastructure costs by 20% while maintaining system reliability.
      </p>
    ),
  },
  {
    date: 'Nov 2014 - Dec 2020',
    location: 'Housing and Commercial Bank Of Eritrea',
    title: 'Software Engineer',
    content: (
      <p>
        I have led the development and improvement of mission-critical enterprise software,
        driving substantial reductions in processing time and notable performance enhancements.
         My accomplishments include the implementation of microservices, asynchronous communication,
          and event-driven architecture, resulting in improved system responsiveness and reliability. 
          Leveraging distributed databases, caching solutions, and technologies like Apache Kafka has 
          optimized data management. Proficiency in unit testing, containerization, AWS services, 
          observability pipelines, Kubernetes, and Jenkins has streamlined operations, reduced downtime,
           and facilitated faster, more reliable software releases. My experience reflects a strong 
           command of modern technologies and a dedication to delivering tangible results.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'minalu Bantihun',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Nrajan Karki',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Hafteab Weldemariam',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'niqedimos.weldemariam@gmail.com',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Fair Field, Iowa,',
      href: 'https://www.google.com/maps/place/Maharishi+International+University/@41.018573,-91.9653883,15.85z/data=!4m6!3m5!1s0x87e666733021a1fd:0xbd109f9c0f5e4fce!8m2!3d41.0179095!4d-91.9673578!16zL20vMDFueTJw?entry=ttu',
    },
    {
      type: ContactType.LinkedIn,
      text: 'niqedimos weldemariam',
      href: 'https://www.linkedin.com/in/niqedimos-weldemariam/',
    },
    {
      type: ContactType.Github,
      text: 'niqedimosghe584@mail.com',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Niqedimos/'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: ''},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/niqedimos-weldemariam/'},
  {label: 'Instagram', Icon: InstagramIcon, href: ''},
  {label: 'Twitter', Icon: TwitterIcon, href: ''},
];
