import React from 'react';
import './DocumentsTable.css';

export default function DocumentsTable({ docs }) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr className="table-header">
            <th scope="col">Document Type</th>
            <th scope="col">Delivery Method</th>
          </tr>
        </thead>
        <tbody>
          {docs?.map((doc) => (
            <tr key={doc.document_type} className="table-row">
              <td>{doc.document_type}</td>
              <td>{doc.is_paper_flag ? 'Paper' : 'Electronic'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
