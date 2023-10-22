import React from "react";
import "./fruitstyle.css"
class Card extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="img">
                    <img src="data:image/jpeg;base64,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" alt="water melon" />
                    <p>Watermelon</p>
                </div>
            </div>
        )
    }
}
export default Card