import React, {Component} from 'react';
import {Link} from "@reach/router";
import AskQuestion from "./AskQuestion";

class Questions extends Component {

    render() {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: 'center' }}>Questions</h1>
                <ul style={{ textAlign: 'center' }}>
                    {this.props.questions.map(question =>
                        <li key={question._id}>
                            <Link to={`/question/${question._id}`}>{question.question}</Link>
                        </li>)}
                </ul>
                <AskQuestion postQuestionToDB={this.props.postQuestionToDB}/>
            </React.Fragment>
        );
    }
}

export default Questions;
