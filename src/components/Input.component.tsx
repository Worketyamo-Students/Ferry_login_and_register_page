
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type: string;
    name: string;
    icon: React.ReactNode;
    label: string;
    placeholder: string;
    
  }
  

const Input:React.FC<InputProps>=({
  type,
  name,
  icon,
  label,
  placeholder,
  onChange,
})=>{
  return (
    <div className="w-full h-[9rem] flex flex-col gap-[1rem]">
      <label className="text-[1.6rem] font-semibold">
          {label}
      </label>
      <div className="w-full h-[93%]  flex items-center gap-[0.2rem] border-solid border-[0.1rem] border-second rounded-2xl text-[1.6rem] px-[1rem] ">
       {icon} 
      <input
        {...{type,name,placeholder,onChange}}
        className="w-full h-full px-2 py-2 outline-none bg-transparent"/>
      </div>
     
    </div>
  )

}

  
  export default Input;