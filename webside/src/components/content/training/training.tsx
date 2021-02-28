import React from "react";

import "./training.css";

interface TrainingObject {
    teamName: string;
    training: TrainingTimeObject[];
}

interface TrainingTimeObject {
    weekday: string;
    time: string;
    place: string;
}


const TrainingWrapper: React.FC = () => {

        let trainingArray: TrainingObject[] = [{
            teamName: "U17",
            training: [
                {
                    place: "",
                    time: "14:16",
                    weekday: ""
                },
            ]
        }];

        return (
            <>
                {
                    trainingArray && trainingArray.map((training, index) =>
                        <TeamTraining training={training} key={index}/>
                    )
                }
            </>
        );
    }
;

interface TeamTrainingInterface {
    training: TrainingObject;
}

const TeamTraining: React.FC<TeamTrainingInterface> = ({training}) => {
    return (
        <div className={"trainingWrapper"}>
            <div className={"teamName"}>
                <h1>{training.teamName}</h1>
            </div>
        </div>
    )
}

export default TrainingWrapper;