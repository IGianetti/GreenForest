/****** REACT ******/
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

/****** FIREBASE******/
import { collection, query, getDocs, where, documentId, } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

/****** COMPONENTE ******/
import Item from '../../components/item/Item'



const ItemDetailsContainer = () => {
  const [itemData, setItemData] = useState([]);

  let { id } = useParams();



  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "productos"), where(documentId(), "==", id));

      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {

        docs.push({ ...doc.data(), id: doc.id });
      });
      ;
      setItemData(docs);
    };
    getItems();
  }, [id])

  return (
    <div className='item__details' style={{
      backgroundColor: 'antiquewhite',
      padding: '25px'
    }}>
      {itemData.map((data) => {
        return <Item itemData={data} key={data.id} />
      })}

    </div>
  )
}

export default ItemDetailsContainer