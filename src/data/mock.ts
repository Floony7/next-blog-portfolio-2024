import { nanoid } from 'nanoid';

export const tags = ['Next.js', 'React', 'TypeScript', 'Server Side Rendering', 'React Hooks', 'CSS'] as const;

export const userData = [
  { name: 'Name', value: 'Fred Lunjevich' },
  { name: 'From', value: 'Auckland, New Zealand' },
  { name: 'Residence', value: 'Birmingham, UK' },
  { name: 'Currently Learning', value: 'Nest.js API dev, Go, data structures and algorithms' },
  { name: 'Likes', value: 'Ice Hockey, Strength Training, Guitar, Conservation, Fantasy Premier League' }
] as const;

export type Project = {
    id: string,
    shortName: string;
    img: string;
    title: string;
    subtitle: string;
    tech: string;
    description: string;
    paragraphOne: string;
    paragraphTwo: string;
    url: string;
    repo: string;
    hasVideo: boolean;
    videoUrl?: string;
}

export const projectsData = [
  {
    id: nanoid(),
    shortName: 'hand-engine',
    img: 'hand-engine-focused.png',
    title: 'Hand Engine software',
    subtitle: 'Hand Engine motion capture glove software - StretchSense.',
    tech: 'React / TypeScript / Redux / Bootstrap / RxJS / Node.js',
    description: 'UX and UI design and development, Redux state implementation, creation of info panels, features, windows, custom hand implementations (Three.js).',
    paragraphOne: '',
    paragraphTwo: '',
    url: 'https://stretchsense.com/',
    repo: '',
    hasVideo: false
  },
  {
    id: nanoid(),
    shortName: 'hand-engine-smart-blend',
    img: 'smart-blend-ui.png',
    title: 'Hand Engine glove calibration UI',
    subtitle: 'An example Hand Engine feature including the UI and state that I built.',
    tech: 'React / TypeScript / Redux / Bootstrap / RxJS / Node.js',
    description: 'UI implementation for calibrating StretchSense Fidelity gloves. The revision of glove is established upon device connection, which switches the UI for calibration. This image shows the manual calibration for an older revision of StretchSense gloves.',
    paragraphOne: '',
    paragraphTwo: '',
    url: 'https://floony7.wistia.com/medias/07x2whfb3a',
    repo: '',
    hasVideo: false
  },
  {
    id: nanoid(),
    shortName: 'ecommerce-react',
    img: 'ecommerce-react-icestore.png',
    title: 'React ecommerce site (In Progress)',
    subtitle: 'Fullstack React application.',
    tech: 'React / Redux / Firebase / Styled Components / Stripe',
    description: 'Building a full ecommerce site with React.',
    paragraphOne: '',
    paragraphTwo: '',
    url: '',
    repo: 'https://github.com/Floony7/ecommerce-react',
    hasVideo: false
  },
  {
    id: nanoid(),
    shortName: 'next-pokedex',
    img: 'next-pokedex.png',
    title: 'Pokedex: The Pokemon profile search app',
    subtitle: 'Find Pokemon with my version of the Pokedex.',
    tech: 'Next.js 14 / Radix UI Theme / Tailwind',
    description: 'Reaching into the extensive Pokemon API with Next.js 14 to find Pokemon and view their stats / attributes.',
    paragraphOne: '',
    paragraphTwo: '',
    url: 'https://pokedex-unofficial.vercel.app/',
    repo: 'https://github.com/Floony7/pokemon-directory',
    hasVideo: false
  },
  {
    id: nanoid(),
    shortName: 'jsanz-website',
    img: 'jsanz-website.png',
    title: 'Japanese Studies Aotearoa New Zealand',
    subtitle: 'Website developed with WordPress to give administrators more access and control of their content and increase outreach.',
    tech: 'WordPress / Bootstrap',
    description: 'Website designed and built for JSANZ — an advocacy network for Japanese language education and Japanese studies at tertiary level in Aotearoa New Zealand.',
    paragraphOne: '',
    paragraphTwo: '',
    url: 'https://jsanz.org/home/',
    repo: '',
    hasVideo: false
  },
  {
    id: nanoid(),
    shortName: 'gatsby-portfolio',
    img: 'gatsby-portfolio.png',
    title: 'Previous Portfolio',
    subtitle: 'My previous portfolio website',
    tech: 'Gatsby.js',
    description: 'Built in 2021 using Gatsby and vanilla JavaScript. I used this portfolio to experiment with some CSS background-blend-mode techniques. From a design perspective, I opted for the one page treatment, owing to the simplicity of the content and data.',
    paragraphOne: '',
    paragraphTwo: '',
    url: '',
    repo: 'https://github.com/Floony7/gatsby-portfolio',
    hasVideo: false
  },
  {
    id: nanoid(),
    shortName: 'piko-cafe',
    img: 'piko.png',
    title: 'Piko Cafe',
    subtitle: 'Piko Cafe redesign and development. Student run cafe in the Faculty of Hospitality, Auckland University of Technology.',
    tech: 'HTML5 / CSS3 / jQuery',
    description: '',
    paragraphOne: '',
    paragraphTwo: '',
    url: '',
    repo: '',
    hasVideo: false
  },  {
    id: nanoid(),
    shortName: 'forur-seasons',
    img: 'fourseasons.png',
    title: 'Four Seasons Restuarant',
    subtitle: 'Web development for student run restaurant in the Faculty of Hospitality, Auckland University of Technology.',
    tech: 'HTML5 / CSS3 / jQuery',
    description: '',
    paragraphOne: '',
    paragraphTwo: '',
    url: '',
    repo: '',
    hasVideo: false
  },
] as const;