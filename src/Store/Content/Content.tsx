import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'

import Slider from '../Slider/index'
import Collage from './Collage/index'
import SaleLine  from './Sale/SaleLine/index'
import SaleBlock from './Sale/SaleBlock/index'

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: theme.palette.warning.main
    }
}))

const Content = () => {
    const classes = useStyles()
    return (
        <>
            
                <Container disableGutters={true} fixed >
                    <Grid container spacing={3} justify={'center'} className={classes.grid}>
                        <Grid item xs={12} sm={4} md={3} lg={2} xl={1}>
                            <Paper className={classes.paper}>First</Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} lg={2} xl={1}>
                            <Paper className={classes.paper}>Second</Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} lg={2} xl={1}>
                            <Paper className={classes.paper}>Third</Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} lg={2} xl={1}>
                            <Paper className={classes.paper}>Third</Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} lg={2} xl={1}>
                            <Paper className={classes.paper}>Third</Paper>
                        </Grid>
                    </Grid>
                </Container>
                
            
            <SaleLine />
            <SaleBlock />
            <Slider />
            <Collage />
        </>
    ) 
}

export default Content
