import { NavLink, Outlet } from "react-router-dom";


export default function RootLaout() {
  return (
    <div className="root-laout">

      <header>
        <nav className="d-none">
          <h1>three-day-touch</h1>
          <NavLink to="./">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
        <div className="second-header">
          <ul className="d-flex flex-column">
            <li className="img"><NavLink to='./'><img src="https://www.tph.mohw.gov.tw/public/logo/392ffaa61940293843e297615eeae5a5.png" alt="" /></NavLink></li>
            <li><h1>全人醫療&nbsp;誠信創新</h1></li>
            <li><form action="" className="d-flex"><input type="search" placeholder="經Google技術強化" /><input type="submit" name="" id="" /></form></li>
          </ul>
        </div>
        <div className="third-header">
          <ul>
            <li></li>
          </ul>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <div className="footer">
        <h1>555</h1>
      </div>
    </div>
  )
}