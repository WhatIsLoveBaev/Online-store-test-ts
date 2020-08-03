import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { search } from '../../../Actions/HeaderActions'
import { Redirect } from 'react-router-dom'
import Link from '../../../Link/index'
import './Search.scss'
import {DataBaseType, productListArrayType} from "../../../Reducers/DataBase/DataBase";
import {searchInputType} from "../../../Reducers/Header/HeaderReducer";
import { getHeaderSearch } from '../../../Reducers/Header/HeaderSelector'
import { getDataBase } from '../../../Reducers/DataBase/DataBaseSelectors'

interface SearchPropsType {
    onSearch: (e: string) => void,
    searchState: string,
    DBState: DataBaseType
}

const Search = ({ onSearch, searchState, DBState }: SearchPropsType) => {
    const [searchPanel, setSearchPanel] = useState(false)
    const [pushEnter, setPushEnter] = useState(false)
    useEffect(() => setPushEnter(false), [pushEnter])

    const active = searchState.length ? 'active' : ''
    let filtered: Array<productListArrayType> = []

    const searchOpen = (): void => {
        document.body.classList.add('search_hide')
        document.querySelector('.search_bcg')!.classList.add('bcg_hide')

        for (let key in DBState) {
            if (searchState.length > 1) {
                DBState[key].productListArray.forEach(elem => {
                    if (elem.name) {
                        let index = elem.name.toLowerCase().indexOf(searchState.toLowerCase())
                        if (index + 1 && filtered.length < 10) filtered.push(elem)
                    }
                })
            }
        }
    }
    const AutoFill = () => {
        if (searchState.length > 1 && filtered.length !== 0) {
            return (
                <div className="search_modal">
                    <ul className='search_elements'>
                        {filtered.map(elem => {

                            const { name, groupEng, id } = elem
                            let index = name.toLowerCase().indexOf(searchState.toLowerCase())
                            let end = index + searchState.length

                            return (
                                <Link to={`/${groupEng}/${name}`} key={id} onClick={() => offSearchPanel()}>
                                    <li className='search_element'>
                                        <span>{name.slice(0, index)}</span>
                                        <span className='highlight'>{name.slice(index, end)}</span>
                                        <span>{name.slice(end)}</span>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>   
            )
        }
    }
    const offSearchPanel = () => {
        setSearchPanel(false)
        document.body.classList.remove('search_hide');
        document.querySelector('.search_bcg')!.classList.remove('bcg_hide');
        (document.querySelector('.search_input') as HTMLInputElement).blur()
    }
    const onEnter = (e: { key: string }) => {
        if (e.key === 'Enter' && searchState !=='') {
            setPushEnter(true)
            offSearchPanel()
        } 
    }
    const startSearch = () => {
        searchOpen()
        return AutoFill()
    }
   
    return (
        <div className='search_wrapper'>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => onEnter(e)}
                onClick={() => setSearchPanel(true)}
                className='search_input' placeholder='Искать' value={searchState} type="text"
            />
            <div onClick={() => offSearchPanel()} className="search_bcg"> </div>

            {pushEnter ? ( <Redirect to={`/search/${searchState}`} /> ) : false} 

            {searchPanel ? startSearch() : ''}

            <span className={`clear_search ${active}`} onClick={() => onSearch('')}> </span>
        
            <div className={`svg_search_wrapper ${active}`}>
                <Link to={`/search/${searchState}`}>
                    <svg viewBox="0 0 17 17" height='20px' className={`svg_search ${active}`} onClick={() => offSearchPanel() }>
                        <path d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z"> </path>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

interface MapStateToPropsType {
    DataBase: DataBaseType,
    HeaderReducer: searchInputType
}

const mapStateToProps = (state: MapStateToPropsType) => (
    { 
        DBState: getDataBase(state), 
        searchState: getHeaderSearch(state),
    }
)

const mapDispatchToProps = (dispatch: any) => ( {onSearch: (payload: string) => dispatch( search(payload) )} )

export default connect(mapStateToProps, mapDispatchToProps)(Search)