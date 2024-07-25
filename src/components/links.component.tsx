import { FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io5';

function MesliensComponents (){

return (
<div className="w-full h-[4rem] flex-1 flex lg:justify-center justify-between lg:gap-[10rem]">
<a href="" >
 <FcGoogle className='w-[4rem] h-[4rem]'/>
</a>
<a href="" >
<FaFacebook  className='w-[4rem] h-[4rem]'/>
</a>
<a href="" >
<IoLogoGithub  className='w-[4rem] h-[4rem]'/>
</a>
</div>
)
}

export default MesliensComponents