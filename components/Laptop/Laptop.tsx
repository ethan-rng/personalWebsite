"use client"
import React, { useState } from 'react'
import Image from "next/image"
import Folder from "./Folder";
import { finder, laptop } from '@/constants';

interface LaptopProps {
    folderOpen: boolean;
    setFolderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Laptop = ({ folderOpen, setFolderOpen }: LaptopProps) => {
    const handleFolderOpen = () => {
        setFolderOpen(!folderOpen);
    }

    return (
        <div className="flex-1 text-[0.5rem] lg:text-sm sm:text-base relative border-0 border-blue-300">
            {/* Laptop Picture */}
            <Image
                src={laptop}
                alt="laptop"
                width={3160}
                height={1906}
            />

            {/* Overlay div (Main Menu) */}
            <div className="absolute border-red-400 border-0"
                style={{
                    top: '8%',
                    left: '13.2%',
                    right: '11.5%',
                    bottom: '12%'
                }}
            >
                <div
                    className="w-[70px] h-[70px] absolute flex flex-col text-white terminal-font text-xs items-center justify-center border-red-300 border-0"
                    onClick={handleFolderOpen}
                    style={{
                        top: '8%',
                        left: '13.2%',
                        right: '11.5%',
                        bottom: '12%'
                    }}
                >
                    <Image
                        src={finder}
                        alt="finder"
                        width={50}
                        height={50}
                    />
                    <p>Click Me!</p>
                </div>
                {folderOpen ? <Folder setFolderOpen={setFolderOpen} /> : null}
            </div>
        </div>)
}

export default Laptop