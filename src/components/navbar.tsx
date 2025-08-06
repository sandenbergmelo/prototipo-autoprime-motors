/* eslint-disable @stylistic/max-len */
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Link } from '@tanstack/react-router'
import { Car, Menu } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 border-b bg-background">
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden mr-2 cursor-pointer">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-background p-10">
          <SheetClose asChild>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Car className="h-6 w-6" />
              <span className="text-lg font-bold text-foreground">AutoPrime Motors</span>
            </Link>
          </SheetClose>
          <div className="grid gap-2 py-6">
            <SheetClose asChild>
              <Link to="/" className="flex w-full items-center py-2 text-lg font-medium text-foreground hover:text-foreground">
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/about" className="flex w-full items-center py-2 text-lg font-medium text-foreground hover:text-foreground">
                Sobre
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/inventory" className="flex w-full items-center py-2 text-lg font-medium text-foreground hover:text-foreground">
                Estoque
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/services" className="flex w-full items-center py-2 text-lg font-medium text-foreground hover:text-foreground">
                Serviços
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/financing" className="flex w-full items-center py-2 text-lg font-medium text-foreground hover:text-foreground">
                Financiamento
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/contact" className="flex w-full items-center py-2 text-lg font-medium text-foreground hover:text-foreground">
                Contato
              </Link>
            </SheetClose>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <SheetClose asChild>
              <Link to="/login">
                <Button variant="outline" className="w-full cursor-pointer">
                  Login
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/signup">
                <Button className="w-full text-white cursor-pointer">
                  Cadastre-se
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 mr-6">
        <Car className="h-8 w-8 text-red-600" />
        <span className="text-xl font-bold text-foreground">AutoPrime Motors</span>
      </Link>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/about"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Sobre
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Estoque</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[300px] p-2">
                <NavigationMenuLink asChild>
                  <Link
                    to="/inventory/new"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Novos</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Veja nossa coleção de veículos novos
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/inventory/used"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Seminovos</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Veículos seminovos com garantia
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/services"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Serviços
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/financing"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Financiamento
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/contact"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Contato
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Auth Buttons */}
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <Link to="/login">
          <Button variant="outline" className="hidden sm:inline-flex cursor-pointer">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="text-white cursor-pointer">
            Cadastre-se
          </Button>
        </Link>
      </div>
    </header>
  )
}
