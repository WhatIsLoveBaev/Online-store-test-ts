import React from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import SaleLine from '../../Content/Sale/SaleLine/index'
import ProductElement from '../ProductsPage/ProductElement/ProductElement'
import {DataBaseType, productListArrayType} from "../../../Reducers/DataBase/DataBase";
import {searchInputType} from "../../../Reducers/Header/HeaderReducer";
import { getHeaderSearch } from '../../../Reducers/Header/HeaderSelector'
import { getDataBase } from '../../../Reducers/DataBase/DataBaseSelectors';
import styles from './styles';

interface SearchResultsType {
    DBState: DataBaseType,
    results: string,
    classes: any
}

const SearchResults = ({ results, DBState, classes }: SearchResultsType) => {

    let filteredName: Array<productListArrayType> = []
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
            <Grid container direction='column' alignItems="center" >
                <SaleLine />
                <div className={classes.results}>
                    <p>Результаты поиска по</p>
                    <h2>{results.charAt(0).toUpperCase() + results.slice(1)}</h2>
                </div>

                <span className={classes.counter}>
                    {`Найдено товаров: ${filteredName.length ? 
                        filteredName.length : 
                        DBState[filteredKey].productListArray.length}
                    `}
                </span>
                
                <div className={classes.filter}>Filter</div>
                <Container className={classes.container}>
                    <Grid container justify='center'>
                        {filteredName.length ? 
                        filteredName.map(elem => <ProductElement key={elem.id} elem={elem} />) :  
                        filteredKey ? 
                        DBState[filteredKey].productListArray.map(elem => <ProductElement key={elem.id} elem={elem} />) : false}
                    </Grid>
                </Container>
            </Grid>
        ) 
    } else return (
        <div>
            <SaleLine />
            <Grid container justify="center" alignItems='center' className={classes.noResultsContainer}>
                <div className={classes.noResults}>
                    <h2>Нам не удалось найти то, что вы ищите</h2>
                    <p>Проверьте написание или используйте в поиске производителя товара</p>
                </div>
            </Grid>
        </div>  
    )
}
interface mapStateToPropsTypes {
    DataBase: DataBaseType
    HeaderReducer: searchInputType
}

const mapStateToProps = (state: mapStateToPropsTypes) => {
    return {
        DBState: getDataBase(state),
        searchState: getHeaderSearch(state),
    }
}

//Search v1.0
export default connect(mapStateToProps)(withStyles(styles)(SearchResults))

// в слове можно допустить максимум 2 ошибки