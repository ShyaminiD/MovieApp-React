import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

export function Favorite() {
  //var like = 0;
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div>
      {/* Using badge inside button*/}
      <IconButton
        onClick={() => setLike(like + 1)}
        aria-label="like button"
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      {/* Using only badge*/}
      <Badge
        badgeContent={dislike}
        color="primary"
        onClick={() => setdisLike(dislike + 1)}
      >
        👎
      </Badge>
    </div>
  );
}
