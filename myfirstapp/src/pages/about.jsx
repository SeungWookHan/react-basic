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
    this.state = {
      username: '',
      email: '',
    };
    this.data = [];
  }

  myChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  doSave = e => {
    e.preventDefault();
    const { username, email } = this.state;
    this.data.push({ name: username, mail: email });
    // console.log(username, email);
    // return { username, email };
    // data.push({ name: username, email: email });
  };

  render() {
    // const data = [
    //   { name: 'A', email: 'a' },
    //   { name: 'B', email: 'b' },
    //   { name: 'C', email: 'c' },
    // ]; // 서버에서 데이터를 가져왔다고 가정
    const rows = this.data.map(row => <Row name={row.name} email={row.mail} />);

    return (
      <div>
        <form onSubmit={this.doSave}>
          <p>Enter yout name:</p>
          <input
            type="text"
            placeholder="이름"
            onChange={this.myChangeHandler}
            name="username"
          />
          <p>Enter yout email:</p>
          <input
            type="text"
            placeholder="이메일"
            onChange={this.myChangeHandler}
            name="email"
          />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            // onClick={this.doSave}
          >
            저장
          </button>
        </form>

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
