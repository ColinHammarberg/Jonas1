import React, { useState } from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    color: "#4E4E53 !important",
    fontSize: "14px",
    marginBottom: "5px",
    fontFamily: "MediumLLWeb-Regular",
  },
  margin: {
    margin: "10px 0",
    width: "100%",
  },
  datePicker: {
    borderRadius: 6,
    position: "relative",
    backgroundColor: "#F4F6F8",
    fontSize: 12,
    width: "70%",
    padding: "3px 12px",
    fontFamily: "MediumLLWeb-Bold",
    textTransform: "uppercase",
    "&:focus": {
      borderRadius: 6,
      backgroundColor: "#F4F6F8",
    },
    "& > .MuiInput-root": {
      fontSize: 15,
      textTransform: "uppercase",
      fontFamily: "MediumLLWeb-Bold",
    },
    "& > .MuiInputBase-input": {
      textTransform: "uppercase",
    },
  },
}));

const DatePickerInput = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <InputLabel htmlFor='select-input-label' className={classes.label}>
          Date
        </InputLabel>
        <DatePicker
          classes={{ root: classes.datePicker }}
          variant='inline'
          value={selectedDate}
          format='MMMM dd, yyyy'
          onChange={handleDateChange}
          InputProps={{ disableUnderline: true }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DatePickerInput;
