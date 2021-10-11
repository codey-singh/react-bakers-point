import React from "react";

export const ContactUs = () => {
  return (
    <main id="wrapper">
      <div className="grid2">
        <div>
          <p>
            Please write to us for any queries suggestions. These will help us
            improving your online ordering experience
          </p>

          <form id="contact" action="#" method="POST">
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabIndex={1}
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabIndex={2}
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number"
                type="tel"
                tabIndex={3}
                required
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your Message Here...."
                tabIndex={5}
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        <div className="second">
          <a
            href="https://www.google.com/maps/place/Shoppers+World+Brampton/@43.6661352,-79.7399728,17z/data=!3m1!4b1!4m5!3m4!1s0x882b3fd65a49da6d:0xe7bc05597309d52f!8m2!3d43.6661313!4d-79.7377841"
            target="blank"
          >
            <img src="img/map.png" alt="map" />
          </a>
        </div>
      </div>
    </main>
  );
};
