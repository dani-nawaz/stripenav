import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from './context'

const Wrapper = styled.section`
  .submenu {
    background: var(--clr-white);
    box-shadow: var(--dark-shadow);
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: none;
    padding: 2rem;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .submenu.show {
    display: block;
  }
  .submenu-center {
    display: grid;
    gap: 0.25rem 2rem;
  }
  .col-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .col-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .col-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  .submenu h4 {
    margin-bottom: 1.5rem;
  }
  .submenu-center a {
    width: 10rem;
    display: block;
    color: var(--clr-grey-1);
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .submenu-center svg {
    color: var(--clr-grey-5);
    margin-right: 1rem;
  }
`
export const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const [columns, setColumns] = useState('col-2')
  const container = useRef(null)
  useEffect(() => {
    setColumns('col-2')

    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [location, links])
  return (
    <Wrapper>
      <aside
        ref={container}
        className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      >
        {/* <h4>{page}</h4> */}
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, icon, url } = link
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </aside>
    </Wrapper>
  )
}
