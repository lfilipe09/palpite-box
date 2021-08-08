import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 text-center'>
      <div className='text-white pt-6'>
        Projeto desenvolvido por: Luís Lima |{' '}
        <a href='https://linkedin.com/in/luisdelima' className=' hover:text-gray-400 text-white'>Linkedin |{' '}</a>
        <a href='https://github.com/lfilipe09' className=' hover:text-gray-400 text-white'>Github </a>
      </div>
      <div className='mt-3'>
        <img className='inline p-4 h-20' src='/logo_semana_fsm.png' />
        <img className='inline p-4 h-16' src='/logo_devpleno.png' />
      </div>
    </div>
  )
}

export default Footer