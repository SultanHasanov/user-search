import React from "react";
import Cards from "../components/Cards/Cards";
import InputSearch from "../components/InputSearch/InputSearch";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRepozitories } from "../features/cardsSlice";


const Home = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");

  const updateSearchValue = useCallback(
    debounce((str) => {
      setUserName(str);
    }, 1000),
    []
  );

  const onChangeInput = (e) => {
    updateSearchValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getRepozitories(userName));
  }, [userName]);

  return (
    <div id="rowId" className="row">
      <InputSearch onChange={onChangeInput} />
      <Cards />
    </div>
  );
};

export default Home;
