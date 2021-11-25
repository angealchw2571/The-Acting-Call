import React from 'react'
import { arrAtom } from "./GigsCarousel";
import { useAtom } from "jotai";
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';




function IndividualGigs() {
    const invidualGig = useAtom(arrAtom)[0]
    console.log("invidualGig", invidualGig)
    return (
        <>
        <div className="min-h-full flex items-center justify-center px-4 font-montserrat">
    <div className="max-w-4xl  w-full rounded-lg shadow-xl text-white">
        <div className="p-4 border-b">
            <h2 className="text-2xl ">
                Casting Information
            </h2>
            <p className="text-sm text-gray-300">
                Posted by  <span className="capitalize">{invidualGig.company}</span>
            </p>
        </div>
        <div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-300">
                    Role
                </p>
                <p>
                    {invidualGig.role}
                </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-300">
                    Type
                </p>
                <p className="capitalize">
                    {invidualGig.type}
                </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-300">
                    Platform
                </p>
                <p className="capitalize">
                    {invidualGig.platform}
                </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-300">
                    Production Period
                </p>
                <p className="capitalize">
                    {invidualGig.period} Months
                </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-300">
                    Company
                </p>
                <p className="capitalize">
                    {invidualGig.company}
                </p>
            </div>
            
            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-300">
                    Contact
                </p>
                <p className="capitalize">
                    {invidualGig.contact}
                </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-300">
                    Location
                </p>
                <p className="capitalize">
                    {invidualGig.location}
                </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-300">
                    Loading Scale
                </p>
                <p className="capitalize">
                    {invidualGig.loadingScale}
                </p>
            </div>

            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-300">
                    Remuneration
                </p>
                <p className="capitalize">
                    $ {invidualGig.remuneration}
                </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-300">
                    Contract
                </p>
                <p className="capitalize">
                {invidualGig.contract ? (<TiTick />) : (<ImCross />)}
                 
                </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-300">
                    Details
                </p>
                <p>
                    {invidualGig.details}
                </p>
            </div>
        </div>
    </div>

</div>
        </>
    )
}

export default IndividualGigs
