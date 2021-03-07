import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Modal({ open, children, title }) {
  return (
    <Dialog open={open} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
