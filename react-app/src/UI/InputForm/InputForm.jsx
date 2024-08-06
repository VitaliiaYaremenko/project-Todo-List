import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const InputForm = ({ id, label, variant, fullWidth, value, onChange, onBlur, error, helperText, ...props }) => {
    return (
        <TextField
            id={id}
            label={label}
            variant={variant}
            fullWidth={fullWidth}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            {...props}
        />
    );
};

InputForm.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string,
    fullWidth: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.node,
};


export default InputForm;

