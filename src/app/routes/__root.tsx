import { createRootRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const RootLayout = () => {
  const location = useLocation()
  const isPortfolio = location.pathname === '/portfolio'

  if (isPortfolio) {
    return <Outlet />
  }

  return (
    <>
      <div className="flex items-center justify-between gap-2 p-2">
        <div className="flex items-center gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/portfolio" className="[&.active]:font-bold">
            Portfolio
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
      <hr />
      <Outlet />
    </>
  )
}

export const Route = createRootRoute({ component: RootLayout })
