import React, {useState} from 'react';
import { addDoc, collection } from "firebase/firestore";
import { database, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import "../pagesStyles/AddExercises.scss"


function AddExercises() {
    const [time, setTime] = useState("");
    const [type, setType] = useState("");
    const [exercises, setExercises] = useState("");



    const workoutCollectionReference = collection(database, "workouts")
    let navigate = useNavigate();

    const createWorkout = async () => {
        await addDoc(workoutCollectionReference, {
            time,
            type,
            exercises,
            author: {name: auth.currentUser.displayName , id: auth.currentUser.uid },
        });
        navigate("/WorkoutList");

    };


    return (
        <div className="addWorkout">
            <div className="adwContainer">
                <h1>Dodaj Trening</h1>
                <div className="inputADW">
                    <label> Czas: </label>
                    <input placeholder="Czas w min."
                           onChange={(event) => {
                               setTime(event.target.value);
                           }}
                    />
                </div>
                <div className="inputADW">
                    <label> Rodzaj treningu: </label>
                    <input placeholder="AMRAP lub AFAP."
                           onChange={(event) => {
                               setType(event.target.value);
                           }}
                    />
                </div>
                <div className="inputADW">
                    <label> Workout: </label>
                    <textarea placeholder="Np.
                    20xPush up
                    20xPull up"
                              onChange={(event) => {
                        setExercises(event.target.value);
                    }}
                    />
                </div>
                <button onClick={createWorkout} >Dodaj do listy</button>
            </div>

        </div>
    );
};

export default AddExercises;