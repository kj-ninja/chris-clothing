import React from 'react';
import {CollectionListContainer, CollectionTitle, CollectionPreview} from "./CollectionList.styles";
import CollectionItem from "../CollectionItem/CollectionItem";
import { useHistory, useRouteMatch } from "react-router-dom";

const CollectionList = ({title, items}) => {
    const history = useHistory();
    const match = useRouteMatch();

    return (
        <CollectionListContainer>
            <CollectionTitle onClick={()=>history.push(`${match.path}/${title.toLowerCase()}`)}>{title.toUpperCase()}</CollectionTitle>
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