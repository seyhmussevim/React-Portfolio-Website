import { Mail, Person } from '@mui/icons-material'
import './topbar.scss'

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className='logo'>Seyhmus Sevim</a>
            <div className="itemContainer">
              <Person className="icon"/>
              <span>+389 71 377 447</span>  
            </div>
            <div className="itemContainer">
              <Mail className="icon"/>
              <span>sevimseyhmuss@gmail.com</span>  
            </div>
        </div>
       
        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>
        </div>
      </div>
    </div>
  )
}
