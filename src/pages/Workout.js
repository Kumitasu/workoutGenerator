import {React, useEffect, useState,} from 'react';
import {getDoc, doc, collection, getDocs,} from "firebase/firestore";
import { database} from "../firebase-config";

function Workout() {


    const [listOfWorkout, setListOfWorkout] = useState([]);
    const workoutCollectionReference = collection(database, "workouts")

    useEffect(() => {
        const getWorkout = async () => {
            const data = await getDocs(workoutCollectionReference)
            setListOfWorkout(data[Math.floor((Math.random()*this.data))]);

        };
        getWorkout();

    }, []);

    return (
        <div>
            <h1>Twój trening na dziś</h1>
            <p></p>
            <button onClick={useEffect} className="generateBtn"> Generuj </button>
            <button className="submitWorkoutBtn"> Trening zakończony </button>
        </div>
    );
};

export default Workout;