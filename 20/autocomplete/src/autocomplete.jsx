const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

const fD = ReactDOM.findDOMNode;

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: this.props.options,
      filteredOptions: this.props.options,
      currentOption: ''
    };

    this.filter = this.filter.bind(this);
    this.addOption = this.addOption.bind(this)
  }

  componentDidMount() {
    if (this.props.url === 'test') return true;
    axios({url: this.props.url})
      .then(res => res.data)
      .then(body => {
        if (!body) {
          return console.error('Failed to Load')
        }
        this.setState({options: body})
      })
      .catch(console.err)
  }

  filter(event) {
    // console.log(event);
    this.setState({
      currentOption: event.target.value,
      filteredOptions: (this.state.options.filter((option, index, list) => {
        return (event.target.value === option.name.substr(0, event.target.value.length))
      }))
    }, function () {

    })
  }

  addOption(event) {
    let currentOption = this.state.currentOption;
    axios
      .post(this.props.url, {name: currentOption})
      .then(res => res.data)
      .then(body => {
        if (!body) {
          return console.error('Failed to Save')
        }
        this.setState({
          options: [body].concat(this.state.options)
        }, () => {
          console.log(this.state.options);
          this.filter({target: {value: currentOption}})
        })
      })
      .catch(err => console.error('Failed to Save'))
  }

  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          onKeyUp={event => (event.keyCode === 13 ? this.addOption() : '')}
          className="form-control option-name"
          onChange={this.filter}
          value={this.currentOption}
          placeholder="React.js"
        >
        </input>
        {this.state.filteredOptions.map(option => (
          <div key={option._id}>
            <a className="btn btn-default option-list-item"
               href={`/#/${option.name}`}
               target="_blank"
               rel="noreferrer noopener"
            >
              #{option.name}
            </a>
          </div>
        ))}
        {(() => {
          if (this.state.filteredOptions.length === 0 && this.state.currentOption !== '')
            return <a className="btn btn-info option-add" onClick={this.addOption}>
              Add #{this.state.currentOption}
            </a>
        })()}
      </div>
    )
  }
}

module.exports = Autocomplete;