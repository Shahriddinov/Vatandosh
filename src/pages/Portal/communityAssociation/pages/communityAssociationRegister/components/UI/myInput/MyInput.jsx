import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import "./myInput.scss";

const MyInput = ({
  value,
  text,
  placeholder,
  type,
  inputType,
  valueKey,
  handleChange,
  id,
}) => {
  return (
    <div className="my-input">
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <FormHelperText id="outlined-weight-helper-text">
          <span className="my-input__text">{text}</span>{" "}
          <span className="my-input__required">*</span>
        </FormHelperText>
        {inputType === "input" ? (
          <TextField
            id="outlined-start-adornment"
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) =>
              handleChange({ key: valueKey, value: e.target.value.trim(), id })
            }
          />
        ) : (
          <TextareaAutosize
            value={value}
            aria-label="minimum height"
            placeholder={placeholder}
            className="my-input__textarea"
            onChange={(e) =>
              handleChange({ key: valueKey, value: e.target.value.trim() })
            }
          />
        )}
      </FormControl>
    </div>
  );
};

export default MyInput;
