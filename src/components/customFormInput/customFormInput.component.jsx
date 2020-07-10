import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';

const CustomFormInput= ({...props}) => {
    const {label, name, value, disabled, handleOnChange, type} = props;
    return (
        <div className='CustomFormInput'>
            <FormGroup>
                <Label for={label}>{label}</Label>
                <Input name={name} onChange={handleOnChange} value={value} disabled={disabled} type={type}/>
            </FormGroup>
        </div>
    )
}

export default CustomFormInput;