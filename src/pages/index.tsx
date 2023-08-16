import Head from 'next/head';
import data from '@/data/data';
import Container from '@/components/container';
import HomeFirstSection from '@/components/home/sections/first';
//import HomeSecondSection from '@/components/home/sections/second';
import HomeThirdSection from '@/components/home/sections/third';
import HomeFourthSection from '@/components/home/sections/fourth';
import HomeFifthSection from '@/components/home/sections/fifth';
import HomeArrivalSection from '@/components/home/sections/arrival';
import Link from 'next/link';
import Button from "@/components/ui/button"
/* eslint-disable */

export default function HomePage() {
  console.log("tadatra");
  console.log(data[4]['slug']);
  return (
    <>
      <Head>
        <title>Clearwater Residential Transformational Living</title>
        <meta
          name="title"
          content="Clearwater Residential Transformational Living"
        />
        <meta
          name="description"
          content="Clearwater Residential Transformational Living for our veterans, seniors, and homeless. It's free. Explore and enjoy the experience."
        />
        <link rel="canonical" href="Clearwater Residential" />
      </Head>
      <Container>
        <HomeFirstSection />
        <HomeArrivalSection />
        <HomeThirdSection/>
        
        <HomeFourthSection 
        data1={data[3]}       
        data2={data[4]} 
         />
        <Link href={data[4]['slug']}>        
          <Button className= "relative 2xl:left-96 2xl:ml-20 xl:left-96 lg:left-64 md:left-40 md:ml-20 sm:left-24 sm:ml-24 xsm:left-24 xsm:ml-20 h-65 w-52 mb-7 ml-10">
            DONATE
          </Button>        
      </Link>
        <HomeFourthSection 
        data1={data[5]} 
        data2={data[7]} 
         />       
        < HomeFifthSection />       
      </Container>
    </>
  ); 
}
