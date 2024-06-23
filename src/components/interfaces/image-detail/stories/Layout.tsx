import { FC, ReactElement, useState } from "react";

import ImageDetail, { TImageDetail } from "..";

const IMAGE_DETAIL_DATA = {
  copyright: "© 2022 DIZETO. All rights reserved.",
  imageFile: [
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC1.webp",
    },
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC2.webp",
    },
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC3.webp",
    },
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC4.webp",
    },
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC5.webp",
    },
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC6.webp",
    },
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC7.webp",
    },
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC8.webp",
    },
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC9.webp",
    },
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC10.webp",
    },
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC11.webp",
    },
    {
      imgUrl: "https://dizeto-images.vercel.app/assets/images/highlight/DZT_CC12.webp",
    },
  ],
};

const Layout: FC<TImageDetail> = ({ ...props }): ReactElement => {
  const [imageIndex, setImageIndex] = useState(0);
  const [openImageDetail, setOpenImageDetail] = useState(false);

  return (
    <div className="h-screen">
      <ImageDetail data={IMAGE_DETAIL_DATA} imageIndex={imageIndex} setImageIndex={setImageIndex} setOpenImageDetail={setOpenImageDetail} />
    </div>
  );
};

export default Layout;
