import { useState } from "react";
import Pagination from "../../component/Pagination";
import FaqDetail from "./FaqDetail";
import FaqRegister from "./FaqRegister";
import FaqS from "../../css/Faq.module.css"

function Faq({ isTablet }) {
    //isTablet max-width 960이면 true
    const [page, setPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showRegister, setShowRegister] = useState(false);

    const data = [{
        id: 1,
        title: "축제는 언제 어디서 열리나요?",
        answer: "정확한 위치는 홈페이지 내 지도와 게시글을 참고해주세요",
        write: "2025.05.10",
        modify: "2025.05.12",
        status: "공개"
    },
    {
        id: 2,
        title: "입장료가 있나요?",
        answer: "일부 체험 부스나 음식은 별도의 비용이 필요할 수 있습니다.",
        write: "2025.05.08",
        modify: "2025.05.11",
        status: "비공개"
    }
    ];

    const pageSize = 10;
    const totalPage = Math.ceil(data.length / pageSize);
    const pageData = data.slice((page - 1) * pageSize, page * pageSize);


    return (
        <div>
            <div>
                <h1 className="text-2xl text-[#656565] font-bold">FAQ</h1>
            </div>
            <div className='flex flex-wrap items-center justify-between bg-white rounded-lg p-4 my-5 gap-7'>
                <div className="flex flex-wrap items-center gap-7">
                    <div className='relative w-[300px]'>
                        <input type="text"
                            placeholder='제목 또는 내용을 입력해주세요.'
                            className="w-full border border-gray-300 rounded-lg p-2 pl-10"
                        />
                        <img
                            src="/images/searchimg.svg"
                            alt="search"
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        />
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className='flex items-center gap-2'>
                            <p className='text-[#656565] mr-1'>종류</p>
                            <select className="border w-[100px] border-gray-300 text-[#656565] rounded-lg py-2 text-center">
                                <option value="all" className='text-center'>전체</option>
                                <option value="public">공개</option>
                                <option value="private">비공개</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button className='bg-[#768395] text-white font-bold rounded-lg py-2 px-4 w-[100px] cursor-pointer'>
                            검색
                        </button>
                    </div>
                </div>
                <div>
                    <button
                        className='bg-[#6C93FF] text-white font-bold rounded-lg py-2 px-4 w-[100px] cursor-pointer'
                        onClick={() => setShowRegister(prev => !prev)}
                    >
                        등록하기
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap items-start gap-4 w-full">
                <div className="bg-white rounded-lg transition-all duration-300 flex-3 pb-4 min-w-[735px]">
                    <div className="flex justify-between items-center p-4">
                        <h1 className="text-[1.25rem] text-[#656565] font-bold">FAQ 리스트</h1>
                        <button className="flex cursor-pointer bg-[#77CBFF] text-white rounded-lg p-2 gap-3">
                            <img src="/images/excelbtn.svg" alt="excel" />
                            다운로드
                        </button>
                    </div>
                    <table className='mb-5 w-full table-fixed'>
                        <thead className='text-white bg-[#768395] h-[66px]'>
                            <tr>
                                <th className="w-[5%]"></th>
                                <th className="w-[5%]">번호</th>
                                <th className="w-[20%]">제목</th>
                                <th className="w-[20%]">답변</th>
                                <th className="w-[15%]">작성일</th>
                                <th className="w-[15%]">수정일</th>
                                <th className="w-[10%]">공개여부</th>
                                <th className="w-[10%]">관리</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {pageData.map((user, idx) => (
                                <tr
                                    key={user.id}
                                    className="text-[#656565] h-[66px] border-b border-b-[#D9D9D9]">
                                    <td><input type="checkbox" className={`cursor-pointer w-4 h-4 ${FaqS.checkbox}`} /></td>
                                    <td>{String((page - 1) * pageSize + idx + 1).padStart(2, "0")}</td>
                                    <td className="text-left truncate max-w-[100%] overflow-hidden whitespace-nowrap">
                                        {user.title}
                                    </td>
                                    <td className="text-left truncate max-w-[100%] overflow-hidden whitespace-nowrap">
                                        {user.answer}
                                    </td>
                                    <td>{user.write}</td>
                                    <td>{user.modify}</td>
                                    <td className={user.status === "공개" ? "text-[#6C93FF] font-bold" : "text-[#FF0000] font-bold"}>
                                        {user.status}
                                    </td>
                                    <td className='text-center pt-2 h-[66px] gap-2 min-w-[70px] cursor-auto'>
                                        <button className="cursor-pointer">
                                            <img src="/images/write1.svg"
                                                alt="btn1"
                                                className="w-8 h-8"
                                                onClick={() => {
                                                    if (selectedUser?.id === user.id) {
                                                        setSelectedUser(null);
                                                    } else {
                                                        setSelectedUser(user);
                                                    }
                                                }}
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        currentPage={page}
                        total={totalPage}
                        onChange={setPage}
                    />
                </div>
                {selectedUser && (
                    <div className="flex-1 transition-all duration-300">
                        <FaqDetail user={selectedUser} onClose={() => setSelectedUser(null)} />
                    </div>
                )}
                {showRegister && (
                    <div className="flex-1 transition-all duration-300">
                        <FaqRegister
                            onClose={() => setShowRegister(false)}
                            onSubmit={formData => {
                                // 등록 로직 추가
                                setShowRegister(false);
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Faq;