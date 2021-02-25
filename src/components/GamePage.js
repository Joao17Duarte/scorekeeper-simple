import styled from 'styled-components/macro'
import Button from './Button'
import Header from './Header'
import Player from './Player'

export default function GamePage({
  nameOfGame,
  players,
  handlePlus,
  handleMinus,
  resetScores,
  endGame,
}) {
  return (
    <GameWrapper>
      <Header>{nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onPlus={() => handlePlus(index)}
          onMinus={() => handleMinus(index)}
        />
      ))}
      <Button onClick={resetScores}>Reset scores</Button>
      <Button onClick={endGame}>End game</Button>
    </GameWrapper>
  )
}

const GameWrapper = styled.div`
  display: grid;
  gap: 10px;
`
