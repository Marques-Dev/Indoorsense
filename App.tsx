import { StatusBar } from "react-native";
import React from "react";

import Route from "./src/routes";

export default function () {
  return (
    <>
      <StatusBar backgroundColor="#8D0000" barStyle="light-content" />
      <Route />
    </>
  );
}
