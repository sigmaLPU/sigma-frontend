import { useNavigate } from "react-router-dom";
import { NavSideBarLayout } from "../../routes";
import React, { useState } from "react";
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Technical(){

    const [selectedFile, setSelectedFile] = useState(null);
    const [compressedFile, setCompressedFile] = useState(null);

    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const compressPdf = async () => {
        // Load the PDF file
        const pdfBytes = await selectedFile.arrayBuffer();

        // Load the PDF document with image compression set to maximum
        const pdfDoc = await PDFDocument.load(pdfBytes, {
            updateMetadata: false,
            ignoreEncryption: true,
            imageCompression: 'maximum',
        });

        // Wait for the PDF document to be fully loaded


        // Remove unnecessary metadata
        pdfDoc.setProducer(''); // Set empty producer
        pdfDoc.setTitle(''); // Set empty title
        pdfDoc.setAuthor(''); // Set empty author

        // Flatten form fields and annotations


        // Compress the PDF document with autoCompress set to true
        const compressedPdfBytes = await pdfDoc.save({
            useCompression: true,
            compressHeader: true,
            objectStreams: true,
            useObjectStreams: true,
            updateFieldAppearances: false,
            autoCompress: true,
        });

        // Create a Blob object from the compressed PDF data
        const blob = new Blob([compressedPdfBytes], { type: 'application/pdf' });

        // Download the Blob as a file
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'compressed.pdf';
        link.click();
    };

    const navigate = useNavigate();

    return (
        <div>
            <NavSideBarLayout childCSS={{marginTop:"4rem"}}childSX={{flexGrow:1}}>
                <div style={{textAlign: "center", marginTop: "2rem"}}>
                    <h1 style={{marginBottom: "2rem"}}>PDF Compressor</h1>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <label htmlFor="pdf-upload" style={{marginRight: "1rem"}}>
                            Choose a PDF file to compress:
                        </label>
                        <input type="file" id="pdf-upload" onChange={onFileChange} />
                    </div>
                    <button onClick={compressPdf} style={{marginTop: "1rem", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "0.25rem", padding: "0.5rem 1rem", cursor: "pointer"}}>
                        Compress PDF
                    </button>
                    {compressedFile && (
                        <div style={{marginTop: "2rem", maxWidth: "100%"}}>
                            <Document file={{ data: compressedFile }}>
                                <Page pageNumber={1} />
                            </Document>
                        </div>
                    )}
                </div>
            </NavSideBarLayout>
        </div>
    );
}
