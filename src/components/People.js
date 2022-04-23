import React from 'react';
export default function People(props){
    const {people,index,FaQuoteRight} = props;
    return (
    <>
        {
          people.map((person,personIndex)=>{
             const {id,image,name,title,quote} = person;
             const size=people.length;
             let position="nextSlide";
             if(personIndex===index)
               position="activeSlide";
             if(personIndex === (index-1+size)%size) 
               position="lastSlide";
             return <article key={id} className={position}>
                 <img src={image} alt={name} className="person-img"></img>
                 <h4>{name}</h4>
                 <p className='title'>{title}</p>
                 <p className='text'>{quote}</p>
                 <FaQuoteRight className='icon'/>
             </article>
          })
      }
    </>);
}