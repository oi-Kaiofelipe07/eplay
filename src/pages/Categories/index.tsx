import ProductsList from '../../Components/productsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="RPG"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="Action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={simulationGames}
        title="Aventura"
        background="gray"
        id="Adventure"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={fightGames}
        title="FPS"
        background="black"
        id="FPS"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id="Sports"
        isLoading={isLoadingSports}
      />
    </>
  )
}

export default Categories
