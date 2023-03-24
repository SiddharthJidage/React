import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_DATA = [
    {
      id: 'p1',
      title: 'laptop',
      price: 55555,
      description: 'ASUS TUF laptop',
    },
    {
      id: "p2",
      title: "CAR",
      price: 1555555,
      description: "Dodge Challenger SRT Hellcat",
    },
    {
      id: "p3",
      title: "I-Pad Air",
      price: 45555,
      description: "Apple Ipad",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price= {product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
