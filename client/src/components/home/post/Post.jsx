import {Box, Typography, styled} from '@mui/material';
import { addElipsis } from '../../../utils/common-utils';

const PostsContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 5px; /* Adds uniform spacing between items */

`;

const Container = styled(Box)`
  background-color: #b9e7e7;
  border: 2px solid teal;
  border-radius: 5px;
  margin: 20px 17px; 
  padding: 10px 10px;
  height: 250px; /* Adjust based on content */
  width: 900px; /* Take 90% of the parent's width */
  max-width: 400px; /* Add a maximum width for larger screens */
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Text= styled(Typography)`
    color: teal;
    font-size: 12px;
`
const Heading= styled(Typography)`
    font-size: 15px;
    font-weight: 800;
    color: teal;
    height: 38px;
    
`
const Details=styled(Typography)`
    font-size: 14px;
    word-break: break-word;
    
`
const Head= styled(Typography)`
    font-size: 8px;
    
`
const Button = styled(Typography)`
  font-size: 15px;
  font-weight: 800;
  color: teal;
  border-radius: 5px;
  height: 38px;
  background-color: #ffffff;
  width: 100%;  /* Make the button stretch the full width of the container */
  text-align: center;  /* Optional: Center the text within the button */
  margin-top: auto;
  padding-top:8px; 
`;

const Post= ({post})=>{
    return (
      <PostsContainer>
        <Container>
          <Heading>{addElipsis(post.title, 20)}</Heading>
          <Text>{post.categories}</Text>
          <Head>{post.username}</Head>
          <Details>{ addElipsis(post.description, 120)}</Details>
          <Button>Read More...</Button>
        </Container>
      </PostsContainer>
    );
}
export default Post;