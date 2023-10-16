import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { Decrement, Increment } from '../../redux/action/counter.action';

function Counter(props) {
    const c1= useSelector((state)=>state.counter)

    //useDispatch() is a Hook:-
    const dispatch=useDispatch()

    const handleincrement=()=>{
        dispatch(Increment())
    }

    const handledecrement=()=>{
        dispatch(Decrement())

    }
    return (
        <div>
            <br></br>
            <button onClick={handleincrement}>+</button>
            {c1.count}
            <button onClick={handledecrement}>-</button>
        </div>
    );
}

export default Counter;