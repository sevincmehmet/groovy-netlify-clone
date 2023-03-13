import Navbars from "./Navbars";
import Category from "./Category";
import WidgetBox from "./WidgetBox";
import Footer from "./Footer";
import arrWidgetBox from "./data/arrWidgetBox";

import "./Main.css";
import { useState, useEffect } from "react";

const Main = () => {
    const [scrolActive, setScroolActive] = useState(false);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    });

    const scroolAnimate = () => {
        if (window.scrollY > 280) {
            setScroolActive(true);
        } else if (window.scrollY < 250) {
            setScroolActive(false);
        }

        if (window.scrollY > 850) {
        }
    };

    window.addEventListener("scroll", scroolAnimate);

    return (
        <>
            <div className="container-xl main-cont">
                <div className="smal-cont">
                    <Navbars scrolActive={scrolActive} />
                    <div
                        className={scrolActive ? "row t-300" : "row"}
                        style={{ height: "100%" }}
                    >
                        {/* left-container */}
                        <div
                            className={
                                windowSize[0] < 1023.98
                                    ? "col-sm-12 left-cont "
                                    : "col-sm-8 left-cont "
                            }
                        >
                            <Category />

                            <div className="p-4 d-flex justify-content-center">
                                <h6
                                    className="me-4 f-source"
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: "var(--text-color)",
                                        letterSpacing: 0.8,
                                    }}
                                >
                                    Page 1 of 3
                                </h6>
                                <button
                                    className=" link-tag bg-danger text-light position-relative"
                                    style={{ bottom: 7 }}
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                        {/* right container */}
                        <div
                            className={
                                windowSize[0] < 1023.98
                                    ? "col-sm-12 right-cont position-relative"
                                    : "col-sm-4 right-cont position-relative"
                            }
                        >
                            <div className="position-cont" style={{ minHeight: "auto" }}>
                                {arrWidgetBox.map((oItem, oIndex) => {
                                    return (
                                        <div key={oIndex}>
                                            <WidgetBox
                                                title={oItem[0]}
                                                articleSection={oItem[1]}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid footer">
                <Footer screenSize={windowSize[0]}/>
            </div>
        </>
    );
};

export default Main;
