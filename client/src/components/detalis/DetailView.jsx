import {useEffect, useState, useContext} from 'react';
import {Box, Typography, styled} from '@mui/material';
import Imagee from '../../images/back.jpeg'

import {Edit, Delete} from '@mui/icons-material';

import {useParams, Link, useNavigate} from 'react-router-dom';

import {API} from '../../service/api';

import {DataContext} from '../../context/DataProvider';

const Boxi= styled(Box)`
  margin-top: 99px;
  background-image: url(${Imagee});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:100vh;
  
  @media (max-width: 800px) and (min-width: 450px) {
    margin-top: 79px;
  }
  @media (max-width: 450px){
    margin-top: 79px;
    height: 700px;
  }
`
const Container= styled(Box)`
  background-color: #b9e7e7;
  border-radius: 20px;
  display: flex;
  padding: 0 30px;
  width: 950px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  gap: 15px;
  @media (max-width: 1110px) and (min-width: 900px){
    width: 750px;
  }
  @media (max-width: 900px) and (min-width: 800px){
    width: 550px;
  }
  @media (max-width: 800px) and (min-width: 650px) {
    width: 450px;
  }
  @media (max-width: 650px) and (min-width: 450px){
    width: 300px;
  }
  @media (max-width: 450px){
    width: 200px;
    height: 600px;
    margin: 59px 0px;
  }
`
const Heading= styled(Typography)`
  color: teal;
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 1110px) and (min-width: 900px){
    font-size: 18px;
  }
  @media (max-width: 900px) and (min-width: 350px){
    font-size: 14px;
  }
  @media (max-width: 350px){
    font-size: 14px;
  }
`
const SubHead= styled(Typography)`
  font-size: 19px;
  @media (max-width: 1110px) and (min-width: 900px){
    font-size: 16px;
  }
  @media (max-width: 900px) and (min-width: 800px){
    font-size: 13px;
  }
  @media (max-width: 800px) {
    font-size: 10px;
  }
`
const Sub=styled(Typography)`
   font-size: 10px;
   
`
const EditIcon= styled(Edit)`
  margin: 5px;
  padding: 5px;
  color: #ff1493;
  border: 1px solid white;
  border-radius: 50%;
  @media (max-width: 1110px){
    margin: 2px;
  padding: 2px;
    height: 12px;
    width: 12px;
  }
  
`
const DeleteIcon= styled(Delete)`
  margin: 5px;
  padding: 5px;
  color: #ff1493;
  border: 1px solid white;
  border-radius: 50%;
  @media (max-width: 1110px){
    margin: 2px;
  padding: 2px;
  height: 12px;
  width: 12px;
  }
`
const DetailView= ()=>{
    const [post, setPost]=useState({});
    const {id} =useParams();
    const {account} =useContext(DataContext);
    const navigate= useNavigate();

    useEffect(() => {
      const fetchData = async () => {
          let response = await API.getPostById(id);
          if (response.isSuccess) {
              setPost(response.data);
          }
      }
      fetchData();
  }, [id]);
    const deletesPost = async () => {  
      await API.deletePost(post._id);
      navigate('/')
  }
    
    return (
      <Boxi>
        <Container>
          <Heading>{post.title}</Heading>
          <Box style={{ float: "right" }}>
            {account.username === post.username && (
              <>
                <Link to={`/update/${post._id}`}>
                  <EditIcon />
                </Link>
                <DeleteIcon onClick={()=> deletesPost()}/>
              </>
            )}
          </Box>
          <SubHead>{post.description}</SubHead>
          <Box>
            <Sub>{post.username}</Sub>
          </Box>
        </Container>
      </Boxi>
    );
}
export default DetailView;