import Styles from './Statistics.module.scss';
import PropTypes from 'prop-types'

import bgColor from './bgColor';


const Statistics = ({ children, data }) => (
  <section className={Styles.statistics}>
    {children}

    <ul className={Styles.statList}>
      {data.map( ({ id, label, percentage })=> {
        return (
          <li key={id} className={Styles.item} style={{ backgroundColor: bgColor() }}>
            <span className={Styles.label}>{label}</span>
            <span className={Styles.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
