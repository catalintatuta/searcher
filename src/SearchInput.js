import React, {useEffect, useState} from 'react';
import useDebounce from "./useDebounce";

const SearchInput = ({fetchBooks}) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(
    () => {
      fetchBooks(debouncedInputValue)
    },
    [debouncedInputValue]
  )
  return (
    <input
      type="text"
      onChange={e => setInputValue(e.target.value)}
      value={inputValue}
    />
  );
};

export default SearchInput;
