import Switch from "react-switch";
import { useState } from "react";

export function SwitchMode() {
  const [check, setCheck] = useState(false);
  function handleChange() {
    setCheck(!check);
  }
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <Switch onChange={handleChange} checked={check} />
      <p className='m-0 mx-1'>Switch Color</p>
    </div>
  );
}
