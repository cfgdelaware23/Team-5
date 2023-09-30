interface TileCard {
  title: string;
  description: string;
}

export default function Card(props: {card: TileCard}) {
  return ( 
    <div>
      <h2>{props.card.title}</h2>
      <p>{props.card.description}</p>
    </div>

);
};
