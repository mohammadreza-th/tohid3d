import React from "react";
const base_url = "https://api-top-shop.vercel.app/";

export const getStaticProps = async () => {
  const res = await fetch(base_url + "products/");
  const products = await res.json();

  return { props: { products } };
};

const HomePage = ({ products }) => {
  return (
    <main>
      <h2>HomePage</h2>
      <section className="bg-white p-3">
        <h3>products:</h3>
        <div className="m-4 ml-10 bg-sky-200 w-40 p-3 rounded">our products is:</div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-y-14 gap-x-4 ">
          {products.map((product) => {
            return (
              <div className=" rounded-lg">
                <div className="bg-red-400 text-white rounded-t-lg text-center">
                  {product.title}
                </div>
                <div className="bg-yellow-300 rounded-b-lg text-center p-2">
                  {product.price}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
