"use client"

import { UserDetailContext } from '@/context/UserDetailContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Provider({
  children,
}: {
  children: React.ReactNode
}) {

    const [UserDetail,setUserDetail]=useState(null);

  useEffect(() => {
    CreateNewUser();
  }, [])

  const CreateNewUser = async () => {

    // Chama API para criar usuário
    const result = await axios.post('/api/user', {});

    console.log(result.data);
    setUserDetail(result?.data);
  }

  return (
    <div>
        <UserDetailContext.Provider value={{UserDetail,setUserDetail}}>
        {children}
        </UserDetailContext.Provider>
        </div>
  )
}