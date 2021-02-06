import React from 'react';
import { useField } from "formik";

const Input = (props) => {
    const [field, meta] = useField(props.name);
    const error = meta.touched && meta.error;

    return(
        <div className="form-group py-4">
            <label className="text-sm uppercase">{props.label}</label>
            <input {...field} {...props} className="w-full py-2 px-4 leading-tight border rounded"/>
            {error && <p className="text-sm text-red-700" >{error }</p>}
        </div>
    );
};

export default Input;