"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

type Props = {
  children: React.ReactNode;
};

const ReduxProviders: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProviders;
