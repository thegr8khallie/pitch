import { HiOutlineHome, HiOutlineUser, HiOutlineMicrophone, HiOutlineBell, HiOutlineTag, HiOutlineCog } from 'react-icons/hi'
import { TbPaint } from 'react-icons/tb'
//HiOutlineShoppingBag
export const Menu = (props) => {
    return (
        <nav className="menu">
            <ul className="menu-wrapper">
                <li className={`menu-item ${props.page === 'dashboard' && 'active-menu-item'}`} onClick={props.dashboardLink}><div><HiOutlineHome /></div><span>Home</span></li>
                <li className="menu-item"><div><HiOutlineUser /></div><span>Account</span></li>
                <li className="menu-item"><div><HiOutlineMicrophone /></div><span>Podcasts</span></li>
                <li className="menu-item"><div><HiOutlineBell /></div><span>Notifications</span></li>
                <li className="menu-item"><div><TbPaint /></div><span>Themes</span></li>
                <li className={`menu-item ${props.page === 'loyalty' && 'active-menu-item'}`} onClick={props.loyaltyLink}><div><HiOutlineTag /></div><span>Promo</span></li>
                <li className="menu-item"><div><HiOutlineCog /></div><span>Settings</span></li>
            </ul>
        </nav>
    )
}
