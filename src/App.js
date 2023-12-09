import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from './Action/index'
import './App.css'
function App() {
    const mystate = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>Increment & Decrement Counter</h1>
            <h4> using react redux </h4>

            <div className="quantity">
                <button className="quantity__minus" title="Decrement"
                onClick={()=>dispatch(decNumber())}>-</button>
                <input type="text" name="quantity" className='quantity__input' value={mystate} />
                <button className="quantity__plus" title="Increment"
                    onClick={() => dispatch(incNumber())}>+</button>

            </div>
        </div>
    )
}

export default App;