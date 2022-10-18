import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from './counterSlice'

export function Counter() {
    const [action, setAction] = useState();
    const [value, setValue] = useState();
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    var handleAction = () => {
        if (value !== "" && action === "inc")
            dispatch(incrementByAmount(Number(value)))
        else if (value !== "" && action === "dec")
            dispatch(decrementByAmount(Number(value)))
    }
    return (
        <div>
            <div>

                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <h1> {count} </h1>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
            <div className='divClass'>
                <input type="number" onChange={(event) => setValue(event.target.value)} />
                {" "}
                <select onChange={(event) => setAction(event.target.value)}>
                    <option>-action-</option>
                    <option value="inc">increment</option>
                    <option value="dec">decrement</option>
                </select>
                <button onClick={handleAction}>Go</button>
            </div>
        </div>
    )
}