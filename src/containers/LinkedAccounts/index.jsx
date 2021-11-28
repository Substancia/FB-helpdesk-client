import React, { useEffect, useState } from "react";
import { accountService } from "../../services";

const LinkedAccounts = () => {
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    accountService.getAll().then(x => setAccounts(x));
  }, []);

  const accountsRows = accounts && accounts.map(account =>
    <tr key={account.id}>
      <td>{account.id}</td>
      <td>{account.facebookId}</td>
      <td>{account.name}</td>
      <td>{account.extraInfo}</td>
    </tr>
  );

  return (
    <div>
      <h2>All linked accounts:</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Facebook ID</th>
            <th>Name</th>
            <th>Extra Info</th>
          </tr>
        </thead>
        <tbody>
          {accountsRows}
        </tbody>
      </table>
    </div>
  );
}

export default LinkedAccounts;