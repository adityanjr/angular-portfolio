export interface Project {
  title: string;
  image: string;
  description: string;
  tools: string[];
  github: string;
  link: string;
}
export const projects = [
  {
    title: 'Apni Dukaan',
    image: '../../assets/images/apni-dukaan.webp',
    description:
      'Full featured e-commerce store built with React, Firebase and Stripe payments API, sign-in and storage sessions',
    tools: ['React', 'Redux', 'Firebase'],
    github: 'https://github.com/adityanjr/apni-dukaan',
    link: 'https://dukaan-live.herokuapp.com/',
  },
  {
    title: 'Covid-19 Tracker',
    image: '../../assets/images/covid.webp',
    description:
      'Tracking the impact of COVID-19 cases based on your location, built in Flutter.',
    tools: ['Flutter', 'API'],
    github: 'https://github.com/adityanjr/covid19-tracker',
    link: 'https://adityanjr.github.io/covid-tracker-web/#/',
  },
  {
    title: 'NASA Mission Control',
    image: '../../assets/images/nasa.webp',
    description:
      'Mission Scheduling to confirmed planets and tracks history of mission launches data.',
    tools: ['Deno', 'Typescipt', 'API'],
    github: 'https://github.com/adityanjr/nasa-deno',
    link: 'https://deno.land/',
  },
  {
    title: 'Blog for Portfolio',
    image: '../../assets/images/blog.webp',
    description:
      'Blog made for Portfolio with GraphQL, Gatsby and headless CMS (GraphCMS)',
    tools: ['GraphQL', 'ReactJS', 'TailwindCSS'],
    github: 'https://github.com/adityanjr/portfolio',
    link: 'https://blog-adityanjr.netlify.app/',
  },
];
