import React, { useState } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { TimePicker } from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles } from "@material-ui/styles";
import "./TimePickerInput.css";

const CustomTextField = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: 22,
    },
  },
  input: {
    borderRadius: 6,
    // position: "relative",
    backgroundColor: "#F4F6F8",
    fontSize: 15,
    width: "100%",
    padding: "10px 12px",
    fontFamily: "MediumLLWeb-Bold",
    "&:focus": {
      borderRadius: 6,
      backgroundColor: "#F4F6F8",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  label: {
    color: "#4E4E53 !important",
    fontSize: "14px",
    marginTop: 10,
    marginBottom: 5,
    fontFamily: "MediumLLWeb-Regular",
  },

  timeDisplay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    padding: 0,
  },
  timePicker: {
    borderRadius: 6,
    backgroundColor: "#F4F6F8",
    fontSize: 15,
    width: "50%",
    padding: "3px 12px",
    marginRight: 30,
    fontFamily: "MediumLLWeb-Bold",
    "&:focus": {
      borderRadius: 6,
      backgroundColor: "#F4F6F8",
    },
  },
}));

const TimePickerInput = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState("2018-01-01T00:00:00.000Z");

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <InputLabel htmlFor='select-input-label' className={classes.label}>
          Time
        </InputLabel>
        <div className={classes.timeDisplay}>
          <TimePicker
            style={{
              width: "100%",
              marginRight: 10,
              fontSize: 15,
              textTransform: "uppercase",
              fontFamily: "MediumLLWeb-Bold",
            }}
            classes={{ root: classes.timePicker }}
            variant='inline'
            value={selectedDate}
            onChange={handleDateChange}
            InputProps={{ disableUnderline: true }}
          />
          <CustomTextField style={{ width: "100%" }} defaultValue='45 MIN' />
        </div>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
};

export default TimePickerInput;
