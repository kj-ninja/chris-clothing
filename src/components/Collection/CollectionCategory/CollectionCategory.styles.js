import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & .collection-item {
      margin-bottom: 30px;
      width: 48%;

      @media screen and (min-width: 1000px) {
        width: 23%;
      }
    }
`;