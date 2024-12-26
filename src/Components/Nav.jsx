import {headerLogo} from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../Constants/index'

const Nav = () => {
  return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img draggable={false} src={headerLogo} alt="Logo" width={130} height={29}/>
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li className='hover:scale-125 easy-in-out duration-300' key={item.label}>
                            <a className='hover:text-coral-red font-montserrat leading-normal text-lg text-slate-gray' href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt="Ha,burger" width={25} height={25}/>
                </div>
            </nav>
        </header>
  )
}

export default Nav