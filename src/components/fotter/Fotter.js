import * as React from "react";
import "./Fotter.css";
import Box from "@mui/material/Box";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Fotter = () => {
  return (
    <Box className="box-f" sx={{ flexGrow: 2 }}>
      <Box
        display="flex"
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Box className="Box" xs={4} md={3}>
          <h2>Contact Us</h2>
          Phone: 0749417964
          <br />
          Email: soft.material@gmail.com
        </Box>
        <Box xs={4} md={3}>
          <h2>Location</h2>
          Street: Long street
          <br />
          Number: 17
        </Box>
        <Box xs={4}>
          <h2>About Us</h2>
          Some Information about Our Company
          <br />
          <IconButton>
            <FacebookRoundedIcon className="socialIcon" />
          </IconButton>
          <IconButton>
            <YouTubeIcon className="socialIcon" />
          </IconButton>
          <IconButton>
            <InstagramIcon className="socialIcon" />
          </IconButton>
          <IconButton>
            <TwitterIcon className="socialIcon" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Fotter;
