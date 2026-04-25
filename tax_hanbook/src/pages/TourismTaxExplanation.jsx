import React from 'react';
import { FileText } from 'lucide-react';

const TourismTaxExplanation = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Explanation of Tourism Tax</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>What is Tourism Tax?</h2>
          <p className="content-paragraph">
            Tourism Tax is a levy paid on accommodation service, which consists of providing a room or place to sleep or rest.
          </p>
        </section>

        <section className="content-section">
          <h2>Who must register for Tourism Tax?</h2>
          <p className="content-paragraph">
            A provider of room or place to sleep or rest has the following obligations:
          </p>
          <ul className="content-list">
            <li>to register for the tourism tax on accommodation with the Tax Administration;</li>
            <li>to charge the tourism tax on accommodation;</li>
            <li>to remit the tourism tax on accommodation to the Tax Administration within the time period provided for by the Law.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>What is the tax rate for Tourism Tax?</h2>
          <p className="content-paragraph">
            The rate of the tourism tax on accommodation is set at 3% of the amount paid or payable for accommodation, exclusive of value added tax.
          </p>
        </section>

        <section className="content-section">
          <h2>Tourism Tax Tab</h2>
          <p className="content-paragraph">
            This tab is applicable for any taxpayer who provides accommodation services.
          </p>
          <p className="content-paragraph">
            The 'Tourism' tab has 16 columns. Each row is for a separate accommodation transaction. For each transaction, enter details on:
          </p>
          <ul className="content-list">
            <li>Property type - On the list of value, select the business type (Hotel, Motel, etc).</li>
            <li>Room type – Based on selected property type, select the corresponding room type from the list of value (Single room, double room, etc).</li>
            <li>Client name or Code – Indicate the client's name or client code as per internal procedures.</li>
            <li>Room number – Indicate the room number according to the internal room numbering approach.</li>
            <li>Booking date (DD/MM/YYYY) – Enter the booking date.</li>
            <li>Check-in (DD/MM/YYYY) – Enter the check-in date.</li>
            <li>Check-out (DD/MM/YYYY) – Enter the exit date.</li>
            <li>Nationality – Enter the client's nationality.</li>
            <li>Country of residence – Enter the client's country of residence.</li>
            <li>Invoice No (SDCID/RECEIPT NUMBER) – Enter the invoice number (E.g: SDC004002498/6795).</li>
            <li>Day(s) spent in room I = (calculated based on (F&G) – Enter the number of days spent in the room.</li>
            <li>Room price/ per night - Enter the price charged on accommodation services.</li>
            <li>Invoice amount without VAT – Enter the amount as per EBM invoice net-off VAT.</li>
            <li>Accommodation amount (VAT excl.) – Enter the amount on invoice charged on accommodation services net-off VAT.</li>
            <li>Tax due O=(N*3/103) – Enter the amount of tourism tax calculated on 'Accommodation amount (VAT excl.)'</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TourismTaxExplanation;
