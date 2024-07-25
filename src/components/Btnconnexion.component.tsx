
interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    type: "submit" | "reset" | "button";
    name: string;
    text: string;
  }
  


const BtnConnexion:React.FC<buttonProps>=({
    type,
    text
})=>{
   return (
    <div className="w-full h-[6rem] text-center">

            <button type={type} className="h-full w-[65%] text-center bg-primary text-bgcolor text-[2rem] rounded-3xl hover:bg-second hover:text-primary hover:transition-all hover:duration-700">
                {text}
            </button>

        </div>

   )
}
export default BtnConnexion