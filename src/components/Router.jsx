/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { EVENTS } from "../logic/consts";

export function Router ({routes=[], defaultComponent: DefaultComponent=()=><h1>404</h1>}){
const [currentPath, setCurrentPath]=useState(window.location.pathname);
  useEffect(()=>{
    const onLocationChange=()=>{
      setCurrentPath(window.location.pathname);
      console.log(currentPath)
    }

    window.addEventListener(EVENTS.pushstate, onLocationChange);
    window.addEventListener(EVENTS.popstate, onLocationChange);

    return ()=>{
      window.removeEventListener(EVENTS.popstate, onLocationChange);
    }
  }, [])

  const Page=routes.find(({path})=>path==currentPath)?.Component;
  return Page ? <Page /> : <DefaultComponent />
}