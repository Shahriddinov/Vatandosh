import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../../component/card/Card";
import { getCategoryShows } from "../../../../reduxToolkit/categoryShowsSlice/extraReducer";
import "./CategoryShowsCategory.scss";

export default function CategoryShowsCategory() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.categoryShows.categoriesData.data);
  console.log(data);

  useEffect(() => {
    dispatch(getCategoryShows())
  }, [])

  return (
    <div className='showscategory'>
      <div className="container">
        <h2 className="showscategory-title">Turkumlar</h2>
        <div className="showscategory-list">
          {/* {
            data?.map((el) => {
              return <Card key={el.id} {...el} />
            })
          } */}
        </div>
      </div>
    </div>
  )
}
