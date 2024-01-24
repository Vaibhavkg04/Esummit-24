import React from "react";

function ContactInfo(params) {
  return (
    <li>
      <a class="mr-4 font-Quicksand text-xl text-blue-400" href={params.href}>
        <span class="text-xl text-white hover:font-xl">{params.phone}</span>
        <h1>{params.name}</h1>
      </a>
    </li>
  );
}
export default ContactInfo;
