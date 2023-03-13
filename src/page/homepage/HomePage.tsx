import React, { useEffect, useState } from "react";
import FooterHomePage  from "../../components/FooterHome";
import  HeaderHomePage  from "../../components/HeaderHome";
import Home from "../../assets/Home.png";
import { IVaccines } from "../../providers/@types";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import CardOff from "../../components/ProductsList/CardHome";

const HomePage = () => {
  const [list, setList] = useState<IVaccines[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const listproduct = async () => {
      try {
        const response = await api.get<IVaccines[]>("vaccines");
        setList(response.data);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    listproduct();
  }, []);

  return (
    <>
      <HeaderHomePage />
      <div className="flex">
        <img src={Home} alt="" />
        <section >
        <h1 className="mt-6 justify-center ml-64 mb-10 text-xl text-emerald-700	">Vacinas Disponíveis para Compra</h1>
        <div>
          <ul className="flex flex-wrap ">
            {list.map(
              (product: IVaccines) =>
                product.name && (
                  <CardOff key={product.id} product={product} />
                )
            )}
          </ul>
        </div>
        </section>
      </div>

      <FooterHomePage />
    </>
  );
};

export default HomePage;
