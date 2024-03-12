import { NavLink, Outlet } from "react-router-dom";


export default function RootLaout() {
  return (
    <div className="root-laout">

      <header>

        <nav>
          <div className="d-none d-sm-flex">
            <NavLink to="./">回首頁</NavLink>&nbsp;|&nbsp;
            <NavLink to="about">網站導覽</NavLink>&nbsp;|&nbsp;
            <NavLink to="help">服務信箱</NavLink>&nbsp;|&nbsp;
            <NavLink to="help">交通指引</NavLink>&nbsp;|&nbsp;
            <NavLink to="help">English</NavLink>&nbsp;&nbsp;
            <NavLink to="help">網路掛號</NavLink>
          </div>
        </nav>


        <div className="second-header">
          <ul className="d-flex flex-column flex-md-row">
            <li className="text-center"><NavLink to='./' className="d-block"><img src="https://www.tph.mohw.gov.tw/public/logo/392ffaa61940293843e297615eeae5a5.png" alt="" /></NavLink></li>
            <li><h1>全人醫療&nbsp;&nbsp;&nbsp;誠信創新</h1></li>
            <li><form action="" className="d-flex"><input type="search" placeholder="經Google技術強化" /><input type="submit" name="" id="" /></form></li>
            <li className="d-none d-sm-flex">
              <button>小</button>
              <button>中</button>
              <button>大</button>
            </li>
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
        <ul>
          <li>醫療機構網際網路資訊管理辦法聲明：禁止任何網際網路服務業者轉錄本網路資訊之內容供人點閱。 但以網路搜尋或超連結方式，進入本醫療機構之網址（域）直接點閱者，不在此限。</li>
          <li>本網站建議使用Chrome & Firefox & Microsoft Edge瀏覽器 / 螢幕解析度1920*1080以上</li>
          <li>版權所有 © 2021 衛生福利部臺北醫院</li>
          <li>此網頁為練習使用</li>
        </ul>
      </div>
    </div>
  )
}