import React, { useState } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, withStyles } from "@material-ui/styles";
import { getHours } from "date-fns";
import { format } from "date-fns";
import SelectInput from "./SelectInput";

const timeMenus = [
  "12:00 AM",
  "12:30 AM",
  "01:00 AM",
  "01:30 AM",
  "02:00 AM",
  "02:30 AM",
  "03:00 AM",
  "03:30 AM",
  "04:00 AM",
  "04:30 AM",
  "05:00 AM",
  "05:30 AM",
  "06:00 AM",
  "06:30 AM",
  "07:00 AM",
  "07:30 AM",
  "08:00 AM",
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
];

const CustomTextField = withStyles((theme) => ({
  input: {
    borderRadius: 6,
    position: "relative",
    backgroundColor: "#F4F6F8",
    fontSize: 15,
    textTransform: "uppercase",
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
    // width: "100%",
    padding: "3px 8px",
    "&:focus": {
      borderRadius: 6,
      backgroundColor: "#F4F6F8",
    },

    "& > .MuiInput-root": {
      fontSize: 15,
      textTransform: "uppercase",
      fontFamily: "MediumLLWeb-Bold",
    },
  },
  time: {
    width: "55%",
    marginRight: 10,
  },
  duration: {
    width: "45%",
    marginLeft: 10,
  },

  input: {
    borderRadius: 6,
    position: "relative",
    backgroundColor: "#F4F6F8",
    fontSize: 15,
    textTransform: "uppercase",
    width: "100%",
    padding: "10px 12px",
    fontFamily: "MediumLLWeb-Bold",
    "&:focus": {
      borderRadius: 6,
      backgroundColor: "#F4F6F8",
    },
  },
}));

// const generateTimeArray = () => {
//   const hours = [];

//   for (let hour = 0; hour < 24; hour++) {
//     hour = format(getHours(new Date()), "hh:mm a..aa");
//     hours.push(hour);
//   }

//   console.log(hours);
// };

// generateTimeArray();

const TimePickerInput = () => {
  const classes = useStyles();
  const [timeValue, setTimeValue] = useState("08:00 AM");

  const handleTimeChange = (e) => {
    setTimeValue(e.target.value);
  };

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.timeDisplay}>
          <div className={classes.time}>
            {/* Native timepicker */}
            {/* <InputLabel htmlFor='time-picker' className={classes.label}>
              Time
            </InputLabel>
            <TextField
              id='time'
              type='time'
              defaultValue='07:30'
              className={`time-picker ${classes.timePicker}`}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            /> */}
            <SelectInput
              label='Time'
              value={timeValue}
              onChange={handleTimeChange}
            >
              {timeMenus.map((menu) => {
                return (
                  <MenuItem key={menu} value={menu}>
                    {menu}
                  </MenuItem>
                );
              })}
            </SelectInput>
          </div>
          <div className={classes.duration}>
            <InputLabel htmlFor='duration' className={classes.label}>
              Duration(minutes)
            </InputLabel>
            <CustomTextField
              id='duration'
              label='Duration'
              type='number'
              style={{ width: "100%" }}
              defaultValue={45}
            />
          </div>
        </div>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
};

export default TimePickerInput;
