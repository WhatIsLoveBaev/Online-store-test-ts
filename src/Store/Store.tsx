import React from 'react'
import './Styles/App.scss'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import ErrorBoundary from './ErrorBoundary/index'
import HeaderContainer from './Header/index'
import Content from './Content/index'
import ProductsPage from './Pages/ProductsPage/index'
import SearchResults from './Pages/SearchResults/index'
import Basket from './Pages/Basket/index'
import Login from './Pages/Login/index'
import Liked from './Pages/Liked/index'
import Footer from './Footer/index'



const Store = () => {
    return (
        <HashRouter>
            <ErrorBoundary>
                <div className='store' style={{ position: 'relative'}}>
                    <HeaderContainer />
                    <Switch>
                        <Route path='/' component={Content} exact />
                        <Route path='/login/' component={Login} exact />
                        <Route path='/liked/' component={Liked} exact />
                        <Route path='/basket/' component={Basket} exact />

                        <Route path='/search/:Results?' render={({ match }) => {
                            const { Results } = match.params
                            return <SearchResults results={Results} />
                        }} />

                        <Route path='/:ProductId/:SelectedId?' render={({ match }) => {
                            const { ProductId, SelectedId } = match.params

                            return <ProductsPage ProductId={ProductId} SelectedId={SelectedId} DBState={{}} />
                        }}  />

                        <Redirect to='/' />
                    </Switch>
                    <Footer />
                </div>
            </ErrorBoundary>
        </HashRouter>
    )
}

export default Store