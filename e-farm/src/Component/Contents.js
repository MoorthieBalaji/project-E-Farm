import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
export const vegetables=[
    {
        id:1,
        name:'Tomato',
        image:'tomato.jpg',
        price:'30'

    },
    {
        id:2,
        name:'Onion',
        image:'onion.jpg',
        price:'80'

    },
    {
        id:3,
        name:'RidgeGuard',
        image:'rg.jpg',
        price:'100'

    },
    {
        id:4,
        name:'LadiesFinger',
        image:'ladiesfi.jpg',
        price:'40'

    },
    {
        id:5,
        name:'Potato',
        image:'potatoo.jpg',
        price:'40'

    },
    {
        id:6,
        name:'Betroot',
        image:'betrooot.jpg',
        price:'40'

    },
    {
        id:7,
        name:'Beans',
        image:'beans3.jpg',
        price:'40'

    },
    {
        id:8,
        name:'BitterGuard',
        image:'bg1.jpg',
        price:'40'

    },
    {
        id:9,
        name:'BottleGuard',
        image:'bg5.jpg',
        price:'40'

    },
    {
        id:10,
        name:'Brinjal',
        image:'brinjal.jpg',
        price:'40'
    },
    {
        id:11,
        name:'Broccoli',
        image:'broccoli.jpg',
        price:'30'

    },
    {
        id:12,
        name:'Cabbage',
        image:'cb1.jpg',
        price:'80'

    },
    {
        id:13,
        name:'Capsicum',
        image:'cp4.jpg',
        price:'100'

    },
    {
        id:14,
        name:'Carrot',
        image:'cr1.jpg',
        price:'40'

    },
    {
        id:15,
        name:'CauliFlower',
        image:'cf.jpg',
        price:'40'

    },
    {
        id:16,
        name:'Cucumber',
        image:'cc1.jpg',
        price:'40'

    },
    {
        id:17,
        name:'Drumstick',
        image:'ds1.jpg',
        price:'40'

    },
    {
        id:18,
        name:'Garlic',
        image:'gg.jpg',
        price:'40'

    },
    {
        id:19,
        name:'Ginger',
        image:'gi.jpg',
        price:'40'

    },
    {
        id:20,
        name:'Mushroom',
        image:'mm.jpg',
        price:'40'

    },
    {
        id:21,
        name:'Pumpkin',
        image:'pp1.jpg',
        price:'30'

    },
    {
        id:22,
        name:'Radish',
        image:'radish.jpg',
        price:'80'

    },
    {
        id:23,
        name:'SnakeGuard',
        image:'snakeguard.jpg',
        price:'100'

    },
    {
        id:24,
        name:'SpringOnion',
        image:'so.jpg',
        price:'40'

    },
    {
        id:25,
        name:'Chilli',
        image:'chilli.jpg',
        price:'40'

    }


];
export const fruits=[{
    id:1,
    name:'Appple',
    image:'ap2.jpg',
    price:''
},
{
    id:2,
    name:'Orange',
    image:'orange.jpg',
    price:''
},
{
    id:3,
    name:'Pomagranete',
    image:'poma.jpg',
    price:''
},
{
    id:4,
    name:'Graphes',
    image:'grape.jpg',
    price:''
},
{
    id:5,
    name:'Papaya',
    image:'papaya.jpg',
    price:''
},
{
    id:6,
    name:'Guava',
    image:'guava.jpg',
    price:''
},
{
    id:7,
    name:'Watermelon',
    image:'watermelon.jpg',
    price:''
},
{
    id:8,
    name:'Banana',
    image:'banana.jpg',
    price:''
},
{
    id:9,
    name:'Mango',
    image:'mango.jpg',
    price:''
},
{
    id:10,
    name:'PineApple',
    image:'pine.jpg',
    price:''
},
{
    id:11,
    name:'Strawberry',
    image:'straw.jpg',
    price:''
},
{
    id:12,
    name:'Gooseberry',
    image:'goose.jpg',
    price:''
},
{
    id:13,
    name:'Cherry',
    image:'cherry.jpg',
    price:''
},
{
    id:14,
    name:'CustardApple',
    image:'custard.jpg',
    price:''
},
{
    id:15,
    name:'Chikoo',
    image:'chikoo.jpg',
    price:''
},
];

export const greens=[{
id:1,
name:'MalliThalai',
image:'malli.jpg',
price:''
},
{
  id:2,
    name:'PuthinaThalai',
    image:'puthina.jpg',
    price:''
    },
    {
        id:3,
        name:'curryvepillai',
        image:'curry.jpg',
        price:''
        },
        {
            id:4,
            name:'Milaguthakkali',
            image:'milagu.jpg',
            price:''
            },
            {
                id:5,
                name:'MurungaKeerai',
                image:'murunga.jpg',
                price:''
                },
                {
                    id:6,
                    name:'ThoiyaKeerai',
                    image:'thoiya.jpg',
                    price:''
                    },
                    {
                        id:7,
                        name:'ThandangKeerai',
                        image:'thanda.jpg',
                        price:''
                        },
                        {
                            id:8,
                            name:'SivapThandangKeerai',
                            image:'sivaputhanda.jpg',
                            price:''
                            },
                            {
                                id:9,
                                name:'PulichaKeerai',
                                image:'pulicha.jpg',
                                price:''
                                }


]

export const dairyproducts=[{
  id:1,
  name:'Milk',
  image:'milk1.jpg',
  price:''
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
  price:''
},
{
  id:4,
  name:'Butter',
  image:'butter.jpg',
  price:''
},
{
  id:5,
  name:'Ghee',
  image:'ghee.jpg',
  price:''
},
{
  id:6,
  name:'ButterMilk',
  image:'bm.jpg',
  price:''
},

]

export const meat=[{
  id:1,
  name:'broiler Chicken',
  image:'broiler.jpg',
  price:''
},
{
  id:2,
  name:'NaatuKozhli Chicken',
  image:'nk.jpg',
  price:''
},
{
  id:3,
  name:'Fish',
  image:'fish.jpg',
  price:''
},
{
  id:4,
  name:'Beef',
  image:'beef.jpg',
  price:''
},
{
  id:5,
  name:'Pork',
  image:'pork.jpg',
  price:''
},
{
  id:6,
  name:'Prawn',
  image:'prawn.jpg',
  price:''
},
{
  id:7,
  name:'Mutton',
  image:'mutton.jpg',
  price:''
},

]

const Contents = () => {
  const [cards, setCards] = useState(Greens);

 const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCards = [...cards];
    updatedCards[index][name] = value;
    setCards(updatedCards);
 };
  return (
    <>
    
     <div className='Product' style={{marginTop:'30px',marginBottom:'20px'}}>
        <Row xs={1} md={5}>
      {vegetables.map(card => (
        <Col key={card.id}>
          <Card style={{boxShadow:'2px 2px 2px 2px red'}} className='g-5 mt-5'>
            <img src={card.image} alt='Card' style={{height:'160',width:'306'}}/>
            <Card.Body>
              <Card.Title style={{backgroundColor:'lightgreen',textAlign:'center'}}>{card.name}</Card.Title>
              {/* <Card.Text style={{backgroundColor:'palegreen'}}>{card.desc}</Card.Text> */}
              {/* <div className='text-center'>
             <button type="button" class="btn btn-danger">View</button>
              </div> */}
              <Form>
                 <Form.Group controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      value={card.price}
                      onChange={(e) => handleChange(e, index)}
                    />
                 </Form.Group>

                 <Form.Group controlId="formBasicQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      name="quantity"
                      value={card.quantity}
                      onChange={(e) => handleChange(e, index)}
                    />
                 </Form.Group>
                </Form>
            </Card.Body>
            <style>
              {`
              .card:hover{
                box-shadow: 4px 4px 4px 4px red;
                transform:scale(1.03);
                transition:all 0.2s;
              }
              `}
            </style>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    <h1>Fruits</h1>
    <div className='Product' style={{marginTop:'30px',marginBottom:'20px'}}>
        <Row xs={1} md={5}>
      {fruits.map(card => (
        <Col key={card.id}>
          <Card style={{boxShadow:'2px 2px 2px 2px red'}} className='g-5 mt-5'>
            <img src={card.image} alt='Card' style={{height:'160',width:'306'}}/>
            <Card.Body>
              <Card.Title style={{backgroundColor:'lightgreen',textAlign:'center'}}>{card.name}</Card.Title>
              {/* <Card.Text style={{backgroundColor:'palegreen'}}>{card.desc}</Card.Text> */}
              <div className='text-center'>
             <button type="button" class="btn btn-danger">View</button>
              </div>
            </Card.Body>
            <style>
              {`
              .card:hover{
                box-shadow: 4px 4px 4px 4px red;
                transform:scale(1.03);
                transition:all 0.2s;
              }
              `}
            </style>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    <h1>Greens</h1>
    <div className='Product' style={{marginTop:'30px',marginBottom:'20px'}}>
        <Row xs={1} md={5}>
      {greens.map(card => (
        <Col key={card.id}>
          <Card style={{boxShadow:'2px 2px 2px 2px red'}} className='g-5 mt-5'>
            <img src={card.image} alt='Card' style={{height:'160',width:'306'}}/>
            <Card.Body>
              <Card.Title style={{backgroundColor:'lightgreen',textAlign:'center'}}>{card.name}</Card.Title>
              {/* <Card.Text style={{backgroundColor:'palegreen'}}>{card.desc}</Card.Text> */}
              <div className='text-center'>
             <button type="button" class="btn btn-danger">View</button>
              </div>
            </Card.Body>
            <style>
              {`
              .card:hover{
                box-shadow: 4px 4px 4px 4px red;
                transform:scale(1.03);
                transition:all 0.2s;
              }
              `}
            </style>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    <h1>DairyProducts</h1>
    <div className='Product' style={{marginTop:'30px',marginBottom:'20px'}}>
        <Row xs={1} md={5}>
      {dairyproducts.map(card => (
        <Col key={card.id}>
          <Card style={{boxShadow:'2px 2px 2px 2px red'}} className='g-5 mt-5'>
            <img src={card.image} alt='Card' style={{height:'160',width:'306'}}/>
            <Card.Body>
              <Card.Title style={{backgroundColor:'lightgreen',textAlign:'center'}}>{card.name}</Card.Title>
              {/* <Card.Text style={{backgroundColor:'palegreen'}}>{card.desc}</Card.Text> */}
              <div className='text-center'>
             <button type="button" class="btn btn-danger">View</button>
              </div>
            </Card.Body>
            <style>
              {`
              .card:hover{
                box-shadow: 4px 4px 4px 4px red;
                transform:scale(1.03);
                transition:all 0.2s;
              }
              `}
            </style>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    <h1>Meat</h1>
    <div className='Product' style={{marginTop:'30px',marginBottom:'20px'}}>
        <Row xs={1} md={5}>
      {meat.map(card => (
        <Col key={card.id}>
          <Card style={{boxShadow:'2px 2px 2px 2px red'}} className='g-5 mt-5'>
            <img src={card.image} alt='Card' style={{height:'160',width:'306'}}/>
            <Card.Body>
              <Card.Title style={{backgroundColor:'lightgreen',textAlign:'center'}}>{card.name}</Card.Title>
              {/* <Card.Text style={{backgroundColor:'palegreen'}}>{card.desc}</Card.Text> */}
              <div className='text-center'>
             {/* <button type="button" class="btn btn-danger">View</button> */}
             <Card.Text>
             Price: <b>{count}</b>
             {/* Quantity:  <b>{quantity}</b> */}
             </Card.Text>
             <Row>
          <Col>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="primary" onClick={setValue}>
              Set Price
            </Button>
          </Col>
        </Row>
              </div>
            </Card.Body>
            <style>
              {`
              .card:hover{
                box-shadow: 4px 4px 4px 4px red;
                transform:scale(1.03);
                transition:all 0.2s;
              }
              `}
            </style>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    
    </>
   
  )
}

export default Contents;