
import { useState } from 'react';

import './App.css';

import { addInfo, updateInfo } from './utils/functions';
import Contacts from './components/contacts/Contacts';
import FormComponent from './components/form/FormComponent';
const initialValue={username:" ", phoneNumber:"",gender:"no info"}
function App() {

  const[info,setInfo]=useState(initialValue);
  const handleFormSubmit=()=>{
    if(info.id){
      updateInfo(info)
    }else{
 addInfo(info)    
  }}
const editHandler=(id,username,phoneNumber,gender)=>{
  setInfo({id,username,phoneNumber,gender})
}
  return (
    <div className="App">
    <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
    <Contacts editHandler={editHandler}/>
    </div>
  );
}

export default App;
 