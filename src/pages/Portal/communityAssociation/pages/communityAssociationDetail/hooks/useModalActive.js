import { useState } from "react";

export const useModalActive = () => {
  const [open, setOpen] = useState(false);
  const changeOpen = () => setOpen((prev) => !prev);

  return { open, changeOpen };
};
