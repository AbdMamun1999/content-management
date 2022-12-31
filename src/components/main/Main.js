import React from 'react';
import Contents from './Contents';
import Recent from './Recent';
import SortMenu from './SortMenu';

const Main = () => {
    return (
        <div className='w-[75%] mx-auto grid sm:grid-cols-1 lg:grid-cols-4 gap-x-3 gap-y-5'>
            <SortMenu/>
            <Contents/>
            <Recent/>
        </div>
    );
};

export default Main;