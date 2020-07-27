import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ShowProducts from './ShowProducts'
import ShowElement from './ShowElement'
import PageNotFound from '../PageNotFound'


const ProductsPageValidation = ({ ProductId, SelectedId, DBState }) => {

    const pageId = ProductId ? ProductId.toLowerCase() : false
    const selectId = SelectedId ? SelectedId.toLowerCase() : false

    let validProduct = ''
    let validSelected = ''
    let validElem = {}
    let saleAndName = ''

    for (let key in DBState) {
        const groupEngName = DBState[key].engGroupName.toLowerCase()
        const productMake = DBState[key].productMakersList.filter(elem => elem.toLowerCase() === selectId)
        const productName = DBState[key].productListArray.filter(elem => elem.name.toLowerCase().split('/')[0] === selectId )


        if (productName.length && pageId === 'sale') saleAndName = DBState[key].engGroupName

        if (pageId === groupEngName && selectId === groupEngName) validProduct = ''
        else if (pageId === groupEngName) validProduct = key
        else if (pageId === 'sale') validProduct = 'sale'

        if (selectId === groupEngName) validSelected = key
        else if (productMake.length) validSelected = productMake.join('')

        if (productName.length) validElem = Object.assign({}, ...productName)

    }
    const ProductsFunc = () => {
        const product = DBState[validProduct] ? true : false
        const sale = validProduct === 'sale' ? 'sale' : validProduct
        
        if (product || sale) return <ShowProducts idProduct={validProduct} />
        else return <PageNotFound />
    }

    const SelectedProductsFunc = () => {
        
        const name = validElem ? validElem.name : ''

        const selectedNameFilter = DBState[validProduct] ? 
        DBState[validProduct].productListArray.filter(elem => elem.name === name) : false   //???

        const fromSaleToElem = validProduct === 'sale' && saleAndName && validElem
        const saleSelected = validProduct === 'sale' && DBState[validSelected] ? validSelected : ''
        const toSelectedPage = validProduct && validSelected && !selectedNameFilter.length

        if (fromSaleToElem) return <Redirect to={`/${saleAndName}/${validElem.name}`} />

        else if (saleSelected) return <ShowProducts idProduct={validProduct} SelectedProduct={validSelected} />

        else if (selectedNameFilter.length) return <ShowElement key={validElem.id} elem={validElem} />

        else if (toSelectedPage) return <ShowProducts idProduct={validProduct} SelectedProduct={validSelected} />
        
        else return <PageNotFound />
    }


    if (ProductId && SelectedId) return <SelectedProductsFunc />
    else if (ProductId) return <ProductsFunc />
    else return <PageNotFound />
}


const mapStateToProps = state => ({ DBState: state.DataBase })

export default connect(mapStateToProps)(ProductsPageValidation)