import Header from "./Header"
import Head from "next/head"

const Layout = ({ children, pagina }) => {
    return (
        <>
            <Head>
            <title>GuitarLA | {pagina}</title>
            <meta name="description" content="Sitio Web de venta de guitarras" />
            </Head>
            
            <Header/>

            { children }
        </>
    )
}

export default Layout
