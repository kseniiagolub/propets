import React from 'react';
import Animals from "./Animals";

const SectionInfo = () => {
    return (
        <section className={'container-fluid'}>
            <div className={'row justify-content-center'}>
                <Animals/>
            </div>
        </section>
    );
};

export default SectionInfo;