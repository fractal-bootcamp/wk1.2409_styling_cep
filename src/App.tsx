import { useState } from 'react'
import avatar from './assets/avatar.png';
import './App.css'
import Task from './Task'


type Message = {
    id: number,
    username: string,
    avatarUrl: string,
    timestamp: number,
    text: string,
    isMe: boolean
}


const messages: Message[] = [
    {
        id: 1,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'hello buddy',
        isMe: true,
    },
    {
        id: 2,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215318,
        text: 'how the hell are ya',
        isMe: true,
    },
    {
        id: 3,
        username: 'dorothy',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'omg hi',
        isMe: false,
    },
    {
        id: 4,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'Would you like to be friends forever? this is a serious question. >:(',
        isMe: true,
    },
    {
        id: 1,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'hello buddy',
        isMe: true,
    },
    {
        id: 2,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215318,
        text: 'how the hell are ya',
        isMe: true,
    },
    {
        id: 3,
        username: 'dorothy',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'omg hi',
        isMe: false,
    },
    {
        id: 1,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'hello buddy',
        isMe: true,
    },
    {
        id: 2,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215318,
        text: 'how the hell are ya',
        isMe: true,
    },
    {
        id: 3,
        username: 'dorothy',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'omg hi',
        isMe: false,
    },
    {
        id: 1,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'hello buddy',
        isMe: true,
    },
    {
        id: 2,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215318,
        text: 'how the hell are ya',
        isMe: true,
    },
    {
        id: 3,
        username: 'dorothy',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'omg hi',
        isMe: false,
    },
    {
        id: 1,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'hello buddy',
        isMe: true,
    },
    {
        id: 2,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215318,
        text: 'how the hell are ya',
        isMe: true,
    },
    {
        id: 3,
        username: 'dorothy',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'omg hi',
        isMe: false,
    },
    {
        id: 1,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'hello buddy',
        isMe: true,
    },
    {
        id: 2,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215318,
        text: 'how the hell are ya',
        isMe: true,
    },
    {
        id: 3,
        username: 'dorothy',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'omg hi',
        isMe: false,
    },
    {
        id: 1,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'hello buddy',
        isMe: true,
    },
    {
        id: 2,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215318,
        text: 'how the hell are ya',
        isMe: true,
    },
    {
        id: 3,
        username: 'dorothy',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'omg hi',
        isMe: false,
    },
    {
        id: 1,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'hello buddy',
        isMe: true,
    },
    {
        id: 2,
        username: 'cece',
        avatarUrl: avatar,
        timestamp: 1727215318,
        text: 'how the hell are ya',
        isMe: true,
    },
    {
        id: 3,
        username: 'dorothy',
        avatarUrl: avatar,
        timestamp: 1727215218,
        text: 'omg hi',
        isMe: false,
    },

]

type MessageProps = Message


function MessageComponent({ id, username, avatarUrl, timestamp, text, isMe }: MessageProps) {

    if (isMe) {
        return (
            <h1 className='w-1/2 bg-sky-300 mb-2 rounded-tl rounded-tr rounded-bl p-3 self-end'>{text}</h1>
        )
    }

    return (
        <h1 className='w-1/2 bg-gray-300 mb-2 rounded-tl rounded-tr rounded-bl p-3 self-start'>{text}</h1>
    )
}


function App() {

    const Avatar = () => {
        return <img src={avatar} />;
    };

    return (
        <>
            <div className='max-w-md mx-auto flex flex-col'>
                {messages.map(
                    (message, index, messages) => <MessageComponent {...message} />
                )}
            </div>
            <div className='max-w-sm mx-auto pt-2 flex flex-col space-y-1'>
                {/* <Task /> */}

                <div>
                    <div className='flex flex-row-reverse items-end border-2' >

                        <div className='flex flex-row-reverses'>
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
