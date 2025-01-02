
import Post from '../model/post.js';

export const createPost= async(request,response)=>{
    const { title, description, username, categories } = request.body;

    if (!title || !description || !username || !categories) {
        return response.status(400).json({ msg: 'All fields are required' });
    }
    try{
        const post= new Post(request.body);
        await post.save();

        return response.status(200).json('Post saved Successfully');
    }catch(error){
        return response.status(400).json(error);
    }
}
export const getAllPosts = async (request, response) => {
    let category = request.query.category;
    try {
        let posts;
        if (category) {
            posts = await Post.find({ categories: category });
        } else {
            posts = await Post.find({});
        }
        return response.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        return response.status(500).json({ msg: "Error fetching posts", error: error.message });
    }
};
export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        if (!post) {
            return response.status(404).json({ msg: "Post not found" });
        }
        return response.status(200).json(post);
    } catch (error) {
        return response.status(500).json({ msg: error.message });
    }
};
export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        if (!post) {
            return response.status(404).json({ msg: 'Post not found' });
        }

        await Post.findByIdAndUpdate(request.params.id, { $set: request.body }, { new: true });
        return response.status(200).json({ msg: 'Post updated' });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
};
export const deletePost = async (request, response) => {
    try {
        const post = await Post.findByIdAndDelete(request.params.id);
        if (!post) {
          return response.status(404).json({ message: 'Post not found' });
        }
        response.json({ message: 'Post deleted successfully' });
      } catch (error) {
        response.status(500).json({ message: 'Server error', error: error.message });
      }
}
