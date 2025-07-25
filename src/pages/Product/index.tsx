import { useParams } from 'react-router-dom'
import Hero from '../../Components/Hero'
import Section from '../../Components/Section'

import Gallery from '../../Components/Gallery'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poções, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser.Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que você faz dele.
          Viva o Inesperado.
        </p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          Plataforma: PlayStation 5Desenvolvedor: Avalanche SoftwareEditora:
          Portkey Games, subsidiária da Warner Bros. Interactive
          EntertainmentIdiomas: O jogo oferece suporte a diversos idiomas,
          incluindo inglês, espanhol, francês, alemão, italiano, português,
          entre outros. As opções de áudio e legendas podem ser ajustadas nas
          configurações do jogo.
        </p>
      </Section>
      <Gallery />
    </>
  )
}

export default Product
