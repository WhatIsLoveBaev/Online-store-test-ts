import React, { Component } from 'react';
import Link from '../../Link/index'
import './Slider.scss'

import imgIphone from './Photos/iphone.jpg'
import imgSamsung from './Photos/samsung.jpg'
import imgXiaomi from './Photos/xiaomi.jpg'

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


class Slider extends Component<{}, sliderStateType> {
    private _isMounted: boolean

    constructor(props: {}) {
        super(props)

        this.state = {
            index: 0,
            intervalId: '',
            slides: [
                {img: imgIphone, id:0, engGroupName: 'phones', product: 'apple', label: 'Iphone', go: 'Перейти'},
                {img: imgSamsung, id:1, engGroupName: 'phones', product: 'samsung', label: 'Samsung', go: 'Перейти'},
                {img: imgXiaomi, id:2, engGroupName: 'phones', product: 'xiaomi', label: 'Xiaomi', go: 'Перейти'},
            ]
        }
        this._isMounted = false
    }
    
    componentDidMount(): void {
        this._isMounted = true
        if (this._isMounted) {
            let intervalId = setInterval(this.nextFunc, 12000)
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

        return slides.filter(elem => index === elem.id).map(elem => (
            <div key={elem.id} className="slide active" style={{backgroundImage: `url(${elem.img})`}}>
                <div className="container">
                    <div className="caption">
                        <div className="face front"><h1>{elem.label}</h1></div>
                        <div className="face back">
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

        return slides.map(elem => {
            const active = index === elem.id ? 'active' : ''
            return (
                <div key={elem.id} onClick={(e) => this.changeSlideCirc(e)} id={elem.id.toString()} className={`circle ${active}`}> </div>
            )
        })
    }

    render() {
        return (
            <section className='home'>
                <div className="slider">{this.slides()}</div>
                <div className="controls">
                    <div className="prev" onClick={this.prevFunc}><span> </span></div>
                    <div className="next" onClick={this.nextFunc}><span> </span></div>
                </div>
                <div className="circles">{this.circles()}</div>    
            </section>
        )
    }
}

export default Slider;
