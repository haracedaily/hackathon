import React from 'react';
import {Calendar, FileText, Search} from "lucide-react";

function Test({isTablet}) {
    const measurementData = [
        {
            name: "파워링 대구 제스티브",
            startDate: "2025.05.10",
            endDate: "2025.05.11",
            location: "국제산업단지",
            manager: "김민지",
            contact: "010-1234-5678",
            status: "진행중",
            statusColor: "bg-blue-500",
        },
        {
            name: "대구역사시 한일문화 축제",
            startDate: "2025.05.08",
            endDate: "2025.05.11",
            location: "역사시 일원",
            manager: "박보영",
            contact: "010-1234-5678",
            status: "진행중",
            statusColor: "bg-blue-500",
        },
        {
            name: "아르미 페스티벌",
            startDate: "2025.05.10",
            endDate: "2025.05.11",
            location: "국제산업단지기업공원",
            manager: "고윤정",
            contact: "010-1234-5678",
            status: "진행중",
            statusColor: "bg-blue-500",
        },
        {
            name: "YES카지스존",
            startDate: "2025.05.31",
            endDate: "2025.06.01",
            location: "(재)대선문화재단",
            manager: "유성재",
            contact: "010-1234-5678",
            status: "진행중",
            statusColor: "bg-blue-500",
        },
        {
            name: "대구무용제",
            startDate: "2025.05.11",
            endDate: "",
            location: "대구무용예술관",
            manager: "이예은",
            contact: "010-1234-5678",
            status: "대기중",
            statusColor: "bg-orange-500",
        },
        {
            name: "파워링&트로트페스티벌",
            startDate: "2025.05.17",
            endDate: "",
            location: "(재)대구문화예술진흥원",
            manager: "류진욱",
            contact: "010-1234-5678",
            status: "대기중",
            statusColor: "bg-orange-500",
        },
    ]
    const chartData = [40, 65, 45, 50, 48, 52, 85, 45, 38, 55, 48, 75]
    const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]

    return (
        <>
            <div className="bg-blue-500 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-white text-lg font-medium">미처리건수</h2>
                    <span className="text-white text-3xl font-bold">5건</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-400 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <Calendar className="w-4 h-4 text-white" />
                            <span className="text-white text-sm">측정 신청 건수</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-white text-sm">총 건수</span>
                            <span className="text-white text-xl font-bold">50건</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                            <span className="text-white text-sm">처리 건수</span>
                            <span className="text-white text-xl font-bold">4건</span>
                        </div>
                    </div>

                    <div className="bg-blue-400 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <FileText className="w-4 h-4 text-white" />
                            <span className="text-white text-sm">오정사업 건수</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-white text-sm">총 건수</span>
                            <span className="text-white text-xl font-bold">50건</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                            <span className="text-white text-sm">처리 건수</span>
                            <span className="text-white text-xl font-bold">4건</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {/* Chart Section */}
                <div className="col-span-2">
                    {/* Chart */}
                    <div className="bg-white rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-medium mb-4">측정 현황</h3>
                        <div className="flex items-end space-x-2 h-48">
                            {chartData.map((value, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center">
                                    <div className="bg-pink-400 w-full rounded-t" style={{ height: `${(value / 100) * 100}%` }} />
                                    <span className="text-xs text-gray-500 mt-1">{months[index]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-lg">
                        <div className="p-6 border-b">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium">측정 리스트</h3>
                                <div className="flex items-center space-x-2">
                                    <div className="relative">
                                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="측정이름을 검색하세요"
                                            className="pl-10 pr-4 py-2 border rounded-lg text-sm"
                                        />
                                    </div>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">검색하기</button>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-scroll">
                            <table className="w-full">
                                <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">측정 이름</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">시작일</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">종료일</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">위치</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">담당자</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">연락처</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">상태</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {measurementData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.startDate}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.endDate}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.location}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.manager}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.contact}</td>
                                        <td className="px-6 py-4">
                            <span
                                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full text-white ${item.statusColor}`}
                            >
                              {item.status}
                            </span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="px-6 py-4 border-t">
                            <div className="flex justify-center space-x-2">
                                <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">{"<"}</button>
                                <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">1</button>
                                <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">2</button>
                                <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">3</button>
                                <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">4</button>
                                <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">5</button>
                                <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">{">"}</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Space */}
                <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-4">추가 정보</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-sm mb-2">최근 활동</h4>
                                <p className="text-sm text-gray-600">새로운 측정 요청이 있습니다.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-sm mb-2">알림</h4>
                                <p className="text-sm text-gray-600">3건의 미처리 항목이 있습니다.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-4">빠른 작업</h3>
                        <div className="space-y-2">
                            <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                <span className="text-sm font-medium">새 측정 등록</span>
                            </button>
                            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <span className="text-sm font-medium">보고서 생성</span>
                            </button>
                            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <span className="text-sm font-medium">설정 관리</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Test;