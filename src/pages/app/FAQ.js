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

  renderCode2() {
    if (this.state.question && this.state.answer) {
      return (
        <pre>{`
            <!-- START OF TOGGLE -->
            <div class="toggle">
                <div class="toggle-title">
                    <h3><i></i> <span class="title-name">${
                      this.state.question
                    }</span></h3>
                </div>
                    <div class="toggle-inner">
                    <p>${this.state.answer}</p>
                    </div>
                </div>
            </div>
            <!-- END OF TOGGLE -->
        `}</pre>
      );
    }
  }

  // handleAnswer(e) {
  //   {
  //     this.props.text.split('\n').map((item, key) => {
  //       return (
  //         <span key={key}>
  //           {item}
  //           <br />
  //         </span>
  //       );
  //     });
  //   }
  // }

  render() {
    return (
      <div
        style={{
          padding: '40px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%',
            flex: 1
          }}
        >
          <form style={{ marginBottom: '40px' }}>
            <div className="field" style={{ marginTop: '20px' }}>
              <h2>Question:</h2>
              <textarea
                style={{ resize: 'none' }}
                value={this.state.question}
                cols={80}
                rows={5}
                onChange={e => this.setState({ question: e.target.value })}
              />
            </div>
            <div className="field" style={{ marginTop: '20px' }}>
              <h2>Answer:</h2>
              <textarea
                value={this.state.answer}
                style={{ resize: 'none' }}
                onChange={e => this.setState({ answer: e.target.value })}
                cols={80}
                rows={20}
              />
            </div>
          </form>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%',
            flex: 1
          }}
        >
          {this.renderCode2()}
        </div>
      </div>
    );
  }
}

export default FAQ;
