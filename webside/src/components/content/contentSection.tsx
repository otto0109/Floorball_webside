import React from "react";
import './contentSection.css';
import SectionHeader from "../header/sectionHeader";
import {IonIcon} from "@ionic/react";

interface ContentProps {
    sectionName: string;
    first?: boolean;
    contrast?: boolean;
}

const ContentSection: React.FC<ContentProps> = (props) => {
    return(
        <div className={props.contrast ? "contentWrapper contrast":"contentWrapper"} id={props.sectionName}>
            {
                !props.first && props.contrast &&
                <IonIcon className={"floorball"} icon={"assets/white-blue-floorball.svg"}></IonIcon>
            }
            {
                !props.first && !props.contrast &&
                <IonIcon className={"floorball"} icon={"assets/blue-white-floorball.svg"}></IonIcon>
            }
            <SectionHeader sectionName={props.sectionName} contrast={props.contrast}></SectionHeader>
            <div className={"content"}>
                {
                    props.children
                }
            </div>
        </div>);
};

export default ContentSection;