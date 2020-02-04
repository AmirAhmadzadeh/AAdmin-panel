


import { useState } from 'react' ; 



export function useInputState(initVal = '') { 
    const [state , setState] = useState(initVal) ;
   
    const setValue = (val) => {
        setState(val)
    }
    return [state ,setValue] ; 
} 