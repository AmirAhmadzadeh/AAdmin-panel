


import { useState } from 'react' ; 



export default  function(initVal = false ) { 
    const [state , setState] = useState(initVal) ;
    const toggle = () =>     setState(!state)
    
    const setValue = (v) =>  setState(v)  

    return [state ,toggle, setValue ] ; 
} 