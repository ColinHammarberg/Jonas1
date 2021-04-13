import React from "react";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles, makeStyles } from "@material-ui/styles";

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
    fontSize: "18px",
    fontFamily: "MediumLLWeb-Regular",
  },
  margin: {
    margin: "10px 0",
    width: "100%",
  },
}));

const TextInput = ({ label, defaultValue, onChange, name, value, error }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.margin}>
      <InputLabel shrink htmlFor='text-input' className={classes.label}>
        {label}
      </InputLabel>
      <CustomTextField
        defaultValue={defaultValue}
        value={value}
        // id='text-input'
        onChange={onChange}
        name={name}
        error={error}
      />
    </FormControl>
  );
};

export default TextInput;
