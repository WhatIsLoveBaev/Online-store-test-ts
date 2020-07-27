import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { addLike } from '../../../../Actions/LikedActions.ts'
import './ShowElement.scss'

const ShowElement = ({ elem, onLiked }) => {

    const [activeLike, setActiveLike] = useState('')
    let timeId = ''
    useEffect(() => {

        if (activeLike) { onLiked(elem); timeId = setTimeout(() => setActiveLike(''), 400) }
        

        return function cleanup() { clearTimeout(timeId) }
    })
    const {name, sale, price, img, shortDescription } = elem

    
    const priceWithSale = sale ? 
    `${ ('' + Math.round( ( price.split(' ').join('') / 100 * (100-sale) ) / 10 ) * 10)
    .replace(/(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g, (m, s1, s2) =>  s2 || (s1 + ' ') ) }` : ''

    const salePriceDiv = priceWithSale ? <span className="sale">{price + ' руб.'}</span> : ''

    const like = () => {
        
        
    }

    return (
        <div className='item_container'>

            <div className="item_image">
                <img src={img} alt={name}/>
            </div>

            <div className="item_description">
                <span className="item_name">{name}</span>
                <div className="item_price">
                    {salePriceDiv}
                    <span className={`price ${priceWithSale ? 'red_price' : ''}`} >
                        {`${priceWithSale ? `${priceWithSale} руб. (-${sale}%)` : `${price} руб.`}`}
                    </span>
                </div>
                <ul className="item_short_desc">
                    {shortDescription.map(desc => (
                        <li key={desc}>{desc.charAt(0).toUpperCase() + desc.substr(1)}</li>
                    ))}
                </ul>
                <div className="basket_and_liked">
                    <span className='add_to_basket'>Добавить в корзину</span>
                    <div className='add_to_liked' onClick={() => setActiveLike('act')}><span className={activeLike}>&#10084;</span></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ( { DBState: state.DataBase } ) 

const mapDispatchToProps = dispatch => ( 
    {
        onLiked: payload => dispatch( addLike(payload) )
    } 
)

export default connect(mapStateToProps, mapDispatchToProps)(ShowElement)