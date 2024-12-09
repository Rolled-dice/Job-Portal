import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="grid-background "></div>
      <main className="min-h-screen px-10 ">
        <Header />

        <Outlet />
      </main>
    
      </div>
    </>
  );
};

export default AppLayout;
