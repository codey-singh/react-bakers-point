import React from 'react';

export const Footer = () => {
  return (
    <footer>
          <div className="wrapper">
            <div className="row">
              <div id="logo">
                <a href="index.html">baker's point</a>
              </div>
              <div className="desktop-only">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="desktop-only">
                <address>
                  <br />
                  Contact us at:<br />
                  <a href="mailto:feedback@bakers-point.com"
                    >feedback@bakers-point.com</a
                  ><br />
                  564, Mainland, Imaginary Road<br />
                  Hometown, Canada
                </address>
              </div>
            </div>
          </div>
          <div className="copyright">
            &copy; <span className="year"></span> All rights reserved
          </div>
        </footer>
  )
}
