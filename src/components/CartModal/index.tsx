import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import CartProductList from './CartProductList';
import { CartContext } from '../../providers/CartContext/CartContext';

const CartModal = () => {
  const {setModalCartShoppingList, shoppingCartList } = useContext(CartContext);

  return (
    <div className='absolute w-screen h-screen top-0 left-0 bg-blue-200/75 '>
      <div className='absolute  bg-zinc-50 m-96 ml-64 w-64 rounded justify-around  mt-64 '>
        <header className='flex justify-around bg-green-400 '>
          <h2 className='font-semibold   h-10  '>
            Carrinho de Compras
          </h2>
          <button className=' 
          '
            type='button'
            aria-label='Fechar'
            onClick={() => setModalCartShoppingList(false)}
          >
            <MdClose />
          </button>
        </header>

        <div>
          {shoppingCartList.length > 0 ? (

            <CartProductList />
          ) : (
            <div >
              <h3>
                Sua sacola está vazia
              </h3>
              <div>
                Adicione itens
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
