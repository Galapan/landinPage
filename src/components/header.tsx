export const Header = () => {
  return (
    <header className="flex justify-between">
        <a href="/">
          <img className="w-20" src="../images/logo.svg" alt="logo" />
        </a>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </nav>
    </header>
  )
}