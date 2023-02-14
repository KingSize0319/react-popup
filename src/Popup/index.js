import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Button, Modal} from 'antd';

const Popup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setCounter(0);
    if(show === 0){      
      setShow(1);      
      setIsActive(true);
    } else if (show === 1) {      
      setShow(2);
    } else if (show === 2){
      setIsModalOpen(false);
      setShow(0);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setShow(0);
  };

  const handleBefore = () => {
    setCounter(0);
    if(show === 2){
      setShow(1);   
      setIsActive(true);
    } else if (show === 1) {      
      setShow(0);
      console.log(isActive);
    } else if (show === 0){
      setIsModalOpen(false);
      setShow(0);
    }
  };

  useEffect(() => {
    let intervalId;
    if (show === 1) {
      
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
  
        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
  
        setSecond(computedSecond);
        setMinute(computedMinute);
  
        setCounter(counter => counter + 1);
      }, 1000)
  
      return () => clearInterval(intervalId);
    } else {
      setSecond('00');
      setMinute('00');
      setCounter(counter => counter + 1);
    }
    
  },[counter, show])

  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={showModal}>Click me</Button>
      </header>
      <Modal 
        title="Popup" 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        footer={[
          <Button type="primary" onClick={handleBefore}>
            Before
          </Button>,
          <Button type="primary" onClick={handleOk}>
            Next
          </Button>,
        ]}>
        {show === 0 ? (<p>This is popup step 1</p>) : (show === 1 ? <p>{minute} : {second}</p> : <p>The assignment is complete!</p>)}
        
        
      </Modal>
    </div>
  )
}

export default Popup;