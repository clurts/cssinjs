/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Headline from "./Card/Headline";
import Icon from "./Card/Icon";
import Text from "./Card/Text";

const NewCard = ({ data, alternate }) => {
	const style = css`
		width: 18rem;
		padding: 2rem;
		border: 1px solid gray;
		box-sizing: border-box;
	`;
	return (
		<div css={style}>
			<Icon alternate={alternate}>{data.icon}</Icon>
			<Headline alternate={alternate}>{data.headline}</Headline>
			<Text>{data.text}</Text>
		</div>
	);
};

export default NewCard;
