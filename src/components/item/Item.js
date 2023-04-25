import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import "./item.css";

const Item = ({ itemData }) => {
    const [qty, setQty] = useState(1);

    const { addItem, isInCart } = useContext(CartContext);

    const handleAddCart = () => {
        if (isInCart(itemData.id)) {
            alert("Producto ya agregado al carrito");
        } else {
            const newProduct = { ...itemData, qantity: qty };
            addItem(newProduct);
        }
    };

    return (
        <div className="container">
            <div className="details">
                <div className="big-img">
                    <img src={`${itemData.img}`} alt="img product" />
                </div>

                <div className="box">
                    <div className="row">
                        <h2>{itemData.nombre}</h2>
                    </div>
                    <hr />
                    <p className="price">${itemData.precio}</p>
                    <p>{itemData.descp}</p>
                    <p>Categoria: {itemData.cat}</p>
                    <ItemCount
                        qantity={qty}
                        modQantity={setQty}
                        stock={itemData.stock}
                        onAdd={handleAddCart}
                    />
                </div>
            </div>
            <div className="extra-details">
                <h3>Datos Extra:</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
                    magna ut suscipit scelerisque. Nulla tempus ullamcorper mattis.
                    Pellentesque aliquet erat at condimentum venenatis. Praesent dignissim
                    enim at vestibulum convallis. Cras diam augue, ultricies eu
                    scelerisque nec, mattis at odio. Pellentesque volutpat ut nunc sit
                    amet semper. In vel turpis efficitur, convallis lectus eu, eleifend
                    magna. Maecenas porttitor faucibus ante fringilla gravida. Cras ut
                    pellentesque lorem. Quisque euismod purus eget est hendrerit varius.
                    Suspendisse pellentesque purus a nulla malesuada placerat id et justo.
                    Integer porttitor odio aliquam orci suscipit feugiat. Pellentesque
                    ultricies mauris metus, ut pharetra purus scelerisque vel. Mauris quis
                    rutrum turpis. Quisque fermentum quis purus in porttitor. Integer
                    finibus interdum elit, id ornare ex eleifend eget. Aenean mattis at
                    orci ac gravida. Curabitur sed nibh porta, auctor tellus eget, tempus
                    sapien. Sed semper porta arcu. Pellentesque facilisis neque ac neque
                    feugiat iaculis. Praesent malesuada quis dui vestibulum facilisis.
                    Suspendisse volutpat aliquet suscipit. Ut posuere efficitur metus, eu
                    scelerisque urna vulputate ac. Pellentesque finibus aliquam ultrices.
                    Duis tincidunt auctor scelerisque. Proin bibendum risus eget massa
                    sollicitudin, quis porttitor tellus bibendum. Aenean metus nisi,
                    imperdiet ac nisl et, dapibus scelerisque ligula. Curabitur posuere
                    odio nec est eleifend lobortis. In vel justo rutrum, commodo tortor
                    at, consequat dolor. Donec a egestas nulla. Mauris eget quam ac justo
                    posuere convallis vel id leo. Vivamus aliquam efficitur augue,
                    bibendum laoreet sapien cursus sed. Vestibulum mollis, massa quis
                    fermentum elementum, lectus nulla gravida mi, eu efficitur neque lacus
                    id libero.{" "}
                </p>
            </div>
        </div>
    );
};

export default Item;
