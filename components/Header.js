import Link from "next/link";
import Image from "next/image";
import styles from './../styles/Header.module.css';

const Header = () => {
    return (
        <header
            className={styles.header}
        >
            <div className="contenedor">
                <Link href="/" passHref>
                    <Image 
                        src="/img/logo.svg" 
                        alt="Logo"
                        width={400}
                        height={100}
                    />
                </Link>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;