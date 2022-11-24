import React from 'react';
import meat from '../assets/image/food/meat.svg';
import cheese from '../assets/image/food/cheese.svg';
import salad from '../assets/image/food/salad.svg';
import tomato from '../assets/image/food/tomato.svg';

const DragItemMeat = () => {
    return (
        <li className="drag-wrapper">
            <p className="drag-wrapper-item-meat">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 arrows-pointing-out"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                </svg>
                會員系統 (登入、註冊、權限管理)
            </p>
            <img src={meat} alt="meat on screen" />
        </li>
    );
};

const DragItemCheese = () => {
    return (
        <li className="drag-wrapper">
            <div className="drag-wrapper-item-cheese">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 arrows-pointing-out"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                </svg>
                <div className="flex flex-col">
                    <span>前台職缺列表</span>
                    <span className="text-base">
                        (職缺詳細內容、點選可發送應徵意願)
                    </span>
                </div>
            </div>

            <img src={cheese} alt="tomato on screen" />
        </li>
    );
};

const DragItemSalad = () => {
    return (
        <li className="drag-wrapper ml-[152px]">
            <p className="drag-wrapper-item-salad">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 arrows-pointing-out"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                </svg>
                應徵者的線上履歷編輯器
            </p>
            <img src={salad} alt="meat on screen" />
        </li>
    );
};

const DragItemTomato = () => {
    return (
        <li className="drag-wrapper ml-[152px]">
            <div className="drag-wrapper-item-tomato">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 arrows-pointing-out"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                </svg>
                <div className="flex flex-col">
                    <span>後台職缺管理功能</span>
                    <span className="text-base">
                        (資訊上架、下架、顯示應徵者資料)
                    </span>
                </div>
            </div>

            <img src={tomato} alt="tomato on screen" />
        </li>
    );
};

export { DragItemMeat, DragItemCheese, DragItemSalad, DragItemTomato };
