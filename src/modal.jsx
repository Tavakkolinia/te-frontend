import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = props => (
  <div>
    {console.log(props)}
    <Button onClick={props.onClickOpen}>Enquire</Button>
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Enquire</DialogTitle>
      <DialogContent>
        <DialogContentText>
            To get more details please fill in the form below
        </DialogContentText>
        <form>
          <input type="text" placeholder="full name" />

          <input Type="email" placeholder="example@yahoo.com" />

          <input Type="tel" pattern="0-9" inputMode="numeric" placeholder="phone number" />
        </form>
        <textarea placeholder="message" />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClickClose} color="primary">
            Cancel
        </Button>
        <Button onClick={props.onClose} color="primary">
            Enquire

        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
FormDialog.propTypes = {
  onClickOpen: PropTypes.func.isRequired,
  onclickClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default FormDialog;
