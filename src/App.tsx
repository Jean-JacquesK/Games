import { GamesList } from "./components/Games/GamesList";
import { Genre } from "./components/Genre/Genre";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className='d-flex justify-content-around flex-wrap'>
          <Genre />
          <GamesList />
        </div>
      </div>
    </>
  );
}

export default App;
