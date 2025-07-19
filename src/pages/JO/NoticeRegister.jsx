import { useState } from "react";
import NoticeD from "../../css/NoticeDetail.module.css"

function NoticeRegister({ onClose, onSubmit }) {
    const [form, setForm] = useState({
        title: "", answer: "", status: "",
    });
    const handleChange = e => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };

    return (
        <div className='flex-1 bg-white rounded-lg min-w-[300px]'>
            <div className="flex justify-between items-center px-4 pt-3">
                <h1 className="text-[1.25rem] text-[#656565] font-bold">공지 등록</h1>
                <button
                    className="text-2xl cursor-pointer p-2"
                    onClick={onClose}
                >
                    <span>&times;</span>
                </button>
            </div>
            <div className="p-4">
                <label className="block mb-1 font-bold">제목</label>
                <input name="title" value={form.title} onChange={handleChange}
                    className="min-w-full border border-gray-400 p-2 rounded-lg mb-2" />
                <label className="block mb-1 font-bold">내용</label>
                <input name="answer" value={form.answer} onChange={handleChange}
                    className="min-w-full min-h-[94px] border border-gray-400 p-2 rounded-lg mb-2" />
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-1 items-center">
                        <span><img src="/images/ban.svg" alt="ban" className="ml-0.5 w-6 h-6" /></span>
                        <span className="font-bold">공개여부</span>
                    </div>
                    <label className={NoticeD.switch}>
                        <input type="checkbox" />
                        <span className={NoticeD.slider}></span>
                    </label>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-red-400 text-white font-bold rounded-lg px-4 py-1 cursor-pointer"
                        onClick={() => onSubmit(form)}
                    >등록하기</button>
                </div>
            </div>
        </div>
    );
}

export default NoticeRegister;
