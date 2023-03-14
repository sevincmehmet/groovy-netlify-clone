import { useState } from "react"
import "./SearchModal.css"
const SearchModal = ({ active, setActive }) => {
    const [animate, setAnimate] = useState("")
    const animateFunc = () => {
        if (active) {
            setAnimate("d-block")
            setTimeout(() => {
                setAnimate('d-block scale-out-center-on')
            }, 1)
            setTimeout(() => {
                setAnimate('')
            }, 500)

        }
    }

    return (
        <>
            <div className={"search-modal" + animate} >
                <div className="close">
                    <button type="button" onClick={setActive(!active)}>X</button>
                </div>
            </div>
        </>
    )
}
export default SearchModal;