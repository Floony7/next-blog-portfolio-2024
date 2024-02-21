import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Fred Lunjevich | Web Developer',
  lang: 'en',
  description: 'Website of Kiwi developer Fred Lunjevich.',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Fred Lunjevich',
  subtitle: 'Web Dev | Birmingham, UK',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'fred.jpg',
  paragraphOne:
    'In August 2021, amidst yet another lockdown in New Zealand, I moved from Marketing to the Software Development team at motion capture glove company StretchSense.',
  paragraphTwo:
    'This was a momentous occasion for me, as I had spent the previous 5 years building my web development and React skills in my quest for a suitable dev opportunity. Fast forward to 2023, I am still at StretchSense, having been part of a software rebuild that has truly been the most incredible project I have ever worked on (no marketing project could ever come close!).',
  paragraphThree:
  'I have reignited my love of Next.js and enjoying the process of getting back into the Jamstack universe, having also worked with Gatsby over the years.',  
  // resume: // if no resume, the button will not show up
};
const inactive = "Inactive ";

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hand-engine-focused.png',
    title: 'Hand Engine software',
    info: 'Hand Engine motion capture glove software - StretchSense.',
    info2: 'UX and UI design and development, Redux state implementation, creation of info panels, features, windows, custom hand implementations (Three.js).',
    type: "PRIVATE",
    url: 'https://stretchsense.com/',
    repo: 'Proprietary Software',
  },
  {
    id: nanoid(),
    img: 'smart-blend-ui.png',
    title: 'Hand Engine glove calibration UI',
    info: 'Hand Engine motion capture glove software - StretchSense.',
    info2: 'UI implementation for calibrating StretchSense Fidelity gloves.',
    type: "PRIVATE",
    url: 'https://floony7.wistia.com/medias/07x2whfb3a',
    repo: 'Proprietary Software',
  },
  {
    id: nanoid(),
    img: 'periodic.jpg',
    title: 'React Periodic Table app',
    info: 'Project that uses React and spedifically the Context API to produce a visualisation of the elements of the Periodic Table. Previously, this project used a  third-party API, however I created a new API with Node.js for the purposes of owning the data and persisting it as long as I liked.',
    info2: '',
    type: "HAS_REPO",
    url: `${inactive}`,
    repo: 'https://github.com/Floony7/periodic-table-app-react-context',
  },
  {
    id: nanoid(),
    img: 'countries.jpg',
    title: 'React Countries app',
    info: 'Using a countries API to pull data through on countries and the regions they are situated. Uses React Context API and React Router to display country pages.',
    info2: '',
    type: "HAS_REPO",
    url: `${inactive}`,
    repo: 'https://github.com/Floony7/react-countries-reference-app',
  },
  {
    id: nanoid(),
    img: 'piko.png',
    title: 'Piko Cafe',
    info: 'Piko Cafe redesign and development. Student run cafe in the Faculty of Hospitality, Auckland University of Technology.',
    info2: '',
    type: "NO_REPO",
    url: `${inactive}`,
    repo: '',
  },  {
    id: nanoid(),
    img: 'fourseasons.png',
    title: 'Four Seasons Restuarant',
    info: 'Web development for student run restaurant in the Faculty of Hospitality, Auckland University of Technology.',
    info2: '',
    type: "NO_REPO",
    url: `${inactive}`,
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'floony7@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/fred-lunjevich-bbb66b43/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Floony7',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
