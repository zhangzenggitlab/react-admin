import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import BaseLayout from "@/layout/BaseLayout";

function Home() {

  
  return (
    <BaseLayout>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </BaseLayout>
  );
}

export default Home;
