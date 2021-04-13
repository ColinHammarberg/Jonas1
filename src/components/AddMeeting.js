import React, { useState } from "react";
import "./AddMeeting.css";
import logo from "../assets/images/SPCE-Logotype_White.svg";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";
import DatePickerInput from "./DatePickerInput";
import TimePickerInput from "./TimePickerInput";
import AddNewParticipant from "./AddNewParticipant";

const AddMeeting = ({ onCloseModal }) => {
  const [isAddingParticipant, setIsAddingParticipant] = useState(false);
  const [participants, setParticipants] = useState([
    {
      id: 1,
      name: "Mia Anderberg",
      email: "mia@maillinator.com",
      avatar: "MA",
      selected: true,
    },
    {
      id: 2,
      name: "Long Nguyen",
      email: "long@maillinator.com",
      avatar: "LN",
      selected: false,
    },
    {
      id: 3,
      name: "Toan Nguyen",
      email: "toan@maillinator.com",
      avatar: "TN",
      selected: true,
    },
    {
      id: 4,
      name: "Erik Wibom",
      email: "erik@maillinator.com",
      avatar: "EW",
      selected: false,
    },
    {
      id: 5,
      name: "Erik Wibom",
      email: "erik@maillinator.com",
      avatar: "EW",
      selected: false,
    },
  ]);

  const handleAddParticipant = () => {
    setIsAddingParticipant(true);
  };

  const handleSelectParticipant = (id) => {
    const newParticipants = [...participants].map((participant) =>
      participant.id === id
        ? Object.assign(participant, { selected: !participant.selected })
        : participant
    );
    setParticipants(newParticipants);
  };

  const handleCloseParticipant = () => {
    setIsAddingParticipant(false);
  };

  const handleAddNewParticipant = (participant) => {
    const newParticipants = [...participants];
    newParticipants.unshift(participant);
    setParticipants(newParticipants);
  };

  return (
    <div>
      <div className='container'>
        <div className='popup'>
          <div className='header'>
            <div className='left-col'>
              <img src={logo} alt='Spce logo' />
              <h4 className='title'>Add a meeting</h4>
            </div>
            <div className='close-btn-wrapper'>
              <CloseIcon onClick={onCloseModal} className='close-icon' />
            </div>
          </div>
          <div className='agenda'>
            <div className='agenda-left-col'>
              <div className='info'>
                <h4 className='title'>Add information</h4>
                <SelectInput label='Meeting template' />
                <br />
                <TextInput
                  label='Meeting name'
                  defaultValue='First meeting with specification'
                />
                <TextAreaInput label='Description' />
              </div>
              <div className='date'>
                <h4 className='title'>Choose date and time</h4>
                <div>
                  <DatePickerInput />
                </div>
                <div>
                  <TimePickerInput />
                </div>
              </div>
            </div>
            <div className='agenda-right-col'>
              {isAddingParticipant && (
                <AddNewParticipant
                  isAddingParticipant={isAddingParticipant}
                  data={participants}
                  onClose={handleCloseParticipant}
                  onAddNewParticipant={handleAddNewParticipant}
                />
              )}
              <div className='agenda-right-col-header'>
                <h4 className='title'>Add participants</h4>
                <AddIcon className='add-icon' onClick={handleAddParticipant} />
              </div>
              <div className='list'>
                <p className='description'>
                  Mark to select, or add new participants with +
                </p>
                <ul>
                  {participants.map((participant) => {
                    return (
                      <li
                        key={participant.id}
                        className='participant'
                        onClick={() => handleSelectParticipant(participant.id)}
                      >
                        <div
                          className={`participant-avatar ${
                            participant.selected ? "selected" : ""
                          }`}
                        >
                          {participant.avatar}
                        </div>
                        <div className='participant-details'>
                          <div className='name'>{participant.name}</div>
                          <div className='email'>{participant.email}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className='invite-button'>
            <button>Invite to meeting</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMeeting;
