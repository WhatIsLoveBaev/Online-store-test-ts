import React from 'react'
import './Video.scss'

interface videoType {
    video: string,
    label?: string
}

const Video = ({ video } : videoType): JSX.Element => {
    return (
        <div className="intro">
            <div className="video">
                <video className='video_media' src={video} autoPlay={true} muted={true} loop></video>
            </div>
        </div>      
    )
}
export default Video