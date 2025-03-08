import { createSlice } from "@reduxjs/toolkit";
import Rectangle34624826 from "../assets/Rectangle34624826.png";
import Rectangle34624847 from "../assets/Rectangle34624847.png";
import Rectangle34624848 from "../assets/Rectangle34624848.png";
import Rectangle34624864 from "../assets/Rectangle34624864.png";
import Rectangle34624865 from "../assets/Rectangle34624865.png";
import Rectangle34624866 from "../assets/Rectangle34624866.png";

const initialState = {
  centers: [
    { id: 1, name: "HSR Sector 6, Service Road", price: 2400, image: Rectangle34624826, perday: 249, discount: 20, space: "Workspace", spaceicon: ""},
    { id: 2, name: "HSR Sector 6, 5th Main Road", price: 2400, image: Rectangle34624847, perday: 249, discount: 20, space: "Honeykomb" },
    { id: 3, name: "HSR Sector 2, 27th Main Road", price: 2499, image: Rectangle34624848, perday: 249, discount: 20, space: "Platinum"},
    { id: 4, name: "HSR Sector 6, Campus", price: 2400, image: Rectangle34624864, perday: 249, discount: 20, space: "Workspace" },
    { id: 5, name: "HSR Sector 6, Premium", price: 2400, image: Rectangle34624865, perday: 249, discount: 20, space: "Campus" },
    { id: 5, name: "HSR Sector 6, Premium", price: 2400, image: Rectangle34624866, perday: 249, discount: 20, space: "Premium" },
  ],
};

const centersSlice = createSlice({
  name: "centers",
  initialState,
  reducers: {},
});

export default centersSlice.reducer;
