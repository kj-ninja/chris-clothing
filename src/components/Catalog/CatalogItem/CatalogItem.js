import React from 'react';
import './CatalogItem.scss';

const CatalogItem = ({title, image, size}) => {
    return (
        <div className={size ? "catalog-item large" : "catalog-item"}>
            <div className="background-image" style={{
                backgroundImage: `url(${image})`
            }}>
            </div>
            <div className="container">
                <h2 className="title">{title.toUpperCase()}</h2>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default CatalogItem;