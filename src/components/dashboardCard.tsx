import Link from 'next/link';
import CustomImage from '@/components/image';
import { Card, CardBody, CardTitle } from '@/components/ui/card';
interface IDashboardCardProps {
  data: any;
  className?: string;
}
const getLink = (data: any) => {
  console.log("data"); 
  console.log(data);
  if (data.cls === 'gap0') {
    return `${data.slug}`;
  } else {
    return `/${data.slug}`;
  }
};
export default function DashboardCard({
  data,
  className,
}: IDashboardCardProps) {
  return (
    <>
      <div className={className}>
        <Card>
          <Link href={getLink(data)}>            
              <CustomImage
                src={data.image}
                alt={data.name2}
                width={1280}
                height={600}
                className ={data.cls}
              />            
          </Link>
          <CardBody>
            <div className="text-center">
              <CardTitle>{data.name2}</CardTitle>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
