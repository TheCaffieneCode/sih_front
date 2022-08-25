import React, {useEffect, useState} from "react";
import Carousel from "../components/Carousel";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img4.png"
import img4 from "../images/img5.png"

const SchemesCard = ()=>{
  const images = [
    {
      id: 1,
      src: img1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: img2,
      alt: "Image 2 ",
    },
    {
      id: 3,
      src: img3,
      alt: "Image 3",
    },
    {
      id: 4,
      src: img4,
      alt: "Image 4",
    },
  ];
  const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:3001/record/`);
    console.log(response)
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     console.log("records", records)
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 console.log("records-1", records)
 
 function Sidebar() {
  return (
    <div className="border-2 w-full md:w-1/3  mx-2">
      <div className="border-b-2 p-3 bg-orange-500">
        <span>Latest Schemes</span>
      </div>
      {records.slice(0,7).map((record, index) => (
        <div key={index} className="p-3 flex items-center space-x-1 text-md bg-gray-100">
            <p className="hover:underline hover:cursor-pointer duration-300">
            {record.heading}</p>
            <a href={"https://"+record.source}><p className="text-blue-500"><span>( </span>{record.source} <span> ) </span></p></a>
            
        </div>
      ))}
    <div className="bg-gray-300 p-3 hover:underline hover:cursor-pointer duration-300">
    <a href="/record">
      <span>View All Schemes</span>
    </a>    
    
    </div>
    </div>
  )
  }
 // This method will map out the records on the table
 function recordList() {
   return records.slice(0,6).map((record) => {
     return (
      <div class="p-4 lg:w-1/3">
      <div class="h-full bg-orange-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 class="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">{record.SchemeType}</h2>
        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        {record.heading}
        </h1>
        <p class="leading-relaxed mb-3">{record.description}</p>
        <a class="text-indigo-500 inline-flex items-center" href={record.link}>Learn More
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
     );
   });
 }
  return(
    <section>
      <section className="md:flex h-[480px] flex-start items-top align-top py-8 overflow-hidden">
        <div className="w-full md:w-2/3 h-fit">
          <Carousel images={images} />
        </div>
        {Sidebar()}
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 className="text-4xl font-bold text-center p-8">Most Important Scheme</h1>
          <hr className="mb-4 border-2 border-orange-400"/>
          <div class="flex flex-wrap -m-4">
            {recordList()}
          </div>
          <div className="text-center p-5">
            <span className="bg-black text-white rounded-lg p-4 px-6">
              <a href="/record">View all</a>
            </span>
          </div>
          
        </div>
      </section>
    </section>
  );
}



const Home = () => {
  // if('serviceWorker' in navigator){
  //   navigator.serviceWorker.register()
  // }
  
  return (
    <div>
      <SchemesCard/>
      
    </div>
    
  );
};

export default Home;
