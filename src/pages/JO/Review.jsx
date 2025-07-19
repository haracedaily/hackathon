import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Pagination from "../../component/Pagination";
import ReviewDetail from "./ReviewDetail"

function Review({ isTablet }) {
    //isTablet max-width 960이면 true
    const [page, setPage] = useState(1);
    const [startDate, setStartDate] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    const data = [{
        id: 1,
        title: "파워풀 대구 페스티벌 후기",
        time: "2025.05.10",
        email: "manjity@naver.com",
        status: "공개",
        like: 10
    },
    {
        id: 2,
        title: "대구약령시 한방문화 축제 후기",
        time: "2025.05.08",
        email: "bongumthi@nate.com",
        status: "비공개",
        like: 5
    }
    ];

    const pageSize = 7;
    const totalPage = Math.ceil(data.length / pageSize);
    const pageData = data.slice((page - 1) * pageSize, page * pageSize);


    return (
        <div>
            <div>
                <h1 className="text-2xl text-[#656565] font-bold">리뷰관리</h1>
            </div>
            <div className='flex flex-wrap items-center gap-5 mt-5'>
                <div className='flex-1 min-w-[300px] bg-[#6C93FF] rounded-lg p-4'>
                    <div className='flex items-center gap-5 text-white'>
                        <p className='font-bold'>총 리뷰</p>
                        <p className='text-2xl font-bold'>64건</p>
                    </div>
                    <div className='flex justify-around items-center rounded-lg mt-2 bg-white mx-auto'>
                        <div className='flex items-center h-[54px] gap-5'>
                            <p className='bg-[#6C93FF] rounded-full w-13 text-white text-center p-1'>공개</p>
                            <p className='text-2xl font-bold'>60건</p>
                        </div>
                        <div className='flex items-center h-[54px] gap-5'>
                            <p className='bg-[#6C93FF] rounded-full w-15 text-white text-center p-1'>비공개</p>
                            <p className='text-2xl font-bold'>4건</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-1 justify-between items-center min-w-[215px] min-h-[126px] bg-white rounded-lg p-4'>
                    <div>
                        <p className='text-[#656565]'>신규리뷰</p>
                        <p className='text-3xl font-bold mt-2'>10건</p>
                    </div>
                    <div>
                        <img src="/images/reviewhead1.svg" />
                    </div>
                </div>
                <div className='flex flex-1 justify-between items-center min-w-[215px] min-h-[126px] bg-white rounded-lg p-4'>
                    <div>
                        <p className='text-[#656565]'>베스트리뷰</p>
                        <p className='text-3xl font-bold mt-2'>7건</p>
                    </div>
                    <div>
                        <img src="/images/reviewhead2.svg" />
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-lg p-4 my-5'>
                <div className="flex flex-wrap items-center gap-5">
                    <div className='relative w-[280px]'>
                        <input type="text"
                            placeholder='제목 또는 이름을 검색해주세요.'
                            className="w-full border border-gray-300 rounded-lg p-2 pl-10"
                        />
                        <img
                            src="/images/searchimg.svg"
                            alt="search"
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/images/calendar.svg" alt="calendar" className="mb-1" />
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="날짜 선택"
                            className="border border-gray-300 rounded-lg p-2 w-[140px] text-center"
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[#656565] w-[70px]'>리뷰구분</p>
                        <select className="border w-[100px] border-gray-300 text-[#656565] rounded-lg py-2 text-center">
                            <option value="all">전체</option>
                            <option value="public">공개</option>
                            <option value="pprivate">비공개</option>
                        </select>
                    </div>
                    <div>
                        <button className='bg-[#768395] text-white font-bold rounded-lg py-2 px-4 w-[100px] cursor-pointer'>
                            검색
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-start gap-4 w-full">
                <div className="bg-white rounded-lg transition-all duration-300 flex-3 pb-4 min-w-[735px]">
                    <div className="flex justify-between items-center p-4">
                        <h1 className="text-[1.25rem] text-[#656565] font-bold">전체 리뷰</h1>
                        <button className="flex cursor-pointer bg-[#77CBFF] text-white rounded-lg p-2 gap-3">
                            <img src="/images/excelbtn.svg" alt="excel" />
                            다운로드
                        </button>
                    </div>
                    <table className='mb-5 w-full table-fixed'>
                        <thead className='text-white bg-[#768395] h-[66px]'>
                            <tr>
                                <th className="w-[10%]">번호</th>
                                <th className="w-[30%]">제목</th>
                                <th className="w-[20%]">작성일</th>
                                <th className="w-[25%]">작성자</th>
                                <th className="w-[15%] px-2">공개여부</th>
                                <th className="w-[13%] px-2">공감수</th>
                                <th className="w-[13%] px-2">베스트리뷰</th>
                                <th className="w-[10%]">관리</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {pageData.map((user, idx) => (
                                <tr
                                    key={user.id}
                                    className="text-[#656565] h-[66px] border-b border-b-[#D9D9D9]">
                                    <td>{String((page - 1) * pageSize + idx + 1).padStart(2, "0")}</td>
                                    <td className="text-left truncate max-w-[100%] overflow-hidden whitespace-nowrap">{user.title}</td>
                                    <td>{user.time}</td>
                                    <td className='truncate max-w-[100%] overflow-hidden whitespace-nowrap'>{user.email}</td>
                                    <td className={user.status === "공개" ? "text-[#6C93FF] font-bold" : "text-[#FF0000] font-bold"}>
                                        {user.status}
                                    </td>
                                    <td>{user.like}</td>
                                    <td></td>
                                    <td className='text-center pt-2 h-[66px] gap-2 min-w-[70px] cursor-auto'>
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
                        <ReviewDetail user={selectedUser} onClose={() => setSelectedUser(null)} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Review;