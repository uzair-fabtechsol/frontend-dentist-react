import { NavLink, useLocation } from 'react-router-dom'
import { 
  Home, 
  UserPlus, 
  LayoutDashboard, 
  BookOpen, 
  MessageCircle, 
  Shield 
} from 'lucide-react'

const navItems = [
  { path: '/home', label: 'Home', icon: Home },
  { path: '/onboarding', label: 'Onboarding', icon: UserPlus },
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/curriculum', label: 'Curriculum', icon: BookOpen },
  { path: '/chat', label: 'Chat with Vicky', icon: MessageCircle },
  { path: '/admin', label: 'Admin Dashboard', icon: Shield },
]

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/home') {
      return location.pathname === '/' || location.pathname === '/home'
    }
    return location.pathname === path
  }

  return (
    <nav className="z-40 bg-[#2d3e50] border-b border-[#d4af37]/20">
      <div className="flex flex-col items-center gap-1 px-4 py-3 md:flex-row md:justify-evenly md:py-2 md:max-w-[1000px] md:mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.path)
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="no-underline w-full md:w-auto"
            >
              <div
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 md:justify-start ${
                  active 
                    ? 'bg-[#1a2332] text-[#d4af37]' 
                    : 'bg-transparent text-[#c0c5ce] hover:bg-[#1a2332]/50 hover:text-[#d4af37]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className={`text-sm whitespace-nowrap ${active ? 'font-semibold' : 'font-medium'}`}>
                  {item.label}
                </span>
              </div>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
