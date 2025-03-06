import axios from "axios";

// Mock API call (replace with real API endpoint)
export const fetchSpaces = async () => {
  return [
    { id: 1, name: "HSR Sector 5", price: "₹2400", image: "/images/space1.jpg" },
    { id: 2, name: "HSR Main Road", price: "₹2600", image: "/images/space2.jpg" },
  ];
};
