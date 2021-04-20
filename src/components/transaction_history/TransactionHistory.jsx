import Styles from './TransactionHistory.module.scss';
import PropTypes from 'prop-types'

const TransactionHistory = ({ items }) => (
  <table className={Styles.history}>
    <thead className={Styles.tabel}>
      <tr className={Styles.headColums}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={Styles.tabel}>
        {items.map(({ id, type, amount, currency }) => (
            <tr className={Styles.colums} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      
    </tbody>
  </table>
);

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    }),
  ).isRequired,
};
