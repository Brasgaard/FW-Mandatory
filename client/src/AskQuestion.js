import React, {Component} from 'react';

export default class askQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ""
        };
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleButtonClick(event) {
        event.preventDefault();
        this.props.postQuestionToDB(this.state.input);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group" style={{ textAlign: 'center' }}>
                            <label htmlFor="itemText">Ask question here:</label><br/>
                            <input type="text" className="form-control" id="itemText"
                                   onChange={(event) => this.handleChange(event)}
                            />
                            <small className="form-text text-muted">
                            </small>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                        <button onClick={(event) => this.handleButtonClick(event)}
                                type="submit" id="submitItemBtn" className="btn btn-primary">Confirm
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


