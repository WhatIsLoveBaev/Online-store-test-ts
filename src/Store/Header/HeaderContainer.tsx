import React, { useState } from 'react'
import { connect } from 'react-redux'
import Link from '../../Link/index'
import { DataBaseType } from "../../Reducers/DataBase/DataBase";
import Header from './Header'
import { getDataBase } from '../../Reducers/DataBase/DataBaseSelectors'
import './Header.scss'

interface DBStateType { DBState: DataBaseType }

interface DBSaleType {
    productMakers: Array<string>,
    productExamples: Array<{ id: string,
        exampleMake: string,
        example: string }>
}


const HeaderContainer = ({ DBState }: DBStateType) => {


    const [modal, setModal] = useState(false)
    const [timeId, setTime] = useState(0)
    const [elemTarget, setElemTarget]: any = useState()

    let DBSale: DBSaleType = {
        productMakers: [],
        productExamples: [{
            id: 'saleExample',
            exampleMake: '',
            example: 'https://beauty-hamster.ru/wp-content/uploads/2018/12/asos-sale-18.jpg'
        }]
    }

    for (let key in DBState) {
       if (DBState[key].saleGroup) DBSale.productMakers.push(key)
    }

    const expandedList = (): JSX.Element => {
        const sale = elemTarget === 'Распродажа'
        const headingMakers = sale ? 'Список товаров со скидками' : 'Производитель товара'

        const { productMakers, productExamples } = DBSale

        const Makers = sale ? productMakers : DBState[elemTarget].productMakersList
        const Examples = sale ? productExamples : DBState[elemTarget].examplesList
        const eng = sale ? 'sale' : DBState[elemTarget].engGroupName

        const makes = Makers.map(elem => (
            <Link to={`/${eng}/${sale ? DBState[elem].engGroupName : elem.toLowerCase()}`} key={elem}>
                <li className='expanded_list_item' onClick={() => offTime()} >{elem}</li>
            </Link>
        ))
        
        const item = Examples.map(elem => (
            <li key={elem.id} onClick={() => offTime()} className="random_item">
                <Link to={`/${eng}/${elem.exampleMake.toLowerCase()}`}>
                    <div className='random_img'>
                        <img src={elem.example} alt={elem.exampleMake}/>
                    </div>
                    <span className='random_make'>{elem.exampleMake}</span> 
                </Link>
            </li> 
        ))
        
        return (
            <div className="expanded_list_bcg">
                <div className="expanded_list_container" onMouseEnter={() => setModal(true)} onMouseLeave={() => offTime()}>
                    <ul className='expanded_list'>
                        <li className="expanded_list_sort">{headingMakers}</li>
                        <Link to={`/${eng}`}>
                            <li className='expanded_list_item' onClick={() => offTime()}>Смотреть все</li>
                        </Link>
                        {makes}
                    </ul>
                    <ul className='random_item_wrapper'>
                        {item}     
                    </ul>
                </div>
            </div>     
        )  
    }

    const productList = (): JSX.Element => {
        
        const keysList = Object.keys(DBState).map(elem => (
            <span key={elem} className='product_element' onMouseEnter={(e:React.MouseEvent<HTMLSpanElement>) => onTime(e)}>{elem}</span>
        ))
        return (
            <div className="product_list_container">
                <div className='product_element_wrapper' onMouseLeave={() => offTime()} >
                    <button><span className="product_element sale" onMouseEnter={(e) => onTime(e)}>
                        Распродажа
                    </span></button>
                    {keysList}
                </div>
            </div>
        )
    }
    const onTime = (e: React.MouseEvent<HTMLSpanElement>) => {
        clearTimeout(timeId)
        setTime( setTimeout( ()=> setModal(true), 500) )
        setElemTarget(e.currentTarget.textContent)
    }
    const offTime = (): void => {
        clearTimeout(timeId)
        setModal(false)
    }

    return <Header modal={modal ? expandedList() : undefined} productList={productList()} />
}

const mapStateToProps = (state: { DataBase: DataBaseType }) => (
     { DBState: getDataBase(state) } 
)

export default connect(mapStateToProps)(HeaderContainer)
