import React from 'react';
import { connect } from 'react-redux'
import Link from '../../../Link/index'
import { CollageElementType } from '../../../Reducers/Collage/CollageState'
import { getCollage } from '../../../Reducers/Collage/CollageSelector'
import Video from '../Video/index'
import './Collage.scss'

type CollageType = { collage: Array<CollageElementType> }

const Collage = ({ collage }: CollageType): JSX.Element => (
    <div className="collage">
        {collage.map(elem => (
            <div key={elem.id} className="collage_elem">
                <Link to={`/${elem.idGroup}/${elem.product}`}>
                    <div className="elem">
                        {elem.img ? <img className='img' src={elem.img} alt={elem.label} /> : 
                        elem.video ? <Video video={elem.video} label={elem.label} /> : ''}
                    </div>
                    <span className="elem_label">{elem.label}</span>
                </Link>
            </div>
        ))}   
    </div>
)

const mapStateToProps = (state: {CollageState: Array<CollageElementType>} ) => (
    { collage: getCollage(state) }
)

export default connect(mapStateToProps)(Collage)