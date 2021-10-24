import React from 'react';
import assassino from "../../images/cards/assassino.jpg";
import capitao from "../../images/cards/capitao.jpg";
import condensa from "../../images/cards/condensa.jpg";
import duque from "../../images/cards/duque.jpg";
import embaixador from "../../images/cards/embaixador.jpg";
import { CardType } from '../../services/types';

/** Tipo que qualquer img pode receber */
type HTMLImage = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src">;

interface ICardProps extends HTMLImage {
  card: CardType;
}

const cardFile: Record<CardType, string> = {
  assassino,
  capitao,
  condensa,
  duque,
  embaixador
}


const Card = (props: ICardProps) => {
  const { card } = props;
  /** Source da imagem da carta */
  const cardSource = cardFile[card];

  return (
    <img {...props} src={cardSource}></img>
  )
}

export default Card;
