import React from 'react';
import PendingWidget from './PendingWidget';
import FestivalWidget from './FestivalWidget';
import FestivalList from './FestivalList';

function DashBoard({ isTablet }) {
    return (
        <>
            {/* title */}
            <h1 className="text-5xl mb-6">대시보드</h1>
            {/* top */}
            <div className="flex flex-col lg:flex-row gap-6 mb-6 items-stretch">
                <PendingWidget />
                <FestivalWidget />
            </div>
            {/* listtable */}
            <FestivalList />
        </>
    );
}

export default DashBoard;