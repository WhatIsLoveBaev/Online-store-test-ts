import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ShowProducts from './ShowProducts/index'
import ShowElement from './ShowElement/index'
import PageNotFound from '../PageNotFound/index'
import {DataBaseType, defaultProductList, productListArrayType} from "../../../Reducers/DataBase/DataBase";
import { getDataBase } from '../../../Reducers/DataBase/DataBaseSelectors'

interface ValidationType {
    DBState: DataBaseType,
    ProductId: any,
    SelectedId: any
}


const ProductsPageValidation = ({ ProductId, SelectedId, DBState }: ValidationType): JSX.Element => {

    const pageId = ProductId ? ProductId.toLowerCase() : ''
    const selectId = SelectedId ? SelectedId.toLowerCase() : ''

    let validProduct: string = ''
    let validSelected: string = ''
    let validElem: productListArrayType = defaultProductList
    let saleAndName: string = ''

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
        const product = !!DBState[validProduct]
        const sale = validProduct === 'sale' ? 'sale' : validProduct
        
        if (product || sale) return <ShowProducts idProduct={validProduct} SelectedProduct={''} DBState={{}} />
        else return <PageNotFound />
    }

    const SelectedProductsFunc = () => {
        
        const name = validElem ? validElem.name : ''

        const selectedNameFilter = DBState[validProduct] ? 
        DBState[validProduct].productListArray.filter(elem => elem.name === name) : []   //???

        const fromSaleToElem = validProduct === 'sale' && saleAndName && validElem
        const saleSelected = validProduct === 'sale' && DBState[validSelected] ? validSelected : ''
        const toSelectedPage = validProduct && validSelected && !selectedNameFilter.length

        if (fromSaleToElem) return <Redirect to={`/${saleAndName}/${validElem.name}`} />

        else if (saleSelected) return <ShowProducts idProduct={validProduct} SelectedProduct={validSelected} DBState={{}} />

        else if (selectedNameFilter.length) return <ShowElement key={validElem.id} elem={validElem} />

        else if (toSelectedPage) return <ShowProducts idProduct={validProduct} SelectedProduct={validSelected} DBState={{}} />
        
        else return <PageNotFound />
    }


    if (ProductId && SelectedId) return <SelectedProductsFunc />
    else if (ProductId) return <ProductsFunc />
    else return <PageNotFound />
}


const mapStateToProps = (state: {DataBase: DataBaseType}) => ({ DBState: getDataBase(state) })

export default connect(mapStateToProps, null)(ProductsPageValidation)