import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const PreviewFoundForm = () => {

    const dispatch = useDispatch()
    const anket = useSelector(state => state.anketa)

    return (
        <>
          <h1>Preview</h1>
            <img src={anket.images[3]}/>
            <button onClick={() => dispatch({type: 'SET_ANKET', payload: {finish: false, edit: false}})}>btn</button>
        </>
    );
};

export default PreviewFoundForm;