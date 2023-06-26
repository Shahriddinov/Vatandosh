import "./scientificActivity.scss";
import FormCard from "./component/FormCard";
import { useScientificActivity } from "./hooks/useScientificActivity";
import { Spinner } from "../../../../../../../component";
import { cabinetScientificSubmit } from "./extra";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

const ScientificActivity = () => {
  const { t } = useTranslation();
  const {
    scientificData,
    data,
    setData,
    scientificDataDataLoading,
    scientificDataError,
    dispatch,
  } = useScientificActivity();

  if (scientificDataDataLoading) {
    return <Spinner />;
  } else if (scientificDataError) {
    return <p>{scientificDataError}</p>;
  }

  const handleSubmit = () => cabinetScientificSubmit({ data, dispatch });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="scientificActivity-cont">
        <FormCard
          data={data}
          setData={setData}
          scientificData={scientificData}
        />
      </div>
      <button className="commonInformation-form-btn" onClick={handleSubmit}>
        {t("projects_page.form_submit")}
      </button>
    </>
  );
};

export default ScientificActivity;
