import React from "react";
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
  datePicker: {
    borderRadius: 6,
    position: "relative",
    backgroundColor: "#F4F6F8",
    fontSize: 12,
    width: "70%",
    padding: "3px 12px",
    "&:focus": {
      borderRadius: 6,
      backgroundColor: "#F4F6F8",
    },
    "& > .MuiInput-root": {
      fontSize: 15,
      fontFamily: "MediumLLWeb-Bold",
    },
    "& > .MuiInputBase-input": {
      textTransform: "uppercase",
    },
  },
}));

const DatePickerInput = ({ value, onChange }) => {
  const classes = useStyles();
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <InputLabel className={classes.label}>Date</InputLabel>
        <DatePicker
          autoOk
          classes={{ root: classes.datePicker }}
          variant='inline'
          value={value}
          format='MMMM dd, yyyy'
          onChange={onChange}
          InputProps={{ disableUnderline: true }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DatePickerInput;
