const [React, {Component}] = require('react');
const {Link} = require('react-router');

class Content extends Component {
  render() {
    return (
      <div>
        <h1>Node.University</h1>
        <div className="navbar navbar-default">
          <ul className="nav nav-pills navbar-nav">
            <li className={(this.context.router.isActive('/about')) ? 'active' : ''}>
              <Link to="/about" activeClassName="active">
                About
              </Link>
            </li>
            <li className={(this.context.router.isActive('/posts')) ? 'active' : ''}>
              <Link to="/posts" activeClassName="active">
                Blog
              </Link>
            </li>
            <li className={(this.context.router.isActive('/contact')) ? 'active' : ''}>
              <Link to="/contact" activeClassName="active">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" activeClassName="active">
                About
              </Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

Content.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = Content;