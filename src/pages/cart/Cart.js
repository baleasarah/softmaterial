import "./Cart.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const [products, setProducts] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	const navigate = useNavigate();

	useEffect(() => {
		var prods = JSON.parse(localStorage.getItem("cart"));
		var formattedProducts = [];
		for (let id in prods) {
			formattedProducts.push(prods[id]);
		}
		setProducts(formattedProducts);
	}, []);

	useEffect(() => {
		var price = 0;
		products.forEach((prod) => (price += prod.qty * prod.price));
		setTotalPrice(price);
	}, [products]);

	const handleSubmitOrder = () => {
		NotificationManager.success(
			"Order Submitted Successfully!",
			"Order Completed"
		);
		localStorage.removeItem("cart");
		navigate("/");
	};

	return (
		<div className="cartContainer">
			<h1>Cart</h1>
			{products.length > 0 ? (
				<>
					<div className="tableContainer">
						<TableContainer component={Paper}>
							<Table
								sx={{ minWidth: 700 }}
								aria-label="spanning table"
							>
								<TableHead className="tableHead">
									<TableRow>
										<TableCell>
											<h3>Description</h3>
										</TableCell>
										<TableCell align="right">
											<h3>Qty.</h3>
										</TableCell>
										<TableCell align="right">
											<h3>Sum</h3>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{products.map((prod) => (
										<TableRow key={prod.id}>
											<TableCell
												style={{
													display: "flex",
													alignItems: "center",
												}}
											>
												<img
													width={"120px"}
													alt=""
													style={{ margin: "10px" }}
													src={prod.image}
												/>
												{prod.name}
											</TableCell>
											<TableCell align="right">
												{prod.qty}
											</TableCell>
											<TableCell align="right">
												{prod.price}.00$
											</TableCell>
										</TableRow>
									))}
									<TableRow>
										<TableCell rowSpan={1} />
										<TableCell align="right" colSpan={1}>
											<h3>Total</h3>
										</TableCell>
										<TableCell align="right">
											<h3>{totalPrice}.00$</h3>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</div>
					<Button
						className="addToCart"
						variant="outlined"
						onClick={handleSubmitOrder}
					>
						Submit Order
					</Button>
				</>
			) : (
				<>
					<h2>There are no items in your cart!</h2>
					<Button
						className="addToCart"
						variant="outlined"
                        onClick={() => {navigate('/products')}}
					>
						Go to Products Page!
					</Button>
				</>
			)}
		</div>
	);
};

export default Cart;
