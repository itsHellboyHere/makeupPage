import { services } from "../data"
import SectionTitle from "./SectionTitle"
import Service from "./Service"
const Services = () => {
  return (
    <section className='py-20 mx-auto max-w-7xl px-8 ' >
        <SectionTitle text='Services'></SectionTitle>
       <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 '>
        
            {services.map((item)=>{
                return <Service key={item.id}{...item}></Service>
            })}

       </div>
    </section>
  )
}
export default Services