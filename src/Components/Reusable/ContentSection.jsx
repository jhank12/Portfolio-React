import React from 'react'

import './contentSection.css'

const ContentSection = ({id, children}) => {
  return (
   <section className="contentSection" id={id}>
      {children}
   </section>
  )
}

export default ContentSection