import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";
import useStyle from "./style";

const products = [
  {
    id: 1,
    name: "Shoes",
    descrption: "Running shoes",
    price: "$50",
    image:
      "https://d1af89beukha9h.cloudfront.net/wp-content/uploads/2018/10/shoe-companies.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    descrption: "Apple MAcbook",
    price: "$10",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000",
  },
  {
    id: 3,
    name: "Headphones",
    descrption: "Apple MAcbook",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: 4,
    name: "Mobile",
    descrption: "Apple MAcbook",
    price: "$10",
    image:
      "https://waltonbd.com/image/catalog/new_website/landing-banner/landing-page-image-01.jpg",
  },
  {
    id: 5,
    name: "Guitar",
    descrption: "Apple MAcbook",
    price: "$10",
    image: "https://ruach-music.com/wp-content/uploads/2018/11/1-pw.jpg",
  },
  {
    id: 6,
    name: "Watch",
    descrption: "Apple MAcbook",
    price: "$10",
    image:
      "https://www.iwc.com/content/dam/homepage/ww-2021/IW503605_tile_1.717.jpg.transform.article_image_335_2x.jpeg",
  },
  {
    id: 7,
    name: "Camera",
    descrption: "Apple MAcbook",
    price: "$10",
    image:
      "https://i.pcmag.com/imagery/roundups/018cwxjHcVMwiaDIpTnZJ8H-23..1570842461.jpg",
  },
  {
    id: 8,
    name: "Jacket",
    descrption: "Apple MAcbook",
    price: "$10",
    image:
      "https://source.unsplash.com/random",
  },
];

const Products = () => {
  const classes = useStyle();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm6={6} sm={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
