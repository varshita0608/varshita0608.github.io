import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (album) => {
    if (!wishlist.find(item => item.id === album.id)) {
      setWishlist([...wishlist, album]);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}