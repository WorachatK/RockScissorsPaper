import React from 'react'

import { Container,Wraper,TextContainer,TextHead,ScoreContainer,ScoreP,ScoreH } from './ScoreElement'

const Score = ({yourscore,botscore}) => {
  return (
    <Container>
      <Wraper>
        <ScoreContainer>
          <ScoreP>Your score</ScoreP>
          <ScoreH>{yourscore}</ScoreH>
        </ScoreContainer>
        <TextContainer>
          <TextHead>ROCK</TextHead>
          <TextHead>PAPER</TextHead>
          <TextHead>SCISSORS</TextHead>
        </TextContainer>
        <ScoreContainer>
          <ScoreP>Bot score</ScoreP>
          <ScoreH>{botscore}</ScoreH>
        </ScoreContainer>
      </Wraper>
    </Container>
  )
}

export default Score