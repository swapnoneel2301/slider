import React from 'react';
export default function Buttons(props){
    const {index,setIndex,noOfPeople,FiChevronLeft,FiChevronRight}=props;
    return (
        <>
            <button className='prev' onClick={()=>setIndex((index-1+noOfPeople)%noOfPeople)}>
                <FiChevronLeft />
            </button>
            <button className='next' onClick={()=>setIndex((index+1)%noOfPeople)}>
                <FiChevronRight />
            </button>
        </>
    );
}