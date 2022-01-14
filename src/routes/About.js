import { Component } from "react";
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="about_container">
                <span>
                    "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."
                </span>
                <span>-George Orwell, 1984</span>
            </div>
        );
    }
}

export default About;