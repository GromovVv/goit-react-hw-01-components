import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transaction_history/TransactionHistory';

import user from './components/profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friendList/friends.json';
import transactions from './components/transaction_history/transactions.json';

const App = () => {
  return (
    <div className="container">
      <div className="cont-wrapper">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics data={statisticalData}>
            <h3 className="secondary-title">Upload stats</h3>
        </Statistics>

        <FriendList friends={friends} />
      </div>

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
