import Link from 'next/link';
import CustomImage from '@/components/image';
import { Card, CardBody } from '@/components/ui/card';
import Button from "@/components/ui/button"
interface IDashboardCardProps {
  data: any;
  className?: string;
}

const getLink = (data: any) => {
  if (data && data.techno?.name) {
    return `/dashboard?techno=${data.techno.name}&name=${data.slug}`;
  }
  //console.log(data.slug);
  return `/${data.slug}`;
};

export default function DashButton({
 data, className }: IDashboardCardProps) {
  return (
    <>
      <div className={className}>
        <Card>
          <Link href={getLink(data)}>            
              <CustomImage
                src={data.image}
                alt={data.name}
                width={1280}
                height={600}  />
            
          </Link>
          <CardBody>
            <div className="text-center">
              <Link href={'/'}>
                 
                  <Button> {data.name2}</Button> 
               
              </Link>
              hello world
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
