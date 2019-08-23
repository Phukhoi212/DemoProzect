import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(0),
        width: "85%",
        margin: "0 auto",
        paddingBottom: 10
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        age: '',
        name: 'hai',
    });



    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }


    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
                <Select
                    value={values.age}
                    onChange={handleChange}
                    name="age"
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value="" disabled>
                        Country
          </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>

            </FormControl>

        </form>
    );
}