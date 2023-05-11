import React from "react";
import FormHelperText from "@mui/material/FormHelperText";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import "./myInputDate.scss";
const MyInputDate = ({ text, handleChange, valueKey, value }) => {
  const handleChangeDate = (val) => {
    console.log(val);
    handleChange({ key: valueKey, value: val });
  };
  console.log(value);

  return (
    <div className="my-input-date">
      <FormHelperText id="outlined-weight-helper-text">
        <span className="my-input__text">{text}</span>{" "}
        <span className="my-input__required">*</span>
      </FormHelperText>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        style={{ width: "100%" }}
      >
        <DemoContainer components={["DatePicker"]} style={{ width: "100%" }}>
          <DatePicker
            onChange={handleChangeDate}
            style={{ width: "100%" }}
            defaultValue={dayjs(value)}
            required
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default MyInputDate;
