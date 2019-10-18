import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'

import { getColors } from '../actions'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.isFetching)
  const fetchColors = useSelector(state => state.colors)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    dispatch(getColors())
  }, [])

  // console.log('colorlist in BubblePage', colorList)

  if (loading) {
    return <h1>Fetching colors...</h1>
  }
  return (
    <>
      <ColorList colors={fetchColors} updateColors={setColorList} />
      <Bubbles colors={fetchColors} />
    </>
  );
};

export default BubblePage;
