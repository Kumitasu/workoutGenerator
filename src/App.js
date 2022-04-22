import { Route, Routes} from "react-router-dom";
import "./index.scss"

import Login from "./pages/Login";
import Header from "./components/Header";
import Start from "./pages/Start";
import Workout from "./pages/Workout";
import MyWorkouts from "./pages/MyWorkouts";
import AddExercises from "./pages/AddExercises";
import WorkoutList from "./pages/WorkoutList";



function App () {

    return (
        <div>
            <Header />
            <main>
               <Routes>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/' element={<Start />} />
                    <Route path='/MyWorkouts' element={<MyWorkouts />} />
                    <Route path='/AddExercises' element={<AddExercises />} />
                    <Route path='/Workout' element={<Workout />} />
                    <Route path='/WorkoutList' element={<WorkoutList />} />
                </Routes>
            </main>
        </div>



  );
}

export default App;
