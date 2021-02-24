import React from 'react'
import styled from 'styled-components'

export default function Header({ text }) {
  return <HeaderApp>{text}</HeaderApp>
}

const HeaderApp = styled.header`
  padding: 12px;
  text-align: center;
  text-transform: uppercase;
`
