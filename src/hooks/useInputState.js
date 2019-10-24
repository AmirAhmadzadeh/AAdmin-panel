


import { useState } from 'react' ; 



export default  function(initVal = '') { 
    const [state , setState] = useState(initVal) ;
   
    const setValue = (val) => {
        setState(val)
    }
    return [state ,setValue] ; 
} 