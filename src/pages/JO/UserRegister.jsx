import { useState } from "react";

function UserRegister({ onClose, onSubmit }) {
    const [form, setForm] = useState({
        name: "", email: "", birth: "", phone: "", type: "방문객",
    });
    const handleChange = e => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };

    return (
        <div className='flex-1 bg-white rounded-lg min-w-[300px]'>
            <div className="flex justify-between items-center px-4 pt-3">
                <h1 className="text-[1.25rem] text-[#656565] font-bold">회원등록</h1>
                <button
                    className="text-2xl cursor-pointer p-2"
                    onClick={onClose}
                >
                    <span>&times;</span>
                </button>
            </div>
            <div className="p-4">
                <label className="block mb-1 text-[#656565] font-bold">이름</label>
                <input name="name" value={form.name} onChange={handleChange}
                    className="min-w-[50%] w-[50%] border border-gray-400 p-2 rounded-lg mb-2" />
                <label className="block mb-1 text-[#656565] font-bold">ID(e-mail)</label>
                <input name="email" value={form.email} onChange={handleChange}
                    className="min-w-[70%] w-[60%] border border-gray-400 p-2 rounded-lg mb-2" />
                <div className="flex gap-2">
                    <div className="flex-1">
                        <label className="block mb-1 text-[#656565] font-bold">생년월일</label>
                        <input name="birth" value={form.birth} onChange={handleChange}
                            className="w-full border border-gray-400 p-2 rounded-lg mb-2" />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1 text-[#656565] font-bold">연락처</label>
                        <input name="phone" value={form.phone} onChange={handleChange}
                            className="w-full border border-gray-400 p-2 rounded-lg mb-2" />
                    </div>
                </div>
                <label className="block mb-1 text-[#656565] font-bold">회원구분</label>
                <div className="flex gap-2 mb-2">
                    <button type="button"
                        className={`px-4 py-1 rounded-full text-base text-center cursor-pointer ${form.type === "방문객" ? "bg-orange-400 text-white font-bold" : "bg-gray-100 text-gray-400"}`}
                        onClick={() => setForm(f => ({ ...f, type: "방문객" }))}>방문객</button>
                    <button type="button"
                        className={`px-4 py-1 rounded-full text-base text-center cursor-pointer ${form.type === "관계자" ? "bg-green-400 text-white font-bold" : "bg-gray-100 text-gray-400"}`}
                        onClick={() => setForm(f => ({ ...f, type: "관계자" }))}>관계자</button>
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

export default UserRegister;
