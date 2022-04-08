import { createSlice } from "@reduxjs/toolkit";

const URL = "https://fakestoreapi.com/products";

export const LOADING_STATE = {
  WAITING: "waiting",
  REQUESTED: "requested",
  ERROR: "error",
  DONE: "done",
};

const initialState = { items: [], status: "" };

export const itemSlice = createSlice({
  initialState,
  name: "items",
  reducers: {
    uploadItems(state, action) {
      state.items.push(action.payload);
    },

    loadingState(state, action) {
      state.status = action.payload;
    },

    queueItem(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, queued: true };
        }

        return { ...item };
      });
    },

    unqueueItem(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          delete item["queued"];
          return { ...item };
        }

        return { ...item };
      });
    },
  },
});

export const { uploadItems, loadingState, queueItem, unqueueItem } =
  itemSlice.actions;

// thunk function
export const fetchItems = () => {
  return (dispatch, getState) => {
    dispatch(loadingState(LOADING_STATE.REQUESTED));

    return fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadingState(LOADING_STATE.WAITING));
        if (data) {
          data.forEach((item) => {
            dispatch(uploadItems(item));
          });
        }

        dispatch(loadingState(LOADING_STATE.DONE));
      })
      .catch((error) => {
        console.error(error);
        dispatch(loadingState(LOADING_STATE.ERROR));
      });
  };
};

export default itemSlice.reducer;
