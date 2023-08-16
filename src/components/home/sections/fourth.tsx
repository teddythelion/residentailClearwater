import CustomImage from '@/components/image';
interface ImageProps {
  className?: string;
  alt: string;
  src: string | any;
  width?: number;
  height?: number;  
}
interface IDashboardCardProps {
  data1: any;
  data2: any;
}
const getLink = (data: any) => {
  if (data && data.techno?.name) {
    return `/dashboard?techno=${data.techno.name}&name=${data.slug}`;
  }
  return `/${data.slug}`;
};

/* eslint-disable */
export default function HomeFourthSection({
  data1, data2,
}: IDashboardCardProps ) {
 
  return (
    <section className="mb-16 md:mb-32">
      <h2 className=" mr-16 text-center text-3xl font-bold">
        {data1.name2}
      </h2>
      <div className="flex items-center justify-center mt-12">     

        <div className="mx-2 md:mx-12">
          <span className="flex justify-center text-2xl font-bold"></span>
          <span className="block mt-4 text-sm">{data1.name}</span>
        </div>
        
      </div>
      <div className="flex flex-row w-full mt-8 gap-10 ">        
        <CustomImage 
          className ={data1.cls}
          src={data1.image}
          alt={data1.slug}
          width={670}
          height={450}         
          />                
          <CustomImage 
          className ={data2.cls}
          src={data2.image}
          alt={data2.slug}
          width={650}
          height={450}           
          />       
      </div>
    </section>
  );
}
