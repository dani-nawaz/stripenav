import React from 'react'
import styled from 'styled-components'
import phoneImg from '../images/phone.svg'
import { useGlobalContext } from './context'
const Wrapper = styled.section`
  .hero {
    position: relative;
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .hero-center {
    width: 90vw;
    max-width: var(--max-width);
    display: grid;
    align-items: center;
  }
  .hero-info h1 {
    text-transform: none;
    max-width: 500px;
    margin-bottom: 2rem;
  }
  .hero-info p {
    max-width: 35em;
    line-height: 1.8;
  }
  .hero-images {
    display: none;
  }
  @media screen and (min-width: 800px) {
    .hero-center {
      grid-template-columns: 2fr 1fr;
    }

    .hero-info h1 {
      font-size: 3rem;
    }
    .hero-info p {
      font-size: 1.25rem;
    }
    .hero-images {
      display: block;
      justify-self: center;
      align-self: center;
    }
    .phone-img {
      width: 12rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .hero-center {
      grid-template-columns: 2fr 1fr;
      align-items: end;
      padding-bottom: 12vh;
    }
    .hero-info h1 {
      max-width: 100%;
      font-size: 5.5rem;
    }
    .hero-images {
      align-self: end;
    }
    .phone-img {
      width: 15rem;
    }
  }
  @media screen and (min-width: 1400px) {
    .hero-center {
      padding-bottom: 20vh;
    }
    .phone-img {
      width: 17rem;
    }
  }
`
const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <Wrapper>
      <div className='hero' onMouseOver={closeSubmenu}>
        <div className='hero-center'>
          <article className='hero-info'>
            <h1>Payments infrastructure for the internet</h1>
            <p>
              Millions of businesses of all sizes – from startups to Fortune
              500s – use Stripe's software and APIs to accept payments, send
              payouts, and manage their businesses online. Start now{' '}
            </p>
            <button className='btn'>Start Now</button>
          </article>
          <article className='hero-images'>
            <img src={phoneImg} className='phone-img' alt='' />
          </article>
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero
