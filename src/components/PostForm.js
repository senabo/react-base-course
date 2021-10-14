import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    // const [title, setTitle] = useState('')
    // const [content, setContent] = useState('')
    const [post, setPost] = useState({title: '', content: ''})
    // const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', content: ''})
        // setTitle('')
        // setContent('')
    }

    return (
        <form>
            <MyInput
                type="text"
                placeholder="Title"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyInput
                // ref={bodyInputRef}
                value={post.content}
                onChange={e => setPost({...post, content: e.target.value})}
                type="text"
                placeholder="Content"/>
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;
