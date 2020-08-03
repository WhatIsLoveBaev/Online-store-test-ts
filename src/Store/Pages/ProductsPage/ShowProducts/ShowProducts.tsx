import React from 'react'
import { connect } from 'react-redux'
import './ShowProducts.scss'

import SaleLine from '../../../Content/Sale/SaleLine/index'
import ProductElement from '../ProductElement/ProductElement'
import {DataBaseType, productListArrayType} from "../../../../Reducers/DataBase/DataBase";
import { getDataBase } from "../../../../Reducers/DataBase/DataBaseSelectors";

interface ShowProductsType {
    DBState: DataBaseType,
    idProduct: string,
    SelectedProduct: string
}

const ShowProducts = ({ idProduct, SelectedProduct, DBState }: ShowProductsType) => {

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
        <div>
            <SaleLine />
            <div className="description">
                <h2>{idProduct === 'sale' ? 
                    'Распродажа' : SelectedProduct ? 
                    `${idProduct} ${SelectedProduct}` : idProduct}
                </h2>
            </div>
            <span className='preview_product_counter'>
                {`Найдено товаров: ${whatRender.length}`}
            </span>
            <div className="preview_product_filter">Filter</div>
            <section className='preview_product_container'>{Show}</section>
        </div>
    )
}

const mapStateToProps = (state: { DataBase: DataBaseType} ) => (
    { DBState: getDataBase(state) }
)

export default connect(mapStateToProps, null)(ShowProducts)