import { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import Po from '../assets/image/introduce/po-introduce.svg';
import jiralogo from '../assets/image/logo/jira-logo.png';
import burgerTop from '../assets/image/burger-top.svg';
import burgerBottom from '../assets/image/burger-bottom.svg';

import {
    DragItemMeat,
    DragItemCheese,
    DragItemSalad,
    DragItemTomato,
} from '../components/DragItems';
const Step3 = ({ addStep }) => {
    const [page, setPage] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);
    const addPage = () => {
        setPage(page + 1);
    };
    return (
        <>
            <div className="flex-center-col gap-5">
                <Title text={'產品代辦清單 (Product Backlog)'} />
                {page === 1 && (
                    <div className="glass board">
                        <div className="flex items-end gap-10">
                            <>
                                <img
                                    className="inline-block"
                                    src={Po}
                                    alt="character on screen"
                                />

                                <div className="w-[493px] h-[236px] p-10 bg-white rounded-xl">
                                    <p className="text-start">
                                        相信你已經了解我們的團隊了，請你協助我們一起完成「人才招募系統」專案吧!
                                        待會要開短衝規劃會議，得先把
                                        <span className="text-Mblue-200">
                                            產品待辦清單
                                            <span className="text-Mblue-200">
                                                (Product Backlog)
                                            </span>
                                        </span>
                                        <br />
                                        給整理出來才行。 我們公司也推薦使用
                                        <span className="text-Mblue-200">
                                            Jira
                                        </span>
                                        來做任務管理喔。
                                    </p>
                                </div>
                                <div className="absolute bottom-[30px] left-[30px]">
                                    <img
                                        src={jiralogo}
                                        alt="jira logo on screen"
                                    />
                                </div>
                                <div className="absolute bottom-[30px] right-[30px]">
                                    <Button
                                        text={'接受挑戰'}
                                        addStep={page === 2 ? addStep : addPage}
                                    />
                                </div>
                            </>
                        </div>
                    </div>
                )}
                {page === 2 && (
                    <div className="glass board-type-p0">
                        <div className="border border-[#AAAAAA] rounded-xl w-[1220px] h-[491px] flex justify-between py-[25px] pr-[100px] pl-10">
                            <div className="flex justify-between flex-col">
                                <h5>「人才招募系統」內容物</h5>
                                <ul className="flex gap-7.5 flex-col mb-4">
                                    <DragItemMeat />
                                    <DragItemSalad />
                                    <DragItemCheese />
                                    <DragItemTomato />
                                </ul>
                            </div>
                            <div>
                                <div className="flex gap-[6px] flex-col">
                                    <h5>產品待辦清單（Product Backlog）</h5>
                                    <img src={burgerTop} alt="burger on top" />

                                    <div className="drag-border" />
                                    <div className="drag-border" />
                                    <div className="drag-border" />
                                    <div className="drag-border" />

                                    <img
                                        src={burgerBottom}
                                        alt="burger on bottom"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-[30px] right-[30px]">
                            <Button
                                text={'完成'}
                                addStep={page === 2 ? addStep : addPage}
                                // disabled={isCompleted}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Step3;
