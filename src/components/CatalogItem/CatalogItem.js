import React from 'react';
import {withRouter} from 'react-router-dom';
import {CatalogItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle} from "./CatalogItem.styles";

const CatalogItem = ({title, imageUrl, size, history, match, linkUrl}) => {
    return (
        <CatalogItemContainer size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer className="background-image" imageUrl={imageUrl}/>
            <ContentContainer className="content">
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </CatalogItemContainer>
    );
};

export default withRouter(CatalogItem);