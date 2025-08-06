import { Navbar } from '@/components/navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <hr className="border-zinc-200 dark:border-zinc-800" />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
