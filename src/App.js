import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { AddUser, UpdateUser } from "./utils/functions";
import { ToastContainer } from "react-toastify";
import EditModal from "./utils/EditModal";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};

function App() {
  const [info, setInfo] = useState(initialValues);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      UpdateUser(info);
    } else {
      AddUser(info);
    }
    setInfo(initialValues);
  };

  const editUser = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}

      />
      <Contacts editUser={editUser} handleClickOpen={handleClickOpen} />
      <ToastContainer />
      <EditModal
        handleClose={handleClose}
        open={open}
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
