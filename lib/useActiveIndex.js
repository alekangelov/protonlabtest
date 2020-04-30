import React, { useState, useEffect } from "react";

export default function useActiveIndex({ maxIndex = 1, initialIndex = 0 }) {
  const [index, setIndex] = useState(initialIndex);
  const next = () => {
    setIndex(index !== maxIndex ? index + 1 : index);
  };
  const previous = () => {
    setIndex(index <= 0 ? 0 : index - 1);
  };
  return [next, previous, index, setIndex];
}
