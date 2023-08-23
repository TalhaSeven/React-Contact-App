import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const EditModal = ({ handleClose, open, info, handleSubmit, setInfo }) => {
  const handleChange2 = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <Grid
            textAlign="center"
            style={{ width: "300" }}
          >
            <h2 className="contact-header">Edit Contact</h2>
            <Box style={{ backgroundColor: "white", padding: "20px" }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3} direction="column">
                  <TextField
                    variant="outlined"
                    name="username"
                    value={info.username}
                    onChange={handleChange2}
                    placeholder="Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="outlined"
                    name="phoneNumber"
                    value={info.phoneNumber}
                    onChange={handleChange2}
                    placeholder="Phone Number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneEnabledIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel style={{ paddingLeft: "20px" }}>
                      Gender
                    </InputLabel>
                    <Select
                      label="Gender"
                      name="gender"
                      variant="outlined"
                      value={info.gender}
                      onChange={handleChange2}
                    >
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    variant="contained"
                    type="submit"
                    value="Submit"
                    onClick={handleClose}
                  >
                    Update
                  </Button>
                </Stack>
              </form>
            </Box>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default EditModal;
