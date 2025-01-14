import { Link } from 'react-router-dom'
import { Home, LayoutDashboard, Zap, Pizza, Settings, LogOut } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Zap, label: 'Energy Details', href: '/energy' },
  { icon: Pizza, label: 'Pizza', href: '/pizza' },
]

export function Sidebar() {
  return (
    <aside className=" h-screen min-w-[250px] w-[15%] rounded-r-2xl text-PrimaryGrayTextLight bg-[#1D1D1D]">
      <div className="flex h-16 items-center px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          {/* <Zap className="h-6 w-6 text-PrimaryGrayTextLight" /> */}
          <span style={{
            background:"linear-gradient(180deg, #EDEDED 0%, #BFF1B7 50%, #95E362 100%)",
            WebkitBackgroundClip:"text",
            backgroundClip:"text",
            color:"transparent",
            fontWeight:"900",
          }} className="text-xl">VALENCY ENERGY</span>
        </Link>
      </div>
      <div className="flex flex-col gap-1 p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </div>
      <div className="absolute bottom-4 flex w-full flex-col gap-1 px-4 text-PrimaryWhiteText">
        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
        <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
          <LogOut className="h-4 w-4" />
          Log Out
        </button>
      </div>
    </aside>
  )
}

