import React from 'react';
import Animals from "./Animals";
import Info from "./Info";

const SectionInfo = () => {
    return (
        <section className={`container-fluid`}>
            <div className={'row justify-content-center mb-5'}>
                <div className={'d-flex col-8'}>
                    <Animals/>
                    <Info/>
                </div>
            </div>
        </section>
    );
};

export default SectionInfo;