import React from "react"

interface SectionProp extends React.HTMLProps<HTMLElement> {
    className?: string;
}

export const Sections: React.FC<SectionProp> = ({children, className, ...prop}) => {
  return (
    <section className={`${className}`} {...prop}>
      {children}
    </section>
  )
}

// export default Sections
