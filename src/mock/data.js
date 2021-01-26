import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'David Leiva - UX / UI / FrontEnd', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "About me - Portfolio - David Leiva's Portfolio - made with Gatsby Simplefolio",
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm ",
  name: 'David Leiva',
  subtitle: "I'm a FE Developer - UX Designer.",
  paragraph: "Here you can see what I've been up to lately.",
  cta: 'See my Portfolio',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I began my professional career with the clear intention of working in the world of web and app interfaces, studying a degree in multimedia design at a private university (ESAT) attached to a foreign university (Northumbria, Newcastle), acquiring the necessary knowledge to start my career as a web designer, but also the foundations that every designer should have.",
  paragraphTwo: "With my first job I discovered that programming appealed a lot to me, so I did a master's degree at the Center for Computer Studies (CEI) in web programming using mainly Javascript, CSS, HTML and PHP, with the clear intention to become a FE Developer.",
  paragraphThree: "Honestly, in the short term future I see myself both as a person who provides a total vision on how a product should behave (Product - UX - UI Designer) and also defining how the technical requirements should be implemented correctly (FE Dev).",
  paragraphFour:  "That is why I currently complement my continuous learning as a FE developer with a master's degree in UX and CRO to finish consolidating my knowledge in user experience, to be able to apply for job offers where I can provide a total vision about the product.",
  resume: 'https://www.linkedin.com/in/davidleiva-fe/', // if no resume, the button will not show up TODO:
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'landbot.png',
    title: 'Landbot - FE Dev',
    info: 'React · Redux · Styled Components · Design System · Figma, Sketch, Zeplin, Adobe XD, Illustrator ·  CI · Sass · Bulma · BluePrint · WebPack · Vanilla JS',
    info2: 'Landbot is a multiplatform chatbot builder, its developed under React and Python, using Firebase and several modern technologies.',
    date: 'August 2019 - Current Position',
    url: 'https://landbot.io/',
    repo: null, // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Netcentric.jpeg',
    title: 'Netcentric - FE Dev - UX / UI Designer',
    info: 'Custom Vanilla Javascript implementation for Adobe AEM (Java) · React · UX Auditories for internal Projects · UI Implementation based on hypothesis',
    info2: 'Netcentric is a software consultancy based on Adobe AEM Marketing Tools. I worked mainly for BBVA as a client doing front-end but I also participated as a UX / UI Developer for several internal projects.',
    date: 'March 2018 - August 2019',
    url: 'https://www.netcentric.biz/',
    repo: null, // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Cliventa.jpg',
    title: 'Cliventa',
    info: 'Vanilla Javascript with Laravel (PHP) · Moving to VUE · UX Auditories and Research · UI · Branding · Sketch, Zeplin, Illustrator ·',
    info2: 'Cliventa was a competitor of Housfy and Housell, a real state platform connecting directly sellers with buyers.',
    date: 'January 2018 - March 2018',
    url: 'https://www.linkedin.com/company/cliventa/',
    repo: null, // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'About+Induct.jpg',
    title: 'Induct',
    info: 'Angular 4 · Typescript · C# · ASP.NET · UX / UI · Mysql',
    info2: "Induct is a web platform focused on open innovation management based on the partial reuse and extension of the company's current product. This platform is conceived as Software as a Service in which the access and consumption of certain features are contracted through a subscription model and the rest of the functions are free",
    date: 'March 2018 - August 2019',
    url: 'http://www.inductsoftware.com/es/inicio',
    repo: null, // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'davidleivaherrero@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/davidleiva-fe/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/davidleiva',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
