import { useRef, useEffect, useState } from 'react';
import { XRPL } from 'xrpl.js';

function TransactionList({ address }) {
  const [transactions, setTransactions] = useState([]);
  const apiRef = useRef(null);

  useEffect(() => {
    if(!apiRef.current){
        apiRef.current =new XRPL({
            server: 'wss://s.altnet.rippletest.net:51233',
        });
    }
    apiRef.current.connect().then(() => {
        return apiRef.current.getTransactions(address);
    }).then(txns => {
        setTransactions(txns);
    }).catch(console.error);
  }, [address]);



  return (
    <div>
      <h1>Transactions</h1>
      {transactions.map((transaction) => (
        <div key={transaction.hash}>
          <p>Transaction Hash: {transaction.hash}</p>
          <p>Amount: {transaction.outcome.deliveredAmount.value}</p>
          <p>Timestamp: {transaction.outcome.timestamp}</p>
</div>
))}
</div>
);
}

export default TransactionList;




