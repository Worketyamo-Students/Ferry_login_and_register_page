import React, { useState } from 'react';

import { FaUserLarge } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

import BtnConnexion from './Btnconnexion.component';
import Input from './Input.component';
import LinksComponent from './liens.components';

function SpaceFormRegister(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName]= useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        try {
            e.preventDefault()
            console.log( name, email,password )
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="lg:flex-1 w-full flex flex-col lg:py-[6rem] py-[4rem] lg:px-[6rem] px-[2rem]">

         <form onSubmit={handleSubmit} className='flex flex-col lg:gap-[3rem] gap-[3rem] h-full' >
            <h1 className='lg:text-[6rem] text-[2.9rem] text-center'>créer un comptes</h1>
            <Input type="name" name="nom" placeholder="entrez votre nom complet" label="Name"   icon={<FaUserLarge className='w-[1.9rem] h-[1.9rem] text-second'/>}
             onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
            />
            <Input type="email" name="email" placeholder="Exemple@gmail.com" label="Email"  icon={< MdOutlineEmail className='w-[1.9rem] h-[1.9rem] text-second' />}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                  }}
            />
            <Input type="password" name="password" placeholder="************" label="password" icon={<RiLockPasswordLine  className='w-[1.9rem] h-[1.9rem] text-second'/>}
             onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
            <BtnConnexion type="submit" text='créer votre compte' name='btn de création de compte'/>
            <div className='flex w-full justify-center'>
            <LinksComponent to="/login" text='avez vous un compte?' />
            </div>
         </form>
         
        </div>
    )
}

export default SpaceFormRegister