import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  render() {
    const { props } = this;
    return (<div>
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
            <input type="name" placeholder="full name" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} />
            <input type="email" placeholder="example@yahoo.com" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} />
            <input type="tel" pattern="0-9" inputMode="numeric" placeholder="phone number" value={this.state.phone} onChange={event => this.setState({ phone: event.target.value })} />
          </form>
          <textarea placeholder="message" />
        </DialogContent>
        <DialogActions>

          <button onClick={props.onClickClose} color="primary">
              Cancel
          </button>
          <button type="button" className="search" onClick={() => props.onSubmitEnquiry(this.state)} color="primary">
              Enquire
          </button>
        </DialogActions>
      </Dialog>
    </div>);
  }
}

FormDialog.propTypes = {
  onClickOpen: PropTypes.func.isRequired,
  onclickClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default FormDialog;
