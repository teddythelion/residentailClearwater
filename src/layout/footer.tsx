import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/container';
import ExternalLink from '@/components/externalLink';
/* eslint-disable */
export default function Footer() {
  return (
    <footer className="relative bottom-0 inset-x-0 right-0">
      <Container >
        <div className="sm:left-3 xsm:left-6 relative left-28 lg:left-10 lg:left-10 flex flex-wrap gap-10  md:w-5/6">
          <div></div>
          <div className="content-center">
            <h3 className="text-4xl  md:w-5/6 md:flex-wrap xsm:w-full md:left-24 xsm:left-4 xsm:ml-0 relative md:left-0 lg:left-10 xl:left-36 2xl:left-36 font-bold">Thank You to Our Amazing Partners</h3>


            
             
            
            <ul className="flex flex-row xl:flex flex-row flex-wrap lg:flex flex-row flex-wrap md:flex-wrap  sm:flex flex-wrap xsm:flex xsm:flex-col xsm:w-full  mt-5 ">
              <li className="pb-3">
                <ExternalLink href="https://www.cmfa-ca.com/">
                <Image
                    width={300}
                    height={200}
                    src="/svg/ca.svg"
                    alt="ca municipal finance company"
                  />
                </ExternalLink>
              </li>
              <li className="pb-3">
                <ExternalLink href="https://bedbathandbeyond.com">
                  <Image
                    width={300}
                    height={200}
                    src="/svg/vue.svg"
                    alt="bedbathandbeyond"
                  />
                </ExternalLink>
              </li>
              <li className="pb-3">
                <ExternalLink href="http://www.annaslinens.com/">
                <Image
                     width={300}
                     height={200}
                    src="/svg/annas.svg"
                    alt="Powered By Vercel"
                  />
                </ExternalLink>
              </li>
            </ul>
            <ul className="flex flex-row xl:flex flex-row flex-wrap lg:flex flex-row flex-wrap md:flex-wrap  sm:flex flex-wrap xsm:flex xsm:flex-col xsm:w-full  mt-5 ">
              <li className="pb-3">
                <ExternalLink href="https://annenberg.org/">
                <Image
                     width={300}
                     height={200}
                    src="/svg/vercel.svg"
                    alt="Powered By Vercel"
                  />
                </ExternalLink>
              </li>
              <li className="pb-3">
                <ExternalLink href="https://www.walmart.com/">
                <Image
                     width={300}
                     height={200}
                    src="/svg/react.svg"
                    alt="www.walmart.com/"
                  />
                </ExternalLink>
              </li>
              <li className="pb-3">
                <ExternalLink href="https://www.staterbros.com/">
                <Image
                    width={300}
                    height={200}
                    src="/svg/stater.svg"
                    alt="https://www.staterbros.com/"
                  />
                </ExternalLink>
              </li>
            </ul>
            <ul className="flex flex-row xl:flex flex-row flex-wrap lg:flex flex-row flex-wrap md:flex-wrap  sm:flex flex-wrap xsm:flex xsm:flex-col xsm:w-full  mt-5 ">
              <li>
                <ExternalLink href="https://vercel.com?utm_source=salvia-kit&utm_campaign=oss">
                  <Image
                     width={300}
                     height={200}
                    src="/svg/tailwindcss.svg"
                    alt="Powered By Vercel"
                  />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://main.sbcounty.gov/">
                  <Image
                    width={300}
                    height={200}
                    src="/svg/overlay.svg"
                    alt="main.sbcounty.gov"
                  />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://weingartfnd.org/">
                  <Image
                     width={300}
                     height={200}
                    src="/svg/famdol.svg"
                    alt="weingartfnd.org/"
                  />
                </ExternalLink>
              </li>
            
            </ul>
            <ul className="flex flex-row content-center align-middle xl:flex flex-row flex-wrap lg:flex flex-row flex-wrap md:flex-wrap  sm:flex flex-wrap xsm:flex xsm:flex-col xsm:w-full xsm:right-0 ml-36  mt-5 ">
             
            <li className="relative left-0 ml-36 sm:-ml-5">
                <ExternalLink href="https://www.morongocasinoresort.com/">                  
                    <Image
                      width={300}
                      height={500}
                      src="/svg/nuxt.svg"
                      alt="Morongo Hotel and Casino"
                    />                 
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
      <div className="divide-y-1 xsm:w-full " >
        <div className = 'flex flex-row mt-16 w-full  md:flex-wrap  xsm:flex-wrap gap-8 ml-6 '>
          <div className = 'flex flex-col 2xl:w-1/3 lg:w-1/3 xl:w-1/3 md:w-300 sm:w-full xsm:w-full xsm:gap-8 mt-12 '> 
            <h3 className="ml-2 text-2xl font-bold bg-stone-200">Emails</h3>
            <ul className="mt-6">
                <li className="pb-3 font-bold bg-slate-200"> Clearwater Management </li>
                <li className="pb-3 font-thin bg-zinc-300">Carl@clearwaterresidential.org</li>
                <li className="pb-3 font-bold bg-slate-200">Clearwater Staff</li>
                <li className="pb-3 font-thin bg-zinc-300"> office@clearwaterresidential.org</li>
            </ul>
          </div>
          <div className = 'flex flex-col 2xl:w-1/3 lg:w-1/3 xl:w-1/3 md:w-300 gap-8 mt-12 xsm:w-full'> 
            <h3 className="text-2xl font-bold bg-stone-200">Social Media</h3>
              <ul className="mt-5">
                <li className="pb-3 bg-slate-200"><a href = "https://www.facebook.com/pages/Clearwater-Residential-Inc/891203944253585?fref=ts">Facebook</a></li>
                <li className="pb-3 bg-zinc-300"><a href = "https://www.youtube.com/channel/UCcsq_U-3Vl4FaPHfGhscsFA">YouTube</a></li>
                <li className="pb-3 bg-slate-200"><a href = "https://www.youtube.com/channel/UCcsq_U-3Vl4FaPHfGhscsFA">Instagram</a></li>
                <li className="pb-3"> </li>
              </ul>
          </div>
          <div className = 'flex flex-col 2xl:w-1/3 lg:w-1/3 xl:w-1/3 md:w-300 gap-8 mt-12 xsm:w-full'> 
              <h3 className="text-2xl font-bold bg-stone-200">Phone Numbers</h3>
              <ul className="mt-5">
              <li className="pb-3 bg-slate-200"> Main Phone:</li>
                <li className="pb-3 bg-zinc-300">(951) 443-6849</li>
                <li className="pb-3 bg-slate-200">Alt Tel: </li>
                <li className="pb-3 bg-zinc-300">(951) 924-5732</li>
                
              </ul>
           </div>
          </div>
        <div className="mt-16 pb-6 text-center text-sm ml-6">
          <p>
          © {new Date().getFullYear()} Clearwater Residential All rights reserved. Made with
love by{' '}</p>
          <p>
          <Link className="font-semibold" href="https://digitalionmedia.com">
            Teddy Deleon , Digital Lion Media LLC
          </Link>
          </p>
        </div>
        </div>
      </Container>
    </footer>
  );
}
