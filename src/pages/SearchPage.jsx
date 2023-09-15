/* eslint-disable react/prop-types */
import { useEffect } from "react"

export function SearchPage({routeParams}){
        useEffect(()=>{
            document.title=`Buscaste ${routeParams.query}`
        })
    return (
        <h1>Buscaste {routeParams.query}</h1>
    )
}