import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Percentage from './percentage';
import Rating from '@material-ui/lab/Rating';


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

    button: {
        width: "100%",
        backgroundColor: "#CCCCCC",
        borderRadius: "1 !important"
    },

    rating: {
        float: "right",
        color: "red",
        margin: "-3px 0 0 0"
    },

    ratingbox: {
        padding: "10px 0 20px 15px",
        fontSize: 14,
        width: "90%"
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

    const [value] = React.useState(3);



    return (
        <div>
            <div className={classes.root}>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div>
                        <Button onClick={handleClick} className={classes.button}>
                            RESPONDENT RANTINGS
                            <i className="material-icons" style={{ paddingLeft: 15 }}>
                                keyboard_arrow_down
                            </i>
                        </Button>
                        {open ? (
                            <Paper className={classes.paper}>
                                <div className={classes.ratingbox}>
                                    Overall rating
                                    <Rating value={value} readOnly className={classes.rating} />
                                </div>


                                <div className={classes.ratingbox}>
                                    Response Quality
                                    <Rating value={value} readOnly className={classes.rating} />
                                </div>

                                <div className={classes.ratingbox}>
                                    Video Quality<Rating value={value} readOnly className={classes.rating} />
                                </div>



                                <Percentage />
                            </Paper>
                        ) : null}
                    </div>
                </ClickAwayListener>
            </div>


        </div>
    );
}