import React from 'react';

class Row extends React.Component {
  render() {
    const { name, email } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
    );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  myChangeHandler = evt => {
    this.setState({ username: evt.target.value });
  };

  doSave = () => {
    const { username } = this.state;
    alert(username);
  };

  render() {
    const data = [
      { name: 'A', email: 'a' },
      { name: 'B', email: 'b' },
      { name: 'C', email: 'c' },
    ]; // 서버에서 데이터를 가져왔다고 가정
    const rows = data.map(row => <Row name={row.name} email={row.email} />);

    return (
      <div>
        <p>Enter yout name:</p>
        <input type="text" onChange={this.myChangeHandler} />
        <button type="button" className="btn btn-primary" onClick={this.doSave}>
          저장
        </button>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
export default About;
