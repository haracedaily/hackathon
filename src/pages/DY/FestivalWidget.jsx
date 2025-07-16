import React from 'react';

function FestivalWidget() {
    const chartData = [70, 40, 50, 45, 60, 55, 66];
    const requestData = [30, 20, 25, 15, 35, 25, 30];
    const days = ['1', '2', '3', '4', '5', '6', '7'];

    return (
        <div className="bg-white rounded-2xl p-6 shadow-md mt-6 w-full h-full">
            <h3 className="text-lg font-semibold mb-4">축제 현황</h3>
            <div className="flex justify-end space-x-4 mt-2 text-sm">
                <div className="flex items-center space-x-1">
                    <span className="w-3 h-3 bg-pink-400 inline-block rounded-sm" />
                    <span>처리</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="w-3 h-3 bg-gray-300 inline-block rounded-sm" />
                    <span>미처리</span>
                </div>
            </div>
            <div className="flex items-end space-x-2 h-56">
                {chartData.map((festival, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center justify-end">
                        <div className="w-4 relative">
                            <div
                                className="bg-pink-400 rounded-t"
                                style={{ height: `${festival}px` }}
                            />
                            <div
                                className="bg-gray-300 rounded-t absolute bottom-0 left-0 right-0"
                                style={{ height: `${requestData[index]}px` }}
                            />
                        </div>
                        <span className="text-xs text-gray-500 mt-1">{days[index]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FestivalWidget;
