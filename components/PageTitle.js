import React, { useState } from 'react'
import Head from 'next/head' //para colocar um título que fica na guia da página

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} - PalpiteBox</title>
    </Head>
  )
}

export default PageTitle