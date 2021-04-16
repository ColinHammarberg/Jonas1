import React, { useState, useEffect } from "react";
import logo from "../assets/images/SPCE-Logotype_White.svg";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";
import DatePickerInput from "./DatePickerInput";
import TimePickerInput from "./TimePickerInput";
import AddNewParticipant from "./AddNewParticipant";
import { getHours, format } from "date-fns";
import "./AddMeeting.css";

const AddMeeting = ({ onCloseModal }) => {
  const initialMeetingDetails = {
    template: "No template",
    name: "First meeting with specification",
    description: "We meet up to...",
    date: format(new Date(), "MMMM dd,yyyy"),
    time: format(getHours(new Date()), "hh:mm a"),
    duration: 45,
    participants: [],
  };
  const [meetingDetails, setMeetingDetails] = useState(initialMeetingDetails);
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
  const [selectedCount, setSelectedCount] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (participants) {
      checkParticipantSelected();
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateForm();
    if (!validation) {
      return;
    }

    const selectedParticipants = participants.filter(
      (participant) => participant.selected === true
    );

    setMeetingDetails({
      ...meetingDetails,
      participants: selectedParticipants,
    });

    console.log(meetingDetails);
    console.log(selectedParticipants);
  };

  const validateForm = () => {
    const { name, description, time, duration } = meetingDetails;
    let errors = {};
    let isValid = true;

    if (name === "") {
      errors.name = "This field is required";
    }
    if (description === "") {
      errors.description = "This field is required";
    }
    if (time === "") {
      errors.time = "This field is required";
    }
    if (duration === "") {
      errors.duration = "This field is required";
    }

    if (Object.keys(errors).length > 0) {
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleInputOnChange = ({ target: input }) => {
    const { name, value } = input;
    setMeetingDetails({ ...meetingDetails, [name]: value });
  };

  const handleDateChange = (date) => {
    setMeetingDetails({
      ...meetingDetails,
      date: format(date, "MMMM dd,yyyy"),
    });
  };

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
    checkParticipantSelected();
  };

  const checkParticipantSelected = () => {
    let selected = 0;
    participants.forEach((participant) => {
      if (participant.selected === true) {
        selected++;
      }
    });
    setSelectedCount(selected);
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
                <SelectInput
                  label='Meeting template'
                  name='template'
                  value={meetingDetails.template}
                  onChange={handleInputOnChange}
                >
                  <MenuItem value='No template'>No Template</MenuItem>
                  <MenuItem value='Template 1'>Template 1</MenuItem>
                  <MenuItem value='Template 2'>Template 2</MenuItem>
                </SelectInput>
                <TextInput
                  label='Meeting name'
                  name='name'
                  defaultValue='First meeting with specification'
                  value={meetingDetails.name}
                  onChange={handleInputOnChange}
                  error={errors.name}
                />
                <TextAreaInput
                  label='Description'
                  name='description'
                  value={meetingDetails.description}
                  onChange={handleInputOnChange}
                  error={errors.description}
                />
              </div>
              <div className='date'>
                <h4 className='title'>Choose date and time</h4>
                <DatePickerInput
                  value={meetingDetails.date}
                  onChange={handleDateChange}
                />
                <TimePickerInput
                  // name='time'
                  timeValue={meetingDetails.time}
                  durationValue={meetingDetails.duration}
                  onChange={handleInputOnChange}
                  error={errors}
                />
              </div>
            </div>
            <div className='agenda-right-col'>
              {isAddingParticipant ? (
                <AddNewParticipant
                  isAddingParticipant={isAddingParticipant}
                  data={participants}
                  onClose={handleCloseParticipant}
                  onAddNewParticipant={handleAddNewParticipant}
                />
              ) : (
                <>
                  <div className='agenda-right-col-header'>
                    <h4 className='title'>Add participants</h4>
                    <AddIcon
                      className='add-icon'
                      onClick={handleAddParticipant}
                    />
                  </div>
                  <div className='list'>
                    <p className='description'>
                      Mark to select, or add new participants with +
                    </p>
                    <ul className='list-items'>
                      {participants.map((participant) => {
                        return (
                          <li
                            key={participant.id}
                            className='participant'
                            onClick={() =>
                              handleSelectParticipant(participant.id)
                            }
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
                </>
              )}
            </div>
          </div>
          <div className='invite-button'>
            <button
              className={`button ${selectedCount > 0 ? "selected" : ""}`}
              onClick={handleSubmit}
            >
              Invite to meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMeeting;
