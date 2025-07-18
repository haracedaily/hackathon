import ReviewD from "../../css/ReviewDetail.module.css"

function ReviewDetail({ user, onClose }) {
    return (
        <div className='flex-1 bg-white rounded-lg min-w-[270px]'>
            <div className="flex justify-between items-center px-4 pt-3">
                <h1 className="text-[1.25rem] text-[#656565] font-bold">리뷰상세</h1>
                <button
                    className="text-2xl cursor-pointer p-2"
                    onClick={onClose}
                >
                    <span>&times;</span>
                </button>
            </div>
            {user ? (
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">축제명</span>
                        <span></span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">제목</span>
                        <span>{user.title}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">작성자</span>
                        <span>{user.email}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">닉네임</span>
                        <span></span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">작성일</span>
                        <span>{user.time}</span>
                    </div>
                    <div className="mb-4">
                        <p className="font-bold">내용</p>
                        <p className="bg-gray-200 rounded-2xl p-4 mt-2">오늘 처음으로 파워풀 페스티벌에 참여했는데 기대이상으로 너무 재미있었습니다! 아이들도 너무 좋아하고 온가족이 너무 재미있게 즐겼습니다. 앞으로 이런 축제가 많이 있었으면 좋겠습니다. 덕분에 올 더위 시원하게 날렸습니다!ㅎㅎ</p>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-1 items-center">
                            <span><img src="/images/crown.svg" alt="crown" /></span>
                            <span className="font-bold">베스트 리뷰 설정</span>
                        </div>
                        <label className={ReviewD.switch}>
                            <input type="checkbox" />
                            <span className={ReviewD.slider}></span>
                        </label>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-1 items-center">
                            <span><img src="/images/ban.svg" alt="ban" className="ml-0.5 w-6 h-6" /></span>
                            <span className="font-bold">공개여부</span>
                        </div>
                        <label className={ReviewD.switch}>
                            <input type="checkbox" />
                            <span className={ReviewD.slider}></span>
                        </label>
                    </div>
                </div>
            ) : (
                <div className="p-4 text-gray-400">
                    회원을 선택해주세요.
                </div>
            )}
        </div>
    );
}

export default ReviewDetail;
