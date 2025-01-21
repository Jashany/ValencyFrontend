import { Link, useLocation } from "react-router-dom";
import {
  Home,
  TowerControl,
  Zap,
  ChartCandlestick,
  Settings,
  LogOut,
  BriefcaseBusiness,
} from "lucide-react";
import amplAiLogo from "../../assets/logo.svg";

const navItems = [
  { icon: Home, label: "Home", href: "/admin" },
  { icon: TowerControl, label: "Grid", href: "/admin/grid" },
  { icon: ChartCandlestick, label: "Trading", href: "/admin/trading" },
  { icon: BriefcaseBusiness, label: "Portfolio", href: "/admin/portfolio" },
];

export function AdminSideBar() {
  const location  = useLocation();

  return (
    <aside className=" h-screen min-w-[250px] w-[15%] rounded-r-2xl text-PrimaryGrayTextLight bg-[#1D1D1D]">
      
      <div className="flex h-16 items-center pl-8 pt-8 mb-16">
        <Link href="/admin">
          <img src={amplAiLogo} />
        </Link>
      </div>

      <div className="flex flex-col gap-4 p-6">
        {navItems.map((item) => {
          const isActive = location.pathname ===item.href;

          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 font-medium rounded-lg px-3 py-2 ${
                isActive ? 'bg-[#333333] text-white' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="absolute bottom-4 flex w-full flex-col gap-4 p-6 text-PrimaryGrayText">
        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <Settings className="h-5 w-5" />
          Settings
        </Link>
        <Link
          to="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <LogOut className="h-5 w-5" />
          Log Out
        </Link>
        {/* <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
          <LogOut className="h-5 w-5" />
          Log Out
        </button> */}
      </div>
    </aside>
  );
}
