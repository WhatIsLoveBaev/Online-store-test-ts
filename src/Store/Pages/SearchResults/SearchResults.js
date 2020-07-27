import React from 'react';
import { connect } from 'react-redux'
import './SearchResults.scss'

import SaleLine from '../../Content/Sale/SaleLine'
import ProductElement from '../ProductsPage/ShowProducts/ProductElement'

const SearchResults = ({ results, DBState }) => {

    let filteredName = []
    let filteredKey = ''

    if (results && results.length > 1) {
        for (let key in DBState) {

            const res = results.toLowerCase()
            const keyL = key.toLowerCase()
    
            if (res.includes( keyL )) filteredKey = key 
            else if (res.includes( keyL.slice(0, -3) )) filteredKey = key
            //filteredKey
    
            DBState[key].productListArray.filter(
                elem => elem.name.toLowerCase().includes( res ) ? 
                filteredName.push(elem) : false
            )
            //filteredName  ??
        }
    }

    if (filteredName.length || filteredKey) {
        return (
            <div className='results_container'>
                <SaleLine />
                <div className="results">
                    <p>Результаты поиска по</p>
                    <h2>{results.charAt(0).toUpperCase() + results.slice(1)}</h2>
                </div>

                <span className='preview_product_counter'>
                    {`Найдено товаров: ${filteredName.length ? 
                        filteredName.length : 
                        DBState[filteredKey].productListArray.length}
                    `}
                </span>
                
                <div className="filter">Filter</div>
                
                <section className='preview_product_container'>
                    {
                        filteredName.length ? 
                        filteredName.map(elem => <ProductElement key={elem.id} elem={elem} />) :  
                        filteredKey ? 
                        DBState[filteredKey].productListArray.map(elem => <ProductElement key={elem.id} elem={elem} />) : false
                    }
                </section>
            </div>
        ) 
    } else return (
        <div>
            <SaleLine />
            <div className='no_results_container'>
                <div className="no_results">
                    <h2>Нам не удалось найти то, что вы ищите</h2>
                    <p>Проверьте написание или используйте в поиске производителя товара</p>
                </div>
            </div>
        </div>  
    )
}

const mapStateToProps = state => {
    return {
        DBState: state.DataBase,
        searchState: state.HeaderReducer.searchInput,
    }
}

//Search v1.0
export default connect(mapStateToProps)(SearchResults)

// в слове можно допустить максимум 2 ошибки