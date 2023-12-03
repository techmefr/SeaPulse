import { useState } from "react";
import Counter from "./components/counter/Counter";
import IncrementButton from "./components/counter/IncrementButton";
import DecrementButton from "./components/counter/DecrementButton";
import Arena from "./components/arena/Arena";

function App() {
  const [points, setPoints] = useState(0);

  const handleIncrement = () => {
    setPoints(points + 1);
  };

  const handleDecrement = () => {
    setPoints(points - 1);
  };

  return (
    <div>
      <h1>Titre de votre Application</h1>
      <Counter points={points} />
      <div>
        <IncrementButton handleClick={handleIncrement} />
        <DecrementButton handleClick={handleDecrement} />
      </div>
      <Arena />{" "}
    </div>
  );
}

export default App;
