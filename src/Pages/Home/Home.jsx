import { useEffect, useState } from 'react';
import { Main } from '../../layouts/Main/Main';
import { Card } from '../../layouts/Card/Card';
import { InputFiltre } from '../../Components/InputFiltre/InputFiltre.jsx'


export const Home = () => {
  const [products, setProducts] = useState([]);
  const [contentInput, setContentInput] = useState("");
  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const SearchProduct = async (e) => {
    const value = e.target.value;
    setContentInput(value);

    if (value === "") {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
      return;
    }


    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filtered);
  };

  

  return (
    <Main>
      <InputFiltre contentInput={contentInput} SearchProduct={SearchProduct}/>
      <h1 className="text-xl font-bold mb-4">Productos disponibles</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          products.map(product => (
            <Card key={product.id} {...product} />
          ))
        }
      </section>
    </Main>
  );
}