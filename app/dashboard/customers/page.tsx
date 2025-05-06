import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { fetchFilteredCustomers } from '@/app/lib/data';
export const metadata: Metadata = {
    title: "Customer",
    description: "Customer page",
};

export default async function Page(props: {
    searchParams?: Promise<{
      query?: string;
      page?: string;
    }>;
  }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';

    const customers = await fetchFilteredCustomers(query);
    return (
        <main>
        <CustomersTable customers={customers} />
      </main>
    );
}  