import React from 'react'

const SimpleSearch = () => {
    const [search, setSearch] = React.useState("");
    const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

    const filteredItems = items.filter( item => item.toLowerCase().includes(search.toLowerCase()) );

  return (
    <div>
        <h3>Simple Search</h3>
        <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
        <ul>
            {filteredItems.map((item, index)=> (
                <li key={index}>{item}</li>
            ))}
        </ul>
        {filteredItems.length === 0 && <p>No items found</p>}
    </div>
  )
}

export default SimpleSearch