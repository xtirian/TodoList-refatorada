import React from 'react'
import './header.scss'
import { FaListCheck } from "react-icons/fa6";
import { handleTheme } from '../../../service/handleTheme';

const Header = (theme) => {
  



  return (
    <header className={theme}>
     <div>
      <FaListCheck />
      <p>Organização</p></div>

     <div className='active'><p>Tarefas</p></div>
    </header>
  )
}

export default Header