import FollowMe from "./FollowMe";
import RecentPosts from "./RecentPosts";
import TagCloud from "./TagCloud";
import WidgetBox from "./WidgetBox";
import logo from "./assets/logo-groovy.png"

import "./Footer.css"
const Footer = ({
    screenSize
}) => {
    return (
        <>
            <div className="footer-down" >
                <div className="row">
                    <div className={screenSize < 1200?"col-6":"col-3"}>
                        <div style={{ padding: "60px 10px 30px", margin: "0 20px" }}>
                            <img className="mb-4" src={logo} width={170} alt="logo" />
                            <div className="text-footer f-source" style={{ fontSize: 14, fontWeight: 400 }}>
                                <p className="lh-lg mb-4" >
                                    A super modern theme following the latest trends with premium Membership and fully compatible with <span className="fw-bolder">Ghost</span>.
                                </p>
                                <p>                            Check more themes like this <br /> on <span className="fw-bolder lh-lg">estudiopatagon.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={screenSize < 1200?"col-6":"col-3"}>
                        <WidgetBox
                            id={"footerRecentPosts"}
                            title={"Recent Posts"}
                            articleSection={<RecentPosts />}
                        />
                    </div>
                    <div className={screenSize < 1200?"col-6":"col-3"}>
                        <WidgetBox
                            id={"footerTagCloud"}
                            title={"Tag Cloud"}
                            articleSection={<TagCloud />}
                        />
                    </div>
                    <div className={screenSize < 1200?"col-6":"col-3"}><WidgetBox
                        id={"footerFollowMe"}
                        title={"Follow me!"}
                        articleSection={<FollowMe />}
                    /></div>
                </div>
            </div>

            <div className="m-auto" style={{ maxWidth: 600, padding: "60px 34px", marginTop: 40 }}>
                <form className="subscribe-form">
                    <h4 className="footer-title" style={{ fontSize: 40 }}>Subscribe to our Newsletter</h4>
                    <div className="form-group position-relative">
                        <span className="form-decoration"></span>
                        <input type="email" className="inputbox" placeholder="Enter your email address"></input>
                        <button className="form-btn link-tag text-light position-absolute" type="submit">Submit</button>
                    </div>
                </form>
                <p className="description f-source">Subscribe to our email newsletter to get the <b>latest posts</b> delivered <b>right to your email.</b></p>
            </div>


            <div className="w-100">
                <div className="pb-3 d-flex justify-content-center align-items-center underline-effect f-source" style={{ color: "var(--text-color)" }}>
                    WordPress Theme by
                    <b>
                        <a style={{
                            textDecoration: "none", color: "var(--text-color)",
                            fontSize: 13
                        }} href="https://estudiopatagon.com" target="_blank" title="Powered with Groovy">
                            EstudioPatagon
                        </a>
                    </b>
                </div>
            </div>
        </>
    )
}
export default Footer;