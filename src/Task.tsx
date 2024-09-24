import { useState } from "react"


function Task() {

    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)

    const backgroundColor = checked ? 'bg-green-200' : 'bg-white'
    const checkboxColor = checked ? 'bg-green-600' : 'bg-white'

    const backgroundColor1 = checked2 ? 'bg-green-200' : 'bg-white'
    const checkboxColor1 = checked2 ? 'bg-green-600' : 'bg-white'
    return (
        <>
            <h1 className='text-2xl' >TASK</h1>
            <p className='text-xs'>Incomplete</p>
            <div className={"border-2 border-gray-200 rounded-lg p-2 items-center flex flex-row gap-4 pl-4 " + backgroundColor}>
                <input onChange={() => setChecked(!checked)} type="checkbox" className={"appearance-none w-6 h-6 border border-gray-500 rounded-md " + checkboxColor}></input>
                <div>
                    <h1>Sweep the Kitchen</h1>
                    <p className="text-md text-gray-500">Get under the cabinets, do a good job</p>
                </div>
            </div>

            <div className={"border-2 border-gray-200 rounded-lg p-2 items-center flex flex-row gap-4 pl-4 " + backgroundColor1}>
                <input onChange={() => setChecked2(!checked2)} type="checkbox" className={"appearance-none w-6 h-6 border border-gray-500 rounded-md " + checkboxColor1}></input>
                <div>
                    <h1>Mop the floors</h1>
                    <p className="text-md text-gray-500">Use the soap mixed with water</p>
                </div>
            </div>
            <p className='text-xs'>Complete</p>
            <div className={"border-2 border-gray-200 rounded-lg p-2 items-center flex flex-row gap-4 pl-4 " + backgroundColor}>
                <input onChange={() => setChecked(checked)} type="checkbox" className={"appearance-none w-6 h-6 border border-gray-500 rounded-md " + checkboxColor}></input>
                <div>
                    <h1>Sweep the Kitchen</h1>
                    <p className="text-md text-gray-500">Get under the cabinets, do a good job</p>
                </div>
            </div>

            <div className={"border-2 border-gray-200 rounded-lg p-2 items-center flex flex-row gap-4 pl-4 " + backgroundColor1}>
                <input onChange={() => setChecked2(checked2)} type="checkbox" className={"appearance-none w-6 h-6 border border-gray-500 rounded-md " + checkboxColor1}></input>
                <div>
                    <h1>Mop the floors</h1>
                    <p className="text-md text-gray-500">Use the soap mixed with water</p>
                </div>
            </div>
        </>
    )
}

export default Task