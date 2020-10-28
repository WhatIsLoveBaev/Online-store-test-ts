import React, { useState } from 'react'

import { connect } from 'react-redux'
import { DataBaseType, imagesForMobile } from "../../Reducers/DataBase/DataBase"
import { getDataBase } from '../../Reducers/DataBase/DataBaseSelectors'

import Link from '../../Link/index'
import useWindowDimensions from '../../Hooks/Resize'

import Header from './Header'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './styles'

import clsx from 'clsx';



interface DBStateType { DBState: DataBaseType, classes: any }

interface DBSaleType {
    productMakers: Array<string>,
    productExamples: Array<{ 
        id: string,
        exampleMake: string,
        example: string
    }>
}

const HeaderContainer = ({ DBState, classes }: DBStateType) => {
    const [modal, setModal] = useState(false)
    const [timeId, setTime] = useState(0)
    
    const [elemTarget, setElemTarget]: any = useState()
    const { width } = useWindowDimensions()

    const [mobileMenu, setMobileMenu] = useState(true)

    

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

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent,) => {
        if (event && event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
          return;
        }
        setMobileMenu(open);
    };


    const expandedList = (): JSX.Element => {
        const sale = elemTarget === 'Распродажа'
        const headingMakers = sale ? 'Список товаров со скидками' : 'Производитель товара'

        const { productMakers, productExamples } = DBSale

        const Makers = sale ? productMakers : DBState[elemTarget].productMakersList
        const Examples = sale ? productExamples : DBState[elemTarget].examplesList
        const eng = sale ? 'sale' : DBState[elemTarget].engGroupName

        const makes = Makers.map(elem => (
            <Link to={`/${eng}/${sale ? DBState[elem].engGroupName : elem.toLowerCase()}`} key={elem}>
                <li className={classes.expandedListItem} onClick={() => offTime()} >{elem}</li>
            </Link>
        ))
        
        const item = Examples.map(elem => (
            <li key={elem.id} onClick={() => offTime()} className={classes.randomItem}>
                <Link to={`/${eng}/${elem.exampleMake.toLowerCase()}`}>
                    <div className={classes.randomImg}>
                        <img src={elem.example} alt={elem.exampleMake}/>
                    </div>
                    <span className={classes.randomMake}>{elem.exampleMake}</span> 
                </Link>
            </li> 
        ))
        
        return (
            <div className={classes.expandedListBcg}>
                <Container className={classes.expandedListContainer} onMouseEnter={() => setModal(true)} onMouseLeave={() => offTime()}>
                    <ul className={classes.expandedList}>
                        <li className={classes.expandedListSort}>{headingMakers}</li>
                        <Link to={`/${eng}`}>
                            <li className={classes.expandedListItem} onClick={() => offTime()}>Смотреть все</li>
                        </Link>
                        {makes}
                    </ul>
                    <ul className={classes.randomItemWrapper}>{item}</ul>
                </Container>
            </div>     
        )  
    }

    const productList = (): JSX.Element => {
        const keysList = Object.keys(DBState).map(elem => (
            <span 
            key={elem} 
            className={classes.productElement} 
            onMouseEnter={(e:React.MouseEvent<HTMLSpanElement>) => onTime(e)}
            >{elem}</span>
        ))
        return (
            <Grid container className={classes.productListContainer}>
                <Container className={classes.productElementWrapper} onMouseLeave={() => offTime()} >
                    <button><span className={`${classes.productElement} ${classes.sale}`} onMouseEnter={(e) => onTime(e)}>
                        Распродажа
                    </span></button>
                    {keysList}
                </Container>
            </Grid>
        )
    }
    const productListMobile = (): JSX.Element => {
        return (
            <SwipeableDrawer anchor={"left"} open={mobileMenu} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
                <List><ListItem>Товары</ListItem></List>
                <Divider />
                <List>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.accordionHeadSale} aria-controls="menu-content" id="menu-header">
                            Распродажа
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <Link to={`/sale`}>
                                    <ListItem className={classes.expandedListItem} onClick={toggleDrawer(false)}>Смотреть все</ListItem>
                                </Link>
                                {DBSale.productMakers.map(elem => (
                                    <Link to={`/sale/${DBState[elem].engGroupName}`} key={elem}>
                                        <ListItem className={classes.expandedListItem} onClick={toggleDrawer(false)} >{elem}</ListItem>
                                    </Link>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    {Object.keys(DBState).map((name, i) => (
                        <React.Fragment key={name}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{backgroundImage: `url(${imagesForMobile[i]})`}} className={classes.accordionHeader} aria-controls="menu-content" id="menu-header">
                                    {name}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        <Link to={`/${DBState[name].engGroupName}`}>
                                            <ListItem className={classes.expandedListItem} onClick={toggleDrawer(false)}>Смотреть все</ListItem>
                                        </Link>
                                        {DBState[name].productMakersList.map(elem => (
                                            <Link to={`/${DBState[name].engGroupName}/${elem.toLowerCase()}`} key={elem}>
                                                <ListItem button className={classes.expandedListItem} onClick={toggleDrawer(false)} >{elem}</ListItem>
                                            </Link>
                                        ))}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </React.Fragment>
                    ))}
                </List>
            </SwipeableDrawer>
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

    return <Header 
                modal={modal && width > 959 ? expandedList() : undefined} 
                productList={width > 959 ? productList() : productListMobile()} 
                mobileMenu={mobileMenu}
                toggleDrawer={toggleDrawer}
            />
}

const mapStateToProps = (state: { DataBase: DataBaseType }) => (
     { DBState: getDataBase(state) } 
)

export default connect(mapStateToProps)(withStyles(styles)(HeaderContainer))
