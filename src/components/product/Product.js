import "./Product.css";
import { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { NotificationManager } from "react-notifications";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

const Product = ({ product, fav }) => {
	const [favorite, setFavorite] = useState(fav);

	const handleFavoriteClick = async () => {

		var ls = localStorage.getItem('user')
		if(!ls) return;

		const userRef = doc(db, "users", JSON.parse(ls).id)
		var fav = JSON.parse(localStorage.getItem('favorites'))

		if(favorite){
			await updateDoc(userRef, {
				favorites: arrayRemove(product.id)
			});

			fav = fav.filter(i => i !== product.id)
			localStorage.setItem('favorites', JSON.stringify(fav))
		}else {
			await updateDoc(userRef, {
				favorites: arrayUnion(product.id)
			});

			fav.push(product.id)
			localStorage.setItem('favorites', JSON.stringify(fav))
		}

		setFavorite(!favorite);
	};

	const handleAddToCart = () => {
		var ls = localStorage.getItem("cart");
		if (!ls) {
			localStorage.setItem(
				"cart",
				JSON.stringify({ [product.id]: { ...product, qty: 1 } })
			);
		} else {
			ls = JSON.parse(ls);

			if (ls[product.id]) {
				ls[product.id].qty += 1;
			} else {
				ls[product.id] = { ...product, qty: 1 };
			}

			localStorage.setItem("cart", JSON.stringify(ls));
		}
		NotificationManager.success("Product Added to Cart", "Add to Cart");
	};

	return (
		<Box
			className="product"
			style={{ backgroundImage: `url("${product.image}")` }}
		>
			{favorite ? (
				<IconButton
					onClick={handleFavoriteClick}
					style={{ alignSelf: "flex-end" }}
				>
					<FavoriteIcon className="favIcon" />
				</IconButton>
			) : (
				<IconButton
					onClick={handleFavoriteClick}
					style={{ alignSelf: "flex-end" }}
				>
					<FavoriteBorderIcon className="favIcon" />
				</IconButton>
			)}
			<div className="prodDetails">
				<h2 className="productName">{product.name}</h2>
				<p className="productPrice">Price: {product.price}$</p>
				<Button
					className="addToCart"
					variant="outlined"
					onClick={handleAddToCart}
				>
					Add to Cart
				</Button>
			</div>
		</Box>
	);
};

export default Product;
