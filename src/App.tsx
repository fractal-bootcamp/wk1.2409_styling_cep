import { useState } from 'react'
import avatar from './assets/avatar.png';
import './App.css'
import Task from './Task'

function App() {

    const Avatar = () => {
        return <img src={avatar} />;
    };

    return (
        <>
            <div className='max-w-sm mx-auto pt-2 flex flex-col space-y-1'>
                {/* <Task /> */}

                <div>
                    <div className='flex flex-row-reverse items-end border-2' >

                        <div className='flex flex-row-reverse'>
                            <img src={avatar} alt="User" className='ml-4 w-8 h-8 rounded-full' />
                            <div className='flex flex-col'>
                                <h1 className='bg-sky-300 mb-2 rounded-tl rounded-tr rounded-bl p-3  '>hello buddy</h1>
                                <h1 className='bg-sky-300 mb-2 rounded-tl rounded-br rounded-bl p-3  '>how the hell are ya</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex justify-start m-2 text-left border-2' >
                        <img src={avatar} alt="User" className='mr-4 w-8 h-8 rounded-full' />
                        <h1 className='bg-stone-200 mb-2 rounded-tl rounded-br rounded-tr p-3 '>omg hi</h1>
                    </div>
                </div>

                <div>

                    <div className='flex flex-row-reverse m-2 border-2' >
                        <img src={avatar} alt="User" className='ml-4 w-8 h-8 rounded-full' />
                        <h1 className='bg-sky-300 mb-4 rounded-tl rounded-tr rounded-bl p-3 text-right'>Would you like to be friends forever? This is a serious question</h1>
                    </div>
                </div>


            </div>
        </>
    )
}

export default App
