import { useState, useEffect} from "react";

import { Box, styled, TextareaAutosize, TextField, Button } from "@mui/material";
import backgroundImage from "../../images/z.jpeg";

import { API } from '../../service/api';

import {useNavigate, useParams } from "react-router-dom";

const Container = styled(Box)`
  margin-top: 100px;
  position: relative;
`;

const Image = styled(Box)`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center;
  padding-top: 55px;
  position: relative;
`;
const Conta = styled(Box)`
  position: absolute; // Fix the text and button inside the Image container
  top: 50%; // Center vertically within the image
  left: 50%; // Center horizontally within the image
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  min-width: 1300px;
`;
const Text = styled(Box)`
  color: #ffffff;
  display: flex;
  font-size: 60px;
  font-weight: 800;
  font-family: "'Feeling Passionate', sans-serif";
  justify-content: center;
  align-items: center;
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
`;
const StyledTextArea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
  title: "",
  description: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};
const Update = () => { 
  const navigate= useNavigate();
  const [post, setPost] = useState(initialPost);
  const {id} = useParams();


  useEffect(() => {
    const fetchData = async () => {
        let response = await API.getPostById(id);
        if (response.isSuccess) {
            setPost(response.data);
        }
    }
    fetchData();
  }, [id]);

  const updatePosts = async () => {
    await API.updatePost(post);
    navigate(`/details/${id}`);
  };
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };



  return (
    <>
      <Container>
        <Image>
          <Conta>
            <Text>Great things are written before they are achieved.</Text>
            <Publish onClick={()=>updatePosts()}>Update</Publish>
          </Conta>
        </Image>
      </Container>
      <Box sx={{ padding: 2 }}>
        <TextField
          label="Name"
          fullWidth
          sx={{ marginBottom: 2 }}
          onChange={(e) => handleChange(e)}
          name="title"
          value= {post.title}
        />
        <StyledTextArea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)} 
                value={post.description}
            />
      </Box>
    </>
  );
};

export default Update;