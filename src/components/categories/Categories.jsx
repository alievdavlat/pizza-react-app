import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryIndex } from "../../redux/slices/filterSlice";

function Categories({ loading }) {
  const {categories, categoryIndex} = useSelector(state => state.filter)
  const dispatch = useDispatch()


  return (
    <div className="categories">
      <ul>
        {categories.map((item, idx) => {
          return loading ? (
            <Skeleton
              key={idx}
              width={150}
              height={50}
              style={{ margin: "0px 10px 0px 0px", borderRadius: "20px" }}
            />
          ) : (
            <li
              onClick={() => dispatch(setCategoryIndex(idx))}
              className={categoryIndex === idx ? "active" : ""}
              key={item}>
              {item}
            </li>
          );
        })}
      </ul>
      {loading ? (
        <Skeleton
          width={150}
          height={40}
          style={{ marginTop: "20px", marginBottom: "20px" }}
        />
      ) : (
        <h2 className="content__title">{categories[categoryIndex]} пиццы</h2>
      )}
    </div>
  );
}

export default Categories;
