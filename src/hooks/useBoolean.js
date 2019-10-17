


import { useState } from 'react' ; 



export default  function(initVal = false ) { 
    const [state , setState] = useState(initVal) ;
    const setValue = () => {
        setState(!state)
    }
    return [state ,setValue] ; 
} 