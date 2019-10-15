import Aux from "../../hoc/Aux";
import CKEditor from "ckeditor4-react";
import React from 'react'

const editor = (props) => {
    return (
        <Aux>
            <CKEditor
                data={props.data}
                onChange={props.chagedData} 
                events={{
                    
                }}
            />


        </Aux>
    );
}


export default editor;