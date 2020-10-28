import React, { useEffect, useState } from 'react';
import axios from 'axios'
import useStyles from './styles';
import Button from '@material-ui/core/Button'
import Slider from '../Slider/index'
import Collage from './Collage/index'
import SaleLine  from './Sale/SaleLine/index'
import SaleBlock from './Sale/SaleBlock/index'

const Content = (props: any) => {


    return (
        <>
            
            <SaleLine />
            <SaleBlock />
            <Slider />
            <Collage />
        </>
    ) 
}
export default Content


/* const dynamic = {
    bg: true,
    radius: '50%',
    color: 'red',
    padding: '100px',
    col: 'red'
} 
const classes = useStyles(dynamic)
const ENUM_ANSWER_RESULT_KEYS = {
    CORRECT: 'correct',
    NOT_CHECKED: 'not_checked',
};
const ENUM_ANSWER_RESULT = {
    [ENUM_ANSWER_RESULT_KEYS.CORRECT]: 'Верный ответ',
    [ENUM_ANSWER_RESULT_KEYS.NOT_CHECKED]: 'Неверный ответ',
    'key_test': 'test'
}; */

/* <div>{ENUM_ANSWER_RESULT['not_checked']}</div> */