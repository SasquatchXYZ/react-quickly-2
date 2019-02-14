const React = require('react');
const {connect} = require('react-redux');
const styles = require('./App.css');

class App extends React.Component {
  render() {
    // console.log(`App Loaded`);
    const {children} = this.props;

    return (
      <div className={styles.app}>
        {children}
      </div>
    )
  }
}

module.exports = connect()(App);