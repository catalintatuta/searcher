/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import {useEffect, useState} from 'react';
import useDebounce from "../utils/useDebounce";

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
      css={css`
        height: 25px;
        font-size: 25px;
        margin: 30px 0;
      `}
    />
  );
};

export default SearchInput;
