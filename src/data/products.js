import generateID from "~/helpers/generateID";
import { getCategoryBySlug } from "~/helpers/categories";

export default [
  {
    id: generateID(),
    slug: "adidas-F33527",
    name: "ClimaCool Golf Shoes F33527",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis neque quis erat scelerisque, at mollis ante facilisis. 
        Nam semper ipsum vel dolor faucibus iaculis. Morbi tristique ipsum a molestie hendrerit. Phasellus et arcu erat. 
        Nullam sit amet metus lectus. Nam placerat est sit amet sem fringilla, sit amet egestas tellus fermentum. 
        Ut sit amet rutrum diam, nec varius metus. Proin iaculis vel nunc vitae sollicitudin. Nulla euismod ipsum sed enim fermentum,
        ac porttitor arcu dapibus.`,
    brand: "adidas",
    category: getCategoryBySlug("shoes").id,
    price: 50,
    stock: 5,
    images: {
      thumbnail: require("~/images/products/F33527/thumbnail.png").default,
      main: require("~/images/products/F33527/main.png").default,
    },
  },
  {
    id: generateID(),
    slug: "jw-winter-jacket",
    name: "Outdoor Winter Jacket",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis neque quis erat scelerisque, at mollis ante facilisis. 
        Nam semper ipsum vel dolor faucibus iaculis. Morbi tristique ipsum a molestie hendrerit. Phasellus et arcu erat. 
        Nullam sit amet metus lectus. Nam placerat est sit amet sem fringilla, sit amet egestas tellus fermentum. 
        Ut sit amet rutrum diam, nec varius metus. Proin iaculis vel nunc vitae sollicitudin. Nulla euismod ipsum sed enim fermentum,
        ac porttitor arcu dapibus.`,
    brand: "jack wolfskin",
    category: getCategoryBySlug("jacket").id,
    price: 100,
    stock: 3,
    images: {
      thumbnail: require("~/images/products/JWCOAT/thumbnail.png").default,
      main: require("~/images/products/JWCOAT/main.png").default,
    },
  },
];
