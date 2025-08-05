import { Imagem, Precos, Titulo } from './styles'
import { Game } from '../../pages/Home/'
import Tag from '../Tag'
import Button from '../Button'

import { formataPreco } from '../productsList'

import { useGetGamesQuery } from '../../services/api'

const Banner = () => {
  const { data: games } = useGetGamesQuery()

  if (!games || games.length === 0) {
    return <h3>Carregando...</h3>
  }

  const game = games[0]

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button type="link" title="Ir para o jogo" to={`/product/${game.id}`}>
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
