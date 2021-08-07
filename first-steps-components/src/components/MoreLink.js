import React from "react"

const MoreLink = (props) => {
  const { link, name } = props
  return (
    !!link && (
      <a href={link} className="btn btn-primary btn-sm">
        En savoir plus sur {name}
      </a>
    )
  )
}

export default MoreLink
