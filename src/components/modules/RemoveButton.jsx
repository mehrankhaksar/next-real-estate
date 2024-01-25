import { Button } from "../ui/button";

import { Trash } from "lucide-react";

import { SpinnerLoader } from "./Loaders";

const RemoveButton = ({ containerStyles, loading, handleRemove }) => {
  return (
    <Button
      className={`w-8 h-8 absolute p-1.5 rounded-full ${containerStyles}`}
      variant="destructive"
      type="button"
      disabled={loading}
      onClick={handleRemove}
    >
      {loading ? (
        <SpinnerLoader color="border-t-destructive" />
      ) : (
        <Trash size={15} />
      )}
    </Button>
  );
};

export default RemoveButton;
