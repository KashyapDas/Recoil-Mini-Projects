import { atom } from "recoil";

export const todoStore = atom({
  key: "todoStore",
  default: [],
});

export const filterStoreData = atom({
  key: "filterStoreData",
  default: "",
}) 