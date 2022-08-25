import React, { useEffect, useState } from "react";
 
const Record = (props) => (
 <tr>
   <td className="border-2 border-black p-2">{props.record.heading}</td>
   <td className="border-2 border-black p-2">{props.record.SchemeType}</td>
   <td className="border-2 border-black p-2">{props.record.description}</td>
   <td className="border-2 border-black p-2">
    <a href={props.record.link} className="text-blue-500">Open</a>
   </td>
 </tr>
);

 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 const [temprecords, setTempRecords] = useState([]);

//  const [Frecords, setFRecords] = useState(records);
 
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
 
     const recordslist = await response.json();
     console.log("records", records)
    setTempRecords(recordslist)
     setRecords(recordslist);
   }
 
   getRecords();
   return;
 }, [records.length]);
 console.log("records-1", records)
 
 console.log("Filter", records)
 const FilterRecords = (strf)=> {
  if (strf==="All") {
    setRecords(temprecords);
  } else {
    console.log('temprecords',temprecords);
    // let lund_reco = []
    // for (let i=0 ; i <= temprecords.length; i++){
    //   if(strf.toLowerCase() == temprecords.heading.toLowerCase()){
    //     lund_reco.append(temprecords[i])
    //   }
    // }
    let chutia_record = temprecords.filter(item=>
      // let recordsName = item.heading.toLowerCase().toString()
      // console.log(recordsName)
      item.SchemeType.toLowerCase().includes(strf.toLowerCase())
    
    )
    console.log(chutia_record);
    setRecords(chutia_record);
  }
};
 // This method will map out the records on the table
 
 function recordList() {
   return(
    <div>
    <h3 className="text-xl font-bold text-center w-full p-4">Schemes List</h3>
   
    <table className="table table-striped" style={{ marginTop: 20 }}>
      <thead>
        <tr className="">
          <th className="border-2 border-black p-2">Heading</th>
          <th className="border-2 border-black p-2">Schemes Type</th>
          <th className="border-2 border-black p-2">description</th>
          <th className="border-2 border-black p-2">Action</th>
        </tr>
      </thead>
       <tbody>
         {records.map((record) => {
           return (
             <Record
               record={record}
               key={record._id}
             />
           );
         })}
       </tbody>
    </table>
  </div>
   
   );
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
   <div className="p-2 flex justify-between">
   <div className="p-2 flex justify-between border-2 mt-2 p-2 inline-block bg-black rounded-lg">
       <h1 className="text-white">Filter:</h1>
       <select className="rounded-lg p-2 ml-4" onChange={(event) => FilterRecords(event.target.value)}>
           <option value="All">All</option>
           {
            temprecords.map(item=>{
              return <option value={item.SchemeType} >{item.SchemeType} </option>
            })
           }
       </select>
   </div>
</div>
   {recordList()}
   </div>
 );
}
