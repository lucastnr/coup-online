import React from 'react';
import styled, { css } from 'styled-components';
import assassino from "../../images/cards/assassino.jpg";
import capitao from "../../images/cards/capitao.jpg";
import condensa from "../../images/cards/condensa.jpg";
import duque from "../../images/cards/duque.jpg";
import embaixador from "../../images/cards/embaixador.jpg";
import { cardRatio } from '../../services/constants';
import { CardName } from '../../services/types';

/** Tipo que qualquer img pode receber */
type HTMLImage = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src">;

interface ICardProps extends HTMLImage {
  card: CardName;
  width?: string;
}
const cardDesktopDefaultWidth = "140px";

const cardFile: Record<CardName, string> = {
  assassino,
  capitao,
  condensa,
  duque,
  embaixador
}

const getCardSource = (props: ICardProps) =>
  cardFile[props.card];

const getCardDimensionsStyle = (props: ICardProps) => {
  const { width } = props;

  const cardWidth = width || cardDesktopDefaultWidth;
  const cardHeight = `calc(${cardWidth} * ${cardRatio})`;
  const borderRadius = `calc(${cardWidth} / 12)`;

  return css`
    width: ${cardWidth};
    height: ${cardHeight};
    border-radius: ${borderRadius};
  `;
}

const CardStyle = styled.div`
  ${getCardDimensionsStyle}
  background: no-repeat center/100% url(${getCardSource});
`;


const Card = (props: ICardProps) => {
  return (
    <CardStyle {...props}/>
  )
}

export default Card;
