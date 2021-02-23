import styled from 'styled-components/macro'
import Button from './Button'

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <PlayerData>
      {name}
      <PlayerScore>
        <Button onClick={onMinus}>-</Button>
        <span>{score}</span>
        <Button onClick={onPlus}>+</Button>
      </PlayerScore>
    </PlayerData>
  )
}

const PlayerData = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PlayerScore = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`
