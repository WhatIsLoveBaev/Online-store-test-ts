import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import styles from './styles'

interface footerType {
    header: string,
    firstBtn: string,
    secondBtn: string,
    thirdBtn: string,
    fourBtn: string,
    id: number
}
const footerArray: Array<footerType> = [
    {header: 'Lorem, ipsum.', firstBtn: 'Помощь', secondBtn: 'Политика скидок', thirdBtn: 'Отследить заказ', fourBtn: 'Возвраты', id: 1},
    {header: 'Lorem, ipsum.', firstBtn: 'Помощь', secondBtn: 'Политика скидок', thirdBtn: 'Отследить заказ', fourBtn: 'Возвраты', id: 2},
    {header: 'Lorem, ipsum.', firstBtn: 'Помощь', secondBtn: 'Политика скидок', thirdBtn: 'Отследить заказ', fourBtn: 'Возвраты', id: 3},
    {header: 'Lorem, ipsum.', firstBtn: 'Помощь', secondBtn: 'Политика скидок', thirdBtn: 'Отследить заказ', fourBtn: 'Возвраты', id: 4}
]


const Footer: React.FC = ({ classes }: any): JSX.Element => {
    return (
        <Grid className={classes.container}>
            <Container fixed>
                <Grid container spacing={3} justify={"center"} className={classes.list}>
                    {footerArray.map(elem => (
                        <Grid item xs={6} md={3} className={classes.block} key={elem.id}>
                            <div className={classes.blockHeader}>{elem.header}</div>
                            <div className={classes.blockList}>
                                <Button>{elem.firstBtn}</Button>
                                <Button>{elem.secondBtn}</Button>
                                <Button>{elem.thirdBtn}</Button>
                                <Button>{elem.fourBtn}</Button>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <div className={classes.info}>
                <span>© 2020 Store</span>
                <span>Политика конфиденциальности</span>
            </div>
        </Grid>
    ) 
}
export default withStyles(styles)(Footer)