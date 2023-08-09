import Banner from "/banner.png";
import Card from "./Card";
import { useGetAllProductsQuery } from "../features/products.jsx";

const Catalog = () => {
  // const [data, setData] = useState([]);
  const { data } = useGetAllProductsQuery();
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const res = await axios.get("http://localhost:3000/items");
  //       setData(res.data);
  //       // console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getData();
  // }, [data.length]);

  return (
    <div className="flex flex-col gap-6 px-6">
      <img src={Banner} />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-12 pb-10">
        {data?.map((product) => (
          <div className="h-full" key={product.id}>
            <Card
              id={product.id}
              name={product.nama}
              price={product.harga}
              desc={product.desc}
              image={product.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
