import { useEffect, useState } from "react";
import Product from "../../components/product/Product";
import { collection, query, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import "./Products.css";

const CATEGORIES = {
	ALL: "All",
	WOMEN: "Women",
	MEN: "Men",
	KIDS: "Kids",
};

const productss = [
	{
		name: "Red Skirt",
		price: 145,
		category: CATEGORIES.WOMEN,
		image: "https://images.unsplash.com/photo-1678680081129-17f2ac502d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	},
	{
		name: "Red Skirt",
		price: 100,
		category: CATEGORIES.MEN,
		image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
	},
	{
		name: "Red Skirt Mini",
		price: 300,
		category: CATEGORIES.KIDS,
		image: "https://images.unsplash.com/photo-1632337950445-ba446cb0e26f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	},
	{
		name: "Red Skirt Mini",
		price: 300,
		category: CATEGORIES.KIDS,
		image: "https://images.unsplash.com/photo-1632337950445-ba446cb0e26f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	},
	{
		name: "Red Skirt Mini",
		price: 300,
		category: CATEGORIES.KIDS,
		image: "https://images.unsplash.com/photo-1632337950445-ba446cb0e26f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	},
];

const Products = ({user}) => {
	const [category, setCategory] = useState(CATEGORIES.ALL);
	const [products, setProducts] = useState([]);
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		getProducts();
		getFavorites();
	}, []);

  useEffect(() => {
    if(user == null){
      setFavorites([]);
    }
  }, [user])

	const getFavorites = async () => {
    var ls = JSON.parse(localStorage.getItem('user'))
    if(!ls) return;

		const docRef = doc(db, "users", ls.id);
		const docSnap = await getDoc(docRef);
		var fav = [];
		if (docSnap.exists()) {
			fav = JSON.stringify(docSnap.data().favorites);
		}
		localStorage.setItem("favorites", fav);
		setFavorites(JSON.parse(fav));
	};

	const getProducts = async () => {
		const q = query(collection(db, "products"));
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

	const checkIfFavorite = (product) => {
    return favorites.includes(product.id)
  };

	return (
		<>
			<div className="productsHeader">
				<h1>Products</h1>
				<div className="productsFilter">
					<button
						className={`button-55 ${
							category === CATEGORIES.ALL && "activeFilter"
						}`}
						onClick={() => setCategory(CATEGORIES.ALL)}
					>
						All
					</button>
					<button
						className={`button-55 ${
							category === CATEGORIES.MEN && "activeFilter"
						}`}
						onClick={() => setCategory(CATEGORIES.MEN)}
					>
						Men
					</button>
					<button
						className={`button-55 ${
							category === CATEGORIES.WOMEN && "activeFilter"
						}`}
						onClick={() => setCategory(CATEGORIES.WOMEN)}
					>
						Women
					</button>
					<button
						className={`button-55 ${
							category === CATEGORIES.KIDS && "activeFilter"
						}`}
						onClick={() => setCategory(CATEGORIES.KIDS)}
					>
						Kids
					</button>
				</div>
			</div>

			<div className="products">
				{products
					.filter(
						(prod) =>
							category === CATEGORIES.ALL ||
							prod.category === category
					)
					.map((product) => (
						<Product
							key={product.id}
							product={product}
							fav={() => checkIfFavorite(product)}
						/>
					))}
			</div>
		</>
	);
};

export default Products;
