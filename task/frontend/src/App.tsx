import "./styles.css";

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

function fetchPhotos() {
  // TODO: finish
  return fetch("https://jsonplaceholder.typicode.com/photos");
}

export default function App() {
  return (
    <div className="App">
      <PhotosList />
      <Task />
    </div>
  );
}

function PhotosList() {
  // Your implementation goes here
  return <></>
}

function Task() {
  // description of the task
  const text = `
  The goal is to implement design on image below using flexbox. 
  Don't forget the search box.
  Please handle loading and error state (can be simple text).
  We would also like to have it performant as list returns 5K entries.
  
  You can use tailwind, create .scss files or install dependencies. 

  IF time allows:
  1) hide .title on mobile screen, display two images per row
  2) update .title to "abc" on click for each row
  3) Make filter input work outside of main component (use context/store)
  `;
  return (
    <div>
      <p className="whitespace-pre">{text}</p>
      <h2 className="text-left">Design:</h2>
      <img src="./zadanko.png" alt="zadanko" className="border border-black" />
    </div>
  );
}
