import React from 'react';
import './DocumentsTable.css';

export default function DocumentsTable({ docs }) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr className="table-header">
            <th>Document Type</th>
            <th>Delivery Method</th>
          </tr>
        </thead>
        <tbody>
          {docs?.map((doc, index) => (
            <tr key={index} className="table-row">
              <td>{doc.document_type}</td>
              <td>{doc.is_paper_flag ? 'Paper' : 'Electronic'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
