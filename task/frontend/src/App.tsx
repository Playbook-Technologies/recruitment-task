import "./styles.css";

export type Workout = any;

function fetchWorkouts() {
    /** TODO: finish */
    return fetch("http://localhost:3125/workouts");
}

export function App() {
    return (
        <div className="App">
            <WorkoutsList />
        </div>
    );
}

function WorkoutsList() {
    /** TODO: Your implementation goes there */
    return <>Workouts List</>;
}
