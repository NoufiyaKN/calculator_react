import { FloatingLabel,Form,Row,Col,Container } from 'react-bootstrap'
import './App.css'
import { useState } from 'react';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const displayContent = (content) => {
    setDisplayValue((prevValue) => prevValue + content);
  };
  const deleteLastCharacter = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };
  const clearScreen = () => {
    setDisplayValue('');
  };
  const finalOutput = () => {
    try {
      setDisplayValue(eval(displayValue));
    } catch {
      setDisplayValue('error');
    }
  };

  return (
    <>
     <div className='d-flex justify-content-center align-items-center'>
       <div className='d-flex justify-content-center bg-dark mt-5' style={{height: '500px', width: '400px',borderRadius: '50px'}}>
          <Container>
            <Row className='w-100'>
              <Col>
                <h1 className='mt-5 d-flex justify-content-center align-items-center' style={{color:'rgba(238,174,202,1)'}}>Calculator</h1>
              </Col>
              <Col>
                <input type="text" id="result" className='bg-dark mb-3' value={displayValue} style={{width:'375px',height: '50px',marginTop: '25px',color: 'rgba(238,174,202,1)',borderColor: 'rgba(238,174,202,1)'}} type="text" readOnly={true}/>
              </Col>
              <Col className='d-flex justify-content-between'>
                <button onClick={clearScreen} className='rounded-circle' style={{width: '40px',height: '40px',marginRight: '20px',marginLeft: '25px',backgroundColor: 'rgba(238,174,202,1)',border: 'rgba(238,174,202,1)',color: '#e44c8e'}}>C</button>
                <button onClick={() => displayContent('(')} className='rounded-circle' style={{width: '40px',height: '40px',marginRight: '20px',backgroundColor: 'rgba(238,174,202,1)',border: 'rgba(238,174,202,1)',color: '#e44c8e'}}>(</button>
                <button onClick={() => displayContent(')')} className='rounded-circle' style={{width: '40px',height: '40px',marginRight: '20px',backgroundColor: 'rgba(238,174,202,1)',border: 'rgba(238,174,202,1)',color: '#e44c8e'}}>)</button>
                <button onClick={() => displayContent('/')} className='rounded-circle' style={{width: '40px',height: '40px',backgroundColor: 'rgba(238,174,202,1)',border: 'rgba(238,174,202,1)',color: '#e44c8e'}}>/</button>
              </Col>
              <Col className='d-flex justify-content-between mt-3'>
                <button onClick={() => displayContent('7')} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',marginLeft: '25px',color: 'rgba(238,174,202,1)',border: '0px'}}>7</button>
                <button onClick={() => displayContent('8')} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',color: 'rgba(238,174,202,1)',border: '0px'}}>8</button>
                <button onClick={() => displayContent('9')} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',color: 'rgba(238,174,202,1)',border: '0px'}}>9</button>
                <button onClick={() => displayContent('*')} className='rounded-circle' style={{width: '40px',height: '40px',backgroundColor: 'rgba(238,174,202,1)',border: 'rgba(238,174,202,1)',color: '#e44c8e'}}>*</button>
              </Col>
              <Col className='d-flex justify-content-between mt-3'>
                <button onClick={() => displayContent('4')} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',marginLeft: '25px',color: 'rgba(238,174,202,1)',border: '0px'}}>4</button>
                <button onClick={() => displayContent('5')} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',color: 'rgba(238,174,202,1)',border: '0px'}}>5</button>
                <button onClick={() => displayContent('6')} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',color: 'rgba(238,174,202,1)',border: '0px'}}>6</button>
                <button onClick={() => displayContent('-')} className='rounded-circle' style={{width: '40px',height: '40px',backgroundColor: 'rgba(238,174,202,1)',border: 'rgba(238,174,202,1)',color: '#e44c8e'}}>-</button>
              </Col>
              <Col className='d-flex justify-content-between mt-3'>
                <button onClick={() => displayContent('1')} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',marginLeft: '25px',color: 'rgba(238,174,202,1)',border: '0px'}}>1</button>
                <button onClick={() => displayContent('2')} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',color: 'rgba(238,174,202,1)',border: '0px'}}>2</button>
                <button onClick={() => displayContent('3')} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',color: 'rgba(238,174,202,1)',border: '0px'}}>3</button>
                <button onClick={() => displayContent('+')} className='rounded-circle' style={{width: '40px',height: '40px',backgroundColor: 'rgba(238,174,202,1)',border: 'rgba(238,174,202,1)',color: '#e44c8e'}}>+</button>
              </Col>
              <Col className='d-flex justify-content-between mt-3'>
                <button onClick={() => displayContent('0')} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',marginLeft: '25px',color: 'rgba(238,174,202,1)',border: '0px'}}>0</button>
                <button onClick={() => displayContent('.')} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',color: 'rgba(238,174,202,1)',border: '0px'}}>.</button>
                <button onClick={deleteLastCharacter} className='bg-dark' style={{width: '40px',height: '40px',marginRight: '20px',color: 'rgba(238,174,202,1)',border: '0px'}}>del</button>
                <button onClick={finalOutput} className='rounded-circle' style={{width: '50px',marginLeft: '10px',backgroundColor: '#3b80b8',border: '#3b80b8',color: 'white'}}>=</button>
              </Col>
            </Row>
          </Container>
       </div>
     </div>
    </>
  )
}


export default App
