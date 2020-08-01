import React from 'react';
import {withRouter} from 'react-router-dom';
import './CatalogItem.scss';

const CatalogItem = ({title, imageUrl, size, history, match, linkUrl}) => {
    return (
        <div className={size ? "catalog-item large" : "catalog-item"} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}>
            </div>
            <div className="container">
                <h2 className="title">{title.toUpperCase()}</h2>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(CatalogItem);