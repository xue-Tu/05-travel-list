function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.reduce((acc, cur) => acc + cur.packed, 0);
  const percentage = Math.floor((numPacked / numItems) * 100);

  if (!numItems)
    return (
      <footer className="stats">
        <em>Start add you PackingList</em>
      </footer>
    );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! ready to go`
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (
        ${percentage}%) `}
      </em>
    </footer>
  );
}

export default Stats;
