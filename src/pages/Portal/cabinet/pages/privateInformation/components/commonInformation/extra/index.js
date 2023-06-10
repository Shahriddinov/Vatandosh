import { registerUser } from "../../../../../../../../reduxToolkit/authSlice/extraReducer";
import { getCountryCities } from "../../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

export const commonInformationDataSubmit = ({ data, dispatch }) => {
  const formData = new FormData();

  formData.append("first_name", data.first_name);
  formData.append("second_name", data.second_name);
  formData.append("last_name", data.last_name);
  formData.append("national_address", data.national_address);
  formData.append("international_location_id", data.international_location_id);
  formData.append("international_address_id", data.international_address_id);
  formData.append("national_id", data.national_id);
  formData.append("birth_date", data.birth_date);
  formData.append("gender", data.gender);
  formData.append("phone_number", data.phone_number);
  formData.append("job_position", data.job_position);
  if (typeof data.avatar_url === "object" && data.avatar_url !== null) {
    formData.append("avatar_url", data.avatar_url);
  } else if (typeof data.passport_file === "object")
    formData.append("passport_file", data.passport_file);

  dispatch(registerUser(formData));
};

export const commonInformationDataChange = ({
  setData,
  dispatch,
  key,
  value,
}) => {
  setData((prev) => ({ ...prev, [key]: value }));
  if (key === "international_location_id") {
    dispatch(getCountryCities({ location_id: value }));
  }
};

export const findsUserData = ({
  locationData,
  allCitiesGet,
  nationsData,
  data,
  genderOptions,
}) => {
  const findCountry = locationData.find(
    (country) => country.id === data.international_location_id
  );
  const findCity = allCitiesGet.find(
    (city) => city?.id === data.international_address_id
  );
  const findNation = nationsData.find(
    (nation) => nation?.id === data.national_id
  );

  const findGender = genderOptions.find(
    (gender) => gender?.id * 1 === data.gender
  );

  return { findCountry, findCity, findNation, findGender };
};
