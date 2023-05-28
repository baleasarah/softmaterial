import { Button } from "@mui/material";
import "./Register.css";

import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ user, setUser }) => {
	useEffect(() => {
		setUser(localStorage.getItem("user"));
	}, []);

	const navigate = useNavigate();

	const signInWithGoogle = async () => {
		const res = await signInWithGooglePopup();

		const userObj = {
			displayName: res.user.displayName,
			email: res.user.email,
			id: res.user.uid,
		};
		setUser(userObj);

		localStorage.setItem("user", JSON.stringify(userObj));
        navigate("/")
	};

	return (
		<>
			{!user ? (
				<div className="registerContainer">
					<div className="register">
						<h3 style={{ textAlign: "center" }}>Register</h3>
						<p
							style={{
								width: "60%",
								margin: "0 auto",
								textAlign: "center",
							}}
						>
							Get Started with our application, Log In or create
							an account and enjoy the experience
						</p>
						<div className="formContainer">
							<TextField
								className="registerInput"
								id="name-basic"
								label="email"
								variant="filled"
							/>
							<TextField
								className="registerInput"
								type="password"
								id="password-basic"
								label="password"
								variant="filled"
							/>
							<TextField
								className="registerInput"
								type="password"
								id="password-confirm-basic"
								label="password"
								variant="filled"
							/>
							<div className="registerButttons">
								<Button
									className="registerBtn"
									variant="outlined"
								>
									{" "}
									Register{" "}
								</Button>
								<Button
									className="registerBtn"
									variant="outlined"
									onClick={signInWithGoogle}
								>
									{" "}
									<GoogleIcon
										style={{ marginRight: "10px" }}
									/>{" "}
									Register with Google{" "}
								</Button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div
					style={{
						width: "100%",
						background: "#fff",
						padding: "40px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<h2 style={{ width: "50%", textAlign: "center" }}>
						{" "}
						User Logged In succesfully!
					</h2>
					<Button
						className="registerBtn"
						variant="outlined"
						onClick={() => {
							navigate("/");
						}}
					>
						Continue Shopping
					</Button>
				</div>
			)}
		</>
	);
};

export default Register;
