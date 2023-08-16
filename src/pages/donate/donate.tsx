import data from '@/data/data';
import DashboardCard from '@/components/dashboardCard';
import ExternalLink from '@/components/externalLink';
const Donate = () => (
  <section className="mb-16 mt-44 md:mb-32">
    <h2 className="text-center text-3xl font-bold">
    Click the image below 
    <br /> to make a donation. </h2>
    <div 
      className="flex flex-row relative md:left-36 lg:left-36 xl:left-48 2xl:left-52 mt-12"
    >      
        <ExternalLink href={'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XU984XMBUBKBJ'}>    
         <DashboardCard
          data={data[11]}
          className="pb-12 w-3/4 md:p-3 md:w-3/4 xsm:w-1/2 md:pb-0"
          />        
        </ExternalLink>
    </div>
    </section>
); 
export default Donate;
