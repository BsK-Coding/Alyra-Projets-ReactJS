import React from 'react'

const Setting = ({ changePolice, viewPolice, changeText, text, changeSizePolice, sizePolice, categories, filter, changeFilter }) => {
  return (
    <div className="col-lg-3 mb-4">
      <div style={{ position: "sticky", top: "10px" }}>
        <label className="fw-bold mb-2" htmlFor="sort">Afficher des polices</label>
        <select id="sort" onChange={changePolice} className="form-select mb-4" value={viewPolice}>
          <option value="date">Les plus récentes</option>
          <option value="popularity">Les plus populaires</option>
          <option value="trending">Top 10 trending</option>
        </select>
        <div className="mb-3">
          <label htmlFor="text" className="form-label fw-bold mb-3">Tapez votre text</label>
          <textarea id="text" onChange={changeText} className="form-control" value={text} />
        </div>
        <div>
          <label htmlFor="range" className="form-label fw-bold mb-3">La taille de police</label>
          <input type="range" onChange={changeSizePolice} className="form-range" id="range" min="8" max="48" step="1" value={sizePolice}></input>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold mb-3" htmlFor="category">Filtrer par catégorie</label>
          <select id="category" value={filter} name="category" key="category" className="form-select" aria-label="filter by tags" onChange={changeFilter}>
            <option value="all" key="all">all</option>
            {categories.map((category) => {
              return (
                <option value={category} key={category}>{category}</option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Setting