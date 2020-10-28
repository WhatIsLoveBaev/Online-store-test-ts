import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import styles from './styles';

interface basketTypes {
    classes: any
}

const Basket = ({ classes }: basketTypes): JSX.Element => {
    return (
        <div className={classes.basketContainer}>BASKET</div>
    )
}
export default withStyles(styles)(Basket)