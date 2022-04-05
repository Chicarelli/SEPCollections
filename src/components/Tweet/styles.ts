import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Avatar = styled.div`
  width: 90px;
  height: 90px;
  background: ${props => props.theme.colors.bege.main};
  border-radius: 100%;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin-left: 1rem;
`;