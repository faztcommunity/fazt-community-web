import { useState } from 'react';

interface InputProps {
  target: any;
}

const useInput = (initialState = {}) => {
  const [value, setValue] = useState(initialState);

  const reset = () => {
    setValue(initialState);
  };

  const handleInputChange = ({ target }: InputProps) => {
    setValue({
      ...value,
      [target.name]: target.value
    });
  };

  return [value as any, handleInputChange as any, reset as any];
};

export default useInput;
