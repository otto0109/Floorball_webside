import React from "react";
import './footer.css';
import {IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader} from "@ionic/react";
import {logoInstagram} from 'ionicons/icons';
import {scrollTo} from '../helpers/smoothScrolling'

const Footer: React.FC = () => {


    return (
        <div className={"footerWrapper"}>
            <IonIcon onClick={() => {
                window.location.href = 'https://www.instagram.com/sc_itzehoe_floorball/?hl=de';
            }} className={"floorballIcon"} src={"assets/Floorball.svg"}></IonIcon>
            <div className={"footerMiddleSection"}>
                <IonList lines={"none"}>
                    <IonListHeader className={"listHeader"}>
                        <IonLabel>Social Media</IonLabel>
                    </IonListHeader>
                    <IonItem>
                        <IonIcon icon={logoInstagram}></IonIcon>
                        <a href={"https://www.instagram.com/sc_itzehoe_floorball/?hl=de"}>Instagramm</a>
                    </IonItem>
                </IonList>
                <IonList lines={"none"} className={"sections"}>
                    <IonListHeader className={"listHeader"}>
                        <IonLabel>Sections</IonLabel>
                    </IonListHeader>
                    <IonItem routerLink={"/interviews"}>Interviews</IonItem>
                    <IonItem routerLink={"/training"}>Training</IonItem>
                    <IonItem routerLink={"/teams"}>Teams</IonItem>
                    <IonItem routerLink={"/kontakt"}>Kontakt</IonItem>
                    <IonItem routerLink={"/sponsoren"}>Sponsoren</IonItem>
                </IonList>
                <IonList lines={"none"} className={"weblinks"}>
                    <IonListHeader className={"listHeader"}>
                        <IonLabel>Weblinks</IonLabel>
                    </IonListHeader>
                    <IonItem><a href={"https://sport-club-itzehoe.de"}>SCI</a></IonItem>
                    <IonItem><a href={"https://sport-club-itzehoe.de/sportarten/floorball/"}>SCI Floorball</a></IonItem>
                    <IonItem><a href={"https://www.hudo.de"}>Hudo</a></IonItem>
                </IonList>
            </div>
            <IonImg onClick={() => {
                window.location.href = 'https://www.hudo.de';
            }} className={"floorballIcon"} src={"assets/Hudo.png"}></IonImg>
        </div>
    );
}

export default Footer;