import userData from 'user.json';
import dataStatistics from 'data.json';
import friends from 'friends.json';
import transactionsDate from 'transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

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
      <Statistics statistics={dataStatistics} />
      <FriendList friends={friends} />
      <TransactionHistory data={transactionsDate} />
    </div>
  );
};
