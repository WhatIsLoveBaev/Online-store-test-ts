import React, { Component } from 'react';
import Link from '../../Link/index'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import imgIphone from './Photos/iphone.jpg'
import imgSamsung from './Photos/samsung.jpg'
import imgXiaomi from './Photos/xiaomi.jpg'
import styles from './styles';


interface sliderStateType {
    index: number,
    intervalId: any,
    slides: Array<slidesType>
}
interface slidesType {
    img: any,
    id: number | string,
    engGroupName: string,
    product: string,
    label: string,
    go: string
}
interface sliderPropsTypes {
    classes: any
}

class Slider extends Component<sliderPropsTypes, sliderStateType> {
    private _isMounted: boolean

    constructor(props: sliderPropsTypes) {
        super(props)

        this.state = {
            index: 0,
            intervalId: '',
            slides: [
                {img: imgIphone, id:0, engGroupName: 'phones', product: 'apple', label: 'Iphone', go: 'Перейти'},
                {img: imgSamsung, id:1, engGroupName: 'phones', product: 'samsung', label: 'Samsung', go: 'Перейти'},
                {img: imgXiaomi, id:2, engGroupName: 'phones', product: 'xiaomi', label: 'Xiaomi', go: 'Перейти'},
            ],
        }
        this._isMounted = false
    }
    
    componentDidMount(): void {
        this._isMounted = true
        if (this._isMounted) {
            let intervalId = setInterval(this.nextFunc, 120000)
            this.setState({ intervalId: intervalId })
        }  
    }
    componentWillUnmount(): void {
        clearInterval(this.state.intervalId)
        this._isMounted = false
    }
    prevFunc = (): void => {
        const { slides, index } = this.state

        if (index === 0) this.setState({ index: slides.length-1})
        else this.setState({ index: index-1}) 

        this.resetInterval()  
    }
    nextFunc = (): void => {
        const { slides, index } = this.state

        if (index === slides.length-1) this.setState({ index: 0})
        else this.setState({ index: index+1}) 

        this.resetInterval()
    }
    changeSlideCirc = (e: React.MouseEvent<HTMLDivElement>  ): void => {
        this.setState({ index: Number(e.currentTarget.id) })
        this.resetInterval()
    }
    resetInterval = (): void => {
        clearInterval(this.state.intervalId)
        let intervalId = setInterval(this.nextFunc, 12000)
        this.setState({ intervalId: intervalId })
    }

    slides = () => {
        const { slides, index } = this.state
        const { classes } = this.props

        return slides.filter(elem => index === elem.id).map(elem => (
            <div key={elem.id} className={classes.slide} style={{backgroundImage: `url(${elem.img})`}}>
                <div className={classes.container}>
                    <div className={classes.caption}>
                        <div className={`${classes.face} ${classes.front}`}><h1>{elem.label}</h1></div>
                        <div className={`${classes.face} ${classes.back}`}>
                            <Link to={`/${elem.engGroupName}/${elem.product}`}>
                                <h1>{elem.go}</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

    circles = () => {
        const { slides, index } = this.state
        const { classes } = this.props

        return slides.map(elem => {
            const active = index === elem.id ? 'active' : ''
            return (
                <div key={elem.id} onClick={(e) => this.changeSlideCirc(e)} id={elem.id.toString()} className={`${classes.circle} ${active ? classes.circleActive : ''}`}> </div>
            )
        })
    }

    render() {
        const { classes } = this.props
        return (
            <Container className={classes.home}>
                <Grid container justify="center" className={classes.slider}>{this.slides()}</Grid>
                <div className={classes.prev} onClick={this.prevFunc}><span> </span></div>
                <div className={classes.next} onClick={this.nextFunc}><span> </span></div>
                <div className={classes.circles}>{this.circles()}</div>
            </Container>
        )
    }
}

export default withStyles(styles)(Slider);
