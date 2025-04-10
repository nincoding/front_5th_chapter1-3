import React, { createContext, useState, useContext } from "react";
import { useMemo, useCallback } from "../@lib";
import { generateItems } from "../utils";
import { Item } from "../types";

interface UserItemContextType {
  items: Item[];
  addItems: () => void;
}

const UserItemContext = createContext<UserItemContextType | undefined>(
  undefined,
);

export const UserItemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState(generateItems(1000));

  const addItems = useCallback(() => {
    setItems((prevItems) => [
      ...prevItems,
      ...generateItems(1000, prevItems.length),
    ]);
  }, [setItems]);

  const userItemContextValue = useMemo(
    () => ({ items, addItems }),
    [items, addItems],
  );

  return (
    <UserItemContext.Provider value={userItemContextValue}>
      {children}
    </UserItemContext.Provider>
  );
};

export const useUserItemContext = () => {
  const context = useContext(UserItemContext);
  if (context === undefined) {
    throw new Error(
      "useUserItemContext must be used within a UserItemProvider",
    );
  }
  return context;
};
