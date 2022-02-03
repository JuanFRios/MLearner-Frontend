/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import React from 'react';

const Sidebar = () => (
        <div className="flex flex-nowrap ">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div className="backgroudSB w-80 fixed h-full flex flex-col items-center content-center left-0 top-0 z-20 ">
                <div className="px-8 py-12">
                    <div className="flex flex-col items-center">
                        <div className='circle'>F</div>
                        <p className='text-gray-200 py-3 text-3xl font-bold'>Felipe Morales</p>
                    </div>
                    <ul className="mt-12 ">
                        <li className="flex w-full justify-between border-b text-gray-200 hover:text-green-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center ">
                                <span className="iconify" data-icon="majesticons:light-bulb" />
                                <span className="ml-2 text-2xl font-bold">Aprender</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between border-b text-gray-200 hover:text-green-500 cursor-pointer items-center">
                            <div className="flex items-center">
                                <span className="iconify" data-icon="ic:sharp-query-stats"/>
                                <span className="ml-2 text-2xl font-bold">Estadisticas</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="px-8 py-3 absolute bottom-4 text-gray-200 ">
                    <div className="flex items-center hover:text-green-500 cursor-pointer">
                        <span className="iconify" data-icon="ic:twotone-exit-to-app" />
                            <span className="text-xl ml-2 font-semibold">Cerrar sesión</span>
                    </div>
                </div>
            </div>          
            {/* Sidebar ends */}
        </div>
    )

export default Sidebar;
