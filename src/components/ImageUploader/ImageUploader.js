import { ImagePicker } from 'react-file-picker' ; 
import React from 'react';
import { Button } from '@material-ui/core'  ; 
export default function ({imageSelected}) {
    return (
        <ImagePicker
            extensions={['jpg', 'jpeg', 'png']}
            dims={{ minWidth: 100, maxWidth: 500, minHeight: 100, maxHeight: 500 }}
            onChange={base64 => {  console.log('booooow');   }}
                // onError={errMsg => (/* do something with err msg string */)
                >
                <Button
                    fullWidth
                    variant="outlined"
                    style={{ padding: "1.4rem 0", margin: "3rem 0", fontSize: "1.5rem" }}
                    color="primary"
                >
                    برای انتخاب تصویر دوره اینجا کلیک کنید
            </Button>
        </ImagePicker>
            )
}