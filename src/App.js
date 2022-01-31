import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./Actions/index";

const App = () => {
  const State = useSelector((state) => state.numberState);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <div className="App-header">
          <h2>Redux Counter Application</h2>
          <h4>Created By Faryad Azim</h4>
          <div className="d-flex">
            <span>
              <button
                className="px-4 mx-2 btn btn-danger my-2 w-25 btn-sm "
                onClick={() => {
                  dispatch(decNumber(2));
                }}
              >
                -
              </button>
            </span>
            <span>
              <input
                type="text"
                className="form-control  form-control-sm my-2"
                value={State}
                style={{ textAlign: "center" }}
              />
            </span>
            <span>
              <button
                onClick={() => {
                  dispatch(incNumber(5));
                }}
                className="px-4 mx-2 btn btn-primary my-2 w-25 btn-sm d-inline"
              >
                +
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
