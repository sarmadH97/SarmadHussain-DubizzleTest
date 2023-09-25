import React, { useState } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { getGistForUser, getPublicGists } from "../services/gistService";
import { useDispatch } from "react-redux";
import { setGistList } from "../redux/slice";

const Search = () => {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("");

  const onChange = (e) => {
    setSearchVal(e.target.value);
    getUserFromSearch(e.target.value);
  };

  const getUserFromSearch = async (username) => {
    //using both apis to handle the scenario
    const response = username
      ? await getGistForUser(username)
      : await getPublicGists();
    if (response.status === 200) {
      dispatch(setGistList(list.data));
    } else {
      dispatch(setGistList(["No data"]));
    }
  };
  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          value={searchVal}
          onChange={(e) => onChange(e)}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
