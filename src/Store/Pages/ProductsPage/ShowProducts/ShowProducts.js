import React from 'react'
import { connect } from 'react-redux'
import './ShowProducts.scss'

import SaleLine from '../../../Content/Sale/SaleLine'
import ProductElement from './ProductElement'


const ShowProducts = ({ idProduct, SelectedProduct, DBState }) => {

    const sale = idProduct === 'sale'
    const selected = idProduct && SelectedProduct
    

    let arraySale = []
    let arraySelected = []
    
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

    const Show = whatRender.map(elem => <ProductElement key={elem.id} elem={elem}/>)

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

const mapStateToProps = state => ({ DBState: state.DataBase })

export default connect(mapStateToProps)(ShowProducts)