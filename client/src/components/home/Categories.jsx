import {Table, TableHead, TableBody, TableRow, TableCell, styled} from '@mui/material';
import '../../App.css';

import { Link} from 'react-router-dom';
import {categories} from '../../constants/data';
const Conta= styled(Table)`
  background-color: #b9e7e7;
  color: white;
  border: 4px solid #ffffff;
`
const StyledTableRow = styled(TableRow)`
  border: 4px solid #ffffff; // Adding border around each row
  &:hover {
    background-color: white;
  }
`;

const StyledTableCell = styled(TableCell)`
  border: 4px solid #ffffff;// Adding border around each cell
  font-size: 16px;
  color: #ffffff;
  font-weight: 700;
  &:hover{
    color: #008080;
    font-size: 18px;
  }
`
// const styleLink= styled(Link)`
//    text-decoration: none;
//    color: inherit;
// `
const Stale = styled(Link)`
    text-decoration: none;
    color: inherit;
`
const Categories=()=>{
    return (
      <>
        <Conta>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell
                style={{
                  fontFamily: "'Feeling Passionate', sans-serif",
                  color: "#008080",
                  backgroundColor: "white",
                  fontSize: "20px",
                  fontWeight: 800,
                }}
              >
                <Stale to='/'>
                  ALL CATEGORIES
                </Stale>
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
          {categories.map((category) => (
            <StyledTableRow key={category.id}>
              <StyledTableCell>
                <Stale to={`/?category=${category.type}`}>
                  {category.type}
                </Stale>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Conta>
      </>
    );
}
export default Categories;