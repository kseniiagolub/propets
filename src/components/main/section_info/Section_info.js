import React from 'react';
import Animals from "./Animals";
import Info from "./Info";

const SectionInfo = () => {
    return (
        <section className={'container-fluid'}>
            <div className={'row justify-content-center'}>
                <Animals/>
                <Info/>
            </div>
        </section>
    );
};

export default SectionInfo;