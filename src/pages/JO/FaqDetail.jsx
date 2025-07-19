import FaqD from "../../css/FaqDetail.module.css"

function FaqDetail({ user, onClose }) {
    return (
        <div className='flex-1 bg-white rounded-lg min-w-[270px]'>
            <div className="flex justify-between items-center px-4 pt-3">
                <h1 className="text-[1.25rem] text-[#656565] font-bold">FAQ 상세</h1>
                <button
                    className="text-2xl cursor-pointer p-2"
                    onClick={onClose}
                >
                    <span>&times;</span>
                </button>
            </div>
            <div className="p-4">
                <div className="mb-4">
                    <p className="font-bold">제목</p>
                    <p className="p-1 mt-2">{user.title}</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">내용</p>
                    <p className="bg-gray-200 rounded-2xl p-4 mt-2">
                        {user.answer}
                    </p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-1 items-center">
                        <span><img src="/images/ban.svg" alt="ban" className="ml-0.5 w-6 h-6" /></span>
                        <span className="font-bold">공개여부</span>
                    </div>
                    <label className={FaqD.switch}>
                        <input type="checkbox" />
                        <span className={FaqD.slider}></span>
                    </label>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-[#FF4F4F] text-white font-bold rounded-lg px-4 py-1 cursor-pointer">
                        수정하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FaqDetail;
