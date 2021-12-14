import React, { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SidebarData } from "./SidebarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [active, setActive] = useState();
  const submenu = useRef(SidebarData.map(() => React.createRef()));
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const handlerShowSubMenu = (key) => {
    if (isTablet) {
      for (let x = 0; x < submenu.current.length; x++) {
        if (submenu.current[x].current) {
          if (x == key) {
            if (
              submenu.current[key].current.className == "sidebar__list--submenu"
            )
              submenu.current[key].current.className =
                "sidebar__list--submenu show";
            else
              submenu.current[key].current.className = "sidebar__list--submenu";
          } else {
            submenu.current[x].current.className = "sidebar__list--submenu";
          }
        }
      }
    } else {
      if (submenu.current[key].current.className == "sidebar__list--submenu")
        submenu.current[key].current.className = "sidebar__list--submenu show";
      else submenu.current[key].current.className = "sidebar__list--submenu";
    }
  };

  useEffect(() => {
    if (isTablet) {
      setSidebar(false);
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__bars" onClick={() => setSidebar(!sidebar)}>
        <FontAwesomeIcon
          icon={[`fas`, `bars`]}
          className="sidebar__logo--icon"
        />
      </div>
      <div className={`sidebar__container ${!sidebar ? "hide" : "show"} `}>
        <div
          className="sidebar__logo"
          onClick={() => {
            setActive(0);
            setSidebar(!sidebar);
          }}
        >
          <Link href="/">
            <a>
              <FontAwesomeIcon
                icon={[`fas`, `circle`]}
                className="sidebar__logo--icon"
              />
              <span className="sidebar__logo--name">Side-Bar</span>
            </a>
          </Link>
        </div>
        <ul className="sidebar__list">
          {SidebarData.map((item, index) => {
            return (
              <Fragment key={index}>
                <li
                  key={index}
                  className={`sidebar__list--item ${
                    item.submenu ? "submenu" : ""
                  } ${active === index ? "active" : ""}`}
                  onClick={() => {
                    setActive(index);
                    if (item.submenu) handlerShowSubMenu(index);
                    else setSidebar(!sidebar);
                  }}
                >
                  <Link href={item.path}>
                    <a>
                      <FontAwesomeIcon
                        icon={[`${item.prefix}`, `${item.icon}`]}
                        className="sidebar__list--icon"
                      />
                      <span id={index} className="sidebal__list--title">
                        {item.title}
                      </span>
                      {item.submenu && (
                        <FontAwesomeIcon
                          icon={[`fas`, `angle-down`]}
                          className="sidebar__list--submenu down"
                        />
                      )}
                    </a>
                  </Link>
                </li>
                {item.submenu && (
                  <Fragment>
                    <ul
                      ref={submenu.current[index]}
                      key={index}
                      id={index}
                      className={`sidebar__list--submenu`}
                    >
                      {item.submenu.map((item, key) => {
                        return (
                          <li
                            key={key}
                            className="sidebar__list--submenu--item"
                            onClick={() => {
                              setActive(index);
                              setSidebar(!sidebar);
                              handlerShowSubMenu(index);
                            }}
                          >
                            <Link href={item.path}>
                              <a>
                                <span>{item.title}</span>
                              </a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </Fragment>
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div
        className={`sidebar__overlay ${!sidebar ? "hide" : "show"}`}
        onClick={() => setSidebar(!sidebar)}
      />
    </div>
  );
};

export default Sidebar;
