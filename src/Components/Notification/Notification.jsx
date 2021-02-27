import PropTypes from 'prop-types';
const Notification = ({ massage }) => <p>{massage}</p>;
Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};
export default Notification;
