import React from 'react';
import { connect } from 'react-redux'
import ProductElement from '../ProductsPage/ProductElement/ProductElement'
import Link from '../../../Link/index'
import {elementStateType} from "../../../Reducers/Liked/Liked";
import { getLiked } from '../../../Reducers/Liked/LikedSelector'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import styles from './styles';

interface LikedType { LikedState: Array<elementStateType>, classes: any }

const Liked = ({ LikedState, classes }: LikedType) => {
    if ( LikedState.length ) {
        return (
            <Grid container>
                <div className={classes.liked}><h2>Избранное</h2></div>
                <Container className={classes.likedSection}>
                    <Grid container spacing={4} justify='center'>
                        {LikedState.map(elem => <ProductElement key={elem.id} elem={elem} liked={true} />)}
                    </Grid>
                </Container>
            </Grid>
        )
    } else {
        return (
            <div className={classes.noLikedContainer}>
                <div className={classes.noLiked}>
                    <h2>Нет сохраненных товаров</h2>
                    <p>Если вы добавите товар в понравившееся, то он появится здесь</p>
                </div>
                <Link to={`/`}>
                    <Button>Перейти к покупкам</Button>
                </Link>
            </div>
        )
    }

}

const mapStateToProps = (state: {Liked: Array<elementStateType>}) => ( 
    { LikedState: getLiked(state) }
)

export default connect(mapStateToProps)(withStyles(styles)(Liked))