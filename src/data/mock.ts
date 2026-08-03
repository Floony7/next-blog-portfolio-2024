import { nanoid } from 'nanoid';

export const tags = ['Next.js', 'React', 'TypeScript', 'Server Side Rendering', 'React Hooks', 'CSS'] as const;

export const userData = [
  { name: 'Name', value: 'Fred Lunjevich' },
  { name: 'From', value: 'Auckland, New Zealand' },
  { name: 'Residence', value: 'Birmingham, UK' },
  { name: 'Currently Learning', value: 'Nest.js API dev, Go, data structures and algorithms' },
  { name: 'Likes', value: 'Ice Hockey, Strength Training, Guitar, Conservation, Fantasy Premier League' }
] as const;

export const areas = [
            ["Frontend depth", "React, TypeScript, Next.js, Vue.js and accessibility."],
            ["Commercial context", "Ecommerce, CMS integrations and release workflows."],
            ["Soft skills", "Team player, excellent communicator, quick learner, problem solving."],
            ["Full-stack direction", "Node.js, Go, APIs, auth, databases and backend architecture."],
          ];

export const technicalExpertise = [
              "React",
              "TypeScript",
              "Next.js",
              "Headless commerce",
              "APIs",
              "Technical leadership",
            ];

export type Project = {
    id: string,
    shortName: string;
    img: string;
    title: string;
    subtitle: string;
    tech: string;
    description: string;
    paragraphs: readonly string[];
    url: string;
    repo: string;
    hasVideo: boolean;
    videoUrl?: string;
}

export const projectsData = [
    {
    id: nanoid(),
    shortName: 'movora',
    img: 'movora.png',
    title: 'Movora ecommerce and global site',
    subtitle: 'Lead Developer - multilanguage ecommerce platform and global websites',
    tech: 'React / TypeScript / Next.js / GraphQL / Big Commerce',
    description: 'Led development of a multi-region ecommerce platform serving US, Canada and Europe from a single Next.js codebase. Implemented advanced ecommerce functionality including discount validation, coupon application, persistent cart logic and customer certification-based purchasing controls. Included Vercel management.',
    // TODO: Add factual project details: team size, release scope, performance constraints, measurable outcomes and specific ownership boundaries.
    paragraphs: [
      'Movora is a global ecommerce platform for a leading manufacturer of motion capture gloves. The platform serves customers in the US, Canada and Europe from a single Next.js codebase, with multi-language support and region-specific content.',
      'I led the development of the platform, implementing advanced ecommerce functionality including discount validation, coupon application, persistent cart logic and customer certification-based purchasing controls.',
      'The project involved close collaboration with the design team, as well as with the backend team to ensure seamless integration with the Big Commerce API.'
    ],
    url: 'https://movora.com/',
    repo: '',
    hasVideo: false
  },
  {
    id: nanoid(),
    shortName: 'hand-engine',
    img: 'hand-engine-focused.png',
    title: 'Hand Engine software',
    subtitle: 'Hand Engine motion capture glove software - StretchSense',
    tech: 'React / TypeScript / Redux / Bootstrap / RxJS / Node.js',
    description: 'Frontend development for a rebuild of StretchSense Hand Engine, including React and TypeScript UI work, Redux state implementation, info panels, feature windows and custom hand implementations with Three.js.',
    // TODO: Add factual project details: product context, exact frontend ownership, release impact, and any collaboration with backend or hardware teams.
    paragraphs: [
      'Hand Engine is a software application for configuring and calibrating motion capture gloves. It is used by customers to set up their gloves for motion capture, and to calibrate them for accurate tracking.',
      'I was responsible for the frontend development of the Hand Engine software, including implementing the UI in React and TypeScript, managing state with Redux, and integrating with the backend API.',
      'The project involved close collaboration with the backend team, as well as with hardware engineers to ensure that the software worked seamlessly with the gloves.'
    ],
    url: 'https://stretchsense.com/',
    repo: '',
    hasVideo: false
  },
  {
    id: nanoid(),
    shortName: 'hand-engine-smart-blend',
    img: 'smart-blend-ui.png',
    title: 'Hand Engine glove calibration UI',
    subtitle: 'Hand Engine glove calibration feature.',
    tech: 'React / TypeScript / Redux / Bootstrap / RxJS / Node.js',
    description: 'UI implementation for calibrating StretchSense Fidelity gloves. The revision of glove is established upon device connection, which switches the UI for calibration. This image shows the manual calibration for an older revision of StretchSense gloves.',
    // TODO: Add factual project details: calibration workflow constraints, state model decisions, user impact and validation approach.
    paragraphs: [
      'The Hand Engine software includes a calibration feature for StretchSense Fidelity gloves. The calibration process is essential for ensuring accurate motion capture data.',
      'I implemented the UI for the calibration feature, which involves detecting the glove revision upon device connection and switching the UI accordingly.',
      'The project required careful consideration of the calibration workflow, state management, and user experience to ensure that users could easily calibrate their gloves.'
    ],
    url: 'https://floony7.wistia.com/medias/07x2whfb3a',
    repo: '',
    hasVideo: false
  },
        {
    id: nanoid(),
    shortName: 'pip-and-kip',
    img: 'pip-and-kip.png',
    title: 'With Love from Pip and Kip',
    subtitle: 'One page promotional site in Astro',
    tech: 'Astro / TypeScript',
    description: 'Small Astro and TypeScript site for an independent craft business, built as a simple promotional layer around an Etsy store with room to expand as product lines grow.',
    // TODO: Add factual project details if this becomes a stronger product case study: content model, owner workflow, and expansion plans.
    paragraphs: [
      'With Love from Pip and Kip is a small promotional site for an independent craft business. The site was built using Astro and TypeScript, and serves as a simple promotional layer around the business\'s Etsy store.',
      'The project involved designing a clean and modern layout, implementing responsive design, and ensuring that the site was fast and accessible.',
      'The site is designed to be easily expandable as the business grows and adds new product lines.'
    ],
    url: 'https://pipandkip.com/',
    repo: 'https://github.com/Floony7/pip-and-kip-website',
    hasVideo: false
  },
  // {
  //   id: nanoid(),
  //   shortName: 'ecommerce-react',
  //   img: 'ecommerce-react-icestore.png',
  //   title: 'React ecommerce site (In Progress)',
  //   subtitle: 'Fullstack React application.',
  //   tech: 'React / Redux / Firebase / Styled Components / Stripe',
  //   description: 'Building a full ecommerce site with React.',
  //   paragraphOne: '',
  //   paragraphTwo: '',
  //   url: '',
  //   repo: 'https://github.com/Floony7/ecommerce-react',
  //   hasVideo: false
  // },
  {
    id: nanoid(),
    shortName: 'next-pokedex',
    img: 'next-pokedex.png',
    title: 'Pokedex: The Pokemon profile search app',
    subtitle: 'Find Pokemon with my version of the Pokedex.',
    tech: 'Next.js 14 / Radix UI Theme / Tailwind',
    description: 'Next.js 14 experiment using a public API to search Pokemon and render profile data, useful for practising App Router data fetching, UI composition and third-party API integration.',
    // TODO: Add factual project details: data fetching approach, error states, accessibility considerations and any testing added.
    paragraphs: [
      'This project is a Next.js 14 application that allows users to search for Pokemon and view their profile data. It uses a public API to fetch the data and renders it in a clean and modern UI.',
      'The project was built as an experiment to practice using the App Router for data fetching, composing UI components, and integrating with third-party APIs.',
      'The application includes error handling for failed API requests, and is designed to be accessible and responsive across different devices.'
    ],
    url: 'https://pokedex-unofficial.vercel.app/',
    repo: 'https://github.com/Floony7/pokemon-directory',
    hasVideo: false
  },
  // {
  //   id: nanoid(),
  //   shortName: 'jsanz-website',
  //   img: 'jsanz-website.png',
  //   title: 'Japanese Studies Aotearoa New Zealand',
  //   subtitle: 'Website developed with WordPress to give administrators more access and control of their content and increase outreach.',
  //   tech: 'WordPress / Bootstrap',
  //   description: 'Website designed and built for JSANZ — an advocacy network for Japanese language education and Japanese studies at tertiary level in Aotearoa New Zealand.',
  //   paragraphOne: '',
  //   paragraphTwo: '',
  //   url: 'https://jsanz.org/home/',
  //   repo: '',
  //   hasVideo: false
  // },
  // {
  //   id: nanoid(),
  //   shortName: 'gatsby-portfolio',
  //   img: 'gatsby-portfolio.png',
  //   title: 'Previous Portfolio',
  //   subtitle: 'My previous portfolio website',
  //   tech: 'Gatsby.js',
  //   description: 'Built in 2021 using Gatsby and vanilla JavaScript. I used this portfolio to experiment with some CSS background-blend-mode techniques. From a design perspective, I opted for the one page treatment, owing to the simplicity of the content and data.',
  //   paragraphOne: '',
  //   paragraphTwo: '',
  //   url: '',
  //   repo: 'https://github.com/Floony7/gatsby-portfolio',
  //   hasVideo: false
  // },
  {
    id: nanoid(),
    shortName: 'piko-cafe',
    img: 'piko.png',
    title: 'Piko Cafe',
    subtitle: 'Piko Cafe redesign and development. Student run cafe in the Faculty of Hospitality, Auckland University of Technology.',
    tech: 'HTML5 / CSS3 / jQuery',
    description: 'Earlier web design and development work for a student-run cafe, included for background rather than as a current technical focus.',
    // TODO: Add factual project details or consider moving older jQuery projects into a short "early work" section.
    paragraphs: [
      'Piko Cafe is a student-run cafe in the Faculty of Hospitality at Auckland University of Technology. I was involved in the redesign and development of their website, which was built using HTML5, CSS3, and jQuery.',
      'The project involved creating a modern and responsive design, implementing interactive features using jQuery, and ensuring that the site was accessible and user-friendly.',
      'While this project is not a current technical focus, it provided valuable experience in web design and development.'
    ],
    url: '',
    repo: '',
    hasVideo: false
  },  
  {
    id: nanoid(),
    shortName: 'four-seasons',
    img: 'fourseasons.png',
    title: 'Four Seasons Restuarant',
    subtitle: 'Web development for student run restaurant in the Faculty of Hospitality, Auckland University of Technology.',
    tech: 'HTML5 / CSS3 / jQuery',
    description: 'Earlier HTML, CSS and jQuery site work for a student-run restaurant, useful context for the long-term web background but secondary to current React and Next.js work.',
    // TODO: Add factual project details or consider moving older jQuery projects into a short "early work" section.
    paragraphs: [
      'Four Seasons Restaurant is a student-run restaurant in the Faculty of Hospitality at Auckland University of Technology. I was involved in the web development for their website, which was built using HTML5, CSS3, and jQuery.',
      'The project involved creating a visually appealing design, implementing interactive features using jQuery, and ensuring that the site was responsive and user-friendly.',
      'While this project is not a current technical focus, it provided valuable experience in web development and design.'
    ],
    url: '',
    repo: '',
    hasVideo: false
  },
] as const;
