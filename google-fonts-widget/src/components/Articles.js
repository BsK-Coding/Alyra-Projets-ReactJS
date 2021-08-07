import React from 'react'
import GoogleFontLoader from 'react-google-font-loader';

const Articles = ({ text, sizePolice, policeFamily, policeVariant, policeCategory }) => {
  return (
    <article className="col-lg-6 mb-4">
      <div className="shadow-sm border p-3 h-100">
        < h2 className="h6 d-flex aling-items-center justify-content-between" >
          <span>{policeFamily}</span>
          <small>{policeVariant} variant(s)</small>
        </h2 >
        <p>
          <span className="badge bg-dark">{policeCategory}</span>
        </p>
        <GoogleFontLoader
          fonts={[
            {
              font: `${policeFamily}`,
            }
          ]}
        />
        <div>
          <p className="sample" style={{ fontFamily: `${policeFamily}, ${policeCategory}`, fontSize: `${sizePolice}px` }}>
            {text}
          </p>
          <a rel="noopener noreferrer" target="_blank" className="link-danger" href={`https://fonts.google.com/specimen/${policeFamily}`}>Voir sur Google Fonts (ouvre un nouveau tab)</a>
        </div>
      </div>
    </article>
  )
}

export default Articles