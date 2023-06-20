import { useDispatch, useSelector } from "react-redux";
import "./PopularTags.scss";
import { useEffect } from "react";
import { getTags } from "../../reduxToolkit/tagsSlice/extraReducer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function PopularTags() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tagsSlice);
  const lan = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  return (
    <div className="populartags">
      <h4 className="populartags-title">{t("famousTag")}</h4>
      <div className="populartags-tags">
        {tags?.data?.map((el) =>
          el[`tag_${lan}`]?.split(",")?.map((tag, index) => (
            <Link
              to={`/hashtag/${tag.trim()}`}
              key={index}
              className="populartags-tag">
              {tag}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
