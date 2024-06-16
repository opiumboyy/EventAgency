import React, { useState, useEffect } from "react";
export const Navigation = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset !== 0;
      setVisible(!scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="menu" className={`navbar navbar-default navbar-fixed-top ${visible ? "" : "hidden"}`}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Event Agency
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              
            </li>
            <li>
              <a href="#about" className="page-scroll">
                О нас
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Услуги
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Галерея
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Отзывы
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Команда
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
