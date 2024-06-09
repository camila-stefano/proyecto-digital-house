import { useRef } from "react";

export const InputWithFocus = () => {
  const inputRef = useRef();

  console.log(inputRef);

  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" className="input-ref" />
      <button onClick={focusInput}>Enfocar Input</button>
    </div>
  );
};
