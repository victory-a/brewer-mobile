import React from 'react';

export default function useFocus(initialState: boolean = false) {
  const [isFocused, setIsFocused] = React.useState(initialState);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return { isFocused, handleFocus, handleBlur };
}
