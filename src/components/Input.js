import styled from 'styled-components'

export default function Input({ labelText, placeholder, name }) {
  return (
    <LabelGrid>
      {labelText}
      <input name={name} placeholder={placeholder} type="text" />
    </LabelGrid>
  )
}

const LabelGrid = styled.label`
  display: grid;
  gap: 4px;
  input {
    border: 2px solid #bbb;
  }
`
