import GatsbyIcon from "../../images/dev-icons/gatsby.svg";
const STACK = {
  gatsby: {
    text: "Gatsby JS",
    url: "https://www.gatsbyjs.com/",
  },
  emotion: {
    text: "Emotion JS",
    url: "https://emotion.sh/docs/introduction",
  },
  node: {
    text: "Node JS",
  },
  netlifyForms: {
    text: "Netlify forms",
    url: "https://www.netlify.com/products/forms/",
  },
  three: {
    text: "Three.js",
    url: "https://threejs.org/",
  },
  context: {
    text: "React Context",
  },
  js: {
    text: "JavaScript",
  },
  css: {
    text: "CSS",
  },
  html: {
    text: "HTML",
  },
};
const SORT_LABELS = {
  featured: "featured",
  react: "react",
  threeD: "threeD",
  node: "node",
  vanilla: "vanilla",
};
const PROJECTS_DATA = [
  {
    name: "this Portfolio",
    description:
      "Portfolio written in React/Gatsby. Some of the highlights are conditional sorting/rendering layout made with CSS grid and use of netlify forms.",
    features: [
      "SSG",
      "conditional rendering",
      "flexbox & grid",
      "Netlify forms",
    ],
    stack: [STACK.gatsby, STACK.emotion, STACK.netlifyForms],
    img: { src: GatsbyIcon, alt: "alt", title: "title" },
    github: "https://github.com/IvanAKuzhelev/iak-portfolio",
    live: "https://iak.codes/",
    sortLabels: [SORT_LABELS.featured, SORT_LABELS.react],
  },
  {
    name: "Box Server",
    description: `A box rendering with the Three.js BufferGeometry from the
                server-sent data in the Gatsby site. A user can change the
                dimensions of the box via the form which requests the new data.
                The server is a simple node app hosted on a Linux VM (NGINX, SSL, pm2).`,
    features: ["React Context", "BufferGeometry", "Buffer array upates"],
    stack: [STACK.three, STACK.gatsby, STACK.node],
    img: { src: GatsbyIcon, alt: "alt", title: "title" },
    github: "https://github.com/IvanAKuzhelev/box-server-fe",
    live: "https://3d-box.iak.codes/",
    sortLabels: [
      SORT_LABELS.featured,
      SORT_LABELS.react,
      SORT_LABELS.threeD,
      SORT_LABELS.node,
    ],
  },
  {
    name: "iOS-style calculator",
    description:
      "Simple calculator making use of JS event bubbling and CSS Flexbox",
    features: ["CSS flexBox", "Event bubbling"],
    stack: [STACK.js, STACK.css, STACK.html],
    img: { src: GatsbyIcon, alt: "alt", title: "title" },
    github: "https://github.com/IvanAKuzhelev/calc",
    live: "https://ivanakuzhelev.github.io/calc/",
    sortLabels: [SORT_LABELS.featured, SORT_LABELS.vanilla],
  },
  {
    name: "",
    description: "",
    features: [],
    stack: ["Gatsby JS", "Emotion JS", "Netlify functions"],
    img: { src: GatsbyIcon, alt: "alt", title: "title" },
    sortLabels: [],
  },
];
export { SORT_LABELS };
export default PROJECTS_DATA;
