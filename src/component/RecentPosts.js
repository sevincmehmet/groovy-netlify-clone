import arrRecentPosts from "./data/arrRecentPosts";

import "./RecentPosts.css"

const RecentPosts = () => {
    return (
        <>

            {arrRecentPosts.map((oItem, oIndex) => {
                return(
                    
                <div key={oIndex} className="recent-cont d-flex  justify-content-between">
                <div className="recent-img-cont" style={{backgroundImage: `url(${oItem.imgUrl})`}}></div>
                <div className="article">
                <div className=" underline-effect" style={{paddingLeft:77}}>
                    <a className="recent-title" href="#" style={{ textDecoration: "none", color: "var(--black-color)", fontWeight: 600}}>{oItem.title}
                    </a>
                </div>
                <div className="date d-flex align-items-centerf-source" style={{paddingLeft:77, fontSize:12, color:"#353A44", fontWeight: 300}}>{oItem.date}</div>
                </div>
            </div>
                )
            })}

            
        </>
    )
}
export default RecentPosts;