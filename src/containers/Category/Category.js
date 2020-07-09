import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import CreateCategory from "./CreateCategory/CreateCategory";
import CategoryTable from "./CategoryTable/CategoryTable";
import { fetchCategory, makeNewCat, deleteCat } from "../../store/action/";
import { useSelector, useDispatch } from "react-redux";

function useCategories() {
  const [value, setValue] = useState(0);
  const categories = useSelector((state) => state.cats.categories);
  const dispatch = useDispatch();

  const handleMakeNewCat = (data) => {
    dispatch(makeNewCat(data));
    setValue(0);
  };
  const handleDeleteCat = (id) => {
    dispatch(deleteCat(id));
  };
  useEffect(() => {
    dispatch(fetchCategory());
  }, [value]);

  return {
    setValue,
    cats: categories,
    value,
    handleMakeNewCat,
    handleDeleteCat,
  };
}

export default function (props) {
  const {
    value,
    handleDeleteCat,
    handleMakeNewCat,
    cats,
    setValue,
  } = useCategories();

  function getContent() {
    if (value === 0) {
      return <CategoryTable deleteCategory={handleDeleteCat} cats={cats}/>;
    } else if (value === 1) {
      return (
        <CreateCategory createNewCategory={handleMakeNewCat} cats={cats} />
      );
    }
  }

  return (
    <div className="menu">
      <h1 className="heading__scondary">Categories !!!!!</h1>
      <Tabs
        value={value}
        onChange={(e, value) => setValue(value)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="categories" className="menu__tab-label" />
        <Tab label="make new category" className="menu__tab-label" />
      </Tabs>
      <div className="menu__cmpArea">{getContent()}</div>
    </div>
  );
}
