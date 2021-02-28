import React from "react";
import './sectionHeader.css';

interface HeaderProps {
    sectionName: string;
    contrast?: boolean;
}

const SectionHeader: React.FC<HeaderProps> = ({sectionName, contrast}) => {
    return(
        <div className={"SectionWrapper"}>
            <h1 className={contrast ? "heading contrast":"heading"}>{sectionName}</h1>
            <div className={contrast ? "divider contrast":"divider"}><span></span>
            </div>
        </div>);
};

export default SectionHeader;