import styled from 'styled-components/macro'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryGrid>
      {nameOfGame}
      {players.map((player, index) => (
        <HistoryPlayer key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </HistoryPlayer>
      ))}
    </HistoryGrid>
  )
}

const HistoryGrid = styled.section`
  display: grid;
  gap: 10px;
`
const HistoryPlayer = styled.div`
  display: flex;
  justify-content: space-between;
`
