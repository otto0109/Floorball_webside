import {IonContent, IonList,} from '@ionic/react';

import React from 'react';
import './Menu.css';
import Domains from "./Domains";
import {AppPage} from "../../objects/AppPages";


const Menu: React.FC<{ show: boolean, pages: AppPage[] }> = ({show, pages}) => {
    return (
        <div className={show ? "show menu" : "hidden menu"}>
            <IonContent>
                <IonList id="inbox-list">
                    <Domains pages={pages}></Domains>
                </IonList>
            </IonContent>
        </div>
    );
};

export default Menu;
