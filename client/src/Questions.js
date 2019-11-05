import React, {Component} from 'react';
import {Link} from "@reach/router";
import AskQuestion from "./AskQuestion";

class Questions extends Component {

    render() {
        return (
            <React.Fragment>
                <div col-lg-8 p-4>
                <h1>Questions</h1>
                </div>
                <ul>
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
