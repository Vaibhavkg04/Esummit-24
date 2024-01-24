import React from "react";
import styled from "styled-components";



function NavElem(params){
    return <li>
    <a href={params.href} class="block py-2 pr-4 pl-3 text-white-700 rounded md:hover:bg-transparent  font-bold md:p-0  dark:text-gray-400 hover:text-sky-400 md:dark:hover:bg-transparent text-slate-100" aria-current="page">{params.title}</a>
  </li>
}
export default NavElem;

