import React from 'react'

const Header = ({ handleDarkMode, dark }) => {

  return (

    <header className="p-5 bg-danger text-white text-center" style={{ position: 'relative' }}>
      <div className="form-check form-switch" style={{ position: 'absolute', right: `15px`, top: `15px` }} >
        <input onChange={handleDarkMode} className="form-check-input" type="checkbox" id="activate" checked={dark} />
        <label className="form-check-label" htmlFor="activate"> Mode Dark </label>
      </div>
      <div>
        <h1 className="display-1">Quoi de neuf, Google Fonts™&nbsp;?</h1>
        <p className="h4">Le plus récentes, les plus <i>trendy</i> et les plus populaires polices Google.</p>
      </div>
    </header>
  )
}

export default Header