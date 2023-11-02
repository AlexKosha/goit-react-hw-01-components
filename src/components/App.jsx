import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import userData from 'data/user.json';
import dataStatistics from 'data/data.json';
import friends from 'data/friends.json';
import transactionsDate from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" statistics={dataStatistics} />
      <Statistics statistics={dataStatistics} />
      <FriendList friends={friends} />
      <TransactionHistory data={transactionsDate} />
    </div>
  );
};
