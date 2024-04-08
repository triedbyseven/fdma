import { Divider, Spacer, Card } from "@nextui-org/react";
import AccountTable from "@/components/AccountTable";
import UserForm from "@/components/UserForm";
import styles from "./page.module.css"
import EmployeeTable from "@/components/EmployeeTable";
import { Suspense } from "react";
import Loading from "@/components/AccountTable/loading";
import { AccountHttpResponse } from "@/types/Account";
import { EmployeeHttpResponse } from "@/types/Employee";

interface HomeProps {

};

// const getData = async <T,>(): Promise<T> => {
//   // await new Promise(resolve => setTimeout(resolve, 30000));

//   const res = await fetch(`http://localhost:3000/api`, {
//     method: "GET",
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   });

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     // throw new Error('Failed to fetch data');
//   };

//   return res.json() as Promise<T>;
// };

// const getEmployeeData = async <T,>(): Promise<T> => {
//   const res = await fetch("http://localhost:3000/api/employee", {
//     method: "GET",
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   });

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     // throw new Error('Failed to fetch data');
//   };

//   return res.json() as Promise<T>;
// };

const Home: React.FC<HomeProps> = async (): Promise<React.ReactElement> => {
  // const { accounts } = await getData<AccountHttpResponse>();
  // const { employees } = await getEmployeeData<EmployeeHttpResponse>();

  return (
    <div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50"
            shadow="sm"
            style={{ padding: "12px 12px 12px 12px", width: "100%" }}
          > 
            <h3>User Accounts</h3>
            <p className="text-small text-default-500">List of user customer accounts.</p>
            <Spacer y={4} />
            {/* <Suspense fallback={<Loading />}>
              <AccountTable />
            </Suspense> */}
            {/* <Spacer y={6} /> */}
            {/* <UserForm heading={"CREATE NEW USER"} /> */}
          </Card>
          {/* <Spacer y={10} /> */}
          {/* <Divider /> */}
          {/* <Spacer y={4} /> */}
          {/* <EmployeeTable accounts={accounts} employees={employees} /> */}
        </div>
      </div> 
    </div>
  );
};

export default Home;