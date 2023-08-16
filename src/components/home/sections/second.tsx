import data from '@/data/data';
import DashButton from '@/components/dashButton';
import DashboardCard from '@/components/dashboardCard';
const HomeSecondSection = () => (
  <section className="mb-16 md:mb-32">
    <h2 className="text-center text-3xl font-bold">
      Clearwater Residential
      <br />
      Appreciates your Help!
    </h2>
    <div className="flex gap-6 flex-wrap mt-12">
      {data.slice(3, 6).map((dash) => (
        <DashButton
          key={dash.id}
          data={dash}
          className="pb-12 lg:w-1/3 xl:w-1/3 md:p-3 md:pb-0 md:w-4/12"
        />
      ))}
       <DashboardCard
        data={data[4]}
        className="w-2/5 h-full"
      />
      <DashboardCard
        data={data[5]}
        className={"w-2/5 h-full"} 
      />
    </div>
  </section>
);

export default HomeSecondSection;
