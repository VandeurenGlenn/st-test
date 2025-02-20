import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import * as commonmark from 'commonmark';

export class StTest extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--st-test-text-color, #000);
    }
  `;

  private _reader = new commonmark.Parser();

  private _writer = new commonmark.HtmlRenderer({ safe: true });

  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <h3>markdown:</h3>
      <div>${this._writer.render(this._reader.parse('*Hello*'))}</div>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
