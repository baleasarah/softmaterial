import { Button } from "@mui/material";
import "./LogIn.css";

import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setUser }) => {
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
		navigate("/");
	};

	return (
		<div className="logInContainer">
			<div className="logIn">
				<h3 style={{ textAlign: "center" }}>Login to you Account</h3>
				<p
					style={{
						width: "60%",
						margin: "0 auto",
						textAlign: "center",
					}}
				>
					Get Started with our application, Log In or create an
					account and enjoy the experience
				</p>
				<div className="formContainer">
					<TextField
						className="loginInput"
						id="name-basic"
						label="email"
						variant="filled"
					/>
					<TextField
						className="loginInput"
						type="password"
						id="password-basic"
						label="password"
						variant="filled"
					/>
					<div>
						<Button className="logInBtn" variant="outlined">
							{" "}
							Log In{" "}
						</Button>
						<Button
							className="logInBtn"
							variant="outlined"
							onClick={signInWithGoogle}
						>
							<GoogleIcon style={{ marginRight: "10px" }} /> Login
							With Google
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
