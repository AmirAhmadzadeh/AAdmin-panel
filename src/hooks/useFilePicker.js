


import { useState } from 'react' ; 



export function useFilePicker(initVal = 0) { 
    const [state , setState] = useState(initVal) ;
    const setValue = (val) => {
        setState(val)
    }
    return [state ,setValue] ; 
} 