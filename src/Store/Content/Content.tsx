import React from 'react';

import Slider from '../Slider/index'
import Collage from './Collage/index'
import SaleLine  from './Sale/SaleLine/index'
import SaleBlock from './Sale/SaleBlock/index'

const Content = () => {
    return (
        <div>
            <SaleLine />
            <SaleBlock />
            <Slider />
            <Collage />
        </div>
    ) 
}

export default Content
