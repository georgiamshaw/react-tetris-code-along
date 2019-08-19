import React from 'react';
import { StyledStage } from './styles/StyledStage';
import Cell from './Cell';
// map through the stage and you get a row, which is also an array
// and then you map through the row and get the cell

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
{stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
  </StyledStage>
)

export default Stage;
