import React from 'react'
import Button from './Button'
import styled from 'styled-components'

export default function Navigation({ onNavigate, activeIndex }) {
  return (
    <NavigationApp>
      <Button isActive={activeIndex === 0} onClick={() => onNavigate(0)}>
        Play
      </Button>
      <Button isActive={activeIndex === 1} onClick={() => onNavigate(1)}>
        History
      </Button>
    </NavigationApp>
  )
}

const NavigationApp = styled.nav`
  display: flex;
`
