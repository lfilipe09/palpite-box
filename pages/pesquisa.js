import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const notas = [0, 1, 2, 3, 4, 5]
  //Função do formulário
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  })
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  //função de save quando clica no botão
  const save = async () => {
    try {
      const response = await fetch('api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) {

    }
  }
  return (
    <div className='text-center'>
      <PageTitle title='Pesquisa' />
      <h3><b>Críticas e sugestões</b></h3>
      <p className='pt-4 pb-8 text-sm max-w-md mx-auto'>O restaurante X sempre busca por atender melhor seus clientes. Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      {!success && <div className='bg-white rounded-md shadow max-w-md mx-auto'>
        <p className='py-6'>Insira abaixo os seus dados</p>
        <input type='text' onChange={onChange} placeholder="Seu nome" name='Nome' value={form.Nome} className='p-2 block mx-auto border-gray-300 border rounded w-3/4' />
        <input type='text' onChange={onChange} placeholder="Seu Whatsapp" name='Whatsapp' value={form.Whatsapp} className='my-6 p-2 block mx-auto border-gray-300 border rounded w-3/4' />
        <input type='text' onChange={onChange} placeholder="Seu e-mail" name='Email' value={form.Email} className='my-6 p-2 block mx-auto border-gray-300 border rounded w-3/4' />
        <label><b>Nota:</b></label>
        <div className='flex py-6 mx-auto w-3/4'>
          {notas.map(nota => {
            return (
              <label className='block w-3/4 text-center '>
                <input type='radio' name='Nota' value={nota} onChange={onChange}></input>
                <br />{nota}
              </label>
            )
          })

          }
        </div>
        <button className='px-8 py-3 my-5 rounded-md bg-yellow-400 hover:bg-yellow-200' onClick={save}>Salvar</button>
      </div>}
      {success && <div className='bg-blue-50 p-4 rounded-md shadow pt-4 pb-8 text-sm max-w-md mx-auto'>
        <p className='pb-2 pt-4 '>Obrigado por contribuir com sua sugestão ou crítica</p>
        {
          retorno.showCoupon && <div className='bg-white p-4 rounded-md shadow pt-8 pb-8'>
            Seu cupom: <br />
            <span className='text-xl'><b>{retorno.Cupom}</b></span>
          </div>
        }
        {
          retorno.showCoupon && <div className='pt-6 text-xs'>
            <span>{retorno.Promo}</span>
            <br />
            <p className='pt-3 text-blue-400'><i>Tire um print ou foto desta tela e apresente ao garçom</i></p>
          </div>
        }


      </div>}
    </div>
  )
}

export default Pesquisa