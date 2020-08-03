import React from 'react';
import { connect } from 'react-redux'
import Link from '../../../../Link/index'
import './SaleLine.scss'
import { DataBaseType } from "../../../../Reducers/DataBase/DataBase";

interface DBType { DBState: DataBaseType}

const SaleLine = ({ DBState }: DBType): JSX.Element => {

    let arrSale = []

    for (let key in DBState) {
        if (DBState[key].saleGroup) arrSale.push({productGroupId: 'Sale', productName: key})
    }
        
    /* let arrSaleFilter = arrSale.filter((item, pos) => arrSale.indexOf(item) === pos) */

    let left = arrSale.length ? arrSale[0].productName : ''
    let right = arrSale.length ? arrSale[1].productName : ''
    return (
        <div className='sale_line_container'>
            <div className="sale_line">

                <div className="sale_wrapper">
                    <Link to='/sale/phones'>
                        <span className='sale_element'>{left}</span>
                    </Link>
                </div>

                <span className="sale_text">Скидки до -50%</span>

                <div className="sale_wrapper">
                    <Link to='/sale/monitors'>
                        <span className='sale_element'>{right}</span>
                    </Link> 
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state: { DataBase: DataBaseType }) => ({ DBState: state.DataBase })
     
export default connect(mapStateToProps)(SaleLine)