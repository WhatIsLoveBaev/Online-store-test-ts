import React from 'react';
import { connect } from 'react-redux'
import ProductElement from '../ProductsPage/ShowProducts/ProductElement'
import Link from '../../../Link/index'
import './Liked.scss'

const Liked = ({ LikedState }) => {
    console.log(LikedState);
    if ( LikedState.length ) {
        return (
            <div className="liked_container">
                <div className="liked"><h2>Избранное</h2></div>

                <section className="liked_container">
                    {
                        LikedState.map(elem => <ProductElement key={elem.id} elem={elem} liked={true} />)
                    }
                </section>
                
            </div>
        )
    } else {
        return (
            <div className="no_liked_container">
                <div className="no_liked">
                    <h2>Нет сохраненных товаров</h2>
                    <p>Если вы добавите товар в понравившееся, то он появится здесь</p>
                </div>
                <Link to={`/`}>
                    <button>Перейти к покупкам</button>
                </Link>
            </div>
        )
    }
    
}

const mapStateToProps = state => ( { LikedState: state.Liked } ) 

export default connect(mapStateToProps)(Liked)