import React, { useCallback, useMemo, useState } from 'react';

const useInput = (verification?: RegExp): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, boolean] => {
  const [input, setInput] = useState('');
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  }, []);

  const verifyInput = useMemo(() => {
    if (verification) {
      return verification.test(input);
    } else {
      return true;
    }
  }, [input, verification]);

  return [input, handleInput, verifyInput];
};
export default useInput;
