import React, { Component } from "react";

export default class Accordion extends Component {
  static defaultProps = { sections: [] };
  constructor(props) {
    super(props);
    this.state = {
      currentAccordion: null,
    };
  }

  handleClick = i => {
    this.setState({ currentAccordion: i });
  };

  renderContent(section, i, currentAccordion) {
    return (
      <li key={i}>
        <button type="button" onClick={() => this.handleClick(i)}>
          {section.title}
        </button>
        {currentAccordion === i && <p>{section.content}</p>}
      </li>
    );
  }

  displayContent() {
    const { sections } = this.props;
    const { currentAccordion } = this.state;
    return sections.map((section, i) =>
      this.renderContent(section, i, currentAccordion)
    );
  }
  render() {
    return (
      <>
        <ul>{this.displayContent()}</ul>
      </>
    );
  }
}
