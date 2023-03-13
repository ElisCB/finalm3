import { MdSearch } from "react-icons/md";
import { useContext, useState } from 'react';
import { CartContext } from '../../../providers/CartContext/CartContext';

const SearchForm = () => {
  const { setSearch } = useContext(CartContext);
  const [searchValue, setSearchValue] = useState('');
  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearch(searchValue);
    setSearchValue('');
  };
  return (
    <form onSubmit={submit}>
      <input  className=" sm:flex-row ml-44 pl-4  rounded-lg space-x-4  h-full "
        type='text'
        placeholder='Digitar pesquisa'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button  type='submit' className= 'mr-20 ml-4'>
        <MdSearch />
      </button>
    </form>
  );
};
export default SearchForm;
