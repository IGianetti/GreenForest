import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardProduct from "../../components/cardproduct/CardProduct";

import './ItemCategory.css'

const ItemCategory = () => {
    const [itemData, setItemData] = useState([]);
    let { cat } = useParams();

    useEffect(() => {
        const getItems = async () => {
          const q = query(collection(db, "productos"), where("cat", "==", cat));
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
      }, [cat]);

  return (
    <div className="items-container">
        
        {itemData.map((data) => {
        return <CardProduct itemData={data} key={data.id} />;
      })}
    </div>
  )
}

export default ItemCategory