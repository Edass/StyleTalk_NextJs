"use client"
import Image from 'next/image';
import { Button, Card, Col, Row } from 'react-bootstrap'
import "@/component/products/productCard.scss";

const ProductCard = ({products}) => {


  const handleClick = () =>{
    router.push(`product/${products.id}`)
  }

  return (

<Row sm={1} md={2} xl={3} className='g-4'>

    {products.map(item=>(

   <Col key={item.id} >
   <Card style={{ width: '18rem',display:"flex", justifyContent:"center",alignItems:"center", textAlign:"center" }}
   className='main-card'>
   <Card.Img style={{objectPosition:"80% 30%" }} as={Image} width={300} height={300} className='object-fit-cover image-first' variant="top" src={item.image} />
   <Card.Img style={{objectPosition:"80% 30%" }} as={Image} width={300} height={300} className='object-fit-cover image-second' variant="top" src={item.image2} />
   <Card.Body> 
     <Card.Title>{item.title}</Card.Title>
     <Card.Text>
       {item.description}
     </Card.Text>
     <Button variant="warning">Go somewhere</Button>
   </Card.Body>
 </Card>
 </Col>

    ))}
 
  </Row>

  );
};

export default ProductCard;
