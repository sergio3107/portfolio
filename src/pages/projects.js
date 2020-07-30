import React from "react";
import snip from "./snip.jpg";
import snip2 from "./snip2.jpg";
import snip3 from "./snip3.jpg";
import snip4 from "./snip4.jpg";

const projects = () => {
  return (
    <div class="container">
      <h2>My Projects:</h2>
      <div className="grid-2">
        <div class="card-2">
          <div class="card-body">
            <h4 class="card-title">Github-Finder</h4>
            <div className="grid-2">
              <p class="card-text">
                this is a application i made to find github pages{" "}
              </p>
              <img src={snip} alt="img" />
            </div>
            <br />
            <a
              href="https://github.com/sergio3107/Github-Finder.git"
              class="btn btn-primary"
            >
              <p> Github-Finder Code</p>
            </a>
          </div>
        </div>
        <div class="card-2">
          <div class="card-body">
            <h4 class="card-title">Contact Keeper</h4>
            <div className="grid-2">
              <p class="card-text">
                this is a application i made to store contacts{" "}
              </p>
              <img src={snip2} alt="img" />
            </div>
            <br />
            <a
              href="https://github.com/sergio3107/Contact-Keeper.git"
              class="btn btn-primary"
            >
              <p> Contact-Keeper Code</p>
            </a>
          </div>
        </div>
      </div>
      <div className="grid-2">
        <div class="card-2">
          <div class="card-body">
            <h4 class="card-title">IT-Logger</h4>
            <div className="grid-2">
              <p class="card-text">
                this is a application i made to store log info
              </p>
              <img src={snip3} alt="img" />
            </div>
            <br />
            <a
              href="https://github.com/sergio3107/it-logger.git"
              class="btn btn-primary"
            >
              <p> IT Logger Code</p>
            </a>
          </div>
        </div>
        <div class="card-2">
          <div class="card-body">
            <h4 class="card-title">Octane Car Parts</h4>
            <div className="grid-2">
              <p class="card-text">this is a E-commerce website i created.</p>
              <img src={snip4} alt="img" />
            </div>
            <br />
            <a
              href="https://github.com/sergio3107/Car-parts-website"
              class="btn btn-primary"
            >
              <p>Code for the website</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
