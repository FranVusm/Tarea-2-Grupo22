import prisma from "../prismaClient.js"

const getPosts = async (req, res) => {
    const posts = await prisma.post.findMany()
    res.json(posts)
}

const PostsController = {
    getPosts
}

export default PostsController