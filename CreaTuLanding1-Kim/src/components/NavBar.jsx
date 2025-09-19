// src/components/NavBar.jsx
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.brand}>
                <Link to="/" style={styles.link}>InstalaSoft</Link>
            </h1>
            <ul style={styles.links}>
                <li><Link to="/categoria/adobe" style={styles.link}>Adobe</Link></li>
                <li><Link to="/categoria/autodesk" style={styles.link}>Autodesk</Link></li>
                <li><Link to="/categoria/microsoft" style={styles.link}>Microsoft</Link></li>
                <li><Link to="/categoria/plugins" style={styles.link}>Plugins</Link></li>
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff"
    },
    brand: { fontSize: "24px", fontWeight: "bold" },
    links: {
        display: "flex",
        gap: "20px",
        listStyle: "none"
    },
    link: {
        color: "#fff",
        textDecoration: "none"
    }
};
