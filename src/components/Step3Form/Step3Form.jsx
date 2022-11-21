import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';


const months = [
   {id:1,month:'01'},
   {id:2,month:'02'},
   {id:3,month:'03'},
   {id:4,month:'04'},
   {id:5,month:'05'},
   {id:6,month:'06'},
   {id:7,month:'07'},
   {id:8,month:'08'},
   {id:9,month:'09'},
   {id:10,month:'10'},
   {id:11,month:'11'},
   {id:12,month:'12'},
]

const years = [
   {id:1,year:2022},
   {id:2,year:2023},
   {id:3,year:2024},
   {id:4,year:2025},
   {id:5,year:2026},
   {id:6,year:2027},
   {id:7,year:2028},
   {id:8,year:2029},
   {id:9,year:2030},
   {id:10,year:2031},
   {id:11,year:2032},
   {id:12,year:2033},
]

export default function Step3Form() {
const [open, setOpen] = useState(false)
const [country, setCountry] = useState([])
const [selectCountry, setSelectCountry] = useState("")

var headers = new Headers();
headers.append("X-CSCAPI-KEY", "QWVnTTB5SGpzOW1DV3kzdkVLUzNZY2k4dmdaaEY5UVJOb3RQSVFRZg==");

var requestOptions = {
 method: 'GET',
 headers: headers,
 redirect: 'follow'
};

//iso2
useEffect(() => {
     fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then(response => response.json())
    .then(result => setCountry(result))
    .catch(error => console.log('error', error));
},[])


console.log(country)

  return (
    <div className=' p-10 w-1/2 h-full mb-10'>
     <div className=''>
        <h1 className='  font-bold text-5xl'>Confirm and Pay</h1>
        <div className={` mt-5 mb-5    border-black border w-full px-2 py-4 rounded-sm`}>
                <div className={`flex flex-row     items-center justify-between`}>
                    <h1 className='font-semibold text-2xl'>Your Trip</h1>
                    <svg className={`w-6 h-6 ${open ? 'transform rotate-180' :''}`} onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            
                <div className={`${open? ' h-28 mt-10' : ' h-0'}  duration-200  transition-[height]`}>
                  <div className={`${open? 'block' : 'hidden'} `}>
                   <div>
                    <p >Date <br/>Nov 18, 2022 - Nov 19, 2022</p>
                    <p>Guests <br/>1 guests</p>
                   </div>
                  </div>
                </div>
        </div>
    </div>

        <div className=''>
             <div> <h1 className='text-3xl mt-5'>Coupon Code</h1></div>
        </div>


        <div className='mt-8'>
              <div className='flex flex-row items-center'>
              <TextField className='w-4/5' label="Coupon Code" defaultValue="" onChange={(e) => setCoupan(e.target.value)} />
              <button  className='ml-2  w-28 h-10 font-semibold rounded-sm bg-red-500 text-white'>Apply</button>
            </div>
             
        </div>
         
         <div className='w-full'>
            <h1 className='mt-5 font-semibold text-3xl'>Choose how to pay</h1>
            <div className='mt-5'>
                <div className='flex flex-row bg-slate-300 p-4 rounded-lg font-bold items-center justify-between'>
                    <div className='flex flex-row items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                         <p className='ml-2'>Pay in full</p>
                    </div>
                    <p>$9432</p>
                </div>
            </div>
        </div>

        <div className='w-full'>
            <div>
                <h1 className='mt-8 font-semibold text-3xl'>Pay With</h1>
                <div className='w-full  mt-5'>
                    <select  className='border-2 w-full rounded-md p-2 border-slate-400 hover:border-black focus:border-cyan-800 outline-0  focus:outline-0 active:outline-0'>
                        <option value='Credit/Debit Card'>Credit/Debit Card</option>
                        <option value='Paypal'>PayPal</option>
                    </select>
                </div>
            </div>

            <div className='mt-8'>
                <input  className='outline-0 border-2 w-4/5 rounded-md p-2 border-slate-400 hover:border-black focus:border-cyan-800' type="text" placeholder='Card number'/>
                <input className='w-20 ml-3 rounded-lg outline-0 border-2 p-2 border-slate-400 hover:border-black focus:border-cyan-800' placeholder='cvv'/>
            </div>
            
            <div className='flex mt-8 items-center flex-row justify-between w-full'>
                <div>
                    <h1>Expiry Date</h1>
                    <p>Enter the expiration date of card</p>
                </div>

                <select className='outline-0 border-2 w-20  rounded-md p-2 border-slate-400 hover:border-black focus:border-cyan-800'   placeholder='Month'>
                    {months.map( m => (
                        <option value={m.month} key={m.id}>{m.month}</option>
                    ))}
                </select>

               <select className='outline-0 border-2  rounded-md p-2 border-slate-400 hover:border-black focus:border-cyan-800' placeholder='year' >
                 {years.map(y => (
                    <option value={y.year} key={y.id}>{y.year}</option>
                 ))}
               </select>

            </div>
            
            <select value={selectCountry} onChange={(e) => setSelectCountry(e.target.value)} className='mt-8 w-2/5 rounded-lg outline-0 border-2 p-2 border-slate-400 hover:border-black focus:border-cyan-800'>
                {country.map((coun,index) => (
                    <option key={index}  >{coun.name}</option>
                ))}
            </select>

            <textarea placeholder='Address And Steet' className='mt-8 outline-0 border-2 w-full rounded-md p-2 border-slate-400 hover:border-black focus:border-cyan-800' rows="4" cols="50">

            </textarea>

        </div>

        <div className='space-x-3'>
            <button className='w-28 h-10 font-semibold rounded-sm bg-red-500 text-white'>Back</button>
            <button className='w-30 h-10 p-2 font-semibold rounded-sm bg-red-500 text-white'>Confirm And Pay</button>
        </div>

        <select class="gds-cr gds-countryflag" country-data-region-id="gds-cr-four" data-language="en"></select>
    </div>
  )
}
