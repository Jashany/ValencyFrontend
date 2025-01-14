import { Card, CardContent } from "@/components/ui/card"
import { Battery, Home, LogOut, Pizza, Settings, Zap } from 'lucide-react'
import { LineChart } from '@/components/ui/line-chart'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-20 h-full w-60 bg-card border-r">
        <div className="p-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-primary">
            <Zap className="h-6 w-6" />
            VALENCY ENERGY
          </div>
        </div>
        <nav className="space-y-1 p-2">
          <Link href="#" className="flex items-center gap-3 rounded-lg bg-accent p-3 text-accent-foreground">
            <Home className="h-5 w-5" />
            Home
          </Link>
          {[
            { icon: <Zap className="h-5 w-5" />, label: "Dashboard" },
            { icon: <Battery className="h-5 w-5" />, label: "Energy Details" },
            { icon: <Pizza className="h-5 w-5" />, label: "Pizza" },
          ].map((item) => (
            <Link
              key={item.label}
              href="#"
              className="flex items-center gap-3 rounded-lg p-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 w-full space-y-1 p-2">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg p-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg p-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <LogOut className="h-5 w-5" />
            Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-60">
        {/* Header */}
        <header className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">Good Morning,</span>
            <span className="text-lg text-primary">User</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Toggle theme</span>
              🌙
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium">Current Price</p>
                    <h3 className="text-2xl font-bold">₹10.82/kWh</h3>
                  </div>
                  <div className="rounded-full bg-yellow-100 p-2">💰</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium">User Account Balance</p>
                    <h3 className="text-2xl font-bold">1122 kWh</h3>
                  </div>
                  <div className="rounded-full bg-yellow-100 p-2">📊</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium">Energy in Battery</p>
                    <h3 className="text-2xl font-bold">662 kWh</h3>
                  </div>
                  <div className="rounded-full bg-yellow-100 p-2">🔋</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium">Total Energy Generated</p>
                    <h3 className="text-2xl font-bold">1500 kWh</h3>
                  </div>
                  <div className="rounded-full bg-yellow-100 p-2">⚡</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Energy Consumption Trend</h3>
                <LineChart
                  data={[32, 35, 33, 37, 32, 35, 30, 35]}
                  labels={["7pm", "10pm", "1am", "4am", "7am"]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Energy Generation Trend</h3>
                <LineChart
                  data={[39, 35, 37, 34, 39]}
                  labels={["7pm", "10pm", "1am", "4am", "7am"]}
                />
              </CardContent>
            </Card>
          </div>

          {/* Market Demand Trend */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Market Demand Trend</h3>
                <select className="rounded-md border bg-background px-2 py-1">
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Daily</option>
                </select>
              </div>
              <LineChart
                data={[32, 35, 33, 37, 32, 35, 30, 35, 32]}
                labels={["Sep 1", "Sep 7", "Sep 14", "Sep 21", "Sep 30"]}
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

