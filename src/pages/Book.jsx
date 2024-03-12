import SectionTitle from "../Components/SectionTitle"
import { Form, redirect ,useNavigation} from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
// import formimg  from '../Assets/form.svg';
import { useGlobalContext } from "../DarkModeContext";

const submitUrl = 'https://bookingmail-asu6.onrender.com/send';




export const action = async ({request})=>{
  const formData=await request.formData()
  const data=Object.fromEntries(formData)
  try {
     const response=await axios.post(submitUrl,data);
  
  toast.success(response.data.msg, { position: 'top-center', autoClose: 5000 });

  return redirect('/');
  } catch (error) {
    toast.error('Submission failed. Please try again.', { position: 'top-center', autoClose: 5000 });

    return error;
  }
 
}

const Book = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const { isDarkTheme } = useGlobalContext();
  return (
    

    <section className=" mx-auto py-2 max-w-7xl px-8 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-rose-50 text-black'}">
      <SectionTitle text='BookNow' className='text-2xl font-bold mb-2'></SectionTitle>
      <div className="mb-8">
        {/* <h2 className="text-2xl font-bold mb-2">Book Now</h2> */}
        <p className="text-sm text-gray-500">
          Note: Sometimes booking dates may overlap. We will contact you if there are any matching dates.
        </p>
      </div>
    <Form className={`max-w-md mx-auto    rounded-md shadow-md`} method="POST">
       
        
    
      <SectionTitle text='Fill Details'></SectionTitle>
      {/* name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Name
        </label>
        <input 
          type="text"
          className="mt-1 p-2 w-full border rounded-md text-black"
          name="name"
          id="name"
          required
          placeholder="Enter Your name"
        />
      </div>
       {/* <div className="mb-4">
        <label htmlFor="services" className="block text-sm font-medium text-gray-600">
          Choose Services:
        </label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          name="services"
          id="services"
          defaultValue='Haldi Bride Engagement Sangeet'
          required
        />
      </div> */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600" htmlFor="services">Select Services</label>
        <select
          className="form-multiselect block w-full mt-1 rounded-md border text-black"
          name="services"
          id="services"
          
        >
           <option value="Bridal">BridalMakeup</option>
          <option value="Haldi">Haldi</option>
          <option value="Engagement">Engagement</option>
           <option value="Sangeet">Sangeet</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="contact" className="block text-sm font-medium text-gray-600">
          ContactNo:
        </label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md text-black"
          name="contact"
          id="contact"
          placeholder="Enter Your Phone No"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="" className="block text-sm font-medium text-gray-600 ">
          Booking Date
        </label>
        <input
          type="date"
          className="mt-1 p-2 w-full border rounded-md text-black"
          name="date"
          id=""
          required
        />
      </div>
      
        
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="text" 
          className="mt-1 p-2 w-full border rounded-md text-black"
          name="email"
          id="email"
          // defaultValue="abc@gmail.com"
          placeholder="Enter your email address"
          required
        />
      </div>
      <div class="form-group">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description :</label>
      <textarea className="mt-1 p-2 w-full border rounded-md text-black" id="description" name="description" rows="2" placeholder="For Multiple Booking Please Write it here..." ></textarea>
              </div>
      <button
        type="submit"
        className={`bg-blue-500 text-white px-4 py-2 rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isSubmitting}
        style={{ marginTop: '0.5rem' }}
      >
        {isSubmitting ? 'Submitting' : 'Submit'}
      </button>
       
    </Form>
    <hr className="mt-4"></hr>
    <p  className="mt-16 text-sm text-gray-500">
        Thank you for choosing our services! We look forward to making your event special. If you have any questions or special requests, feel free to reach out to us.
      </p>
   </section>
  );
};

export default Book