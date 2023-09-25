import React, { useEffect, useState } from "react";
import Gist from "./Gist";
import { useDispatch, useSelector } from "react-redux";
import { selectGists, setGistList } from "../redux/slice";
import { getPublicGists } from "../services/gistService";

import "../styling/GistList.css";

const GistList = () => {
  //getting select from redux
  let { gistsList } = useSelector(selectGists);
  const dispatch = useDispatch();

  //Api wrapper to get data
  const getPublicGistsData = async () => {
    let response = await getPublicGists();
    if (response.status === 200) {
      //dispatching the right data into redux
      dispatch(setGistList(response?.data));
    } else {
      //dispatch no data if api fails
      dispatch(setGistList(["No Data"]));
    }
  };

  //useEffect to get data on load
  useEffect(() => {
    getPublicGistsData();
  }, []);

  return (
    <>
      <div className="container">
        {gistsList?.length ? (
          //looping the gist component according to the data
          gistsList.map((gist) => {
            return (
              <div>
                <Gist gist={gist} />
              </div>
            );
          })
        ) : (
          <div>No data available to show</div>
        )}
      </div>
    </>
  );
};
export default GistList;
