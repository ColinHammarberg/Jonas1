import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { withStyles, makeStyles } from "@material-ui/styles";

const CustomTextField = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: 22,
    },
  },
  input: {
    borderRadius: 6,
    position: "relative",
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
    fontSize: "18px",
    fontFamily: "MediumLLWeb-Regular",
  },
  margin: {
    margin: "20px 0 15px 0",
    width: "100%",
  },
}));

const SelectInput = ({ label }) => {
  const classes = useStyles();
  const [value, setValue] = useState("No template");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className={classes.margin}>
      <InputLabel shrink htmlFor='select-input-label' className={classes.label}>
        {label}
      </InputLabel>
      <Select
        labelId='select-input-label '
        id='select-input'
        value={value}
        onChange={handleChange}
        input={<CustomTextField />}
      >
        <MenuItem value='No template'>No Template</MenuItem>
        <MenuItem value='Template 1'>Template 1</MenuItem>
        <MenuItem value='Template 2'>Template 2</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectInput;
