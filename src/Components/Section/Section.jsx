import PropTypes from 'prop-types';
import st from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={st.section}>
    <h2 className={st.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Section;
