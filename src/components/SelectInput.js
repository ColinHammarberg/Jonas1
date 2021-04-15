import React from "react";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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
  paper: {
    "&  .MuiPaper-root": {
      maxHeight: "500px",
    },
  },
  dropdownStyle: {
    maxHeight: 250,

    "&::-webkit-scrollbar": {
      width: 4,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#f4f6f8",
    },
  },
}));

const SelectInput = ({ label, onChange, value, children }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.margin}>
      <InputLabel shrink htmlFor='select-input-label' className={classes.label}>
        {label}
      </InputLabel>
      <Select
        labelId='select-input-label '
        id='select-input'
        value={value}
        onChange={onChange}
        input={<CustomTextField />}
        MenuProps={{ classes: { paper: classes.dropdownStyle } }}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
