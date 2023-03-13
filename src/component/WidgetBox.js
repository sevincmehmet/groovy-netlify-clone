import { useEffect } from "react";
import "./WidgetBox.css"
const WidgetBox = ({  id, title, articleSection }) => {

    return (
        <>
            <div id={id} className="widget-box position-relative">
                <div className="widget-title p-2 rounded-pill ">
                    {title}
                </div>
                {articleSection}

            </div>
        </>
    )
}
export default WidgetBox;