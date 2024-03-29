import React, {Component} from 'react';

export default class postAnswer extends Component {

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
        this.props.postAnswerToDB(this.state.input, this.props.questionID);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group" style={{ marginBottom: '10px' }}>
                            <label htmlFor="itemText">Leave an answer:</label><br/>
                            <input type="text" className="form-control" id="itemText"
                                   onChange={(event) => this.handleChange(event)}
                            />
                            <small className="form-text text-muted">
                            </small>
                        </div>
                        <button onClick={(event) => this.handleButtonClick(event)}
                                type="submit" id="submitItemBtn" className="btn btn-primary">Confirm
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}


