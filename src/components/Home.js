import Button from "./Button";
import Card from "./Card";
import NewCard from "./NewCard";
import { GiWineGlass } from "react-icons/gi";
import CardContainer from "./CardContainer";

const Home = () => {
	const handleClick = () => console.log("I was clicked");

	const cards = [
		{
			id: 2345,
			headline: "Sweetness",
			text: "bla bla lorem ipsum man kan fremad se at der er ligheder mellem....",
		},
		{
			id: 98765,
			headline: "Care",
			text: "bla bla lorem ipsum man kan fremad se at der er ligheder mellem....",
		},
		{
			id: 12345,
			headline: "Love",
			text: "bla bla lorem ipsum man kan fremad se at der er ligheder mellem....",
		},
	];

	return (
		<div>
			<h1>Hello from Home!</h1>
			<Button secondary onClick={handleClick}>
				Her kan jeg skrive lige hvad jeg vil uden at bruge en prop!!!
			</Button>
			<Card>
				<Card.Icon>
					<GiWineGlass size="2.5em" color="white" />
				</Card.Icon>
				<Card.Headline as="h3">Sweetness</Card.Headline>
				<Card.Text>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Iusto, perferendis earum. Ab laudantium vero fuga ducimus
					blanditiis quos hic illum doloremque! Repellat neque quos
					dolores repellendus!
				</Card.Text>
			</Card>
			{/*<NewCard
				alternate
				data={{
					headline: "Sweetness",
					text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, perferendis earum.",
				}}
				/>
				*/}

			<CardContainer>
				{cards.map((card) => (
					<NewCard key={card.id} data={card} />
				))}
			</CardContainer>

			{cards.map((card, index) => (
				<Card key={index}>
					<Card.Icon alternate></Card.Icon>
					<Card.Headline alternate>{card.headline}</Card.Headline>
					<Card.Text>{card.text}</Card.Text>
				</Card>
			))}
		</div>
	);
};

export default Home;
