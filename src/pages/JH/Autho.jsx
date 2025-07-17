import React, { useState } from "react"

function Autho({isTablet}) {
    const [groupData] = useState([
        {
            id: 1,
            number: "01",
            groupName: "최고관리자",
            children: [
                {
                    id: 11,
                    number: "01-1",
                    groupName: "부관리자",
                    name: "이부장",
                    position: "부장",
                    contact: "010-2345-6789",
                    children: [],
                },
                {
                    id: 12,
                    number: "01-2",
                    groupName: "팀장",
                    name: "박팀장",
                    position: "팀장",
                    contact: "010-3456-7890",
                    children: [],
                },
            ],
        },
        {
            id: 2,
            number: "02",
            groupName: "경영부서",
            children: [
                {
                    id: 21,
                    number: "02-1",
                    groupName: "기획팀",
                    name: "정기획",
                    position: "팀장",
                    contact: "010-5678-9012",

                },
                {
                    id: 211,
                    number: "02-1-1",
                    groupName: "기획1팀",
                    name: "김기획",
                    position: "대리",
                    contact: "010-6789-0123",

                },
                {
                    id: 22,
                    number: "02-2",
                    groupName: "총무팀",
                    name: "이총무",
                    position: "팀장",
                    contact: "010-7890-1234",

                },
            ],
        },
        {
            id: 3,
            number: "03",
            groupName: "관리부서",
            children: [
                {
                    id: 31,
                    number: "03-1",
                    groupName: "인사팀",
                    name: "조인사",
                    position: "팀장",
                    contact: "010-9012-3456",
                    children: [],
                },
            ],
        },
        {
            id: 4,
            number: "04",
            groupName: "파견부서",
            name: "",
            position: "",
            contact: "",
            children: [{
                id: 311,
                number: "03-1",
                groupName: "파견부서",
                name: "윤파견",
                position: "부장",
                contact: "010-0123-4567",

            },],
        },
    ])

    // 상태 관리
    const [expandedNodes, setExpandedNodes] = useState(new Set())
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    const [showNewRegistrationModal, setShowNewRegistrationModal] = useState(false)
    const [newEmployeeForm, setNewEmployeeForm] = useState({
        groupName: "",
        name: "",
        position: "",
        contact: "",
        email: "",
        department: "",
    })

    // 노드 펼치기/접기 토글
    const toggleNode = (nodeId) => {
        const newExpanded = new Set(expandedNodes)
        if (newExpanded.has(nodeId)) {
            newExpanded.delete(nodeId)
        } else {
            newExpanded.add(nodeId)
        }
        setExpandedNodes(newExpanded)
    }

    // 직원 선택 핸들러
    const handleEmployeeSelect = (node) => {
        setSelectedEmployee(node)
    }

    // 신규 등록 모달 열기
    const openNewRegistrationModal = () => {
        setShowNewRegistrationModal(true)
    }

    // 신규 등록 모달 닫기
    const closeNewRegistrationModal = () => {
        setShowNewRegistrationModal(false)
        setNewEmployeeForm({
            groupName: "",
            name: "",
            position: "",
            contact: "",
            email: "",
            department: "",
        })
    }

    // 폼 입력 핸들러
    const handleFormChange = (field, value) => {
        setNewEmployeeForm((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    // 신규 등록 제출
    const handleSubmitNewEmployee = (e) => {
        e.preventDefault()
        console.log("새 직원 등록:", newEmployeeForm)
        closeNewRegistrationModal()
    }

    // 레벨별 패딩 클래스 반환
    const getPaddingClass = (level) => {
        const paddingClasses = {
            0: "pl-0",
            1: "pl-5",
            2: "pl-10",
            3: "pl-16",
            4: "pl-20",
            5: "pl-24",
        }
        return paddingClasses[level] || "pl-24"
    }

    // 트리 노드 렌더링 함수
    const renderTreeNode = (node, level = 0) => {
        const hasChildren = node.children && node.children.length > 0
        const isExpanded = expandedNodes.has(node.id)
        const paddingClass = getPaddingClass(level)

        return (
            <React.Fragment key={node.id}>
                <tr
                    className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                    onClick={() => handleEmployeeSelect(node)}
                >
                    <td className="px-3 py-3 text-center">
                        <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </td>
                    <td className="px-3 py-3 text-sm text-gray-900 font-medium">{node.number}</td>
                    <td className="px-3 py-3">
                        <div className={`flex items-center justify-between ${paddingClass}`}>
                            <span className="text-sm text-gray-900 font-medium">{node.groupName}</span>
                            {hasChildren && (
                                <button
                                    className="ml-2 w-6 h-6 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs font-bold flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        toggleNode(node.id)
                                    }}
                                >
                                    {isExpanded ? "−" : "+"}
                                </button>
                            )}
                        </div>
                    </td>
                    <td className="px-3 py-3 text-sm text-gray-900">{node.name}</td>
                    <td className="px-3 py-3 text-sm text-gray-600">{node.position}</td>
                    <td className="px-3 py-3 text-sm text-gray-600">{node.contact}</td>
                </tr>

                {/* 하위 노드들 렌더링 */}
                {hasChildren && isExpanded && node.children.map((child) => renderTreeNode(child, level + 1))}
            </React.Fragment>
        )
    }

    // 검색 필터링
    const filterNodes = (nodes, searchTerm) => {
        console.log(searchTerm);
        console.log(nodes);
        if (!searchTerm) return nodes
        return nodes
            .filter((node) => {
                    return node.children?node.children.filter(item => { if(item)return item.name.includes(searchTerm)}).length>0:false;
                })
            .map((node) => ({
                ...node,
                children: node.children ? node.children.filter(item => { if(item)return item.name.includes(searchTerm)}) : [],
            }))
    }

    const filteredData = filterNodes(groupData, searchTerm)

    // 신규 등록 카드 컴포넌트
    const NewRegistrationCard = () => (
        <div className="bg-white rounded-lg shadow-sm p-6 h-fit sticky top-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-green-500">신규 등록</h3>
            <form onSubmit={handleSubmitNewEmployee} className="space-y-4">
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">그룹명</label>
                    <input
                        type="text"
                        value={newEmployeeForm.groupName}
                        onChange={(e) => handleFormChange("groupName", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                        placeholder="그룹명을 입력하세요"
                    />
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">이름</label>
                    <input
                        type="text"
                        value={newEmployeeForm.name}
                        onChange={(e) => handleFormChange("name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                        placeholder="이름을 입력하세요"
                    />
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">직급</label>
                    <select
                        value={newEmployeeForm.position}
                        onChange={(e) => handleFormChange("position", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                    >
                        <option value="">직급을 선택하세요</option>
                        <option value="대표">대표</option>
                        <option value="부장">부장</option>
                        <option value="팀장">팀장</option>
                        <option value="과장">과장</option>
                        <option value="대리">대리</option>
                        <option value="사원">사원</option>
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">연락처</label>
                    <input
                        type="tel"
                        value={newEmployeeForm.contact}
                        onChange={(e) => handleFormChange("contact", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                        placeholder="010-0000-0000"
                    />
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">이메일</label>
                    <input
                        type="email"
                        value={newEmployeeForm.email}
                        onChange={(e) => handleFormChange("email", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                        placeholder="email@example.com"
                    />
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">부서</label>
                    <input
                        type="text"
                        value={newEmployeeForm.department}
                        onChange={(e) => handleFormChange("department", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                        placeholder="부서명을 입력하세요"
                    />
                </div>
                <div className="flex gap-2 pt-4">
                    <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                        등록
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            setNewEmployeeForm({
                                groupName: "",
                                name: "",
                                position: "",
                                contact: "",
                                email: "",
                                department: "",
                            })
                        }
                        className="flex-1 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        초기화
                    </button>
                </div>
            </form>
        </div>
    )

    return (
        <div className="min-h-screen bg-gray-100 p-5">
            {/* 헤더 섹션 */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-5">권한설정</h2>

                {/* 컨트롤 섹션 */}
                <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <span className="text-gray-700 font-medium">권한 그룹 설정</span>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="직원이름을 입력해주세요"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                }}
                                className="w-full sm:w-64 px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-colors duration-200"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                                🔍
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            신규 직원
                        </button>
                        <button
                            onClick={isTablet ? openNewRegistrationModal : undefined}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            신규 등록
                        </button>
                    </div>
                </div>
            </div>

            {/* 메인 컨텐츠 - 3단 레이아웃 */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                {/* 좌측 영역 - 그룹권한 + 직원정보 */}
                <div className="xl:col-span-2 space-y-5">
                    {/* 그룹권한 테이블 (좌측 위) */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-600 text-white">
                                <tr>
                                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider w-12"></th>
                                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider w-20">번호</th>
                                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider">그룹명</th>
                                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider w-24">이름</th>
                                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider w-20">직급</th>
                                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider w-32">연락처</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {filteredData.map((node) => renderTreeNode(node))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 직원 정보 (좌측 하단) */}
                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">직원 정보</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedEmployee ? (
                                <>
                                    <div className="space-y-1">
                                        <span className="text-sm font-medium text-gray-600">그룹명</span>
                                        <div className="text-sm text-gray-900 p-3 bg-gray-50 rounded-md border">
                                            {selectedEmployee.groupName}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-sm font-medium text-gray-600">이름</span>
                                        <div className="text-sm text-gray-900 p-3 bg-gray-50 rounded-md border">
                                            {selectedEmployee.name}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-sm font-medium text-gray-600">직급</span>
                                        <div className="text-sm text-gray-900 p-3 bg-gray-50 rounded-md border">
                                            {selectedEmployee.position}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-sm font-medium text-gray-600">연락처</span>
                                        <div className="text-sm text-gray-900 p-3 bg-gray-50 rounded-md border">
                                            {selectedEmployee.contact}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-sm font-medium text-gray-600">번호</span>
                                        <div className="text-sm text-gray-900 p-3 bg-gray-50 rounded-md border">
                                            {selectedEmployee.number}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="col-span-full text-center py-12">
                                    <div className="text-gray-300 text-6xl mb-4">👤</div>
                                    <p className="text-gray-500 text-sm">직원을 선택해주세요</p>
                                    <p className="text-gray-400 text-xs mt-1">테이블에서 직원을 클릭하면 상세 정보가 표시됩니다</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* 우측 영역 - 신규 등록 카드 (데스크톱에서만 표시) */}
                {!isTablet && (
                    <div className="xl:col-span-1">
                        <NewRegistrationCard />
                    </div>
                )}
            </div>

            {/* 신규 등록 모달 (태블릿 이하에서만 표시) */}
            {isTablet && showNewRegistrationModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800">신규 등록</h3>
                            <button
                                onClick={closeNewRegistrationModal}
                                className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-4">
                            <form onSubmit={handleSubmitNewEmployee} className="space-y-4">
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">그룹명</label>
                                    <input
                                        type="text"
                                        value={newEmployeeForm.groupName}
                                        onChange={(e) => handleFormChange("groupName", e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                                        placeholder="그룹명을 입력하세요"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">이름</label>
                                    <input
                                        type="text"
                                        value={newEmployeeForm.name}
                                        onChange={(e) => handleFormChange("name", e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                                        placeholder="이름을 입력하세요"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">직급</label>
                                    <select
                                        value={newEmployeeForm.position}
                                        onChange={(e) => handleFormChange("position", e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                                    >
                                        <option value="">직급을 선택하세요</option>
                                        <option value="대표">대표</option>
                                        <option value="부장">부장</option>
                                        <option value="팀장">팀장</option>
                                        <option value="과장">과장</option>
                                        <option value="대리">대리</option>
                                        <option value="사원">사원</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">연락처</label>
                                    <input
                                        type="tel"
                                        value={newEmployeeForm.contact}
                                        onChange={(e) => handleFormChange("contact", e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                                        placeholder="010-0000-0000"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">이메일</label>
                                    <input
                                        type="email"
                                        value={newEmployeeForm.email}
                                        onChange={(e) => handleFormChange("email", e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">부서</label>
                                    <input
                                        type="text"
                                        value={newEmployeeForm.department}
                                        onChange={(e) => handleFormChange("department", e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors duration-200"
                                        placeholder="부서명을 입력하세요"
                                    />
                                </div>
                                <div className="flex gap-2 pt-4">
                                    <button
                                        type="submit"
                                        className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    >
                                        등록
                                    </button>
                                    <button
                                        type="button"
                                        onClick={closeNewRegistrationModal}
                                        className="flex-1 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    >
                                        취소
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Autho;