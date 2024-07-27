import { FC, ReactElement, useState } from "react";

import IMAGE_DETAIL_DATA from "@/root/public/database/highlight.json";

import ImageDetail from "..";

const Layout: FC = (): ReactElement => {
  const [imageIndex, setImageIndex] = useState(0);
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [openImageDetail, setOpenImageDetail] = useState(false);

  return (
    <div className="h-screen">
      <ImageDetail data={IMAGE_DETAIL_DATA[0]} imageIndex={imageIndex} setImageIndex={setImageIndex} setOpenImageDetail={setOpenImageDetail} />
    </div>
  );
};

export default Layout;
