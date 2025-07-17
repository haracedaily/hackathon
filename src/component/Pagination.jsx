// src/components/Pagination.jsx
import React from "react";

export default function Pagination({ currentPage, total, onChange }) {
    const pages = Array.from({ length: total }, (_, i) => i + 1);

    return (
        <div className="flex justify-center gap-3 mt-8">
            <button
                className="w-10 h-10  flex items-center justify-center rounded border border-gray-300 text-gray-400 hover:bg-gray-100 cursor-pointer"
                disabled={currentPage === 1}
                onClick={() => onChange(currentPage - 1)}
            >
                <img
                    src="/images/leftarrow.svg"
                    alt="이전"
                    className="w-5 h-5"
                />
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-2xl font-medium 
            ${currentPage === page
                            ? 'bg-[#768395] text-white'
                            : 'bg-white text-gray-400 hover:bg-gray-100'}`}
                    onClick={() => onChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-gray-400 hover:bg-gray-100 cursor-pointer"
                disabled={currentPage === total}
                onClick={() => onChange(currentPage + 1)}
            >
                <img
                    src="/images/rightarrow.svg"
                    alt="다음"
                    className="w-5 h-5"
                />
            </button>
        </div>
    );
}
