// import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import product from './product';
import Name from './name';
import Description from './description';
import Price from './price';


function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/outdoor.jpeg" />
        <Card.Body>
        <Card.Title><Name name ={product.name}/></Card.Title>
          {/* <Card.Title>{product.name}</Card.Title> */}
         <Card.Text><Description description={product.desription}/></Card.Text> 
         <Card.Text><Price price={product.price}/></Card.Text> 
         <Button variant="primary">Explore more</Button>
        </Card.Body>
      </Card>
      <div className='Paragraphe'>
      <Badge bg="secondary">Hello there !</Badge>
      </div>
    </div>
  );
}

export default App;
