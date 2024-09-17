// components/ItemList.js
function ItemList({ items }) {
    return (
        <ul>      {items.map((item, index) => (        <li key={index}>{item}</li>
          ))}
        </ul>  );
}export default ItemList;