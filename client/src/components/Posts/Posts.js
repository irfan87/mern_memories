import React from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";

import Post from "./Post/Post";

const Posts = () => {
	const classes = useStyles();
	const posts = useSelector((state) => state.posts);

	console.log(posts);
	return (
		<div>
			Post Components
			<Post />
		</div>
	);
};

export default Posts;
