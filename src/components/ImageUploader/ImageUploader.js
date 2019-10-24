import { ImagePicker } from 'react-file-picker'
import React from 'react' ;

export default function () {
    return (
        <ImagePicker
            extensions={['jpg', 'jpeg', 'png']}
            dims={{ minWidth: 100, maxWidth: 500, minHeight: 100, maxHeight: 500 }}
        // onChange={base64 => (/* do something with base64 encoded string */)
        // onError={errMsg => (/* do something with err msg string */)
        >
            <button>
                Click to upload image
    </button>
        </ImagePicker>
    )
}