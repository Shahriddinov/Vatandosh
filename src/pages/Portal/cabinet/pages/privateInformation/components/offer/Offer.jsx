import "./offer.scss";
import { useCabinetOfferFetching } from "./hooks/useCabinetOfferFetching";
import { Spinner } from "../../../../../../../component";
import { ToastContainer } from "react-toastify";
import { CabinetOfferForm } from "./components";
import trashIcon from "../../../../../../../assets/images/choose/trashIcon.svg";
// libarary
import { motion } from "framer-motion";
import { cabinetOfferDelete } from "./extra";
import { useTranslation } from "react-i18next";

const Offer = () => {
  const { t } = useTranslation();
  const { data, setData, loading, error, expertSuggestionsData, dispatch } =
    useCabinetOfferFetching();

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <p>{error}</p>;
  }

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
      {/* <button
        className="cabinet-offer-trash-btn"
        onClick={() =>
          cabinetOfferDelete({ dispatch, id: expertSuggestionsData[0].id })
        }
      >
        {" "}
        <motion.img
          onClick={() => ""}
          whileTap={{ scale: 0.9 }}
          src={trashIcon}
          alt="trashIcon"
        />
      </button> */}
      <CabinetOfferForm
        data={data}
        setData={setData}
        expertSuggestionsData={expertSuggestionsData}
      />
      <button className="commonInformation-form-btn" form="cabinetOfferSubmit">
        {t("private-information.save")}
      </button>
    </>
  );
};

export default Offer;
