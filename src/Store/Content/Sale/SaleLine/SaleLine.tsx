import React from 'react';
import { connect } from 'react-redux'
import Link from '../../../../Link/index'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import styles from './styles'
import { DataBaseType } from "../../../../Reducers/DataBase/DataBase";

interface DBType { DBState: DataBaseType, classes: any}

const SaleLine = ({ DBState, classes }: DBType): JSX.Element => {

    let arrSale = []

    for (let key in DBState) {
        if (DBState[key].saleGroup) arrSale.push({productGroupId: 'Sale', productName: key})
    }

    let left = arrSale.length ? arrSale[0].productName : ''
    let right = arrSale.length ? arrSale[1].productName : ''
    return (
        <Grid container justify='center' className={classes.saleLineContainer}>
            <Container>
                <Grid container justify="space-around" alignItems="center" className={classes.saleLineWrapper}>
                    <Link to='/sale/phones'>
                        <Button className={classes.saleElement}>
                            <span>{left}</span>
                        </Button>
                    </Link>
                    <Grid item xs={3} className={classes.saleText}>Скидки до -50%</Grid>
                    <Link to='/sale/monitors'>
                        <Button className={classes.saleElement}>
                            <span>{right}</span>
                        </Button>
                    </Link> 
                </Grid>
            </Container>
        </Grid>
    )
}
const mapStateToProps = (state: { DataBase: DataBaseType }) => ({ DBState: state.DataBase })
     
export default connect(mapStateToProps)(withStyles(styles)(SaleLine))