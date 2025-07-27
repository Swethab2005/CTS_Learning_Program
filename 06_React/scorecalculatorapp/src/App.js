import './App.css';
import { CalculateScore } from './Components/CalculateScore';
function App() {
  return (
    <div>
      <CalculateScore Name={"Swetha"}
      School={"Panimalar Engineering College"}
      total={111}
      goal={3}
      />
    </div>
  );
}

export default App;
