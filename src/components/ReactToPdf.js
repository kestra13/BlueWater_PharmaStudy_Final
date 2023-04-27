import React from 'react';
import { PDFDownloadLink, PDFViewer, Document, Page } from '@react-pdf/renderer';
import { Button } from 'react-bootstrap';

const ReactToPdf = () => {
  const MyDocument = () => (
    <Document>
      <Page>
        <h1>My PDF</h1>
        <p>This is a PDF generated from a React component using React-to-PDF.</p>
      </Page>
    </Document>
  );

  return (
    <div>
        
        <PDFViewer>
        <MyDocument />
      </PDFViewer>

      <p>

      </p>

      <Button variant="primary">
        <PDFDownloadLink document={<MyDocument />} fileName="my-pdf.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </Button>

      <p></p>
    </div>
  );
};

export default ReactToPdf;