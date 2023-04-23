import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//FIREBASE
import {collection, query, getDocs, where, documentId,} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

//COMPONENTE
import Item from '../../components/item/Item'

//CSS
import './itemDetails.css'

const ItemDetailsContainer = () => {
  const [itemData, setItemData] = useState([]);

  let { id } = useParams();
  
  

  useEffect(() => {  
    const getItems = async () => {
      const q = query(collection(db, "productos"), where(documentId(), "==", id));
      console.log('dentro de la Query',id)
      console.log('Quyery', q)
      const docs = [];
      const querySnapshot = await getDocs(q);      
       console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
         console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
       console.log(docs);
      setItemData(docs);
    };
    getItems();    
  },[id])

  return (
    <div className='item__details'>
    <h1>Detalle del producto</h1>
    {itemData.map((data) => {
      return <Item itemData={data} key={data.id}/>
    })}
    
    </div>
  )
}

export default ItemDetailsContainer