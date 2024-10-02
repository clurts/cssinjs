import styled from "@emotion/styled";
import Headline from "./Headline";
import Icon from "./Icon";
import Text from "./Text";

const Card = styled.div`
	width: 18rem;
	padding: 2rem;
	border: 1px solid gray;
	box-sizing: border-box;
`;

Card.Headline = Headline;
Card.Icon = Icon;
Card.Text = Text;

export default Card;
