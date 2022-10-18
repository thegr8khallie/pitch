import { HiOutlineHome, HiOutlineUser, HiOutlineMicrophone, HiOutlineBell, HiOutlineTag, HiOutlineShoppingBag, HiOutlineCog } from 'react-icons/hi'
import { TbPaint } from 'react-icons/tb'
export const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu-wrapper">
                <li className="menu-item"><div><HiOutlineHome /></div><span>Home</span></li>
                <li className="menu-item"><div><HiOutlineUser /></div><span>Account</span></li>
                <li className="menu-item"><div><HiOutlineMicrophone /></div><span>Podcasts</span></li>
                <li className="menu-item"><div><HiOutlineBell /></div><span>Notifications</span></li>
                <li className="menu-item"><div><TbPaint /></div><span>Themes</span></li>
                <li className="menu-item"><div><HiOutlineTag /></div><span>Promo</span></li>
                <li className="menu-item"><div><HiOutlineShoppingBag /></div><span>Marketplace</span></li>
                <li className="menu-item"><div><HiOutlineCog /></div><span>Settings</span></li>
            </ul>
        </nav>
    )
}
