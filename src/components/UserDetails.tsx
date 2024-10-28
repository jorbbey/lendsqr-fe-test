import React, { useEffect, useState } from 'react'
import { fetchUserDetail } from './data'
import { userDetailsNav } from './data';

type Props = {}

const UserDetails = (props: Props) => {
    useEffect(() => {
        fetchUserDetail()
    }, [])
    const storedData = localStorage.getItem('userDetails')
    
    storedData ? console.log(JSON.parse(storedData)) : console.log('No stored data');
    
  return (
    <div>{userDetailsNav.map((item) => (
      <div key={item}>{item}</div>
    ))}</div>
  )
}

export default UserDetails