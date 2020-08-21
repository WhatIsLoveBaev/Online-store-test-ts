import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import Slider from '../Slider/index'
import Collage from './Collage/index'
import SaleLine  from './Sale/SaleLine/index'
import SaleBlock from './Sale/SaleBlock/index'

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles({
    grid: {
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: '8px',
        textAlign: 'center',
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark,
        display: (props: { display: string }) => props.display
    }
})

const Content = (props: any) => {
    const classes = useStyles(props)
    return (
        <>
            
        {/*     <Container disableGutters={true} fixed >
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
            </Container> */}
                
            
            <SaleLine />
            {<SaleBlock />}
            <Slider />
            <Collage />
        </>
    ) 
}

Content.defaultProps = {
    display: 'block',
    backgroundColor: 'blue'
}

export default Content
