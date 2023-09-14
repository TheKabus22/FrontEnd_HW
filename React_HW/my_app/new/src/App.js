import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button text='Click on me!' sayHi={sayHi}></Button>
    </div>
  );
}
const sayHi = () => console.log('Good news, everyone!')
export default App;
