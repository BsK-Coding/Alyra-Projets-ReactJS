import React from "react"
import MoreLink from "./MoreLink"

const School = (props) => {
  const { name, link, children } = props
  return (
    <article className="p-3 mb-3 border shadow">
      <h2 className="text-center">{name}</h2>
      {children}
      <MoreLink link={link} name={name} />
    </article>
  )
}

export default School
