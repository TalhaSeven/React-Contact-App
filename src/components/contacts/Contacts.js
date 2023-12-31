import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { DeleteUser, useFetch } from "../../utils/functions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Contacts = ({ editUser, handleClickOpen }) => {
  const { isLoading, contactList } = useFetch();

  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              // Bilgiler gelmediği durumda Loading yazısı görünsün
              isLoading ? (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={5} align="center">
                    Loading
                  </TableCell>
                </TableRow>
              ) : contactList?.lenght === 0 ? (
                // Bilgiler olmadığı,boş olduğu  durumda veri bulunamadı mesajı
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={5} align="center">
                    No Result Found
                  </TableCell>
                </TableRow>
              ) : (
                // Bilgiler geldiği zaman aşağıya yazılacak kodlar çalışsın
                contactList?.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="center">{item.username} </TableCell>
                    <TableCell align="center">{item.phoneNumber} </TableCell>
                    <TableCell align="center">{item.gender} </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => DeleteUser(item.id)}
                    >
                      <DeleteIcon />
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() =>
                        editUser(
                          item.id,
                          item.username,
                          item.phoneNumber,
                          item.gender
                        )
                      }
                    >
                      <EditIcon onClick={handleClickOpen} />
                    </TableCell>
                  </TableRow>
                ))
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
