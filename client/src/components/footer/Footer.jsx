import {Box, Typography, styled} from '@mui/material';
import logo from '../../images/logoimage.png';

const Container=styled(Box)`
  height : 70px;
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: #b9e7e7;
`
const Logo = styled('img')`
  height: 60px;
  cursor: pointer;
  @media (max-width: 800px) {
    height: 60px; /* Shrink logo size */
  }
`;
const Text= styled(Typography)`
  font-size: 10px;
  color: teal;
`
const Footer=()=>{
    return (
      <>
        <Container>
            <Logo src={logo} alt="Logo"/>
            <Text>Capture Your Thoughts, Anywhere, Anytime.❤️</Text>
        </Container>
      </>
    );
}
export default Footer;