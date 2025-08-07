import { useEffect, useState } from 'react'
import ProductsList from '../../Components/productsList'
import { Game } from '../Home'

import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (
    !actionGames ||
    !sportsGames ||
    !simulationGames ||
    !fightGames ||
    !rpgGames
  ) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <ProductsList games={rpgGames} title="RPG" background="gray" id="RPG" />
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="Action"
      />
      <ProductsList
        games={simulationGames}
        title="Aventura"
        background="gray"
        id="Adventure"
      />
      <ProductsList
        games={fightGames}
        title="FPS"
        background="black"
        id="FPS"
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id="Sports"
      />
    </>
  )
}

export default Categories
