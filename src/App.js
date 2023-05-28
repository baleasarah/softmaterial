import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Fotter from "./components/fotter/Fotter";
import Header from "./components/header/Header";
import LogIn from "./pages/logIn/LogIn";
import Register from "./pages/register/Register";
import { useState } from "react";
import Cart from "./pages/cart/Cart";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import Favorites from "./pages/favorites/Favorites";

function App() {
	const [user, setUser] = useState(null);
	useState(() => {
		setUser(localStorage.getItem("user"));
	}, [user]);

	return (
		<>
			<Header user={user} setUser={setUser} />
			<Routes>
				<Route path="products" element={<Products user={user} />} />
				<Route path="login" element={<LogIn setUser={setUser} />} />
				<Route
					path="register"
					element={<Register user={user} setUser={setUser} />}
				/>
				<Route path="cart" element={<Cart />} />
				<Route path="favorites" element={<Favorites />} />
				<Route path="/" element={<Home />} />
			</Routes>
			<Fotter />
			<NotificationContainer />
		</>
	);
}

export default App;
