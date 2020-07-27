import React from 'react';
import './ErrorMessage.scss'


type infoType = {
    info: {
        componentStack?: string
    }
}

const ErrorMessage = ({ info }: infoType) => {
    return (

        <div className='error'>
            <span>Произошла ошибка, перезагрузите страницу и сообщите нам об ошибке</span>
            <div>{info.componentStack}</div>
        </div>
    )
} 


export default ErrorMessage