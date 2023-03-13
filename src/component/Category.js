import arrCategory from "./data/arrCategory";
import "./Category.css"

const Category = () => {
    return (
        <>

            {arrCategory.map((oItem, oIndex) => {
                return (
                    <div key={oIndex} style={{ backgroundColor: oItem.backgroundColor }} className=" category-cont border border-secondary">
                        <div className="img-cont">
                            <img className="border border-secondary" src={oItem.imgUrl} alt="" />
                        </div>

                        <div className="write-cont">


                            <div className="write-cont-article">
                                <div className="d-flex write-cont-header">
                                    <button className="link-tag ">
                                        <img
                                            className="me-1"
                                            style={
                                                {
                                                    position: "relative",
                                                    bottom: "1.5px",

                                                }}
                                            src={oItem.linkTagIcon} width={10} />
                                        {oItem.linkTag}
                                    </button>
                                    <div className="date d-flex align-items-center ms-3 f-source">
                                        {oItem.date}
                                    </div>
                                    <div className="min d-none d-xl-block d-flex align-items-center ms-3 f-source ">
                                        <i className="fa-sharp fa-solid fa-circle me-3" style={{ color: "var(--main-color)", fontSize: "0.4rem" }}></i>
                                        {oItem.min}
                                    </div>
                                </div>
                                <div className="write-cont-title underline-effect h2 fw-bold">
                                    <a href="#">
                                        {oItem.title}
                                    </a>
                                </div>

                                <div className="write-cont-text f-source h6 lh-lg" style={{fontWeight:"400"}}>
                                    {oItem.text}
                                </div>

                                <div className=" d-flex write-cont-footer justify-content-between">
                                    <button className="buttons float-start f-source">
                                        Continue Reading -{">"}
                                    </button>
                                    <div className="d-none d-xl-block d-flex align-items-center profile float-end f-source" style={{ fontSize: "14px", color: "#424851", fontWeight: "600" }}>
                                        <div className=" profile-photo ">
                                            <img className="rounded-circle" src={oItem.avatar.avatarImgUrl} alt="profile-photo" />
                                        </div>
                                        {oItem.avatar.avatarName}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                )
            })}


        </>
    )
}
export default Category;