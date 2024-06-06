import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Avatar} from '@mui/material';
import {grey} from "@mui/material/colors";

interface GrantTableProps {
  grants: any[];
}

const GrantTable: React.FC<GrantTableProps> = ({ grants }) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: 20 }}>
      <Table
        sx={{
          border: '1px solid grey'
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Foundation Name</TableCell>
            <TableCell>Grant Name</TableCell>
            <TableCell>Average Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Deadline</TableCell>
            <TableCell>Match Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grants.map((grant) => (
            <TableRow key={grant.id}>
              <TableCell
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                }}
              >
                <Avatar sx={{ bgcolor: grey[500], marginRight: 1 }} aria-label="title">
                  {grant.name[0]}
                </Avatar>
                {grant.foundation}
              </TableCell>
              <TableCell>{grant.name}</TableCell>
              <TableCell>{grant.amount}</TableCell>
              <TableCell>
                <Chip label={grant.status} color={grant.status === 'Accepted' ? 'secondary' : grant.status === 'Rejected' ? 'primary' : 'success'}/>
              </TableCell>
              <TableCell>{grant.deadline}</TableCell>
              <TableCell>{grant.matchDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GrantTable;