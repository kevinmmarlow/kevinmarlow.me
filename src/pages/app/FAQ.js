import React from 'react';

class FAQ extends React.Component {
  state = { question: '', answer: '' };

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  renderCode() {
    if (this.state.question && this.state.answer) {
      return (
        <div style={{ marginTop: '80px' }}>
          <code>{`<!-- START OF TOGGLE -->`}</code>
          <br />
          <code>{`<div class="toggle">`}</code>
          <br />
          <code>{`  <div class="toggle-title">`}</code>
          <br />
          <code>
            {`    <h3><i></i> <span class="title-name">${
              this.state.question
            }</span></h3>`}
          </code>
          <br />
          <code>{`  </div>`}</code>
          <br />
          <code>{`  <div class="toggle-inner">`}</code>
          <br />
          <code>{`    <p>${this.state.answer}</p>`}</code>
          <br />
          <code>{`  </div>`}</code>
          <br />
          <code>{`</div>`}</code>
          <br />
          <code>{`</div>`}</code>
          <br />
          <code>{`<!-- END OF TOGGLE -->`}</code>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ padding: '40px' }}>
        <form style={{ marginBottom: '40px' }}>
          <div className="field" style={{ marginTop: '20px' }}>
            <h2>Question:</h2>
            <input
              type="text"
              value={this.state.question}
              onChange={e => this.setState({ question: e.target.value })}
            />
          </div>
          <div className="field" style={{ marginTop: '20px' }}>
            <h2>Answer:</h2>
            <input
              type="text"
              value={this.state.answer}
              onChange={e => this.setState({ answer: e.target.value })}
            />
          </div>
        </form>
        {this.renderCode()}
      </div>
    );
  }
}

export default FAQ;
