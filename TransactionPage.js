import { useEffect } from 'react';
import TransactionList from 'components/TransactionList.js'
function TransactionPage({ address }) {
  useEffect(() => {
    // Re-render the component only when the address prop changes
    // do not put any code here
  }, [address]);

  return (
    <div>
      <TransactionList />
    </div>
  );
}

export default TransactionPage;


