import React from 'react';
import { TextField } from '@mui/material';

const InputBox = (props) => {
    const { value, onChange, type, placeholder } = props;

    return (
        <TextField
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            variant="outlined"
            required
        />
    );
};

export default InputBox;
