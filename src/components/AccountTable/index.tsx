import React from "react";
import Table from "./table";
import { Account, AccountHttpResponse } from "@/types/Account";

/**
 * @notes Move Table to a client only component.
 */

const columns: {
  key: string;
  label: string;
}[] = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "PK",
    label: "ID",
  },
  {
    key: "currency",
    label: "CURRENCY"
  },
  {
    key: "take",
    label: "TAKE"
  },
  {
    key: "instantPayoutEnabled",
    label: "INSTANT PAYOUT ENABLED"
  },
  {
    key: "stripeID",
    label: "Stripe ID"
  },
  {
    key: "edit",
    label: "EDIT"
  }
];

interface AccountTableProps {accounts: any};

const AccountTable = (props: AccountTableProps): React.ReactElement => {

  return (
    <>
      <Table 
        heading="User Acounts" 
        accounts={props.accounts}
      />
    </>
  );
}

export default AccountTable;