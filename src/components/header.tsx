import { Navbar } from "./navbar"
export const Header = () => {
  return (
    <header className="flex justify-between">
        <a href="/">
          <img className="w-20" src="../images/logo.svg" alt="logo" />
        </a>
        <Navbar />
    </header>
  )
}