import { useState,useEffect } from "react";

import {child, getDatabase, onValue, push, query, ref, remove, set, update} from "firebase/database";

import firebase from "./firebase";
import { successNote } from "./tostify";

export const addInfo=(info)=>{
    const db=getDatabase();
    const userRef=ref(db,"contact")
    const newUserRef=push(userRef)
    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    })
   successNote("Added successfully")
}
export const useFetch=()=>{
    const [contactList, setContactList] = useState();
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
      setIsLoading(true)
      const db = getDatabase();
      const userRef = ref(db, 'contact');
      onValue(query(userRef), snapshot => {
        const contacts=snapshot.val()
        // console.log(snapshot.val())
        const contactArray = [];
        for (let id in contacts) {
          contactArray.push({ id, ...contacts[id] });
        }
        setContactList(contactArray);
        setIsLoading(false)
      })
    },[]);
    return {isLoading,contactList};
}
export const deleteInfo=(id)=>{
  const db=getDatabase();
    // const userRef=ref(db,'contact');
  remove(ref(db,"contact/"+id))
  successNote("Deleted")
  }
export const updateInfo=(info)=>{
  const db=getDatabase()
    const newUserKey=push(child(ref(db),"contact/")).key;
    const updates={};
    updates["contact/"+newUserKey]=info;
    return update(ref(db),updates)
  
}