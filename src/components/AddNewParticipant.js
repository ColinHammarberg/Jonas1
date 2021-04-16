import React, { useState } from "react";
import "./AddNewParticipant.css";
import TextInput from "./TextInput";
import CloseIcon from "@material-ui/icons/Close";

const AddNewParticipant = ({ data, onClose, onAddNewParticipant }) => {
  const [newParticipant, setNewParticipant] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [error, setError] = useState({});

  const handleOnChange = ({ target: input }) => {
    const { name, value } = input;
    setNewParticipant({ ...newParticipant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateForm();
    if (!validation) {
      return;
    }

    const participant = {
      id: data.length + 1,
      avatar: `${newParticipant.firstName.charAt(
        0
      )}${newParticipant.lastName.charAt(0)}`,
      name: `${newParticipant.firstName} ${newParticipant.lastName}`,
      email: newParticipant.email,
      selected: true,
    };
    onAddNewParticipant(participant);
    onClose();
  };

  const validateForm = () => {
    const { firstName, lastName, email } = newParticipant;
    let errors = {};
    let isValid = true;

    if (firstName === "") {
      errors.firstName = "This field is required";
    }
    if (lastName === "") {
      errors.lastName = "This field is required";
    }
    if (email === "") {
      errors.email = "This field is required";
    }

    if (Object.keys(errors).length > 0) {
      isValid = false;
    }

    setError(errors);

    return isValid;
  };

  return (
    <div className='new-participant'>
      <div className='new-participant-header'>
        <h4 className='title'>New participants</h4>
        <CloseIcon className='close-icon' onClick={onClose} />
      </div>
      <div className='name'>
        <div className='first-name'>
          <TextInput
            label='First Name'
            name='firstName'
            value={newParticipant.firstName}
            onChange={handleOnChange}
            error={error.firstName}
          />
        </div>
        <div className='last-name'>
          <TextInput
            label='Last Name'
            value={newParticipant.lastName}
            name='lastName'
            onChange={handleOnChange}
            error={error.lastName}
          />
        </div>
      </div>
      <div className='email'>
        <TextInput
          label='Email'
          value={newParticipant.email}
          name='email'
          onChange={handleOnChange}
          error={error.email}
        />
      </div>
      <div className='add-button'>
        <button className='button' onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewParticipant;
