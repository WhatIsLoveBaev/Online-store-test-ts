import React from 'react'
import { connect } from 'react-redux'
import Link from '../../../../Link/index'
import { DBStateType } from '../../../../Reducers/DataBase/DataBase'

import './SaleBlock.scss'



const SaleBlock = ({ DBState }: any) => {


    let arrSale: Array<any> = []

    for (let key in DBState) {
        if (DBState[key].saleGroup && DBState[key].examplesForContent) arrSale.push({
            productName: key, productEngName: DBState[key].engGroupName, exampleContent: DBState[key].examplesForContent.img
        })
    }

    return (
        <div className='sale_block_container'>
            <div className="sale_block">

                <div className="sb_header">
                    <Link to='/sale'>
                        <h2 className="sb_header_text">
                            <span className='first'>Скидки до -50% <br /> уже здесь!</span>
                        </h2>
                    </Link>
                </div>

                <ul className="sb_examples">
                    {arrSale.map(elem => (
                        <Link key={elem.productEngName} to={`/sale/${elem.productEngName}`}>
                            <li className="sb_example"  >
                                <div className="sb_img">
                                    <img className='img' src={elem.exampleContent} alt=""/>
                                </div>
                                <div className="sb_text"><span>{elem.productName}</span></div>
                            </li>
                        </Link>
                    ))}
                </ul>
                
                <Link to='/sale'>
                    <button className="sb_button">Купить</button>
                </Link>

            </div>
        </div>
    )
}
const mapStateToProps = (state): any => ({ DBState: state.DataBase })

export default connect(mapStateToProps)(SaleBlock)