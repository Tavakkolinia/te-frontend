import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

const thankyou = props => (
  <div>
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
    >
      <h1>Thank you</h1>
      <DialogActions>
        <Button className="okButton" onClick={props.onClickClose} onSubmit={alert('thank you')} color="primary">
            Ok
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
thankyou.propTypes = {
  onclickClose: PropTypes.func.isRequired,
};

export default thankyou;
