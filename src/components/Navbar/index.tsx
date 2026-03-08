import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { LuGithub, LuLinkedin, LuMail, LuMenu, LuX } from "react-icons/lu";

interface Props {
    transparent?: boolean;
}

const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#design", label: "Design" },
    // { href: "/#activity", label: "Activity" }
]

const socialLinks = [
    { href: "https://github.com/glitchjsy", icon: LuGithub, label: "GitHub" },
    { href: "https://linkedin.com/in/lukejwyatt", icon: LuLinkedin, label: "LinkedIn" },
    { href: "mailto:luke@glitch.je", icon: LuMail, label: "Email" }
]

export default function Navbar({ transparent }: Props) {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${(!isScrolled && transparent) ? styles.light : ""}`}
        >
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    Luke Wyatt
                </Link>

                <div className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className={styles.desktopSocial}>
                    {socialLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className={styles.socialLink}
                        >
                            <link.icon className={styles.icon} />
                        </a>
                    ))}
                </div>

                <button
                    className={styles.menuButton}
                    onClick={() => setIsMobileMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <LuX className={styles.menuIcon} />
                    ) : (
                        <LuMenu className={styles.menuIcon} />
                    )}
                </button>
            </nav>

            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileMenuInner}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className={styles.mobileSocial}>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className={styles.socialLink}
                                >
                                    <link.icon className={styles.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
