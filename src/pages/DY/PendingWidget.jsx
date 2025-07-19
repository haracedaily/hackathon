import React from 'react';

function PendingWidget() {
    const today = new Date().toISOString().slice(0, 10);

    const totalPending = 5;
    const applyTotal = 50;
    const applyDaily = 4;
    const requestTotal = 50;
    const requestDaily = 4;

    return (
        <div className="bg-[#507FFF] rounded-2xl text-white p-6 w-full shadow-md h-full">
            {/* 상단 - 날짜 및 미처리건수 */}
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm">{today}</span>
                <span className="text-xl font-bold">미처리건수</span>
                <span className="text-2xl font-extrabold">{totalPending}건</span>
            </div>

            {/* 진행바 */}
            <div className="relative w-full h-3 bg-blue-100 rounded-full my-3">
                <div className="absolute left-0 top-0 h-3 bg-pink-400 rounded-full" style={{ width: '80%' }}></div>
            </div>

            {/* 하단 카드 */}
            <div className="mt-4 grid grid-cols-1 gap-3">
                {/* 축제신청건 */}
                <div className="bg-white text-blue-500 rounded-xl shadow-sm overflow-hidden">
                    <div className="bg-[#8491A3] p-2 px-4 text-sm text-white font-semibold">
                        축제 신청 건수
                    </div>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <img src="/img/festivalicon.png" alt="축제 아이콘" className="w-5 h-5" />
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-bold text-gray-800">{applyTotal}건</div>
                            <div className="text-sm text-gray-500">
                                일일 건수 <span className="font-bold text-blue-500">{applyDaily}건</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 요청사항건 */}
                <div className="bg-white text-blue-500 rounded-xl shadow-sm overflow-hidden">
                    <div className="bg-[#8491A3] p-2 px-4 text-sm text-white font-semibold">
                        요청사항 건수
                    </div>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <img src="/img/requesticon.png" alt="요청 아이콘" className="w-5 h-5" />
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-bold text-gray-800">{requestTotal}건</div>
                            <div className="text-sm text-gray-500">
                                일일 건수 <span className="font-bold text-blue-500">{requestDaily}건</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PendingWidget;
