import React from 'react'
import Link from '../../../Link/index'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styles from './styles'

const PageNotFound = ({ classes }: any): JSX.Element => {
    return (
        <div className={classes.notFoundContainer}>
                <div>
                    <h2>Произошла ошибка</h2>
                    <p>Данная страница не найдена или была удалена</p>
                    <Link to={`/`}>
                        <Button>Вернуться на главную</Button>
                    </Link>
                </div>
            </div>
    )
}

export default withStyles(styles)(PageNotFound)