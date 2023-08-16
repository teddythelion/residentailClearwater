import data from '@/data/data';
import DashboardCard from '@/components/dashboardCard';
export default function about() {
  return (
    <section className="mb-16 mt-32 md:mb-32 justify-center ml-20">
      <h1 className="mt-20  text-center mb-10 mr-20 text-3xl font-bold">
        About Us
        <br /> 
      </h1>
      <DashboardCard data={data[6]} className="w-4/5 ml-20"/>
    </section>
 )}
