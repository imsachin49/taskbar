import React,{useState} from 'react'
import LockIcon from '@mui/icons-material/Lock';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CheckIcon from '@mui/icons-material/Check';

const Stepper = ({steperStatus,mode}) => {
  let isDarkMode=mode==='dark'?true:false;
  // #252D3C

  const steps=['Account','Personal','Billing','Done'];
  const stepImgs=[<LockIcon className='text-blue-600'/>,<Person2OutlinedIcon/>,<CurrencyRupeeOutlinedIcon/>,<ThumbUpAltOutlinedIcon/>];
  let [activeStep,setActiveStep]=useState(true);

  return (
    <div className={`flex justify-between lg:w-[50vw] md:w-[80vw] xs:w-[95vw] pt-2 p-4  ${isDarkMode ? "bg-[#252D3C]" :"bg-slate-50 border border-b-white" }`}>
      {steperStatus && <div className='flex items-center w-full justify-around py-1 pb-3'>{steps.map((step,index)=>(
        <div key={index} className='flex items-center'>
          <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-xl font-extrabold cursor-pointer ${index === 0 ? 'bg-blue-200 border-blue-400' : 'bg-gray-100'}`}>
            {index+1 !== 1 && index+1}
            {index+1===1 && <CheckIcon className={`text-blue-500 font-extrabold`}/>}
            </div>
          </div>
      ))}</div>}

      {!steperStatus && <div className='flex items-center w-full justify-around py-1'>{stepImgs.map((stepIMg,index)=>(
        <div key={index} className='flex items-center flex-col'>
          <div className={`w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer ${index === 0 ? 'border border-blue-900 bg-blue-200' : 'bg-gray-300 '}`}>
            {stepIMg} 
          </div>
          <div className={`text-sm text-gray-700 font-bold ${isDarkMode ? "text-gray-300" : ""}`}>{steps[index]}</div>
        </div>
      ))}</div>}
    </div>
  )
}

export default Stepper
