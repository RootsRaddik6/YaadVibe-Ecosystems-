import React from "react";

export default function ParishList({ parishes }:{ parishes: {id:string, name:string}[] }){
  return (
    <ul>
      {parishes.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}