import Routes from "../../routes/Routes";
import React, { useReducer } from "react";
import Header from "./../../components/Header/Header";
import Navigation from "./../../components/Navigation/Navigation";
import rtl from "../../RtlService";

function useMobile() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "BACKDROP":
          return {
            ...state,
            BackDrop: !state.BackDrop,
          };
        case "SHOW":
          return {
            ...state,
            show: !state.show,
          };
      }
    },
    {
      show: false,
      BackDrop: false,
    }
  );

  function toggleMenu() {
     dispatch({
       type : "BACKDROP"
     })
      dispatch({
          type : "SHOW"
      })
  }

  return [state, toggleMenu];
}


export default function (props) {
  const [state , toggleMenu] = useMobile()  ;
  let navClasses = ["layout__navigation"];
  let backDropStyle  = null;

  if (state.show) {
    navClasses.push("layout__navigation__show");
    backDropStyle = "layout__navigation__backDrop";
  }

  return (
    <div className="layout">
      <div className={backDropStyle} onClick={toggleMenu}></div>
      <Navigation navItemClicked={toggleMenu} classes={navClasses.join(" ")} />
      <div className="layout__content">
        <button  onClick={rtl.toggle}>Rtltoggle</button>
        <Header menuIconClicked={toggleMenu} />
        <Routes />
      </div>
    </div>
  );
}

