import React, { useState } from "react";
import Menu from "../Menu/Menu";
import Check from "../Check/Check";
import logo from "../../images/logo.png";
import logo_light from "../../images/logo_light.png"
import avatar from "../../images/avatar.png"

function App() {
  const [isBurger, setIsBurger] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  function menuButton() {
      setIsBurger(!isBurger);
  }

  function handlerCheckBox() {
    setIsChecked(!isChecked);
  }

  return (
      (<>
      <Menu 
      menuButton={menuButton}
      isBurger={isBurger}
      logo={logo}
      logo_light={logo_light}
      avatar={avatar}
      isChecked={isChecked}
      />
      <Check 
      isChecked={isChecked}
      handlerCheckBox={handlerCheckBox}
      />
      </>
      )
  );
}

export default App;
