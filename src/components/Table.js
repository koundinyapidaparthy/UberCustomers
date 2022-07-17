import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




function ReactTable({tableHeaders,rows}) {
    
    function cellRender({key,value,index}){
      if(key==="id"){
        return index+1
      }
      else{
        return value
      }
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {tableHeaders.map(({label},index)=>{
                return <TableCell key={index}  >{label}</TableCell>
          })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
            >
            {
                Object.entries(row).map(([key,value])=> {
                    return <TableCell key={index}  >{cellRender({key,value,index})}</TableCell> 
                }) 
            }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReactTable