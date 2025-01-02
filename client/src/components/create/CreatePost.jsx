import { useState, useEffect, useContext } from "react";

import { Box, styled, TextField, Button, TextareaAutosize, } from "@mui/material";
import backgroundImage from "../../images/z.jpeg";
import "../../App.css";

import { API } from '../../service/api';
import { DataContext } from "../../context/DataProvider";

import { useLocation, useNavigate } from "react-router-dom";

const Container = styled(Box)`
  margin-top: 100px;
  width: 100%;
  @media (max-width: 800px){
    margin-top: 70px;
  }
`;

const Image = styled(Box)`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 38vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  @media (max-width: 1000px) and (min-width: 500px) {
    height: 150px;
  }
  @media (max-width: 500px){
    height: 120px;
  }
`;

const Text = styled(Box)`
  color: #ffffff;
  display: flex;
  font-size: 55px;
  font-weight: 800;
  font-family: "'Feeling Passionate', sans-serif";
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) and (min-width: 500px) {
    font-size: 20px;
  }
  @media (max-width: 500px){
    font-size: 15px;
  }
`;
const Publish = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: teal;
  color: white;
  font-weight: 800;
  margin-top: 25px;
  &:hover {
    color: teal;
    background-color: white;
    border: 1px solid teal;
  }
  @media (max-width: 1000px) and (min-width: 500px) {
    font-size: 10px;
    font-weight: 700;
    height: 15px;
  }
  @media (max-width: 500px){
    font-size: 7px;
    font-weight: 600;
    height: 10px;
  }
`;
const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    height: 300px; 
  min-height: 300px; 
  &:focus-visible {
    outline: none;
  }
  @media (max-width: 1000px) and (min-width: 500px) {
    font-size: 20px;
    margin-top: 30px;
  }
  @media (max-width: 500px){
    font-size: 15px;
    margin-top: 20px;
  }
`;
const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black', 
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black', 
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'black',
  },
  
});
const initialPost = {
  title: "",
  description: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};
const RichTextEditor = () => {
  const navigate= useNavigate();
  const location = useLocation();
  const [post, setPost] = useState(initialPost);

  const { account } = useContext(DataContext);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category") || "all";

    if (account?.username) { 
        setPost((prevPost) => ({
            ...prevPost,
            categories: category,
            username: account.username,
        }));
    }
}, [location.search, account?.username]);
  
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const savePost = async () => {
    if (!post.title || !post.description) {
        alert("Title and description are required!");
        return;
    }

    try {
      const response = await API.createPost(post);
      if (response.isSuccess) {
        navigate('/');
      } else {
        alert("Failed to create post. Please try again.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("An error occurred. Please try again.");
    }
};

  return (
    <>
      <Container>
        <Image>
         
            <Text>Great things are written before they are achieved.</Text>
            <Publish onClick={() => savePost()}>Publish</Publish>
        
        </Image>
      </Container>
      <Box sx={{ padding: 2 }}>
        < CustomTextField
          label="A headline for your thoughts..."
          fullWidth
          sx={{ marginBottom: 2 }}
          onChange={(e) => handleChange(e)}
          name="title"
        />
        <Textarea
          rowsMin={5}
          placeholder="Your brain dump starts here..."
          name="description"
          onChange={(e) => handleChange(e)}
        />
      </Box>
    </>
  );
};

export default RichTextEditor;
