import styled from "styled-components";

export const SAWrapper = styled.div`
  .albums {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    & > div {
      padding-bottom: 20px;
    }
  }
`;
