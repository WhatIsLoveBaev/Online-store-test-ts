import React from 'react';
import { connect } from 'react-redux'
import Link from '../../../Link/index'
import { CollageElementType } from '../../../Reducers/Collage/CollageState'
import { getCollage } from '../../../Reducers/Collage/CollageSelector'
import Video from '../Video/index'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import styles from './styles'

type CollageType = { collage: Array<CollageElementType> }

const Collage = ({ collage }: CollageType): JSX.Element => {
    const classes = styles()
    return (
        <Container fixed>
            <Grid container className={classes.collage}>
                {collage.map(elem => (
                    <Grid key={elem.id} item xs={12} md={6} className={classes.collageElem}>
                        <Link to={`/${elem.idGroup}/${elem.product}`}>
                            <div className={classes.elem}>
                                {elem.img ? <img className={classes.img} src={elem.img} alt={elem.label} /> : 
                                elem.video ? <Video video={elem.video} label={elem.label} /> : ''}
                            </div>
                            <span className={classes.elemLabel} >{elem.label}</span>
                        </Link>
                    </Grid>
                ))}   
            </Grid>
        </Container>
    )  
}

const mapStateToProps = (state: {CollageState: Array<CollageElementType>} ) => (
    { collage: getCollage(state) }
)

export default connect(mapStateToProps)(Collage)