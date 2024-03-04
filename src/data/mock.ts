import { nanoid } from 'nanoid';

interface UserDataItem {
  name: string;
  value: string;
}

export const userData: UserDataItem[] = [
  { name: 'From', value: 'Auckland, New Zealand' },
  { name: 'Residence', value: 'Birmingham, UK' },
  { name: 'Currently Learning', value: 'New React hooks, Next.js revalidation + caching, brushing up on GraphQL' },
  { name: 'Likes', value: 'Ice Hockey, Kettlebells, Calisthenics, Guitar, Language Learning' }
];
export interface Project {
    id: string;
    img: string;
    title: string;
    subtitle?: string;
    description: string;
    url: string;
    repo: string;
}

export const projectsData: Project[] = [
  {
    id: nanoid(),
    img: 'hand-engine-focused.png',
    title: 'Hand Engine software',
    subtitle: 'Hand Engine motion capture glove software - StretchSense.',
    description: 'UX and UI design and development, Redux state implementation, creation of info panels, features, windows, custom hand implementations (Three.js).',
    url: 'https://stretchsense.com/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'smart-blend-ui.png',
    title: 'Hand Engine glove calibration UI',
    subtitle: 'Hand Engine motion capture glove software - StretchSense.',
    description: 'UI implementation for calibrating StretchSense Fidelity gloves. The revision of glove is established upon device connection, which switches the UI for calibration. This image shows the manual calibration for an older revision of StretchSense gloves.',
    url: 'https://floony7.wistia.com/medias/07x2whfb3a',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'ecommerce-react-icestore.png',
    title: 'React ecommerce site',
    subtitle: 'React / Redux / Firebase / Styled Components / Stripe',
    description: 'In Progress...',
    url: '',
    repo: 'https://github.com/Floony7/ecommerce-react',
  },
  {
    id: nanoid(),
    img: 'gatsby-portfolio.png',
    title: 'Previous Portfolio',
    subtitle: '',
    description: 'Built in 2021 using Gatsby and vanilla JavaScript. I used this portfolio to experiment with some CSS background-blend-mode techniques. From a design perspective, I topted for the one page treatment, owing to the simplicity of the content and data.',
    url: '',
    repo: 'https://github.com/Floony7/gatsby-portfolio',
  },
  // {
  //   id: nanoid(),
  //   img: 'periodic.jpg',
  //   title: 'React Periodic Table app',
  //   subtitle: 'Project that uses React and spedifically the Context API to produce a visualisation of the elements of the Periodic Table. Previously, this project used a  third-party API, however I created a new API with Node.js for the purposes of owning the data and persisting it as long as I liked.',
  //   description: '',
  //   url: "",
  //   repo: 'https://github.com/Floony7/periodic-table-app-react-context',
  // },
  // {
  //   id: nanoid(),
  //   img: 'countries.jpg',
  //   title: 'React Countries app',
  //   subtitle: 'Using a countries API to pull data through on countries and the regions they are situated. Uses React Context API and React Router to display country pages.',
  //   description: '',
  //   url: "",
  //   repo: 'https://github.com/Floony7/react-countries-reference-app',
  // },
  {
    id: nanoid(),
    img: 'piko.png',
    title: 'Piko Cafe',
    subtitle: 'Piko Cafe redesign and development. Student run cafe in the Faculty of Hospitality, Auckland University of Technology.',
    description: '',
    url: '',
    repo: '',
  },  {
    id: nanoid(),
    img: 'fourseasons.png',
    title: 'Four Seasons Restuarant',
    subtitle: 'Web development for student run restaurant in the Faculty of Hospitality, Auckland University of Technology.',
    description: '',
    url: '',
    repo: '',
  },
];