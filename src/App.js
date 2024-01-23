
import Input from './components/Input'
import Button from './components/Button'
import {Container, Content, Row} from './styles'
import { useState } from 'react';



const App = () => {
  const [currentNumber, setCurrentNumber ] = useState('0');
  const [ firstNumber, setFirstNumber] = useState('0');
  const [ operation, setOperation] = useState('0');

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`)
  }

  const handleSum = () => {
    if(firstNumber == '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
      setFirstNumber('0')
      console.log(firstNumber)
      console.log(currentNumber)
    }
  }

    const handleMinus = () => {
    if(firstNumber == '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
      setFirstNumber('0')
    }
  }

  const handleMult = () => {
    if(firstNumber == '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }else {
      const minus = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
      setFirstNumber('0')
    }
  }

  const handleDiv = () => {
    if(firstNumber == '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else {
      const minus = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
      setFirstNumber('0')
    }
  }
    
    
  const handleEquals = () => {
    if(firstNumber != '0' && operation != '' && currentNumber != '0') {
      switch(operation){
        case '+':
          handleSum();
          break;
        case '-':
          handleMinus();
          break;
        case '*':
          handleMult();
          break;
        case '/':
          handleDiv();
          break;
        default:
          break;
      }
    }
  }
  return <div className="App">
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={handleMult}/>
          <Button label="/" onClick={handleDiv}/>
          <Button label="c" onClick={handleClear}/>          
          <Button label="." onClick={() => handleAddNumber('.')}/>          
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinus}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSum}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
      </Content>
    </Container>
  </div>;
};

export default App;
