import "./styles.css";

export type Workout = {
    id: number;
    name: string;
    creator_id: number;
};

function fetchPhotos() {
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
