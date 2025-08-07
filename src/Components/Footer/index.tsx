import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categoria</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#RPG">RPG</Link>
          </li>
          <li>
            <Link to="/categories#Action">Ação</Link>
          </li>
          <li>
            <Link to="/categories#Adventure">Aventura</Link>
          </li>
          <li>
            <Link to="/categories#Sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categories#FPS">FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rapido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
