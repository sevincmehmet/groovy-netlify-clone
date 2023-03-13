import arrCategory from "./data/arrCategory"
const TagCloud = () => {
    return (
        <>
            <button className="link-tag " style={{ margin: "0 10px 12px 0" }}>
                <img className="me-1" src={arrCategory[2].linkTagIcon} style={{ position: "relative", bottom: "1.5px" }} width={10} />
               <span style={{fontWeight:300}} className="link-tag-text"> {arrCategory[2].linkTag} </span> 
            </button>
            <button className="link-tag " style={{ margin: "0 10px 12px 0" }}>
                <img className="me-1" src={arrCategory[1].linkTagIcon} style={{ position: "relative", bottom: "1.5px" }} width={10} />
               <span style={{fontWeight:300}} className="link-tag-text"> {arrCategory[1].linkTag} </span>
            </button>
            <button className="link-tag " style={{ margin: "0 10px 12px 0" }}>
                <img className="me-1" src={arrCategory[3].linkTagIcon} style={{ position: "relative", bottom: "1.5px" }} width={10} />
               <span style={{fontWeight:300}} className="link-tag-text"> {arrCategory[3].linkTag} </span>
            </button>
            <button className="link-tag " style={{ margin: "0 10px 12px 0" }}>
                <img className="me-1" src={arrCategory[4].linkTagIcon} style={{ position: "relative", bottom: "1.5px" }} width={10} />
               <span style={{fontWeight:300}} className="link-tag-text"> {arrCategory[4].linkTag} </span>
            </button>
            <button className="link-tag " style={{ margin: "0 10px 12px 0" }}>
                <img className="me-1" src={arrCategory[0].linkTagIcon} style={{ position: "relative", bottom: "1.5px" }} width={10} />
               <span style={{fontWeight:300}} className="link-tag-text"> {arrCategory[0].linkTag} </span>
            </button>
            <button className="link-tag " style={{ margin: "0 10px 12px 0" }}>
                <img className="me-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABuUlEQVR4nGNgGEogvWaCal5h3/684v6jKWV92jS3MLd+Il9WcV9/TnHf1+2WU37vsJzyJ7e4/1tuUd9EkBwNrPzPmFExIT67pO/9zMDJ394KzPj/m20mGH/gn/l/sdek79kl/Z/Ty/sK6+vrmahiZUrFROP8wr6LdakTPt9SmA63EB3fk53+vzlpwue8or4bqdUTrci2MKukSyK/qH9xQUH/l30mU/79YsduITL+xTbz/0mdqf+K8vq/5hX1b8ms7pEl2sK0tJmsmWX9Rdml/V8We07++ZmXsIXo+Cv3zP/rHCf/yirp/5ZV2teSmzuRHa+lqRV9LrlF/Q864iZ+eSyBO1iJxc/Epv+fFD7xc25R/7O0igmhuH1b2f//oto0ii1ExyAzQWbjtZjalsJw2qjFyGA0qH+PJi620ew0c7QA+U92kXlxICqJVFC1WDzhPrhalJxB1WoxpWKCD06LqdUQ+MI9A94QyCyb0EywIYAMsismCxcU9M0ht+lTUNi3FtR8YhgyjT1U8J8xvWxiWG5x/xtczdvcov4PmaV9GVRr3g5wg54BBaRU9KjlFfUfAGEQm+YWUhMAAPkwQnt7aEyNAAAAAElFTkSuQmCC" style={{ position: "relative", bottom: "1.5px" }} width={10} />
                <span style={{fontWeight:300}} className="link-tag-text">Video</span>
            </button>
        </>
    )
}
export default TagCloud;