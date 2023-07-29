"use client";
import { ReactNode } from "react";
import { Navbar, PanelNavigation } from "@components/dashboard";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";

function VendorDashboardLayout({ children }: { children: ReactNode }) {
  const { data, refetch, isFetching } = useGetControllerInfoQuery();
  return (
    <div className="flex">
      <PanelNavigation />
      <main className="w-full px-5">
        {data && (
          <Navbar isLoading={isFetching} refetch={refetch} details={data} />
        )}
        {children}
      </main>
    </div>
  );
}

export default VendorDashboardLayout;
