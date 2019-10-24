


import { useState } from 'react';



export default function (initVal = []) {

    const [state, setState] = useState(initVal);

    const setArrayValue = (arr) => {
        setState(arr)
    }

    return [state, setArrayValue];
} 