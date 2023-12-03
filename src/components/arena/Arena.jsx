import "./arena.css";

function Arena() {
  const gridItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
  ];

  return (
    <div className="arena">
      <div className="grid-container">
        {gridItems.map((item, index) => (
          <div key={index} className="grid-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Arena;
