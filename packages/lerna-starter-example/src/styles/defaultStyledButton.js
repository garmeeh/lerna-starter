import styled from 'styled-components';

export default styled.button`
  font-size: 16px;
  margin: 0;
  padding: 0.3em 0.75em;
  border-radius: 3px;
  background: none;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
`;
