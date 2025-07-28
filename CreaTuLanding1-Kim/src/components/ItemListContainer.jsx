// src/components/ItemListContainer.jsx
export default function ItemListContainer({ greeting }) {
    return (
        <section style={style}>
            <h2>{greeting}</h2>
        </section>
    );
}

const style = {
    padding: '40px',
    textAlign: 'center',
    fontSize: '24px'
};
