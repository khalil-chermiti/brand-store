import React from 'react' ;
import { useParams ,Navigate } from 'react-router-dom';

import { connect } from 'react-redux';  
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.style.scss' ;

const CollectionPage = ({collections}) => {
    
    const {categoryId} = useParams();

    const collection = collections[categoryId];

    // if we get a valid route to a collection 
    // we render correspondent collection
    if (collection) {
        const {title , items} = collection ;
        
        return (
            <div className='collection-page'>
                <h2 className='title'>{title}</h2>
                <div className='items' >
                    {items.map(item => <CollectionItem key={item.key} item={item}/>)}
                </div>
            </div>
        );

    } 

    // else we navigate back to shop 
    return <Navigate to='/' replace /> ;
} 


const mapState = createStructuredSelector({
    collections : selectShopCollections
})

export default connect(mapState)(CollectionPage) ;