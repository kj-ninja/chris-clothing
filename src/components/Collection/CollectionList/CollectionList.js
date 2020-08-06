import React from 'react';
import {CollectionListContainer, CollectionTitle, CollectionPreview} from "./CollectionList.styles";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionList = ({title, items}) => {
    return (
        <CollectionListContainer>
            <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
            <CollectionPreview>
                {items
                    .filter((item, i) => (i < 4))
                    .map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))}
            </CollectionPreview>
        </CollectionListContainer>
    );
};

export default CollectionList;