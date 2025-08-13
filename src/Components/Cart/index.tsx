import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import Tag from '../Tag'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/Cart'
import { getTotalPrice, parseToBrl } from '../../utils'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    closeCart()
    navigate('/checkout')
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <Button
                onClick={() => removeItem(item.id)}
                type="button"
                title="Remover do carrinho"
              >
                Remover
              </Button>
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice(items))}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button onClick={goToCheckout} title="Finalizar Compra" type="button">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
