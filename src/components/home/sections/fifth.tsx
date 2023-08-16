import React from 'react';
import Button from '@/components/ui/button';
import 'dotenv/config';
require('dotenv').config()
/* eslint-disable */
export default function HomeFifthSection(): React.JSX.Element {
  const [values, setValues] = React.useState<{
    access_key: any;
    email: any;
    name: string;
    phone: any;
    message: string;
    subject: string;
  }>({
    access_key:process.env.ACCESS_KEY,
    email: '',
    name: '',
    phone: '',
    message: '',
    subject: '',
  });
  function changeHandlers(e: React.FormEvent){
      console.log(e.currentTarget)
   }
  function changeHandler(event: React.FormEvent<HTMLInputElement>){ 
    // @ts-ignore  
    const value = setValues({ ...values, [event.target.name]: event.target.value }); 
   // typescript
    return value;
  }
    
    const [error, setError] = React.useState<boolean>(false);
    const [errorMessage, setErrorMessage] = React.useState<string>('');
    const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);    
      
    
  
  const handleSubmit: any = React.useCallback(
    async (e: React.FormEvent<HTMLInputElement>) => {
     e.preventDefault(); 
         
     const contactInfo = {      
      'access_key': '22a2a2b4-e916-430e-8585-8b1a913c7000',
      // @ts-ignore  
      'email' : e.currentTarget.email.value,
      // @ts-ignore  
      'name' : e.currentTarget.name.value,
      // @ts-ignore  
      'message' : e.currentTarget.message.value,
      // @ts-ignore  
      'subject' :e.currentTarget.subject.value,
      // @ts-ignore 
      'phone' : e.currentTarget.phone.value,
    }
      setIsSubmitting(true);        
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
         headers: {
         'Content-Type': 'application/json',
               },
          body: JSON.stringify(contactInfo),
          });
      if (!response.ok) {
        setError(true);
        setErrorMessage('contact form needs to be refreshed to send agian.');
        setIsSubmitting(false);
        return;
      }
      alert('Thank you! We will get back to you ASAP.');
      setIsSubmitting(false);
      const filler:any = "";
      setValues(filler);
      
      return {
        values,
        error,
        isSubmitting,
        errorMessage,
        handleSubmit,
      };
    },
   [],
  );   
  //const form = useForm(); 
  return (
    <section  id ="contact_form" className="mb-16 md:mb-32">
      <div className="dark:bg-[#1B2A31] bg-[rgb(6,121,81,0.26)] py-12 text-white rounded-lg">
        <h2 className="text-center text-3xl font-bold">
          Please get in touch.
          <br />
          Contact
        </h2>
        <p className="mt-8 px-2 text-center">
            Lets us know what you need.
        </p>
        <form
          className="flex-col 2xl:w-2/3 xl:w-full xl:ml-52 lg:w-full md:w-full sm:w-full xsm:ml-0 xsm:w-full lg:ml-52 md:ml-52 ml-48 mt-8 px-2 space-x-4 md:flex md:justify-center"
          onSubmit={handleSubmit}
        >
          {error && (
            <div role="alert" className="text-green-500 text-sm font-bold">
              {errorMessage}
            </div>
          )}
          <div className="xl:w-1/2  lg:w-1/2  md:w-1/2  sm:w-1/2 mb-4 md:mb-0 content-center ">

            <input
              name="name" 
              value ={values.name}
              type = "text" 
              id = "name"                                   
              placeholder="Enter Your Name"
              className=" content-center placeholder-gray-600 rounded-lg text-[#14445c] mb-4 px-4 py-2 w-48 w-full bg-white" 
              onChange={changeHandler}            
            />

            <input
              name="email"
              value ={values.email}  
              type="email"
              id = "email"                       
              placeholder="Enter email"
              className="placeholder-gray-600 text-[#14445c] rounded-lg mb-4 px-4 py-2 w-48 w-full bg-white" 
              onChange={changeHandler}         
            />

            <input
              name="phone" 
              value ={values.phone}
              type="text"
              id = "phone"                         
              placeholder="Enter Phone Number"
              className="placeholder-gray-600 text-[#14445c] rounded-lg mb-4 px-4 py-2 w-48 w-full bg-white"  
              onChange={changeHandler}            
            />
             <input
              name="subject" 
              value ={values.subject}                         
              placeholder="Enter Subject"
              className="placeholder-gray-600 text-[#14445c] rounded-lg mb-4 px-4 py-2 w-48 w-full bg-white" 
              onChange={changeHandler}              
              
            />
             <textarea
              rows={4} 
              cols={50}
              name="message" 
              value ={values.message}                     
              placeholder="Enter Message"
              className= "placeholder-gray-600 text-[#14445c] rounded-lg r mb-4 px-4 py-2 w-48 w-full bg-white"
              // @ts-ignore 
              onChange={changeHandler}                           
            >      
            </textarea>
          </div>
          <div className="md:w-auto">
            <Button color="white" onSubmit={handleSubmit}>
              Send
            </Button>
          </div>
        </form>
      </div>

      <div className="flex flex-wrap justify-center pt-32 space-x-4 md:gap-x-12 lg:gap-x-20 xl:gap-x-32"></div>
    </section>
  );
}
