import React from "react";

import "./chatDocs.scss";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

const ChatDocs = ({ showDocs, docsData }) => {
  return (
    <div className={`chat-docs ${showDocs ? "show" : ""}`}>
      <div className="chat-docs__container">
        {docsData?.messages?.data?.length > 0 ? (
          docsData?.messages?.data?.map((data) => (
            <div key={data.id} className="chat-docs__one-doc">
              <div className="chat-docs__icon">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.99984 0.666585C5.99984 0.48249 5.8506 0.333252 5.6665 0.333252H3.33317C1.86041 0.333252 0.666504 1.52716 0.666504 2.99992V10.9999C0.666504 12.4727 1.86041 13.6666 3.33317 13.6666H8.6665C10.1393 13.6666 11.3332 12.4727 11.3332 10.9999V5.99992C11.3332 5.81582 11.1839 5.66658 10.9998 5.66658H9.33317C7.49222 5.66658 5.99984 4.1742 5.99984 2.33325V0.666585ZM10.8128 4.33325C11.0345 4.33325 11.1938 4.11921 11.0873 3.92479C10.9969 3.75971 10.8829 3.6068 10.7474 3.47132L8.1951 0.919038C8.05962 0.783561 7.90671 0.669527 7.74164 0.579121C7.54721 0.472643 7.33317 0.631949 7.33317 0.853617V2.33325C7.33317 3.43782 8.2286 4.33325 9.33317 4.33325H10.8128ZM5.99984 6.33325C6.36803 6.33325 6.6665 6.63173 6.6665 6.99992V9.39044L7.52843 8.52851C7.78878 8.26816 8.21089 8.26816 8.47124 8.52851C8.73159 8.78886 8.73159 9.21097 8.47124 9.47132L6.47124 11.4713C6.21089 11.7317 5.78878 11.7317 5.52843 11.4713L3.52843 9.47132C3.26808 9.21097 3.26808 8.78886 3.52843 8.52851C3.78878 8.26816 4.21089 8.26816 4.47124 8.52851L5.33317 9.39044V6.99992C5.33317 6.63173 5.63165 6.33325 5.99984 6.33325Z"
                    fill="#065EA9"
                  />
                </svg>
              </div>
              <div className="chat-docs__file">
                <a
                  href={`${PORTAL_IMAGE_URL}${data.message}`}
                  className="chat-docs__file-name"
                  target="_blank"
                  download
                >
                  {data?.file.split(".")[0].slice(0, 50) +
                    "." +
                    data?.message.split("/")[1].split(".")[1]}
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="chat-docs__no-file">No any document yet.</p>
        )}
      </div>
    </div>
  );
};

export default ChatDocs;
