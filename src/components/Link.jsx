/* eslint-disable react/prop-types */
import { EVENTS } from "../logic/consts";

export function navigate(href){
  window.history.pushState({}, "", href);
  const navigationEvent=new Event (EVENTS.pushstate)
  window.dispatchEvent(navigationEvent);
}

export function Link({target, to, ...props}){
  const handleClick=(e)=>{
    e.preventDefault()
    const isMainEvent=e.button==0;
    const isEventModified=e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
    const isManagedEvent=target==undefined || target=="_self";
    if (isMainEvent && isManagedEvent && !isEventModified){
      e.preventDefault();
      navigate(to);
    }
  }
  return <a onClick={handleClick} href={to} target={target} {...props}></a>
}