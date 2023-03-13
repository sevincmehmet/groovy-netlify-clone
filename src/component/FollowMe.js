import arrFallow from "./data/arrFallow";

const FollowMe = () => {
    return (
        <>
            {arrFallow.map((oItem, oIndex) => {
                return (
                    <div key={oIndex} className="social d-flex align-items-center" style={{ marginBottom: 10 }}>
                        <div className="social-icon" style={{ background: "#FFF" }}>
                            <a href="#">
                                <i className={oItem.icon} style={{color:oItem.iconColor}}></i>
                            </a>
                        </div>
                        <span className="fw-bolder" style={{ fontSize: 18, marginLeft: 10, color: "#353A44" }}>{oItem.title}</span>
                    </div>
                )
            })}

        </>
    )
}
export default FollowMe;