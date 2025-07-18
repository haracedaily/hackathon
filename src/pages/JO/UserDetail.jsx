import UserD from "../../css/UserDetail.module.css"

function UserDetail({ user, onClose }) {
    return (
        <div className='flex-1 bg-white rounded-lg min-w-[260px]'>
            <div className="flex justify-between items-center px-4 pt-3">
                <h1 className="text-[1.25rem] text-[#656565] font-bold">회원상세</h1>
                <button
                    className="text-2xl cursor-pointer p-2"
                    onClick={onClose}
                >
                    <span>&times;</span>
                </button>
            </div>
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">이름</span>
                        <span>{user.name}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">생년월일</span>
                        <span>{user.name}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">연락처</span>
                        <span>{user.name}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">ID(e-mail)</span>
                        <span>{user.email}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">회원구분</span>
                        <span className={`inline-block px-6 py-1 rounded-full text-white text-base font-bold text-center ml-2
                            ${user.type === "방문객" ? "bg-[#FF9812]" : "bg-[#5CE24D]"}`}>
                            {user.type}
                        </span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">차단</span>
                        <label className={UserD.switch}>
                            <input type="checkbox" />
                            <span className={UserD.slider}></span>
                        </label>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">가입일</span>
                        <span>{user.status}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-bold">마지막접속: </span>
                        <span>{user.lastLogin}</span>
                    </div>
                </div>
        </div>
    );
}

export default UserDetail;
