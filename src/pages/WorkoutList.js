import React, {useEffect, useState } from 'react';
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore";
import {database} from "../firebase-config";
import "../pagesStyles/WorkoutList.scss"

function WorkoutList() {
    const [listOfWorkout, setListOfWorkout] = useState([]);
    const workoutCollectionReference = collection(database, "workouts")

    useEffect(() => {
        const getWorkout = async () => {
            const data = await getDocs(workoutCollectionReference)
            setListOfWorkout(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

        };
         getWorkout();

    }, []);
    const deleteWorkout = async (id) => {
        const workoutDoc = doc(database, "workouts", id)
        await deleteDoc(workoutDoc);
        window.location.reload();
    }

    return (
        <div>
                {listOfWorkout.map((workout) => {
                    return (
                        <ul key={workout.id} className="listContainer">
                            <ul  className="workoutList">
                                <ul className="rowContainer">
                                    <h3>Czas</h3>
                                <li >{workout.time} min</li>
                                </ul>
                                <ul className="rowContainer">
                                    <h3>Typ</h3>
                                <li >{workout.type}</li>
                                </ul>
                                <ul className="rowContainer-special">
                                    <h3>WOD</h3>
                                    <ul className="rowContainer-exercises">
                                        <li >{workout.exercises}</li>
                                    </ul>
                                </ul>
                                <button onClick={() => {deleteWorkout(workout.id)}} className="deleteBtn">Usuń</button>
                            </ul>
                        </ul>
                    );
                })}
        </div>
    );
}

export default WorkoutList;