import React from 'react'
import Link from '../../../Link/index'
import './PageNotFound.scss'

const PageNotFound = () => {
    return (
        <div className="no_liked_container">
                <div className="no_liked">
                    <h2>Произошла ошибка</h2>
                    <p>Данная страница не найдена или была удалена</p>
                </div>
                <Link to={`/`}>
                    <button>Вернуться на главную</button>
                </Link>
            </div>
    )
}

export default PageNotFound