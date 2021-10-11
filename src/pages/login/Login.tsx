import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <main id="wrapper">
      <div className="grid1">
        <form id="contact" className="login" action="#" method="POST">
          <fieldset className="order">
            <div id="form-caption">Login</div>
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
              placeholder="Your password"
              type="password"
              tabIndex={2}
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
              Login
            </button>
          </fieldset>
          <fieldset>
            <Link to="/account/register">Not Registered?</Link>
          </fieldset>
          <fieldset>
            <a href="/change-password">Forgot Password?</a>
          </fieldset>
        </form>
      </div>
    </main>
  );
};
