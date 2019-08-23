import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Menu from './components/menu';
import PlatForm from './components/platForm';




class Material extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="container" style={{ backgroundColor: "#DDDDDD", height: "100vh" }}>
                <Grid container spacing={2}>
                    <Grid item md={3} className={classes.b3}>
                        <div className={classes.mt10_ml10}>
                            <Button variant='contained' className={classes.button_email} >
                                SEND AN EMAIL
                            </Button>
                        </div>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                style={{ paddingLeft: 15 }}
                            />
                        </div>

                        <div className={classes.mt10_ml10} style={{ height: 40 }}>
                            <Menu />
                        </div>
                    </Grid>
                    <Grid item md={9}>
                        <div className={classes.platform}>
                            <PlatForm />
                        </div>

                    </Grid>
                </Grid>


            </div>
        );
    }

}

export default withStyles(styles)(Material);

