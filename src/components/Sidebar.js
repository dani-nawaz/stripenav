import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { useGlobalContext } from './context'
import sublinks from './data'
const Wrapper = styled.section`
  .sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    transition: all 250ms ease-in;
    /* transform: scale(0); */
    background: rgba(0, 0, 0, 0.5);
  }
  .sidebar-wrapper.show {
    visibility: visible;
    z-index: 2;
    opacity: 1;

    /* transform: scale(1); */
  }
  .sidebar {
    width: 90vw;
    height: 95vh;
    max-width: var(--fixed-width);
    background: var(--clr-white);
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
    position: relative;
    padding: 4rem 2rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-grey-5);
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

  .sidebar article {
    margin-bottom: 2rem;
  }
  .sidebar-sublinks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.25rem;
  }
  .sidebar-sublinks a {
    display: block;
    color: var(--clr-grey-1);
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .sidebar-sublinks svg {
    color: var(--clr-grey-5);
    margin-right: 1rem;
  }
  @media screen and (min-width: 800px) {
    .sidebar-wrapper {
      display: none;
    }
  }
`
export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  console.log(isSidebarOpen)
  return (
    <Wrapper>
      <aside
        className={`${
          isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
        }`}
      >
        <div className='sidebar'>
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
          <div className='sidebar-links'>
            {sublinks.map((item, index) => {
              const { links, page } = item
              return (
                <article key={index}>
                  {' '}
                  <h4>{page}</h4>
                  <div className='sidebar-sublinks'>
                    {links.map((link, index) => {
                      const { url, icon, label } = link
                      return (
                        <a key={index} href={url}>
                          {icon}
                          {label}
                        </a>
                      )
                    })}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </aside>
    </Wrapper>
  )
}
