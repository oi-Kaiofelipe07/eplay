import Section from '../Section'
import galeriaImg from '../../assets/images/imagem 9.png'
import play from '../../assets/images/botao-play 1.png'
import zoom from '../../assets/images/mais-zoom.png'

import { Items, Item, Action } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={galeriaImg} alt="" />
        <Action>
          <img src={zoom} alt="" />
        </Action>
      </Item>
      <Item>
        <img src={galeriaImg} alt="" />
      </Item>
      <Item>
        <img src={galeriaImg} alt="" />
      </Item>
      <Item>
        <img src={galeriaImg} alt="" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
