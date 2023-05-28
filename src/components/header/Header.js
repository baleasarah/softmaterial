import "./Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const pages = ["Products", "Favorites"];

function Header({ user, setUser }) {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const navigate = useNavigate();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogInClick = () => {
		navigate("login");
	};

	const handleRegisterClick = () => {
		navigate("register");
	};

	const handleLogout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("favorites");
		setUser(null);
	};

	return (
		<AppBar position="static" className="nav-bar">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontWeight: 700,
							letterSpacing: ".3rem",
							fontFamily: "Segoe Script",
							color: "black",
							textDecoration: "none",
						}}
					>
						SM
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="green"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page, idx) => (
								<MenuItem
									key={idx}
									onClick={handleCloseNavMenu}
								>
									<Link className="navLink" to={`/${page}`}>
										<Typography textAlign="center">
											{page}
										</Typography>
									</Link>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
					>
						{pages.map((page, idx) => (
							<Link key={idx} className="navLink" to={`/${page}`}>
								<Button
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "white",
										display: "block",
									}}
								>
									{page}
								</Button>
							</Link>
						))}
					</Box>

					<Box className="headerActions" sx={{ flexGrow: 0 }}>
						<IconButton
							aria-label="add to shopping cart"
							onClick={() => navigate("/cart")}
						>
							<ShoppingCartIcon className="cartIcon" />
						</IconButton>
						{user ? (
							<>
								<Tooltip title="Open settings">
									<IconButton
										onClick={handleOpenUserMenu}
										sx={{ p: 0 }}
									>
										<Avatar
											alt="Balea Sarah"
											src="C:\Users\Miron Sarah\Desktop\facultate random stuff\softmaterial\img"
										/>
									</IconButton>
								</Tooltip>
								<Menu
									sx={{ mt: "45px" }}
									id="menu-appbar"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									<MenuItem
										key="Profile"
										onClick={handleCloseUserMenu}
									>
										<Typography textAlign="center">
											Profile
										</Typography>
									</MenuItem>
									<MenuItem
										key="Logout"
										onClick={() => {
											handleCloseUserMenu();
											handleLogout();
										}}
									>
										<Typography textAlign="center">
											Logout
										</Typography>
									</MenuItem>
								</Menu>
							</>
						) : (
							<>
								<Button
									className="logInBtn"
									variant="outlined"
									onClick={handleLogInClick}
								>
									Log In
								</Button>
								<Button
									className="logInBtn"
									variant="outlined"
									onClick={handleRegisterClick}
								>
									Register
								</Button>
							</>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Header;
