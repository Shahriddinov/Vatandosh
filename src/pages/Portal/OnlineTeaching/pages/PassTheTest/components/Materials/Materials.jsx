import { FaFileAlt } from "react-icons/fa";
import "./Materials.scss";
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";

export default function Materials({ activeNav }) {
  return (
    <div
      className={
        activeNav === 2
          ? "materials passTheTest-scaleActive"
          : "materials passTheTest-scaleHidden"
      }
      style={activeNav === 2 ? { paddingBottom: "50px" } : null}
    >
      {[1, 2, 3, 4].map((el) => (
        <a
          key={el}
          className="materials-item"
          download={true}
          href="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg"
        >
          <FaFileAlt
            className="materials-item-FileIcon"
            style={
              el === 2
                ? { color: "#F17721" }
                : el === 3
                ? { color: "#41C136" }
                : { color: "#3562F4" }
            }
          />
          <div className="materials-item-desc">
            <p>Normative document.pdf</p>
            <span>02.12.2019</span>
          </div>
          <BsFileEarmarkArrowDownFill className="materials-item-downloadIcon" />
        </a>
      ))}
    </div>
  );
}
