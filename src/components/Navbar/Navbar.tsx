import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { SwitchMode } from "./SwitchMode";

export interface darkMode {
  dark: boolean;
  setDark: any;
}

export function Navbar({ dark, setDark }: darkMode) {
  return (
    <div className='d-flex justify-content-around align-items-center my-2'>
      <Logo />
      <SearchBar />
      <SwitchMode dark={dark} setDark={setDark} />
    </div>
  );
}
