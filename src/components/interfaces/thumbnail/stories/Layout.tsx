import { FC, ReactElement } from "react";

import { Thumbnail } from "..";

type TLayout = {
  setImageIndex: () => void;
  setOpenImageDetail: (param: boolean) => void;
};

const Layout: FC<TLayout> = ({ ...props }): ReactElement => {
  return (
    <Thumbnail
      setImageIndex={props.setImageIndex}
      setOpenImageDetail={props.setOpenImageDetail}
      src="/assets/images/highlight/thumbnail/DZT_CC1.webp"
    />
  );
};

export default Layout;