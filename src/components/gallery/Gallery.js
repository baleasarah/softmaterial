import * as React from "react";
import "./Gallery.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageListItemBar from '@mui/material/ImageListItemBar';



const Gallery = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <ImageList className="gallery" variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (

          <ImageListItem key={item.img} style={{ width: "80%" }}>
            <img
              className="im-s"
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => navigate('/products')}
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1678680081129-17f2ac502d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Red Skirt",

  },
  {
    img: "https://plus.unsplash.com/premium_photo-1669951867301-4837c140c425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Black Pants",
  },
  {
    img: "https://images.unsplash.com/photo-1676840600219-0ba3f7bccf00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1676578554146-48bb617f2f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1677131619088-81c39aeef242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=695&q=80",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1674822876913-c717477e98eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1632129460818-7e7fb9603a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1672595799874-2d986b6415ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1670513756456-6d51163ff25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1663620523284-5cb362128e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=635&q=80",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1648159284509-75b6743e4e9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1667324847171-23a7db586a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Blinds",
  },
];

export default Gallery;
