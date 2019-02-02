const React = require('react');
const ReactDOM = require('react-dom');

class Content extends React.Component {
  prompt = 'Please enter your email to win $1,000,000.';

  submit = () => {
    const emailAddress = this.refs.emailAddress;
    const comments = this.refs.comments;

    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value);
  };

  render() {
    return (
      <div className="well">
        <p>{this.prompt}</p>
        <div className="form-group">
          Email: <input ref="emailAddress" className="form-control" type="text" placeholder="hi@azat.co"/>
        </div>
        <div className="form-group">
          Comments: <textarea ref="comments" className="form-control" placeholder="I like your website!"/>
        </div>
        <div className="form-group">
          <a className="btn btn-primary" value="submit" onClick={this.submit}>Submit</a>
        </div>
      </div>
    )
  }
}

/*class Content extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.prompt = 'Please enter your email to win $1,000,000.';
  }

  submit = () => {
    const emailAddress = this.refs.emailAddress;
    const comments = this.refs.comments;

    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value);
  };

  render() {
    return (
      <div className="well">
        <p>{this.prompt}</p>
        <div className="form-group">
          Email: <input ref="emailAddress" className="form-control" type="text" placeholder="hi@azat.co"/>
        </div>
        <div className="form-group">
          Comments: <textarea ref="comments" className="form-control" placeholder="I like your website!"/>
        </div>
        <div className="form-group">
          <a className="btn btn-primary" value="submit" onClick={this.submit}>Submit</a>
        </div>
      </div>
    )
  }
}*/

module.exports = Content;
