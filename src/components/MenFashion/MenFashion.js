import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
const MenFashion = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="row">
        <Header />
      </header>
      <div className="row container-fluid p-5">
        <div className="row">
          <ul className="d-flex justify-content-sm-evenly list-unstyled pt-3">
            <li>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAABaCAYAAACxFYFCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjNhODQ3Zi00ZmY2LTQzMGUtOTExYS02MmNjMzZjMjEzMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkMwQ0QxRkFEMUM4MTFFNjhGMUVEMTA3QkUxOEVBOEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkMwQ0QxRjlEMUM4MTFFNjhGMUVEMTA3QkUxOEVBOEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MmIzODViMS1lZjg4LTRmODgtYmYyMC0yMjBiZTgzMWVmNjkiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNDYxNTE2MC0xYTMyLTExN2EtYjc2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"
                alt="img"
              />
            </li>
            <li className="align-self-center">Women</li>
            <li className="align-self-center">Men</li>
            <li className="align-self-center">Kids</li>
            <li className="align-self-center">Bags&luggage</li>
            <li className="align-self-center">SportsWear</li>
            <li className="align-self-center">Sales&Deals</li>
          </ul>
          <hr />
        </div>
        <div className="row">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            click
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </div>
        <div className="row">
          <div className="col-2">hi</div>
          <div className="col-10">hello</div>
        </div>
      </div>
      <div>
        <div>
          <div id="list-example" class="list-group">
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              Item 1
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Item 2
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Item 3
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Item 4
            </a>
          </div>
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-offset="0"
            class="scrollspy-example"
            tabindex="0"
          >
            <h4 id="list-item-1">Item 1</h4>
            <p>...</p>
            <h4 id="list-item-2">Item 2</h4>
            <p>...</p>
            <h4 id="list-item-3">Item 3</h4>
            <p>...</p>
            <h4 id="list-item-4">Item 4</h4>
            <p>...</p>
          </div>
        </div>
      </div>
      <footer className="row">
        <Footer />
      </footer>
    </div>
  );
};
export default MenFashion;
