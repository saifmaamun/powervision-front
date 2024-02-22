import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/productTypes";

export type TInitialState = {
  id?: string;
  ownerEmail?: string;
  buyerName?: string;
  name: string;
  brand: string;
  imageUrl: string;
  frameMaterial: string;
  frameShape: string;
  quantity: number;
  saleDate?: string;
  lens: string;
  price: number;
  gender: string;
  lenseColor: string;
  frameColor: string;
  bridgeSize: number;
  border: boolean;
  descriptions: string;
  product: IProduct;
};
const initialState: TInitialState = {
  id: "",
  buyerName: "",
  ownerEmail: "",
  name: "",
  brand: "",
  imageUrl: "",
  frameMaterial: "",
  frameShape: "",
  quantity: 0,
  saleDate: "",
  lens: "",
  price: 0,
  gender: "",
  lenseColor: "",
  frameColor: "",
  bridgeSize: 0,
  border: false,
  descriptions: "",
  product: {
    name: "",
    brand: "",
    ownerEmail: "",
    frameMaterial: "",
    imageUrl: "",
    frameShape: "",
    quantity: 0,
    lens: "",
    price: 0,
    gender: "",
    lenseColor: "",
    frameColor: "",
    bridgeSize: 0,
    border: false,
    descriptions: "",
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToStore: (state) => {
      state.product.name = state.name;
      state.product.quantity = state.quantity;
      state.product.brand = state.brand;
      state.product.frameMaterial = state.frameMaterial;
      state.product.frameShape = state.frameShape;
      state.product.lens = state.lens;
      state.product.imageUrl = state.imageUrl;
      state.product.price = state.price;
      state.product.gender = state.gender;
      state.product.lenseColor = state.lenseColor;
      state.product.frameColor = state.frameShape;
      state.product.bridgeSize = state.bridgeSize;
      state.product.border = state.border;
      state.product.descriptions = state.descriptions;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setOwnerEmail: (state, action) => {
      state.ownerEmail = action.payload;
    },
    setBuyerName: (state, action) => {
      state.buyerName = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setFrameMaterial: (state, action) => {
      state.frameMaterial = action.payload;
    },
    setFrameShape: (state, action) => {
      state.frameShape = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setSaleDate: (state, action) => {
      state.saleDate = action.payload;
    },
    setLens: (state, action) => {
      state.lens = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setLensColor: (state, action) => {
      state.lenseColor = action.payload;
    },
    setFeameColor: (state, action) => {
      state.frameColor = action.payload;
    },

    setBridgeSize: (state, action) => {
      state.bridgeSize = action.payload;
    },
    setBorder: (state, action) => {
      state.border = action.payload;
    },

    setDescriptions: (state, action) => {
      state.descriptions = action.payload;
    },
  },
});

export const {
  addToStore,
  setBorder,
  setBrand,
  setBridgeSize,
  setBuyerName,
  setDescriptions,
  setFeameColor,
  setFrameMaterial,
  setFrameShape,
  setGender,
  setId,
  setLens,
  setLensColor,
  setName,
  setOwnerEmail,
  setImageUrl,
  setPrice,
  setQuantity,
  setSaleDate,
} = productSlice.actions;
export default productSlice.reducer;
