import { FC, ReactElement } from "react";

import { Button } from "../../interfaces/button";

interface I {
  handleAppend: () => void;
  handleRemove: () => void;
  loading: boolean;
}

export const FormActionButton: FC<I> = (props): ReactElement => (
  <div className="grid grid-cols-2 gap-5 font-semibold">
    <Button color="red" disabled={props.loading} onClick={props.handleAppend} size="sm" type="button" variant="outline">
      Add
    </Button>
    <Button color="red" disabled={props.loading} onClick={props.handleRemove} size="sm" type="button" variant="outline">
      Remove
    </Button>
  </div>
);
