import { mount } from 'marketing/Marketing';
import React, { useRef, useEffect } from 'react';

export default ()=>{

       const ref = useRef(null);
console.log(ref)
       useEffect(()=>{
mount(ref.current)
       }, [])

       return <div ref={ref}/>
}
