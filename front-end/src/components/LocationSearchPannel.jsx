import React from 'react'

const LocationSearchPannel = (props) => {
    // sample array for location
    const locations = [
        "248, Near Kapoor's cafe, Sherians Coding School, Bhopal",
        "22C, Near Malhotra's cafe, Sherians Coding School, Bhopal",
        "20B, Near Singhania's cafe, Sherians Coding School, Bhopal",
        "18A, Near Sharma's cafe, Sherians Coding School, Bhopal",
    ]
  return (
    <div>
      {/* this is just a sample data */}

      {
        locations.map((elem, idx) => {
            return (
                <div onClick={()=>{
                    props.setVehiclePannel(true);
                    props.setPannelOpen(false);
                }}  key={idx} className='flex gap-4 border-2 p-3 rounded-xl border-gray-50 active:border-black items-center my-2 justify-start'>
                    <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                        <i className="ri-map-pin-fill "></i>
                    </h2>
                    <h4>{elem}</h4>
                </div>
            )
        })
      }
      {/* <div className='flex gap-4 border-2 p-3 rounded-xl border-gray-50 active:border-black items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
          <i className="ri-map-pin-fill "></i>
        </h2>
        <h4>248, Near Kapoor's cafe, Sherians Coding School, Bhopal</h4>
      </div> */}
      
     
    </div>
  );
}

export default LocationSearchPannel
