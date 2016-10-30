import React, {Component, PropTypes} from 'react'
import { Card, CardText, TextField, RaisedButton } from 'material-ui';

class ContactForm extends Component {
    render() {
        return (
            <Card>
                <CardText>
                    <form>
                        <TextField name="fullName" floatingLabelText="Full Name" fullWidth/>
                        <TextField name="email" floatingLabelText="Email" fullWidth/>
                        <TextField name="subject" floatingLabelText="Subject" fullWidth/>
                        <TextField name="message" floatingLabelText="Message" multiLine fullWidth/>
                    </form>
                    <RaisedButton type="submit" primary style={{ float: "right" }}>
                        Submit
                    </RaisedButton>
                </CardText>
            </Card>
        );
    }
}

export default ContactForm;