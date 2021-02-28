import React from "react";
import './welcomeScreen.css';


const WelcomeScreen: React.FC = () => {


    return (
        <div className={"backgroundImage"}>
            <div className="grayscale"></div>
            <span className={"welcomeScreenTitle"}> Floorball Itzehoe</span>
            <div className={"scrollIndicator"}>
                <div className="mouse">
                    <span></span>
                </div>
                Scroll Down
            </div>
        </div>
    );
};

export default WelcomeScreen;