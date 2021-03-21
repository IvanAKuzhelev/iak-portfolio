import GatsbyIcon from "../images/dev-icons/gatsby.svg";
const STACK = {
  gatsby: {
    text: "Gatsby JS",
    url: "https://www.gatsbyjs.com/",
  },
  emotion: {
    text: "Emotion JS",
    url: "https://emotion.sh/docs/introduction",
  },
  netlifyForms: {
    text: "Netlify forms",
    url: "https://www.netlify.com/products/forms/",
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
      "Lucas ipsum dolor sit amet kyle myneyrsh bria qel-droma kal luminara hutt typho bail tatooine. Ugnaught finis atrivis jinn utapau dooku darth kal. Ken chiss taun solo. Yoda wharl lobot moff. Skywalker whiphid pavan neti mccool.",
    features: ["SSG", "dynamic slug", "Netlify forms", "flex & grid"],
    stack: [STACK.gatsby, "Emotion JS", "Netlify functions"],
    img: { src: GatsbyIcon, alt: "alt", title: "title" },
    sortLabels: [SORT_LABELS.featured, SORT_LABELS.react],
  },
  {
    name: "Box Server",
    description:
      "Organa sal-solo palpatine thisspias polis sith. Shimrra muzzer sal-solo lahara cerea tatooine asajj roos vulptereen.",
    features: [],
    stack: ["Gatsby JS", "Emotion JS", "Netlify functions"],
    img: { src: GatsbyIcon, alt: "alt", title: "title" },
    sortLabels: [SORT_LABELS.featured, SORT_LABELS.react, SORT_LABELS.threeD],
  },
  {
    name: "Calc",
    description:
      " Muun iego poggle rom fel finis orus. Alderaan san momaw antilles jabba darth. Ooryl var poggle bajic zorba neimoidian elomin. Auril taung melodie dooku. Corellia karrde leia raa.",
    features: [],
    stack: ["Gatsby JS", "Emotion JS", "Netlify functions"],
    img: { src: GatsbyIcon, alt: "alt", title: "title" },
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
