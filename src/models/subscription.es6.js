import Base from './base';

const _subscriptionAllowedActions = {
  'sub': true,
  'unsub': true,
};

class Subscription extends Base {
  _type = 'Subscription';

  constructor(props) {
    super(props);

    const subscription = this;

    this.validators = {
      'action': function (value) {
        return _subscriptionAllowedActions[value];
      }.bind(subscription),

      'sr': function (value) {
        return Base.validators.string(value);
      }.bind(subscription),
    };
  }
}

export default Subscription;
