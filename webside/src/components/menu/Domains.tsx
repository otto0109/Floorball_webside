import React from "react";
import {useLocation} from "react-router-dom";
import {IonItem, IonLabel, IonMenuToggle} from "@ionic/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AppPage} from "../../objects/AppPages";
import "./Domains.css";



const Domains: React.FC<{ pages: AppPage[] }> = ({pages}) => {
    const location = useLocation();

    const checkRoute = (page: AppPage): boolean => {
        return page.url === location.pathname;
    }

    return (
        <>
            {
                pages.map((page, index) => {
                    return (
                        <IonMenuToggle key={index} autoHide={false}>
                            <IonItem className={checkRoute(page) ? 'selected' : ''}
                                     routerLink={page.url} routerDirection="none" lines="none" detail={false}>
                                <FontAwesomeIcon icon={page.icon}/>
                                <IonLabel>{page.title}</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    );
                })
            }
        </>
    )
}

export default Domains;