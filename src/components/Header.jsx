import links from "../../links"

const Header = () => {
  return (
    <header className="body-margin">
        <figure>
            <img src="/src/assets/img/dc-logo.png" alt="dc-logo" />
        </figure>
        <nav>
            <ul>
                {links.map((link) => (
                    <li key={`link-${link.id}`}>
                        <a href={link.href} className={link.current ? 'active' : ""}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header