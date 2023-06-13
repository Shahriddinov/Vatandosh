import "./offer.scss";
import { useCabinetOfferFetching } from "./hooks/useCabinetOfferFetching";
import { Spinner } from "../../../../../../../component";
import { CabinetOfferForm } from "./components";
import { ToastContainer } from "react-toastify";

const Offer = () => {
  const { data, setData, loading, error, expertSuggestionsData } =
    useCabinetOfferFetching();

  if (loading) {
    return <Spinner />;
  } else if ({ error }) {
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
      <CabinetOfferForm
        data={data}
        setData={setData}
        expertSuggestionsData={expertSuggestionsData}
      />
      {/* <button className="commonInformation-form-btn" form="cabinetOfferSubmit">
        Submit
      </button> */}
    </>
  );
};

export default Offer;
