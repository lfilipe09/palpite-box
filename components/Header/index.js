import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

//React.Fragment = para não ter que criar outra <div> abraçando tudo

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.bg}>
        <div className={styles.box}>
          <Link href='/'>
            <a><img className='mx-auto h-20' src='/logo_paplpitebox.png' alt='PalpiteBox' /></a>
          </Link>
        </div>
      </div>
      <div className='text-center py-2 shadow'>
        <Link href='/'>
          <a className='px-4 hover:text-blue-400'>Home</a>
        </Link>
        <Link href='/sobre'>
          <a className='px-4 hover:text-blue-400'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='px-4 hover:text-blue-400'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='px-4 hover:text-blue-400'>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Header