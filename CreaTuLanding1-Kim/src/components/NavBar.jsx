// src/components/NavBar.jsx
import CartWidget from './CartWidget';

export default function NavBar() {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.brand}>InstalaSoft</h1>
            <ul style={styles.links}>
                <li><a href="#">Adobe</a></li>
                <li><a href="#">Autodesk</a></li>
                <li><a href="#">Microsoft</a></li>
                <li><a href="#">Plugins</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

const styles = {
    nav: {
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', padding: '10px 20px',
        backgroundColor: '#333', color: '#fff'
    },
    brand: { fontSize: '24px', fontWeight: 'bold' },
    links: {
        display: 'flex', gap: '20px', listStyle: 'none'
    }
};
