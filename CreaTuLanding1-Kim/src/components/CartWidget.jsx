// src/components/CartWidget.jsx
export default function CartWidget() {
    return (
        <div style={styles.container}>
            🛒
            <span style={styles.bubble}>3</span>
        </div>
    );
}

const styles = {
    container: {
        position: 'relative', fontSize: '24px'
    },
    bubble: {
        position: 'absolute',
        top: '-8px', right: '-10px',
        background: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px'
    }
};
