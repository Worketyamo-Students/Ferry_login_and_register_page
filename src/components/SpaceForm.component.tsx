import React, { useState } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

import BtnConnexion from './Btnconnexion.component';
import Input from './Input.component';
import LinksComponent from './liens.components';
import MesliensComponents from './links.component';

function SpaceForm(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        try {
            e.preventDefault()
            console.log(email,password)
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="lg:flex-1 w-full flex flex-col lg:py-[6rem] py-[4rem] lg:px-[6rem] px-[2rem]">

         <form onSubmit={handleSubmit} className='flex flex-col gap-[3rem]  w-full h-full' >
            <h1 className='lg:text-[6rem] text-[2.9rem] text-center'>connexion a blue ocean</h1>
            <Input type="email" name="email" placeholder="Exemple@gmail.com" label="Email"  icon={< MdOutlineEmail className='w-[1.9rem] h-[1.9rem] text-second' />}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                  }}
            />
            <Input type="password" name="password" placeholder="************" label="password"  icon={<RiLockPasswordLine  className='w-[1.9rem] h-[1.9rem] text-second'/>}
             onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
            <BtnConnexion type="submit" text="connexion" name="bouton de connexion"/>
            <div className='flex w-full justify-between'>
            <LinksComponent to="/register" text='créer un compte?' />
            <LinksComponent to="/" text='mot de passé oublié ?' />
            </div>
            <div className='flex items-center w-full justify-center gap-[3rem]'><hr className='flex-1 h-[0.2rem] bg-second'/><span className='text-[2rem]'>ou avec</span><hr className='flex-1 h-[0.2rem] bg-second' /></div>
            <MesliensComponents/>
         </form>
         
        </div>
    )
}

export default SpaceForm