import {React,} from 'react';
import {getDoc, doc,} from "firebase/firestore";
import { database} from "../firebase-config";

function Workout() {


    class Workouts {
        constructor (time, type, exercises ) {
            this.time = time;
            this.type = type;
            this.exercises = exercises;
        }
        toString() {
            return this.time + ', ' + this.type + ', ' + this.exercises;
        }
    }

// Firestore data converter
    const workoutConverter = {
        toFirestore: (workout) => {
            return {
                time: workout.time,
                type: workout.type,
                exercises: workout.exercises
            };
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new Workouts(data.time, data.type, data.exercises);
        }
    };
    const workoutCollectionReference = doc(database, "./workouts").withConverter(workoutConverter);
    const docSnap = async () =>{
    await getDoc(workoutCollectionReference, "workouts".id);
    if (docSnap.exists()) {
        // Convert to City object
        const workout = docSnap.data();
        // Use a City instance method
        console.log(workout.toString());
    } else {
        console.log("No such document!");
    }
    };

    return (
        <div>
            <h1>Twój trening na dziś</h1>
            <p></p>
            <button onClick={docSnap} className="generateBtn"> Generuj </button>
            <button className="submitWorkoutBtn"> Trening zakończony </button>
        </div>
    );
};

export default Workout;