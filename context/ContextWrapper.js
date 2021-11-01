import React, { useState } from "react";
import Context from "./Context";
import { theme } from "../utils";

export default function ContextWrapper(props) {
  const [rooms, setRooms] = useState([]);
  const [unfilteredRooms, setUnfilteredRooms] = useState([]);
  return (
    <Context.Provider
      value={{ theme, rooms, setRooms, unfilteredRooms, setUnfilteredRooms }}
    >
      {props.children}
    </Context.Provider>
  );
}
