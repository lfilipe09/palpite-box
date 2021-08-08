import React from 'react'
import Link from 'next/link' //A vantagem de usar o Link do next é pelo fato de suas otimizações, a navegação é muito mais rápida e faz o pre-feat, carrega a página antes do usuário clicar
import useSWR from 'swr' //ler a api criada no back end pra mensagem
import PageTitle from '../components/PageTitle'

//fetcher é usado pelo browser, não é a forma de carregar os dados por server side rendering, é a forma de cada vez que o usuário troca de aba e volta pro site ele é recarregado
const fetcher = (...args) => fetch(...args).then(res => res.json())

//criando um componente (que é uma função)
// o {data &&} embaixo dentro do return() significa uma if condition
const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div className='text-center'>
      <PageTitle title='Home' />
      <p className='m-8 pb-4'>O restaurante X sempre busca por atender melhor seus clientes. <br></br>Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      <a className='px-8 py-4 rounded-md bg-yellow-400 hover:bg-yellow-200' href='/pesquisa'><b>Dar opinião ou sugestão</b></a>
      {!data && <p className='mt-8 pt-4'>Carregando...</p>}
      {!error && data && data.showCupom && <p className='mt-8 pt-4'><b>{data.message}</b></p>}
    </div>
  )
}

export default Index