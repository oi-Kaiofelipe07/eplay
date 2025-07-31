import { useEffect, useState } from 'react'
import ProductsList from '../../Components/productsList'
import { Game } from '../Home'

const Categories = () => {
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameEsportes, setGameEsportes] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gameLuta, setGameLuta] = useState<Game[]>([])
  const [gameRpg, setGameRgp] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/categorias/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/categorias/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/categorias/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/categorias/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/categorias/rpg')
      .then((res) => res.json())
      .then((res) => setGameRgp(res))
  }, [])

  return (
    <>
      <ProductsList games={gameRpg} title="RPG" background="gray" />
      <ProductsList games={gameAcao} title="Ação" background="black" />
      <ProductsList games={gameSimulacao} title="Aventura" background="gray" />
      <ProductsList games={gameLuta} title="FPS" background="black" />
      <ProductsList games={gameEsportes} title="Esportes" background="gray" />
    </>
  )
}

export default Categories
