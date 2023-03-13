import "./AboutMeSection.css";
const AboutMeSection = () => {
    return (
        <>
            <div className="d-flex about-profile">
                <img
                    className="profile-photo border border-secondary rounded-circle"
                    style={{ width: "78.4px", height: "80px" }}
                    src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2023/01/avatar-1.jpg"
                    alt="profile-photo"
                />

                <div className="user ms-3">
                    <div className="userName underline-effect pb-1">
                        <a
                            href="#"
                            style={{ textDecoration: "none", color: "var(--black-color)" }}
                        >
                            Jonathan Doe
                        </a>
                    </div>
                    <div
                        className="userJob f-source mb-1 fw-400"
                        style={{ fontSize: "14px" }}
                    >
                        Founder & Editor
                    </div>
                    <div className="social-icons">
                        <i
                            className="me-2 fa-brands fa-twitter"
                            style={{ color: "rgb(29, 161, 242)" }}
                        ></i>
                        <i
                            className="fa-brands fa-facebook-f"
                            style={{ color: "rgb(23, 91, 235)" }}
                        ></i>
                    </div>
                </div>
            </div>
            <div
                className={"about-text h6 f-source fw-400"}
                style={{
                    fontSize: 14,
                    marginTop: "15px",
                    marginBottom: "0",
                    color: "var(--text-color)",
                }}
            >
                Hello! My name is Jonathan Doe working from Chile. I create some Ghost
                and Wordpress themes for differents markets, also, i offer live support
                via our ticket system.
            </div>
        </>
    );
};
export default AboutMeSection;
