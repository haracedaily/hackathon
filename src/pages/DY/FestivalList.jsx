import React from 'react';

function FestivalList() {
    const data = [
        { name: '파워풀 대구 페스티벌', start: '2025.05.10', end: '2025.05.11', location: '국채보상로', manager: '김민지', phone: '010-1234-5678', status: '진행중' },
        { name: '대구약령시 한방문화 축제', start: '2025.05.08', end: '2025.05.11', location: '약령시 일원', manager: '박보검', phone: '010-1234-5678', status: '진행중' },
        { name: '아운화 페스티벌', start: '2025.05.10', end: '2025.05.11', location: '국채보상운동기념공원', manager: '고윤정', phone: '010-1234-5678', status: '진행중' },
        { name: 'YES키즈존', start: '2025.05.31', end: '2025.06.01', location: '(재)달성문화재단', manager: '육성재', phone: '010-1234-5678', status: '진행중' },
        { name: '대구무용제', start: '2025.05.11', end: '2025.05.11', location: '대구문화예술회관', manager: '이예은', phone: '010-1234-5678', status: '진행예정' },
        { name: '파워풀K-트로트페스티벌', start: '2025.05.17', end: '2025.05.17', location: '(재)대구문화예술진흥원', manager: '류진솔', phone: '010-1234-5678', status: '진행예정' },
    ];

    const statusColor = {
        '진행중': 'bg-blue-500',
        '진행예정': 'bg-yellow-400',
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-md mt-6 w-full overflow-auto">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">축제 리스트</h3>
                <div className="flex items-center space-x-2">
                    <input type="text" placeholder="회원이름을 검색해주세요" className="border px-3 py-2 rounded-md text-sm" />
                    <img src="/img/searchicon.png" alt="검색 아이콘" className="w-5 h-5" />
                    <button className="bg-green-500 text-white px-3 py-2 text-sm rounded-md flex items-center space-x-1">
                        <img src="/img/excelimage.png" alt="엑셀 이미지" className="w-5 h-5" />
                        <span>다운로드</span>
                    </button>
                </div>
            </div>
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="px-4 py-2">축제 이름</th>
                        <th className="px-4 py-2">시작일</th>
                        <th className="px-4 py-2">종료일</th>
                        <th className="px-4 py-2">위치</th>
                        <th className="px-4 py-2">담당자</th>
                        <th className="px-4 py-2">연락처</th>
                        <th className="px-4 py-2">상태</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {data.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.start}</td>
                            <td className="px-4 py-2">{item.end}</td>
                            <td className="px-4 py-2">{item.location}</td>
                            <td className="px-4 py-2">{item.manager}</td>
                            <td className="px-4 py-2">{item.phone}</td>
                            <td className="px-4 py-2">
                                <span className={`text-white px-2 py-1 rounded-full text-xs font-medium ${statusColor[item.status]}`}>
                                    {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4 space-x-1">
                {[1, 2, 3, 4, 5].map(num => (
                    <button
                        key={num}
                        className={`px-3 py-1 rounded border ${num === 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FestivalList;
