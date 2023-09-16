/* eslint-disable react/prop-types */
import { useState, useEffect, Children } from "react";
import { EVENTS } from "../logic/consts";
import { match } from "path-to-regexp";

export function Router ({children, routes=[], defaultComponent: DefaultComponent=()=><h1>404</h1>}){
const [currentPath, setCurrentPath]=useState(window.location.pathname);
  useEffect(()=>{
    const onLocationChange=()=>{
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener(EVENTS.pushstate, onLocationChange);
    window.addEventListener(EVENTS.popstate, onLocationChange);

    return ()=>{
      window.removeEventListener(EVENTS.popstate, onLocationChange);
    }
  }, [currentPath])

  let routeParams={}

  
const routesFromChildren = Children.map(children, ({props, type})=>{
    const {name}=type;
    const isRoute=name==="Route"
    return isRoute ? props : null
  })

  const routesToUse=routes.concat(routesFromChildren).filter(Boolean);

  console.log(routesToUse);

  const Page=routesToUse.find(({path}) =>{
    if (path===currentPath) return true
    const matchedURL=match(path, {decode: decodeURIComponent})
    const isMatched=matchedURL(currentPath)
    if (!isMatched) return false
    routeParams=isMatched.params
    return true}
    )?.Component;
  
  
  return Page 
  ? <Page routeParams={routeParams} /> 
  : <DefaultComponent />
}