import { useState } from "react";

import Pagination from "../../component/Pagination";
import UserDetail from "./UserDetail";
import UserRegister from "./UserRegister";

function User({ isTablet }) {
    //isTablet max-width 960이면 true
    const [page, setPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showRegister, setShowRegister] = useState(false);

    const data = [{
        id: 1,
        name: "김민지",
        email: "manjity@naver.com",
        type: "방문객",
        status: "활성",
        lastLogin: "2025.07.07",
    },
    {
        id: 2,
        name: "박보검",
        email: "bongumthi@nate.com",
        type: "관계자",
        status: "차단",
        lastLogin: "2024.03.12",
    }
    ];

    const pageSize = 7;
    const totalPage = Math.ceil(data.length / pageSize);
    const pageData = data.slice((page - 1) * pageSize, page * pageSize);

    return (
        <div>
            <div>
                <h1 className="text-2xl text-[#656565] font-bold">회원관리</h1>
            </div>
            <div className='flex flex-wrap items-center gap-5 mt-5'>
                <div className='flex flex-1 justify-between items-center min-w-[215px] min-h-[126px] bg-white rounded-lg p-4'>
                    <div>
                        <p className='text-[#656565]'>총 회원 수</p>
                        <p className='text-3xl font-bold mb-2'>150명</p>
                        <p className='text-[#656565]'>-2명 차단</p>
                    </div>
                    <div>
                        <img src="/images/headbox1.svg" />
                    </div>
                </div>
                <div className='flex flex-1 justify-between items-center min-w-[215px] min-h-[126px] bg-white rounded-lg p-4'>
                    <div>
                        <p className='text-[#656565]'>방문객</p>
                        <p className='text-3xl font-bold mt-2'>120명</p>
                    </div>
                    <div>
                        <img src="/images/headbox2.svg" />
                    </div>
                </div>
                <div className='flex flex-1 justify-between items-center min-w-[215px] min-h-[126px] bg-white rounded-lg p-4'>
                    <div>
                        <p className='text-[#656565]'>관리자</p>
                        <p className='text-3xl font-bold mt-2'>28명</p>
                    </div>
                    <div>
                        <img src="/images/headbox3.svg" />
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-between bg-white rounded-lg p-4 my-5 gap-7'>
                <div className="flex flex-wrap items-center gap-7">
                    <div className='relative w-[300px]'>
                        <input type="text"
                            placeholder='회원이름을 검색해주세요.'
                            className="w-full border border-gray-300 rounded-lg p-2 pl-10"
                        />
                        <img
                            src="/images/searchimg.svg"
                            alt="search"
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-7">
                        <div className='flex items-center gap-2'>
                            <p className='text-[#656565] w-[70px]'>회원구분</p>
                            <select className="border w-[100px] border-gray-300 text-[#656565] rounded-lg py-2 text-center">
                                <option value="all">전체</option>
                                <option value="member">방문객</option>
                                <option value="partner">관계자</option>
                            </select>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='text-[#656565] w-[70px]'>차단상태</p>
                            <select className="border w-[100px] border-gray-300 text-[#656565] rounded-lg py-2 text-center">
                                <option value="all" className='text-center'>전체</option>
                                <option value="active">활성</option>
                                <option value="block">차단</option>
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
                        onClick={() => setShowRegister(prev => !prev)}>
                        등록하기
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap items-start gap-4 w-full">
                <div className="bg-white rounded-lg transition-all duration-300 flex-3 pb-4 min-w-[735px]">
                    <div className="flex justify-between items-center p-4">
                        <h1 className="text-[1.25rem] text-[#656565] font-bold">회원리스트</h1>
                        <button className="flex cursor-pointer bg-[#77CBFF] text-white rounded-lg p-2 gap-3">
                            <img src="/images/excelbtn.svg" alt="excel" />
                            다운로드
                        </button>
                    </div>
                    <table className='mb-5 w-full '>
                        <thead className='text-white bg-[#768395] h-[66px]'>
                            <tr>
                                <th className="w-[10%]">번호</th>
                                <th className="w-[15%]">회원이름</th>
                                <th className="w-[20%]">아이디</th>
                                <th className="w-[15%] pl-2">회원구분</th>
                                <th className="w-[10%]">상태</th>
                                <th className="w-[20%]">마지막 접속</th>
                                <th className="w-[15%]">관리</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {pageData.map((user, idx) => (
                                <tr
                                    key={user.id}
                                    className={`text-[#656565] h-[66px] border-b border-b-[#D9D9D9] cursor-pointer
                                    ${selectedUser?.id === user.id ? "bg-[#f0f6ff]" : ""}
                                    `}
                                    onClick={() => {
                                        if (selectedUser?.id === user.id) {
                                            setSelectedUser(null);
                                        } else {
                                            setSelectedUser(user);
                                        }
                                    }}
                                >
                                    <td>{String((page - 1) * pageSize + idx + 1).padStart(2, "0")}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <span className={`inline-block px-6 py-2 rounded-full text-white text-base font-bold text-center ml-2
                                    ${user.type === "방문객" ? "bg-[#FF9812]" : "bg-[#5CE24D]"}`}>
                                            {user.type}
                                        </span>
                                    </td>
                                    <td className={user.status === "활성" ? "text-[#6C93FF] font-bold" : "text-[#FF0000] font-bold"}>
                                        {user.status}
                                    </td>
                                    <td>{user.lastLogin}</td>
                                    <td className='text-center pt-2 h-[66px] gap-2 min-w-[70px] cursor-auto'
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <button className="cursor-pointer">
                                            <img src="/images/memberbtn1.svg"
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
                                        <button className="cursor-pointer">
                                            <img src="/images/memberbtn2.svg"
                                                alt="btn2"
                                                className="w-8 h-8"
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
                        <UserDetail user={selectedUser} onClose={() => setSelectedUser(null)} />
                    </div>
                )}
                {showRegister && (
                    <div className="flex-1 transition-all duration-300">
                        <UserRegister
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

export default User;