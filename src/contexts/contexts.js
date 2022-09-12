import React, { createContext, useReducer } from "react";
import { OriginReducer, DestinationReducer } from "../reducers/reducers";

export const OriginContext = createContext();
export const DestinationContext = createContext();

export const OriginContextProvider = ({ children }) => {
  const [origin, dispatchOrigin] = useReducer(OriginReducer, {
    latitude: null,
    longitude: null,
    address: "",
    name: "",
  });
  return (
    <OriginContext.Provider value={{ origin, dispatchOrigin }}>
      {children}
    </OriginContext.Provider>
  );
};

export const DestinationContextProvider = ({ children }) => {
  const [destination, dispatchDestination] = useReducer(DestinationReducer, {
    latitude: null,
    longitude: null,
    address: "",
    name: "",
  });
  return (
    <DestinationContext.Provider value={{ destination, dispatchDestination }}>
      {children}
    </DestinationContext.Provider>
  );
};
