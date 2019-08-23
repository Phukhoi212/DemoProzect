import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    textField: {
        height: 35,
        width: 200,
        border: "1px solid #BBBBBB",
    },
    menu: {
        height: "100%"
    },

    button: {
        marginTop: 5,
        height: 25,
        backgroundColor: "#000",
        marginLeft: 10,
        color: "#ffffff",
        
    },
    mt20_mr20:{
        marginTop: 20,
        marginRight: 20
    }

}));

export default function OutlinedTextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <form className={classes.container} autoComplete="off">
            <div className={classes.mt20_mr20}>

                <TextField
                    select
                    className={classes.textField}
                    value={values.currency}
                    onChange={handleChange('currency')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}

                >
                    {currencies.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>

                <Button variant="outlined" size="small" className={classes.button}>
                    PLATFORM
                </Button>
            </div>
        </form>
    );
}