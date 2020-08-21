import React from 'react'
import { connect } from 'react-redux'
import Link from '../../../../Link/index'
import { DataBaseType } from "../../../../Reducers/DataBase/DataBase";
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';

import styles from './styles'
/* import './SaleBlock.scss' */

interface arrSaleType { productName: string, productEngName: string, exampleContent: string }
interface DBType { DBState: DataBaseType, classes: any}

const SaleBlock = ({ DBState, classes }: DBType): JSX.Element => {

    let arrSale: Array<arrSaleType> = []

    for (let key in DBState) {
        const DBKey = DBState[key]
        if (DBKey.saleGroup && DBKey.examplesForContent) arrSale.push({
            productName: key, productEngName: DBKey.engGroupName, exampleContent: DBKey.examplesForContent.img
        })
    }

    return (
        <Grid className={classes.saleBlockContainer}>

            <Container  className={classes.saleBlock}>
                <Grid container>
                    <Grid item xs={12} className={classes.sbHeader}>
                        <Link to='/sale'>
                            <h2 className={classes.sbHeaderText}>
                                <span>Скидки до -50% <br /> уже здесь!</span>
                            </h2>
                        </Link>
                    </Grid>
                </Grid>

                <Grid container spacing={3} wrap='wrap' justify='center' className={classes.sbExamples}>
                    {arrSale.map(elem => (
                        <Grid item xs={6} sm={3} md={2} lg={2} key={elem.productEngName}>
                            
                            <Link to={`/sale/${elem.productEngName}`}>
                            <Card className={classes.sbExample}>

                                    <div className={classes.sbImg}>
                                        <img src={elem.exampleContent} alt=""/>
                                    </div>
                                    <div className={classes.sbText}><span>{elem.productName}</span></div>

                                </Card>
                            </Link>
                            
                            
                        </Grid>
                    ))}
                </Grid>
                <Link to='/sale'><Button className={classes.sbButton}>Купить</Button></Link>
            </Container>
        </Grid>
    )
}
const mapStateToProps = (state: { DataBase: DataBaseType }) => ({ DBState: state.DataBase })

export default connect(mapStateToProps)(withStyles(styles)(SaleBlock))