


import { useState } from 'react';



export  function useArrayValueState (initVal = []) {

    const [state, setState] = useState(initVal);

    const setArrayValue = (arr) => {
        setState(arr)
    }

    return [state, setArrayValue];
} 