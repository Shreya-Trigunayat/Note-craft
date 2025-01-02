import { AppBar, Toolbar, styled, Box, Button } from '@mui/material';
import { Link, useSearchParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logoimage.png';

const Component = styled(AppBar)`
  background: #FFFFFF;
  color: black;
  @media (max-width: 800px) {
    height: 80px;
    display: flex;
  justify-content: center;
  align-items: center;
  }
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    display: flex;
  justify-content: center;
  align-items: center;
    gap: 5px;
  }
`;

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 70px;
  @media (max-width: 800px) {
    justify-content: center;
    margin-left: 1.5px; /* Reduce margin on smaller screens */
  }
`;

const Logo = styled('img')`
  height: 90px;
  cursor: pointer;
  @media (max-width: 800px) {
    height: 60px; /* Shrink logo size */
  }
`;

const LinksContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-right: 70px;
  align-items: center;
  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }
  @media (max-width: 800px) and (min-width: 430px){
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    justify-content: center;
    gap: 10px;
    margin-right: 1.5px; /* Reduce gap between links */
    & > a {
      font-size: 0.7rem;
      padding: 5px 5px; /* Adjust font size * /* Reduce padding */
    }
  }
  @media (max-width: 430px){
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    justify-content: center;
    gap: 10px;
    margin-right: 1px; /* Reduce gap between links */
    & > a {
      font-size: 0.5rem;
      padding: 5px 5px; /* Adjust font size * /* Reduce padding */
    }
  }
`;
const Write = styled(Button)`
  background-color: #b9e7e7;
  color: #008080;
  font-weight: 800;
  width: 50px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: teal;
    background-color: white;
    border: 1px solid teal;
  }
  @media (max-width: 800px) {
    width: 5px; /* Reduce button size */
    height: 5px;
    border-radius: 5px;
    font-size: 0.6rem; /* Adjust font size */
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <>
      <Component>
        <Container>
          <LogoContainer>
            <Logo
              src={logo}
              alt="Logo"
              onClick={() => navigate("/")}
            />
          </LogoContainer>
          <LinksContainer>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/login">LOGOUT</Link>
            <Link to={`/create?category=${category || ''}`}>
              <Write>WRITE</Write>
            </Link>
          </LinksContainer>
        </Container>
      </Component>
    </>
  );
};

export default Header;
