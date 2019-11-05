import React, {Component} from 'react';
import {Link} from "@reach/router";
import PostAnswer from "./PostAnswer";

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const question = this.props.getQuestion(this.props.id);
        this.state.question = question;
        let content = <p>Please wait</p>;

        if (question) {
            content =
                <React.Fragment>
                    <h1>{question.question}</h1>

                    <h3>Answers to questions:</h3>
                    <ol>
                        {question.answers.map((answer,i) => {
                            return ( <li key={i}>
                                {answer.answer} <br/>Votes: {answer.upVote} &nbsp;
                                <button onClick={() => this.props.postUpvoteAnswerToDB(question._id, answer._id)}>&#8593;</button>
                                <button onClick={() => this.props.postDownvoteAnswerToDB(question._id, answer._id)}>&#8595;</button>
                            <br/><br/></li>)
                        })}
                    </ol>

                    <Link to="/">Go back to questions</Link><br/><br/>
                    <PostAnswer postAnswerToDB = { this.props.postAnswerToDB } getQuestion={id => this.props.getQuestion(id)} questionID = { question._id }/>
                </React.Fragment>
        }
        return content;
    }
}
export default Question;