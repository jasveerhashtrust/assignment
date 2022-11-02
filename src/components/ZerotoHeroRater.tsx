
import { useState } from "react";
import "./stars.css";
const Star = () => {
    const [starRating, setstarRating] = useState(0);
    const [drag, setdrag] = useState(0);
    return (
        <div className="star-starRating">
            <div className="container">
                <h1>Give us starRating</h1>
                <div>
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= (drag || starRating) ? "on" : "off"}
                                onClick={() => setstarRating(index)}
                                onMouseEnter={() => setdrag(index)}
                                onMouseLeave={() => setdrag(starRating)}
                            >
                                <span className="star">&#9733;</span>
                            </button>
                        );
                    })}
                </div>
                <div className="starRating">
                    starRating : {starRating}
                </div>
            </div>
        </div>
    );
};
export default Star;