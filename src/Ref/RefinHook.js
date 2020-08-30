import React, { useRef, useEffect } from "react";

const RefinHook = () => {
  const inputref = useRef(null);
  useEffect(() => {
    inputref.current.focus();
  }, []);
  return (
    <div>
      <input key="i1" ref={inputref} type="text" placeholder="Username" />
      <input key="i2" type="text" placeholder="Email" />
      <input key="i3" type="text" placeholder="Password" />
      <button type="submit">Login</button>
    </div>
  );
};

export default RefinHook;
