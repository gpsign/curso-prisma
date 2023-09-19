import { Post } from "@prisma/client";
import db from "../database/database";

const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">;

async function getPosts() {
	const result = await db.post.findMany();

	return result;
}

async function getPost(id: number) {
	const result = await db.post.findFirst({ where: { id: id } });

	return result;
}

async function createPost(post: CreatePost) {
	const result = await db.post.create({ data: post });
	return result;
}

async function deletePost(id: number) {
	const result = await db.post.delete({ where: { id: id } });

	return result;
}

const postRepository = {
	getPost,
	getPosts,
	createPost,
	deletePost,
};

export default postRepository;
