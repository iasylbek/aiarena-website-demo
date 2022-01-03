import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { alignProperty } from "@mui/material/styles/cssUtils";
import Box from "@mui/material/Box";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ImageList
        sx={{ maxWidth: 900, minWidth: 400 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://docs.aiarena.io/static/media/fighter-successful-punch.31f35788.png",
    title: "Punching",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://docs.aiarena.io/static/media/fighter-running.c3ef6c70.png",
    title: "Running",
  },
  {
    img: "https://ipfs.fleek.co/ipfs/QmWHLz6D9qiUkvX6SQtbzVZSR9kUrHdoQYamRzYDRRCo1F/icons/bronze/hands-bronze.png",
    title: "Hand",
  },
  {
    img: "https://docs.aiarena.io/static/media/fighter-successful-block.9c1d86b3.png",
    title: "Blocking",
    cols: 2,
  },
  {
    img: "https://aiarena.io/static/media/robot-head.2e47c4d2.svg",
    title: "Skull",
    cols: 2,
  },
  {
    img: "https://aiarena.io/static/media/neural-money.86824aea.svg",
    title: "IP Monetization",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://ipfs.fleek.co/ipfs/QmWHLz6D9qiUkvX6SQtbzVZSR9kUrHdoQYamRzYDRRCo1F/hands/rightHand-4.svg",
    title: "Fist",
  },
  {
    img: "https://ipfs.fleek.co/ipfs/QmWHLz6D9qiUkvX6SQtbzVZSR9kUrHdoQYamRzYDRRCo1F/body/body-9.svg",
    title: "Body",
  },
];
