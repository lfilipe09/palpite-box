import React from 'react'
import '../css/styles.css' //São só 2 pontos
import Layout from '../components/Layout'
//o _app serve para aplicar a mesma coisa em todos os arquivos

//Os 3 pontinhos servem para abranger todos os elementos que podem vir com aquela variável
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp