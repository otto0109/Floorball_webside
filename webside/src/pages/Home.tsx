import {IonContent, IonPage} from '@ionic/react';
import React from 'react';
import './Home.css';
import WelcomeScreen from "../components/WelcomeScreen/welcomeScreen";
import ContentSection from "../components/content/contentSection";
import Footer from "../components/footer/footer";
import TrainingWrapper from "../components/content/training/training";
import {useParams} from "react-router-dom";
import {scrollTo} from '../components/helpers/smoothScrolling'
import Navigator from "../components/navigator/navigator";
import {IonReactRouter} from "@ionic/react-router";


const Home: React.FC = () => {
    const {section} = useParams();
    if (section) {
        scrollTo(section);
    }
    return (
        <IonPage>
            <IonContent>
                <WelcomeScreen></WelcomeScreen>
                <Navigator/>
                <ContentSection sectionName={"interviews"} first={true}></ContentSection>
                <ContentSection sectionName={"training"} contrast={true}>
                    <TrainingWrapper/>
                </ContentSection>
                <ContentSection sectionName={"teams"}></ContentSection>
                <ContentSection sectionName={"kontakt"} contrast={true}></ContentSection>
                <ContentSection sectionName={"sponsoren"}></ContentSection>
                <Footer></Footer>
            </IonContent>
        </IonPage>
    );
};

export default Home;
