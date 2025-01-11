import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import  gsap  from 'gsap'
import "remixicon/fonts/remixicon.css";
import LocationSearchPannel from '../components/LocationSearchPannel';
import VehiclePannel from '../components/VehiclePannel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [pannelOpen, setPannelOpen] = useState(false);
  const vehiclePannelRef = useRef(null);
  const confirmRidePannelRef = useRef(null);
  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [vehiclePannelOpen, setVehiclePannelOpen] = useState(false);
  const [confirmRidePannel, setConfirmRidePannel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);


  const SubmitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function(){
    
      if(pannelOpen){
        gsap.to(pannelRef.current, {
          height:'70%',
          opacity:1,
          padding:'24px'
        })
        gsap.to(pannelCloseRef.current, {
          opacity:1
        }
        )
      }else{
        gsap.to(pannelRef.current, {
          height:'0%'
        })
        gsap.to(pannelCloseRef.current, {
          opacity:0
        } )
      } 
   
  },[pannelOpen])

  useGSAP(function(){
    if(vehiclePannelOpen){
      gsap.to(vehiclePannelRef.current, {
        transform:'translateY(0%)'
      })
    }else{
      gsap.to(vehiclePannelRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[vehiclePannelOpen])


  useGSAP(function(){
    if(confirmRidePannel){
      gsap.to(confirmRidePannelRef.current, {
        transform:'translateY(0%)'
      })
    }else{
      gsap.to(confirmRidePannelRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePannel])


  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(0%)'
      })
    }else{
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])


  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(0%)'
      })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[waitingForDriver])

  return (
    <div className=" h-screen relative overflow-hidden">
      <img
        className="w-16 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt=""
        srcset=""
      />
      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
          srcset=""
        />
      </div>

      <div className=" flex flex-col justify-end  h-screen  absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={pannelCloseRef}
            onClick={() => {
              setPannelOpen(false);
            }}
            className="absolute top-6 right-6 text-2xl opacity-0"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              SubmitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPannelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5 "
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => {
                setPannelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={pannelRef} className="h-0 bg-white  ">
          <LocationSearchPannel
            setPannelOpen={setPannelOpen}
            setVehiclePannel={setVehiclePannelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePannelRef}
        className="fixed z-10 w-full bottom-0 translate-y-full  bg-white px-3 py-10 pt-12"
      >
       <VehiclePannel setVehiclePannelOpen={setVehiclePannelOpen}
          setConfirmRidePannel={setConfirmRidePannel}
       />
      </div>
      <div
        ref={confirmRidePannelRef}
        className="fixed z-10 w-full bottom-0 translate-y-full  bg-white px-3 py-6 pt-12"
      >
       <ConfirmRide setConfirmRidePannel={setConfirmRidePannel}
          setVehicleFound={setVehicleFound}
       />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed z-10 w-full bottom-0 translate-y-full  bg-white px-3 py-6 pt-12"
      >
      <LookingForDriver 
        setVehicleFound={setVehicleFound}
      />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed z-10 w-full bottom-0   bg-white px-3 py-6 pt-12"
      >
      <WaitingForDriver 
         waitingForDriver={waitingForDriver}
      />
      </div>
    </div>
  );
}

export default Home
