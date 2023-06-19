import React, { useState } from 'react';
import '../static/css/App.css';
import DocumentsTable from './components/DocumentsTable/DocumentsTable';
import DropdownInput from './components/DropdownInput/DropdownInput';
import formatNumber from './helpers/formatNumber';
import useDocuments from './hooks/useDocuments';

const App = () => {
  const { accounts, prefDocuments, defaultAccount } = useDocuments();
  const [selectedValue, setSelectedValue] = useState(defaultAccount.account_key);
  const selectedDoc = prefDocuments.find((item) => item.account_key === selectedValue);

  const options = accounts.map((item) => ({
    label: `${item.description} ${formatNumber(item.id, item.typeDesc)} ${item.typeDesc}`,
    value: item.key,
  }));

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Demo Account and Document Preference Delivery</h1>
      </header>
      <main className="main-container">
        <div className="main-section-container">
          <DropdownInput options={options} value={selectedValue} onChange={handleChange} />
        </div>
        <div className="main-section-container">
          <DocumentsTable docs={selectedDoc?.docs} />
        </div>
      </main>
    </div>
  );
};

export default App;
