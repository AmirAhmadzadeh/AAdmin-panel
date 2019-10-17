


import { useState } from 'react' ; 



export default  function(initVal = 0) { 
    const [state , setState] = useState(initVal) ;
    const setValue = (val) => {
        setState(val)
    }
    return [state ,setValue] ; 
} 