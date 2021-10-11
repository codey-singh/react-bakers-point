import React from "react";

export const Products = () => {
  return (
    <main id="wrapper">
      <section>
        <div className="grid3">
          <div>
            <h2>Whiteforest Cake</h2>
            <img src="img/whiteforest.jpeg" alt="cake" />
            <br />
            <blockquote>$20.00</blockquote>
            <p>
              Three layers of vanilla sponge cake with vanilla flavored whip
              cream and fresh berry filling in between.
            </p>
            <button className="btn btn-outline-pink">Order Now</button>
          </div>
          <div>
            <h2>Candy Cake</h2>
            <img src="img/candycake.jpg" alt="cake" />
            <br />
            <blockquote>$20.00</blockquote>
            <p>
              Layers of chocolate sponge cake with decadent chocolate sauce and
              assorted candy toppings.
            </p>
            <button className="btn btn-outline-pink">Order Now</button>
          </div>
          <div>
            <h2>Vanilla Buttercream Cake</h2>
            <img src="img/vanilla.jpg" alt="cake" />
            <br />
            <blockquote>$20.00</blockquote>
            <p>
              Unicorn theme birthday cake with layers of butter cake and vanilla
              buttercream frosting.
            </p>
            <button className="btn btn-outline-pink">Order Now</button>
          </div>
        </div>
        <div className="grid3">
          <div>
            <h2>Doublechocolate Cake</h2>
            <img src="img/doublechocolate.jpg" alt="cake" />
            <br />
            <blockquote>$20.00</blockquote>
            <p>
              Layers of rich dark chocolate cake with dark chocolate ganache
              frosting and fresh raspberry toppings.
            </p>
            <button className="btn btn-outline-pink">Order Now</button>
          </div>
          <div>
            <h2>French Vanilla Cake</h2>
            <img src="img/frenchvanilla.jpg" alt="cake" />
            <br />
            <blockquote>$20.00</blockquote>
            <p>
              Our specialty cake for all french vanilla lovers. Rich vanilla
              cake layers with french vanilla flavored butter cream.
            </p>
            <button className="btn btn-outline-pink">Order Now</button>
          </div>
          <div>
            <h2>Choco Drip Cake</h2>
            <img src="img/chocodrip.jpg" alt="cake" />
            <br />
            <blockquote>$20.00</blockquote>
            <p>
              Our dark chocolate cake layers with fresh whip cream frosting
              topped off with rich chocolate sauce and sugar flowers.
            </p>
            <button className="btn btn-outline-pink">Order Now</button>
          </div>
        </div>
        <div className="load-more">
          <button className="btn btn-outline-pink-inverse">Load More...</button>
        </div>
      </section>
    </main>
  );
};
