import React from "react";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

import "./mySelect.scss";
import { useTranslation } from "react-i18next";
import { Autocomplete, TextField } from "@mui/material";

const MySelect = ({ data, text, value, handleChange, valueKey }) => {
  const { t } = useTranslation();

  const handleChangeSelect = (event, { id }) => {
    const {
      target: { value },
    } = event;
    handleChange({ key: valueKey, value: id });
  };

  return (
    <div className="my-select">
      <FormControl sx={{ m: 1, width: "100%" }}>
        <FormHelperText id="outlined-weight-helper-text">
          <span className="my-input__text">{text}</span>
          <span className="my-input__required"> *</span>
        </FormHelperText>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          sx={{ width: "100%" }}
          onChange={handleChangeSelect}
          placeholder="Barcha davlatlar"
          renderInput={(params) => (
            <TextField
              {...params}
              label=""
              placeholder={t("communityAssociation.menu5_info.input1_desc")}
              required={true}
            />
          )}
        />
      </FormControl>
    </div>
  );
};

export default MySelect;
