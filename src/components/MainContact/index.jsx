import React from 'react';
import cn from 'classnames';
import { charityAPI } from '../../clients';
export default class MainContact extends React.Component {
  state = { contacts: [] };
  componentDidMount() {
    charityAPI({
      url: '/main-contacts'
    }).then(({ data: contacts }) => {
      this.setState({ contacts });
    });
  }
  render() {
    return (
      <div className="contact-info flex items-center justify-end">
        {this.state.contacts.map(
          ({ _id, title, sub_title, icon: { url } }, index) => {
            const isLast = index === this.state.contacts.length - 1;

            return (
              <div
                className={cn('flex items-center px-10', {
                  'border-right-header': !isLast,
                  'pr-0': isLast
                })}
                key={_id}
              >
                <div className="icon items-center text-c500">
                  <img className="pr-4 w-10" src={url} alt={title} />
                </div>
                <div className="text text-sm">
                  <p className="font-bold text-c100">{title}</p>
                  <small className="text-c600">{sub_title}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    );
  }
}
