import React from "react";
import { ProductGrid } from "../../components/shared/ProductGrid";
import logo from '../../img/whiteforest.jpeg';

export interface Product {
  title: string,
  imgSrc: string,
  alt: string,
  price: Number,
  description: string
}

export const Products = () => {
  var products: Product[] = [
    {
      title: "Whiteforest Cake",
      imgSrc: logo,
      alt: "cake",
      price: 20,
      description: `Three layers of vanilla sponge cake with vanilla flavored whip cream and fresh berry filling in between.`
    }, {
      title: "Whiteforest Cake",
      imgSrc: logo,
      alt: "cake",
      price: 20,
      description: `Three layers of vanilla sponge cake with vanilla flavored whip cream and fresh berry filling in between.`
    }, {
      title: "Whiteforest Cake",
      imgSrc: logo,
      alt: "cake",
      price: 20,
      description: `Three layers of vanilla sponge cake with vanilla flavored whip cream and fresh berry filling in between.`
    }, {
      title: "Whiteforest Cake",
      imgSrc: logo,
      alt: "cake",
      price: 20,
      description: `Three layers of vanilla sponge cake with vanilla flavored whip cream and fresh berry filling in between.`
    }, {
      title: "Whiteforest Cake",
      imgSrc: logo,
      alt: "cake",
      price: 20,
      description: `Three layers of vanilla sponge cake with vanilla flavored whip cream and fresh berry filling in between.`
    }, {
      title: "Whiteforest Cake",
      imgSrc: logo,
      alt: "cake",
      price: 20,
      description: `Three layers of vanilla sponge cake with vanilla flavored whip cream and fresh berry filling in between.`
    }, {
      title: "Whiteforest Cake",
      imgSrc: logo,
      alt: "cake",
      price: 20,
      description: `Three layers of vanilla sponge cake with vanilla flavored whip cream and fresh berry filling in between.`
    },
  ]
  return (
    <main id="wrapper">
      <section>
        <ProductGrid products={products}></ProductGrid>
        <div className="load-more">
          <button className="btn btn-outline-pink-inverse">Load More...</button>
        </div>
      </section>
    </main>
  );
};
