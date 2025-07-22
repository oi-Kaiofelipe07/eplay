import ProductsList from '../../Components/productsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const RPG: Game[] = [
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

const Ação: Game[] = [
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

const Aventura: Game[] = [
  {
    id: 9,
    category: 'Aventura',
    description:
      'The Legend of Zelda: Tears of the Kingdom é um jogo eletrônico de ação e aventura desenvolvido e publicado pela Nintendo...',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    system: 'Nintendo Switch',
    infos: ['25%', 'R$ 349,90'],
    image: zelda
  },
  {
    id: 10,
    category: 'Aventura',
    description:
      'The Legend of Zelda: Tears of the Kingdom é um jogo eletrônico de ação e aventura desenvolvido e publicado pela Nintendo...',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    system: 'Nintendo Switch',
    infos: ['25%', 'R$ 349,90'],
    image: zelda
  },
  {
    id: 11,
    category: 'Aventura',
    description:
      'The Legend of Zelda: Tears of the Kingdom é um jogo eletrônico de ação e aventura desenvolvido e publicado pela Nintendo...',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    system: 'Nintendo Switch',
    infos: ['25%', 'R$ 349,90'],
    image: zelda
  },
  {
    id: 12,
    category: 'Aventura',
    description:
      'The Legend of Zelda: Tears of the Kingdom é um jogo eletrônico de ação e aventura desenvolvido e publicado pela Nintendo...',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    system: 'Nintendo Switch',
    infos: ['25%', 'R$ 349,90'],
    image: zelda
  }
]

const FPS: Game[] = [
  {
    id: 13,
    category: 'FPS',
    description:
      'Call of Duty: Modern Warfare II é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Infinity Ward e publicado pela Activision...',
    title: 'Call of Duty: Modern Warfare II',
    system: 'Windows',
    infos: ['25%', 'R$ 349,90'],
    image: zelda
  },
  {
    id: 14,
    category: 'FPS',
    description:
      'Call of Duty: Modern Warfare II é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Infinity Ward e publicado pela Activision...',
    title: 'Call of Duty: Modern Warfare II',
    system: 'Windows',
    infos: ['25%', 'R$ 349,90'],
    image: zelda
  },
  {
    id: 15,
    category: 'FPS',
    description:
      'Call of Duty: Modern Warfare II é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Infinity Ward e publicado pela Activision...',
    title: 'Call of Duty: Modern Warfare II',
    system: 'Windows',
    infos: ['25%', 'R$ 349,90'],
    image: zelda
  },
  {
    id: 16,
    category: 'FPS',
    description:
      'Call of Duty: Modern Warfare II é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Infinity Ward e publicado pela Activision...',
    title: 'Call of Duty: Modern Warfare II',
    system: 'Windows',
    infos: ['25%', 'R$ 349,90'],
    image: zelda
  }
]

const Categories = () => (
  <>
    <ProductsList games={RPG} title={'RPG'} background="gray" />
    <ProductsList games={Ação} title={'Ação'} background="black" />
    <ProductsList games={Aventura} title={'Aventura'} background="gray" />
    <ProductsList games={FPS} title={'FPS'} background="black" />
  </>
)

export default Categories
