import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resumePdf from '../../assets/Images/CParadeise_Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
    const [pageState, setPageState] = useState({ numPages: null, pageNumber: 1 })
    const { numPages, pageNumber } = pageState;
    const onDocumentLoadSuccess = ({ numPages }) => {
        setPageState({
            ...pageState,
            numPages
        })
    }
    // const nextPage = (e) => {
    //     e.preventDefault();
    //     if ((pageNumber + 1) % numPages === 0) {
    //         setPageState({ numPages, pageNumber: 2 });
    //     } else {
    //         setPageState({ numPages, pageNumber: (pageNumber + 1) % numPages })
    //     }
    // }
    const onDocumentLoadError = (args) => {
        console.log('dubya', args);
    }
    return (
        <>
            <Document className="w-full flex flex-row" file={resumePdf} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError}>
                <Page className="w-1/2 mx-auto" pageNumber={1} />
                <Page className="w-1/2 mx-auto" pageNumber={2} />
            </Document>
            {/* <button className="absolute top-0 left-0" onClick={nextPage}>Next Page</button> */}
        </>
    )
}