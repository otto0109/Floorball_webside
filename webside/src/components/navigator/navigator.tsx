import React, {useState} from "react";
import {IonIcon} from "@ionic/react";
import './navigator.css';
import Menu from "../menu/Menu";
import {pages} from "../../objects/AppPages";


const Navigator: React.FC = () => {

    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu)
    return (
        <div className={"navigator"}>
            <div className={"toolbar"}>
                <button className={showMenu ? "active hamburger hamburger-cancel" : "hamburger hamburger-cancel"}
                        onClick={() => {

                            setShowMenu(prevShowMenu => !prevShowMenu)
                        }}>
                    <span className="icon"></span>
                </button>
                <div>
                    <div className={"title"}>Floorball Itzehoe</div>
                </div>
                <IonIcon src={"assets/Floorball.svg"} className={"logo"}/>
            </div>
            <Menu pages={pages} show={showMenu}/>
        </div>
    );
};

export default Navigator;