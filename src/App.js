import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Plus, Minus } from "./components/Action";
function App() {
  const mystate = useSelector((item) => item.ChangeSign);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h1 className="heading">INCREMENT/DECREMENT COUNTER</h1>
          <h4 className="title">Using react and redux</h4>
        </div>

        <div className="number">
          <a className="minus" onClick={() => dispatch(Minus())}>
            <span>-</span>
          </a>
          <input className="itext" type="text" value={mystate} />
          <a className="plus" onClick={() => dispatch(Plus())}>
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
