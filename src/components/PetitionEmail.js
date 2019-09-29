import React from 'react';
import PropTypes from 'prop-types';

import './PetitionEmail.css';
import { EMAIL_SUBJECT } from '../common/email';
import { getEmailContent, getAddresses } from '../common/email_util';

const REFS = [
  'https://www.irishtimes.com/business/china-has-been-buying-irish-should-we-be-worried-1.3605484',
  'https://www.thetimes.co.uk/article/ucd-professor-raises-concerns-about-chinese-influence-on-campus-nd30tcqvl'
];

export default class PetitionEmail extends React.Component {
  static get propTypes() {
    return {
      tds: PropTypes.array
    };
  }

  toHyperLink(href) {
    return (
      <div className="link" key={href}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {href}
        </a>
      </div>
    );
  }

  render() {
    const tds = this.props.tds || [];
    return (
      <div>
        <div className="email-header">{EMAIL_SUBJECT}</div>
        <div className="email">
          <div className="address">
            <b>To: </b>
            {getAddresses(tds).join(', ')}
          </div>
          <div className="content">{getEmailContent(tds)}</div>
          <div className="reference">
            <div>
              <b>References:</b>
            </div>
            {REFS.map(href => this.toHyperLink(href))}
          </div>
        </div>
      </div>
    );
  }
}
