import React from 'react';
import { Link } from 'react-router-dom';



function Start() {



    return (
            <div>
                <h1>Co chcesz zrobić?</h1>
                <div className="startContainer">
                    <div className="startBtn">
                        <Link to='/Workout'>
                            <button>Losowy Trening</button>
                        </Link>
                        <Link to='/MyWorkouts'>
                            <button>Zrobione Treningi</button>
                        </Link>
                        <Link to='/AddExercises'>
                            <button>Dodaj Trening</button>
                        </Link>
                        <Link to='/WorkoutList'>
                            <button>Dostępne Treningi</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
}


export default Start;

