import Banner from '../../Components/Banner'
import ProductsList from '../../Components/productsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const Promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 199,90'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard Entertainment...',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['15%', 'R$ 249,90'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Star Wars Jedi: Survivor é um jogo eletrônico de ação e aventura desenvolvido pela Respawn Entertainment...',
    title: 'Star Wars Jedi: Survivor',
    system: 'Windows',
    infos: ['20%', 'R$ 299,90'],
    image: starWars
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'The Legend of Zelda: Tears of the Kingdom é um jogo eletrônico de ação e aventura desenvolvido e publicado pela Nintendo...',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    system: 'Nintendo Switch',
    infos: ['25%', 'R$ 349,90'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard Entertainment...',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['15%', 'R$ 249,90'],
    image: diablo
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard Entertainment...',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['15%', 'R$ 249,90'],
    image: diablo
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard Entertainment...',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['15%', 'R$ 249,90'],
    image: diablo
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard Entertainment...',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['15%', 'R$ 249,90'],
    image: diablo
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={Promocoes} title={'Promoções'} background="gray" />
    <ProductsList games={emBreve} title={'Em Breve'} background="black" />
  </>
)

export default Home
