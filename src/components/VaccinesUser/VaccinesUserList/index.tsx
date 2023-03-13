import React, { useContext } from 'react'
import { VaccinesContext } from '../../../providers/VaccinesContext';
import { IVaccines } from "../../../providers/@types";
import VaccinesUserCard from './VaccinesUserCard';


const VaccinesUserList = () => {
 const {vaccinesCardUser} = useContext(VaccinesContext);

  return (
    <div>
           <ul>
        {vaccinesCardUser.map(
          (product: IVaccines) =>
            product.name && (
                <VaccinesUserCard key={product.id} product={product} />
            )
        )}
      </ul>
    </div>
  )
}

export default VaccinesUserList