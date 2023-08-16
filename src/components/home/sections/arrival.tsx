import data from '@/data/data';
import DashboardCard from '@/components/dashboardCard';
//const data1= data[8];
//console.log("data");
//console.log(data);
const HomeArrivalSection = () => (
  <section className="mb-16 mt-44 md:mb-32">
    <h2 className="text-center text-3xl font-bold">
      Clearwater Residential
      <br />
      Is transforming lives.
    </h2>
    <div className="flex flex-row gap-4 justify-left mt-12">
      <DashboardCard
        data={data[8]}
        className="pb-12 w-6/12 md:p-3 md:w-3/4 xsm:w-1/2 md:pb-0 md:w-6/12"
      />
      <DashboardCard
        data={data[9]}
        className="pb-12 w-6/12 md:p-3 md:w-3/4 xsm:w-1/2 md:pb-0 md:w-6/12"
      />
    </div>
  </section>
);

export default HomeArrivalSection;
