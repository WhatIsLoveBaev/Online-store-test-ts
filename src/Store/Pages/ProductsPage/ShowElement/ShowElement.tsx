import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { addLike } from '../../../../Actions/LikedActions'
import {productListArrayType} from "../../../../Reducers/DataBase/DataBase";
import {elementStateType} from "../../../../Reducers/Liked/Liked";
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import styles from './styles';

interface ShowElementType {
    onLiked: (e: productListArrayType) => void,
    elem: productListArrayType,
    classes: any
}

const ShowElement = ({ elem, onLiked, classes }: ShowElementType) => {

    const [activeLike, setActiveLike] = useState('')
    let timeId: number = 0
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (activeLike) { onLiked(elem); timeId = setTimeout(() => setActiveLike(''), 400) }
        return function cleanup() { clearTimeout(timeId) }
    })
    const {name, sale, price, img, shortDescription } = elem
    
    const priceWithSale = sale ? 
    `${ ('' + Math.round( ( Number(price.split(' ').join('')) / 100 * (100-Number(sale)) ) / 10 ) * 10)
    .replace(/(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g, (m, s1, s2) =>  s2 || (s1 + ' ') ) }` : ''

    const salePriceDiv = priceWithSale ? <span className={classes.sale}>{price + ' руб.'}</span> : ''

    return (
        <Container >
            <Grid container justify='space-around' className={classes.itemContainer}>
                <Grid item xs={4} className={classes.itemImage}>
                    <img src={img} alt={name}/>
                </Grid>
                <Grid item xs={6} className={classes.itemDescription}>
                    <span className={classes.itemName}>{name}</span>
                    <div className={classes.itemPrice}>
                        {salePriceDiv}
                        <span className={`${classes.price} ${priceWithSale ? classes.redPrice : ''}`} >
                            {`${priceWithSale ? `${priceWithSale} руб. (-${sale}%)` : `${price} руб.`}`}
                        </span>
                    </div>
                    <ul className={classes.itemShortDesc}>
                        {shortDescription.map(desc => (
                            <li key={desc}>{desc.charAt(0).toUpperCase() + desc.substr(1)}</li>
                        ))}
                    </ul>
                    <div className={classes.basketAndLiked}>
                        <Button className={classes.addToBasket}>Добавить в корзину</Button>
                        <div className={classes.addToLiked} onClick={() => setActiveLike('act')}><span className={`${activeLike ? classes.act : ''}`}>&#10084;</span></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

const mapDispatchToProps = (dispatch: any) => (
    { onLiked: (payload: elementStateType) => dispatch( addLike(payload) ) }
)

export default connect(null, mapDispatchToProps)(withStyles(styles)(ShowElement))