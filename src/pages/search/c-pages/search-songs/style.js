import styled from 'styled-components'

export const SongsWrapper = styled.div`
  font-size: 12px;

  .gray > div {
  }
  .gray > div:hover {
    outline: 1px solid #e1e1e1;
    background-color: #f2f2f2;;
  }

  .gray>div:nth-child(2n)  {
    background-color: #f7f7f7;
    /* outline: 1px solid #e1e1e1; */
  }

  .pagination {
    display: flex;
    padding-top: 25px;
    padding-bottom: 60px;
    justify-content: center;
  }
`