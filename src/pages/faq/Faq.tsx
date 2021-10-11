import React from "react";

export const Faq = () => {
  return (
    <main id="wrapper">
      <button className="accordion">Where are you located?</button>
      <div className="panel">
        <p>564,Mainland Imaginary Road, Hometown, Canada.</p>
      </div>

      <button className="accordion">What are your working hours?</button>
      <div className="panel">
        <p>We are open all seven days 10am to 9pm.</p>
      </div>

      <button className="accordion">What are your payment methods?</button>
      <div className="panel">
        <p>We accept cash and cards.</p>
      </div>
      <button className="accordion">What kinds of products do you sell?</button>
      <div className="panel">
        <p>We have varieties of cakes, cupcakes and cookies.</p>
      </div>

      <button className="accordion">Are your products customizable?</button>
      <div className="panel">
        <p>Yes, we provide different customize options.</p>
      </div>

      <button className="accordion">Do you make wedding cakes?</button>
      <div className="panel">
        <p>Yes, we do wedding cakes but only on preordering.</p>
      </div>
      <button className="accordion">
        What is the minimum order for custom cupcakes?
      </button>
      <div className="panel">
        <p>Custom cupcakes can be done with a minimum order of 2 dozens.</p>
      </div>

      <button className="accordion">Can I put something on hold?</button>
      <div className="panel">
        <p>Yes, with advance payment of 50%.</p>
      </div>

      <button className="accordion">
        How early do we have to order for large parties?
      </button>
      <div className="panel">
        <p>About one to two weeks is recommended.</p>
      </div>
      <button className="accordion">Do you have any eggless options?</button>
      <div className="panel">
        <p>Yes we have eggless cake options also.</p>
      </div>

      <button className="accordion">Do you deliver?</button>
      <div className="panel">
        <p>Yes within 5-10km around the store.</p>
      </div>

      <button className="accordion">
        Do you have cakes ready for purchase in the store?
      </button>
      <div className="panel">
        <p>Yes we have fresh items daily in the store.</p>
      </div>
    </main>
  );
};
