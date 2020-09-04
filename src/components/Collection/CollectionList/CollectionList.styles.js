import styled from 'styled-components';

export const CollectionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const CollectionTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const CollectionPreview = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1352px;
  margin: 0 auto;
  padding: 0 5px;
  
  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px
  }
`;