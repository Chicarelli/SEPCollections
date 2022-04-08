import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 768px;
  display: flex;
  padding: .5rem .2rem .5rem 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${({theme}) => theme.colors.green[800]};
`;

export const Avatar = styled.div`
  img {
    width: 65px;
    height: 60px;
    background: ${props => props.theme.colors.bege.main};
    border-radius: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #FFF;
  margin-left: .7rem;
  padding-top: .5rem;

  a {
    text-decoration: none;
    color: #FFF;

    &:hover {
      opacity: .9;
    }

    &:active {
      opacity: .8;
    }
  }

  span {
    color: #B1B1B1;
    font-weight: bold;
  }

  article {
    margin-top: 10px;
  }
`;