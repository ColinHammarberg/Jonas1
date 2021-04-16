import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, withStyles } from "@material-ui/styles";
import { getHours } from "date-fns";
import { format } from "date-fns";
import { addMinutes } from "date-fns";
import SelectInput from "./SelectInput";
import FormHelperText from "@material-ui/core/FormHelperText";

const CustomTextField = withStyles((theme) => ({
  input: {
    borderRadius: 6,
    position: "relative",
    backgroundColor: "#F4F6F8",
    fontSize: 15,
    textTransform: "uppercase",
    width: "100%",
    padding: "10px 12px",
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
    // marginRight: 10,

    "& > .MuiFormHelperText-root": {
      color: "red",
    },
  },
  duration: {
    width: "45%",
    marginLeft: 10,

    "& > .MuiFormHelperText-root": {
      color: "red",
      fontSize: 11,
    },
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

const generateTimeArray = () => {
  const hours = [];

  let hour = getHours(new Date());
  hours.push(format(hour, "hh:mm a"));

  for (let time = 0; time < 48; time++) {
    hour = addMinutes(hour, 15);
    hours.push(format(hour, "hh:mm a"));
  }

  return hours;
};

const TimePickerInput = ({ timeValue, durationValue, onChange, error }) => {
  const classes = useStyles();

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
              name='time'
              value={timeValue}
              onChange={onChange}
            >
              {generateTimeArray().map((menu) => {
                return (
                  <MenuItem key={menu} value={menu}>
                    {menu}
                  </MenuItem>
                );
              })}
            </SelectInput>
            <FormHelperText>{error.time}</FormHelperText>
          </div>
          <div className={classes.duration}>
            <InputLabel htmlFor='duration' className={classes.label}>
              Duration(minutes)
            </InputLabel>
            <CustomTextField
              id='duration'
              label='Duration'
              name='duration'
              type='number'
              style={{ width: "100%" }}
              onChange={onChange}
              value={durationValue}
            />
            <FormHelperText>{error.duration}</FormHelperText>
          </div>
        </div>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
};

export default TimePickerInput;
