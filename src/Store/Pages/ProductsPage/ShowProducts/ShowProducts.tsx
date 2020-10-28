import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
/* import './ShowProducts.scss' */

import SaleLine from '../../../Content/Sale/SaleLine/index'
import ProductElement from '../ProductElement/ProductElement'
import {DataBaseType, productListArrayType} from "../../../../Reducers/DataBase/DataBase";
import { getDataBase } from "../../../../Reducers/DataBase/DataBaseSelectors";
import styles from './styles'

interface ShowProductsType {
    DBState: DataBaseType,
    idProduct: string,
    SelectedProduct: string,
    classes: any
}

const ShowProducts = ({ idProduct, SelectedProduct, DBState, classes }: ShowProductsType) => {

    const sale = idProduct === 'sale'
    const selected = idProduct && SelectedProduct
    
    let arraySale: Array<productListArrayType> = []
    let arraySelected: Array<productListArrayType> = []
    
    if (sale && SelectedProduct) {
        if (DBState[SelectedProduct] && DBState[SelectedProduct].saleGroup) {

            DBState[SelectedProduct].productListArray.forEach(elem => {
                if (elem.sale) arraySale.push(elem)
            })

        }
    } else if (sale) {
        for (let key in DBState) {
            if (DBState[key].saleGroup) {
                DBState[key].productListArray.forEach(elem => {
                    if (elem.sale) arraySale.push(elem)
                })
            }
        }
    } else if (selected) {
        DBState[idProduct].productListArray.forEach(elem => {
            if (elem.make.toLowerCase() === SelectedProduct.toLowerCase()) arraySelected.push(elem)
        })
    }

    const whatRender = sale ? arraySale : selected ? arraySelected : DBState[idProduct].productListArray

    const Show = whatRender.map(elem => <ProductElement key={elem.id} elem={elem} />)

    return (
        <>
            <SaleLine />
            <Grid container justify="center" className={classes.description}>
                <h2>{idProduct === 'sale' ? 
                    'Распродажа' : SelectedProduct ? 
                    `${idProduct} ${SelectedProduct}` : idProduct}
                </h2>
            </Grid>
            <Grid container justify="center" className={classes.counter}>
                {`Найдено товаров: ${whatRender.length}`}
            </Grid>
            <Grid container justify="center" className={classes.filter}>Filter</Grid>
            <Container className={classes.container}>
                <Grid container justify="center">
                    {Show}
                </Grid>
            </Container>
        </>
    )
}

const mapStateToProps = (state: { DataBase: DataBaseType} ) => (
    { DBState: getDataBase(state) }
)

export default connect(mapStateToProps, null)(withStyles(styles)(ShowProducts))