import React from 'react';
import cn from 'classnames';
import { charityAPI } from '../../clients';
import './styles.scss';

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
                className={cn('flex items-center px-5 lg:px-10', {
                  'border-right-header': !isLast,
                  'pr-0': isLast
                })}
                key={_id}
              >
                <div className="icon items-center text-c500 w-8 lg:w-10">
                  <img className="pr-4 w-full" src={url} alt={title} />
                </div>
                <div className="text text-xxs lg:text-sm">
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
