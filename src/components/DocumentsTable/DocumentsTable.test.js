import { render } from '@testing-library/react';
import React from 'react';
import DocumentsTable from './DocumentsTable';

test('renders DocumentsTable without crashing', () => {
  render(
    <DocumentsTable
      docs={[
        { document_type: 'T', is_paper_flag: false },
        { document_type: 'A', is_paper_flag: false },
        { document_type: 'C', is_paper_flag: false },
        { document_type: 'S', is_paper_flag: false },
      ]}
    />,
  );
});
