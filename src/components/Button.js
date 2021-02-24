import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props =>
    props.isActive ? 'rgba(255,70,50,0.8)' : 'lightgray'};
  ${props => props.isActive && 'color: white;'}
  border: none;
  margin: 5px;
  border-radius: 5px;
  width: 100%;
  font-family: inherit;
`
