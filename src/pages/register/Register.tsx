import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <main id="wrapper">
      <div className="grid1">
        <form id="contact" className="login" action="#" method="POST">
          <fieldset>
            <div className="order">
              <div id="form-caption">Register</div>
            </div>
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabIndex={1}
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your User Name"
              type="text"
              tabIndex={2}
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your password"
              type="password"
              tabIndex={3}
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Confirm password"
              type="password"
              tabIndex={4}
              required
            />
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Register
            </button>
          </fieldset>
          <fieldset>
            <Link to="/account/login">Already a user?</Link>
          </fieldset>
        </form>
      </div>
    </main>
  );
};
