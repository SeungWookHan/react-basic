import React from 'react';

class BusinessName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: '한승욱짱' };
  }

  render() {
    // const { brand } = this.props;
    const { brand } = this.state;
    return (
      <div>
        {/* <h1>hello, {brand}</h1> */}
        <h1>hello, {brand}</h1>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <BusinessName />
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
