import './App.css';
import Card from "./components/Card";
import data from "./components/data";

function App(data) {
  return (
    <div>
      <Card course={data}></Card>
      <Card course={data} isMyCource={true}></Card>
    </div>
  );
}

export default App;