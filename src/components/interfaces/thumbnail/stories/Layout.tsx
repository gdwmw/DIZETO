import { FC, ReactElement } from "react";

import { Thumbnail } from "..";

interface ILayout {
  setImageIndex: () => void;
  setOpenImageDetail: (param: boolean) => void;
}

const Layout: FC<ILayout> = (props): ReactElement => (
  <Thumbnail
    setImageIndex={props.setImageIndex}
    setOpenImageDetail={props.setOpenImageDetail}
    src="/assets/images/highlight/thumbnail/DZT_CC1.webp"
  />
);

export default Layout;
