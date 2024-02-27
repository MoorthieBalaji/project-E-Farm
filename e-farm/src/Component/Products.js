// import { Card, CardDeck, Form } from 'react-bootstrap';
// import { useState } from 'react';

// const Product = () => {
//     const [products, setProducts] = useState([
//         {
//             id:1,
//             name:'Milk',
//             image:'milk1.jpg',
//             price:'0'
//           },
//           {
//             id:2,
//             name:'Curd',
//             image:'curd.jpg',
//             price:''
//           },
//           {
//             id:3,
//             name:'Cheese',
//             image:'cheese.jpg',
//             price:'0'
//           },
//           {
//             id:4,
//             name:'Butter',
//             image:'butter.jpg',
//             price:'0'
//           },
//           {
//             id:5,
//             name:'Ghee',
//             image:'ghee.jpg',
//             price:'0'
//           },
//           {
//             id:6,
//             name:'ButterMilk',
//             image:'bm.jpg',
//             price:'0'
//           }
//     ]);
// };


// const Contents1 = ({ product, setProduct, id }) => {
//  return (
//     <Card className="product-card">
//       <Card.Img variant="top" src={product.image} />
//       <Card.Body>
//         <Card.Title>{product.name}</Card.Title>
//         {/* <Card.Text>
//           {product.description}
//         </Card.Text> */}
//         <Form.Group controlId={`price-${id}`}>
//           <Form.Label>Price:</Form.Label>
//           <Form.Control type="number" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value }, index)} />
//         </Form.Group>
//       </Card.Body>
//     </Card>
//  );
// };
// const setProduct = (newProduct, id) => {
//     const newProducts = [...Product];
//     newProducts[id] = newProduct;
//     setProduct(newProducts);
//    };
   
//    return (
//     <div className="product-grid">
//        <CardDeck>
//          {Product.map((product, id) => (
//            <Contents1 key={id} product={product} setProduct={setProduct} index={id} />
//          ))}
//        </CardDeck>
//     </div>
//    );


//    import { useState } from 'react';

// const Products = () => {
//  const [products, setProducts] = useState([
//     // ... your product objects
//  ]);

//  // ...
// };
// Now, you should be able to set the price for each product using the input field provided in the ProductPriceCard component. The setProduct function will ensure that the state of the products array is updated whenever the price is changed.




// firstle i create a list of objects what is the next step


// Then you will map through each product in the products array and create a ProductPriceCard component for each one.

// Inside the ProductPriceCard component, you will render the product information and create an input field for the price.

// Whenever the price is changed, you will call the setProduct function with the new product object and the index of the product in the array. This function will then update the state of the products array.

// Here's the code for the Products component:

// jsx
// Download
// Copy code
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const ProductPriceCard = ({ product, setProduct, index }) => {
 return (
    <div>
      {/* Render product information and price input field */}
      <h3>{product.name}</h3>
      <img src={product.image}></img>
      <Form.Group controlId={`price-${index}`}>
        <Form.Label>Price:</Form.Label>
        <Form.Control type="number" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value }, index)} />
      </Form.Group>
    </div>
 );
};

const Products = () => {
 const [products, setProducts] = useState([
    {
        id:1,
        name:'Milk',
        image:'milk1.jpg',
        price:'0'
      },
      {
        id:2,
        name:'Curd',
        image:'curd.jpg',
        price:''
      },
      {
        id:3,
        name:'Cheese',
        image:'cheese.jpg',
        price:'0'
      },
      {
        id:4,
        name:'Butter',
        image:'butter.jpg',
        price:'0'
      },
      {
        id:5,
        name:'Ghee',
        image:'ghee.jpg',
        price:'0'
      },
      {
        id:6,
        name:'ButterMilk',
        image:'bm.jpg',
        price:'0'
      }
 ]);

 const setProduct = (newProduct, index) => {
    const newProducts = [...products];
    newProducts[index] = newProduct;
    setProducts(newProducts);
 };

 return (
    <div className="product-grid">
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {products.map((product, index) => (
          <ProductPriceCard key={index} product={product} setProduct={setProduct} index={index} />
        ))}
      </div>
    </div>
 );
};

export default Products;
   
