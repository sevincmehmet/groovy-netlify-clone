import { useEffect, useState } from "react";
import logo from "./assets/logo-groovy.png";
import SearchModal from "./SearchModal";
import ImagesPath from "./assets/images/ImagesPath";
import arrNavItem from "./data/arrNavItem";
import arrFollow from "./data/arrFallow"
import "./Navbars.css";
import arrCategory from "./data/arrCategory";

const Navbars = ({ scrolActive, screenSize }) => {
    const [searchModalActive, setSearchModalActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    useEffect(() => {
        if (searchModalActive) {
            document.body.style.cssText = "overflow: hidden";
        } else {
            document.body.style.cssText = "";
        }
    }, [searchModalActive]);

    return (
        <>
            <div
                className={
                    searchModalActive == true
                        ? "search-modal d-block"
                        : "search-modal d-none"
                }
            >
                <button
                    className="close"
                    type="button"
                    style={{
                        backgroundColor: "transparent",
                        color: "var(--text-color)",
                        border: "none",
                        fontSize: "1.5rem",
                        position: "absolute",
                        right: "0.6rem",
                        top: "0.6rem",
                    }}
                    onClick={() => {
                        setSearchModalActive(!searchModalActive);
                    }}
                >
                    X
                </button>
                <SearchModal />
            </div>
            <nav
                className={
                    scrolActive || screenSize < 767.98
                        ? "navsActive navbar navbar-expand-xl navbar-light "
                        : "navs navbar navbar-expand-xl navbar-light "
                }
            >
                <div className={scrolActive ? "container-fluid" : "container-fluid"}>


                    <a
                        className={scrolActive ? "logo-div logo-position" : "logo-div"}
                        href="#"
                    >
                        <img
                            id="navLogo"
                            src={logo}
                            width={170}
                            height={45.78}
                            alt="logo"
                        />
                    </a>
                    <div id="searchIcon" onClick={() => {
                        setSearchModalActive(!searchModalActive)
                    }} >
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcklEQVR4nO2WwUpCQRiFL5lusnYJvYL1Dtm6FhnlK4hhaT1F+BpmPUoQbbIgJW3fWhe1+uK3c2FWysxcJMgDAxfunP8bZv575ibJSn9FQAGoAXfAAJhq2HNP7wpZQ0+AMYs1AqpZANeAjlP4GbgEysCGxi7QAvrOvBvzxoA7KvQF1OcV0yIbmjuDx2wvKrTv4as48OOQRhrLXA9Y9Lm870Dex1hzztT7rIAc8KIapz7Ge5kufKFOjbZq3PqYhjKVI8DW7aaBj2kiUzECvKkak2WDt0LAwwy2ei/tbB9TT6ZWBPhaNbohn1M/4nN6VY0z3wAZydgIADfltRBa9zVXZbb4q3j4DoBveY98Fz2TbpkUbjGYS+Zvb9OBfgKlJET83jgpHMVgW+FQ1LDuvXLONIWm88PgJrtlFPiL9AEcGszJ6mh43gLfshd4U8hMtaCuda/bSJnCfQVsO38mttid5L/AS862Py4N7MCfgIelgldKpB/hgvXNldcwtQAAAABJRU5ErkJggg=="
                            alt=""
                        />
                    </div>
                    <button className="menu-icon" type="button">
                        <img src={ImagesPath.menuIcon} alt="menuIcon" />
                    </button>
                    <div
                        className={
                            (scrolActive && (screenSize > 1200))
                                ? " ul-position"
                                : ""
                        }
                        id="navbarSupportedContent"
                    >
                        <ul style={{ zIndex: 9, marginLeft: 17 }} className="nested-dropdowns float-end navbar-nav me-auto mb-2 mb-lg-0">

                            {arrNavItem.map((oItem, oIndex) => {
                                return (
                                    <li className="navbar-item" key={oIndex}>
                                        <div className="nested-dropdowns__item d-flex">
                                            {oItem.dropdownLink}
                                            {oItem.arrDropdownItem && <>
                                                <img src={ImagesPath.dropIcon} alt="dropIcon" width={20} />
                                            </>}
                                        </div>
                                        {   oItem.arrDropdownItem &&
                                            <ul>
                                            {oItem.arrDropdownItem &&
                                                (oItem.arrDropdownItem).map((linkItem, linkIndex) => {
                                                    return (
                                                        <li key={arrCategory + linkIndex}>
                                                            {linkItem.dropdownItemLinkName}

                                                            {linkItem.dropdownItemsItemLink &&
                                                                <ul>
                                                                {linkItem.dropdownItemsItemLink && linkItem.dropdownItemsItemLink.map((oItem, oIndex) => {
                                                                    return (
                                                                        <li key={linkItem + oItem}>
                                                                            {oItem}
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                            }
                                                        </li>
                                                    )
                                                })}
                                        </ul>
                                        }
                                    </li>
                                )
                            })}
                            <li>
                                <div className="nav-icons d-flex">
                                    <i
                                        className="ms-3 me-3 fa-sharp fa-solid fa-magnifying-glass nav-item"
                                        onClick={() => {
                                            setSearchModalActive(!searchModalActive);
                                        }}
                                    ></i>
                                    <div className={screenSize < 1399.98 ? "d-none" : ""}>
                                        {arrFollow.map((oItem, oIndex) => {
                                            return (
                                                <i
                                                    key={oIndex}
                                                    className={oItem.icon + " nav-item ms-3 me-3"}
                                                    style={{ color: oItem.iconColor, fontSize: "1.2rem" }}
                                                ></i>
                                            );
                                        })}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbars;
