import "./SearchModal.css"
import arrCategory from "./data/arrCategory";

const SearchModal = () => {


    return (
        <>
            <div className="modal-div" style={{ fontSize: "30px" }}>
                <h2 style={{ margin: "10px 0px 40px", fontWeight: 800, color: "var(--text-color)", fontSize: 30 }}>Press <span style={{ color: "var(--main-color)" }}>ESC</span> to close</h2>
                <div className="w-100 position-relative">
                    <i className="searchIcn fa-sharp fa-solid fa-magnifying-glass"></i>
                    <input placeholder="Type to start your search..." style={{ borderRadius: "4px", padding: "15px", width: "90%", margin: "0 5%" }} type="text" className="search-modal-inp" />
                </div>

                <h4 className="fw-normal f-source" style={{ margin: "100px 0px 15px", fontSize: 18, color: "var(--text-color)" }}>Or check our Popular Categories...</h4>

                <div className="d-flex justify-content-center">
                    {arrCategory.map((oItem, oIndex) => {
                            return(
                                <button key={oIndex} className="link-tag " style={{ margin: "0 10px 12px 0", padding: "0px 15px" }}>
                                <img className="me-1" src={oItem.linkTagIcon} style={{ position: "relative", bottom: "5px" }} width={10} />
                                <span style={{ fontWeight: 300, position:"relative", bottom:6 }} className="link-tag-text"> {oItem.linkTag} </span>
                            </button>
                            )
                    })}
                </div>
            </div>
        </>
    )
}
export default SearchModal;