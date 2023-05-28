import { useEffect, useState } from "react";
import "./Favorites.css";
import Product from "../../components/product/Product";
import { db } from "../../utils/firebase/firebase.utils";
import {
	collection,
	doc,
	documentId,
	getDoc,
	getDocs,
	query,
	where,
} from "firebase/firestore";

const Favorites = () => {
	const [products, setProducts] = useState([]);
	const [favorites, setFavorites] = useState([]);

	const getUserFavorites = async () => {
		const q = query(
			collection(db, "products"),
			where(
				documentId(),
				"in",
				JSON.parse(localStorage.getItem("favorites"))
			)
		);

		const querySnapshot = await getDocs(q);
		var prods = [];
		querySnapshot.forEach((doc) => {
			const product = doc.data();
			if (!products.some((prod) => prod.id === product.id)) {
				prods.push({
					id: doc.id,
					name: product.name,
					price: product.price,
					category: product.category,
					image: product.image,
				});
			}
		});

		setProducts([...products, ...prods]);
	};

	const getFavorites = async () => {
		var ls = JSON.parse(localStorage.getItem("user"));
		if (!ls) return;

		const docRef = doc(db, "users", ls.id);
		const docSnap = await getDoc(docRef);
		var fav = [];
		if (docSnap.exists()) {
			fav = JSON.stringify(docSnap.data().favorites);
		}
		localStorage.setItem("favorites", fav);
		setFavorites(JSON.parse(fav));
	};

	useEffect(() => {
		getFavorites();
		getUserFavorites();
	}, []);

	return (
		<>
			<div className="favoritesHeader">
				<h1>Favorites</h1>
			</div>

			<div className="products">
				{products.map((product) => (
					<Product key={product.id} product={product} fav={true} />
				))}
			</div>
		</>
	);
};

export default Favorites;
