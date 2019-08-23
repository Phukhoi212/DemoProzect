import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import Select_Countries from '../../Countries';
import TextField from '@material-ui/core/TextField';
import Range from '../../Range';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
    },
    paper: {
        position: 'inherit',
        top: 36,
        right: 0,
        left: 0,
        paddingBottom: 15
    },
    fake: {
        backgroundColor: grey[200],
        height: theme.spacing(1),
        margin: theme.spacing(2),
        // Selects every two elements among any group of siblings.
        '&:nth-child(2n)': {
            marginRight: theme.spacing(3),
        },

    },
    button: {
        width: "100%",
        backgroundColor: "#CCCCCC",
        borderRadius: "1 !important"
    },

    textField: {
        marginLeft: 25,
        padding: "0 !important",
        position: "relative"
    },

}));

export default function ClickAway() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClick = () => {
        setOpen(prev => !prev);

    };

    const handleClickAway = () => {
        setOpen(false);
    };



    return (
        <div>
            <div className={classes.root}>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div>
                        <Button onClick={handleClick} className={classes.button}>
                            DEMOGRAPHICS
                            <i className="material-icons" style={{ paddingLeft: 15 }}>
                                keyboard_arrow_down
                            </i>
                        </Button>
                        {open ? (
                            <Paper className={classes.paper}>
                                <Select_Countries />

                                <Select_Countries />

                                <TextField
                                    className={classes.textField}
                                    placeholder="ENTER ZIPCODE"
                                    margin="normal"
                                    variant="outlined"
                                />

                                <Select_Countries />

                                <Select_Countries />

                                <Select_Countries />

                                <Range />
                            </Paper>
                        ) : null}
                    </div>
                </ClickAwayListener>
            </div>


        </div>
    );
}