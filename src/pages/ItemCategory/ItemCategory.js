import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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

      querySnapshot.forEach((doc) => {

        docs.push({ ...doc.data(), id: doc.id });
      });

      setItemData(docs);
    };
    getItems();
  }, [cat]);

  return (
    <div className="items-container">
      {itemData.map((data) => {
        return <div key={data.id}>
          <Link style={{ textDecoration: "none" }}
            key={data.id}
            to={`/item-details/${data.id}`}
          >
            <CardProduct itemData={data} />
          </Link>
        </div>


      })}
    </div>
  )
}

export default ItemCategory