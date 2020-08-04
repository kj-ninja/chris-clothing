import React from 'react';
import './CollectionList.scss';
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionList = ({title, items}) => {
    return (
        <section className="collection-list">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, i) => (i < 4))
                    .map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))}
            </div>
        </section>
    );
};

export default CollectionList;