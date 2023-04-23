// REACT
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// CSS
import "./ItemContainerList.css"

// COMPONENTES
import CardProduct from '../cardproduct/CardProduct'

// FIREBASE
import { collection, query, getDocs } from "firebase/firestore"
import { db } from '../../firebase/firebaseConfig'




const ItemContainerList = () => {
  const [items, setItemsData] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "productos"));
      const docs = [];
      const querySnapshot = await getDocs(q); 
      console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
        
      });      
      setItemsData(docs);
    };

    getItems()
  },[])
  
  return (
    <div className='itemContainerList'>
    <div className='itemContainer' >
      {items.map((data)=>{
        return(
          <div key={data.id}>
          <Link style={{ textDecoration: "none" }} 
                key={data.id}
                to={`/item-details/${data.id}`}>
          <CardProduct itemData={data} />
          </Link>
          </div>
        )
      })}
      </div> 
    </div>
  )
}

export default ItemContainerList