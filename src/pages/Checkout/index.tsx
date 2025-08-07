import Button from '../../Components/Button'
import Card from '../../Components/Card'
import { InputGroup, Row } from './styles'

const Checkout = () => (
  <div className="container">
    <Card title="Dados de Cobrança">
      <>
        <Row>
          <InputGroup>
            <label htmlFor="fullName">Nome Completo</label>
            <input type="text" id="fullName" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" />
          </InputGroup>
        </Row>
        <h3 className="margin-top">Dados de Entrega - conteudo Digital</h3>
        <Row>
          <InputGroup>
            <label htmlFor="deliveryEmail">Email de Entrega</label>
            <input type="email" id="deliveryEmail" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="confirmaEmail">Confirmar Email</label>
            <input type="email" id="confirmaEmail" />
          </InputGroup>
        </Row>
      </>
    </Card>
    <Card title="Dados de Pagamento">
      <div>
        <p>
          Ao optar por essa forma de pagamento, é importante lembrar que a
          confirmação pode levar até 3 dias úteis, devido aos prazos
          estabelecidos pelas instituições financeiras. Portanto, a liberação do
          código de ativação do jogo adquirido ocorrerá somente após a aprovação
          do pagamento do boleto.
        </p>
      </div>
    </Card>
    <Button type="button" title="Finalizar Compra">
      Finalizar Compra
    </Button>
  </div>
)

export default Checkout
