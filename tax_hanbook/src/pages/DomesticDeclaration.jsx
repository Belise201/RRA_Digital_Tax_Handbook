import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const DomesticDeclaration = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Step-by-Step guide to declaring domestic taxes</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Step 1: Log-in to E-Tax</h2>
                    <p className="content-paragraph">
                        Access the E-Tax website at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a> or through the RRA website <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://www.rra.gov.rw</a> and clicking on 'Pay Domestic taxes here' on the right of the screen. This loads the following login screen:
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_03.png" alt="E-Tax Login Screen">
                            <img
                                src="/images/e_tax_03.png"
                                alt="E-Tax Login Screen"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        Login using the TIN and E-Tax password.
                    </p>
                    <p className="content-paragraph">
                        <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> if the TIN is not known. If a taxpayer does not know their password, it can be reset by clicking 'Get Password?' on the E-Tax system login and receiving a new password by SMS and email to the address used when registering.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step 2: Download, complete, validate and save annexures</h2>
                    <p className="content-paragraph">
                        After logging in, the E-Tax home page is loaded as shown below.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_04.png" alt="E-Tax Home Page">
                            <img
                                src="/images/e_tax_04.png"
                                alt="E-Tax Home Page"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        The first step of declaring domestic taxes is to download, complete and save the annexures of that tax type.
                    </p>
                    <p className="content-paragraph">
                        To download annexures, hover the mouse over 'Annexure Downloads' on the top-right hand side of the E-Tax homepage, and click on the applicable tax type to download the annexures.
                    </p>
                    <p className="content-paragraph">
                        This will start a download of a spreadsheet file which can be opened in Microsoft Excel or other spreadsheet software.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_05.png" alt="E-Tax Annexure Downloads">
                            <img
                                src="/images/e_tax_05.png"
                                alt="E-Tax Annexure Downloads"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        The annexures differ depending upon the tax type. For details on a specific tax type, view the relevant chapter of this Tax Handbook.
                    </p>
                    <p className="content-paragraph">
                        Annexures have an 'Instructions' tab and at least one other tab to be completed. Only the tabs that are relevant to the taxpayer in that tax period need to be completed. Each relevant tab must be completed, validated and saved separately.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 3</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            For VAT, the annexure is titled 'VatAnnexure_1.1.xlsm'. The VAT annexure has six tabs: Instructions, Sales, Purchases, VAT Importation, Deductible VAT Reverse and VAT Retained.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_06.png" alt="VAT Annexure Tabs">
                            <img
                                src="/images/e_tax_06.png"
                                alt="VAT Annexure Tabs"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        There are five important things to note when completing the annexures of all domestic taxes. This concern:
                    </p>
                    <ul className="content-list">
                        <li>Enabling Content</li>
                        <li>Date Format</li>
                        <li>Blank Cells</li>
                        <li>Mac computers</li>
                        <li>Validating and Saving</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Enabling Content</h3>
                    <p className="content-paragraph">
                        The first thing that must always be done after opening the spreadsheet is to enable the active content. Without enabling content, it is not possible to validate or save the annexures. The process of enabling content varies depending upon the spreadsheet software.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 4</h3>
                        <p className="content-paragraph">
                            To enable content using Microsoft Excel 2007, when the document opens click 'Options' on the 'Security Warning' at the top of the screen.
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            In the resulting 'Security Alert – Macros & ActiveX' box that opens, click to 'Enable this content' then 'OK'. These steps are shown below.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_07.png" alt="Excel Security Warning">
                            <img
                                src="/images/e_tax_07.png"
                                alt="Excel Security Warning"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_08.png" alt="Excel Security Alert">
                            <img
                                src="/images/e_tax_08.png"
                                alt="Excel Security Alert"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Date Format</h3>
                    <p className="content-paragraph">
                        In order to validate the annexure, all dates must be entered in the required format of dd/mm/yyyy. However, it is also important to note that the annexures will not validate if the date settings of the computer are also not in the format of dd/mm/yyyy. This may show the following error message, even if the dates entered in the cells are in the correct format.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_09.png" alt="Date Format Error Message">
                            <img
                                src="/images/e_tax_09.png"
                                alt="Date Format Error Message"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        The process of changing the date format of the computer varies depending on the computer operating system. Date formats are often linked to the language settings of the operating system; E-Tax is set to English (UK).
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 5</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            To change the date settings on Windows 7, click: Control Panel → Clock, Language and Region → Region and Language → Change the date, time or number format → Format: English (United Kingdom) → Short Date: dd/MM/yyyy.
                        </p>
                    </div>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Blank Cells</h3>
                    <p className="content-paragraph">
                        If any data is entered in a row, then that row must be completed before validating. In addition, the majority of columns cannot be left empty. This may show the following error message.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_10.png" alt="Blank Cells Error Message">
                            <img
                                src="/images/e_tax_10.png"
                                alt="Blank Cells Error Message"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 6</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Rukundo is completing the Sales tab of the VAT Annexure. In one particular transaction, there are no Exempt Sales. In order to validate and save correctly, Rukundo must enter '0' in the 'Exempted Sales Amount' column instead of leaving it empty.
                        </p>
                    </div>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Mac computers</h3>
                    <p className="content-paragraph">
                        The E-Tax system is not yet fully compatible with Apple Mac computers. If the taxpayer is using a Mac computer and the annexure is failing to validate and save, despite enabling the content, using the correct date format and avoiding blank cells, there may be an issue with compatibility. Try again using a Windows computer.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Validating and Saving</h3>
                    <p className="content-paragraph">
                        Annexures are saved in a different way to other spreadsheets. For each tab, once all data is entered for the tax period, click the validate button within the excel spreadsheet.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_11.png" alt="Validate Button in Excel">
                            <img
                                src="/images/e_tax_11.png"
                                alt="Validate Button in Excel"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        This will check that all data is entered in the required formats. If this is the case, it will automatically save a text file under the folder C:/RRA in the user's local machine.
                    </p>
                    <p className="content-paragraph">
                        If any of the format rules are violated, it will alert an error message and the file will not be created. The error message explains what needs to be corrected.
                    </p>
                    <p className="content-paragraph">
                        Even after the file is created, any changes can still be made. Clicking validate, this will save over and replace the previous file.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step 3: Select and complete the declaration form</h2>
                    <p className="content-paragraph">
                        After all the relevant annexures have been downloaded, completed, validated and saved, the declaration form can be completed. This requires logging back into E-Tax and accessing the homepage.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_11.png" alt="E-Tax Homepage">
                            <img
                                src="/images/e_tax_11.png"
                                alt="E-Tax Homepage"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        Hover the mouse over 'Tax Declaration' in the left side of the E-Tax homepage, and then click on 'New Declaration' from the list that appears. To revise previously submitted declarations, click on 'Submitted Declarations'. Clicking 'New Declaration' leads to the following screen.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_13.png" alt="New Declaration Screen">
                            <img
                                src="/images/e_tax_13.png"
                                alt="New Declaration Screen"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        Without changing the type, year or tax type, click 'Submit' to continue to the 'Document Details' page.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_14.png" alt="Document Details Page">
                            <img
                                src="/images/e_tax_14.png"
                                alt="Document Details Page"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        The 'Document Details' page lists all un-submitted tax declarations. The status column is set to 'In progress' if any declaration details have been entered, or 'pending' if no details have yet been entered. Once a declaration has been submitted, it is no longer accessible on this screen.
                    </p>
                    <p className="content-paragraph">
                        To enter a tax declaration, click on the document number of the relevant tax type and tax period. Ensure the correct tax type and tax period is chosen.
                    </p>
                    <p className="content-paragraph">
                        If a taxpayer wishes to declare for a particular tax type, or tax period, and this is not available on the 'Document Details' screen, the taxpayer can request for it to be added by visiting RRA offices or calling the RRA Call Centre toll-free on 3004.
                    </p>
                    <p className="content-paragraph">
                        Having clicked on the document number of the relevant tax type and tax period, the screen now focuses on that particular declaration, as seen below. The first step is to click on 'Enter Declaration'.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_15.png" alt="Enter Declaration Screen">
                            <img
                                src="/images/e_tax_15.png"
                                alt="Enter Declaration Screen"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        This opens the declaration form. The white boxes are entry fields where numbers must be entered (or left as zero). After all the necessary fields are entered, click to 'save' and automatically calculate the grey calculation boxes, including the tax due.
                    </p>
                    <p className="content-paragraph">
                        Many of the rows in the declaration form are similar to the columns of the annexures that have previously been completed. The important distinction is that in the declaration form, the total combined values for all rows during that tax period must be entered.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 7</h3>
                        <p className="content-paragraph">
                            Amahoro enters the details of her monthly VAT declaration, shown below. After entering the details in the white boxes, she clicks 'save' and the VAT due for Amahoro this tax period is calculated automatically.
                        </p>
                        <div style={{ margin: '1rem 0', textAlign: 'center' }}>
                            <ImageModal src="/images/e_tax_16.png" alt="VAT Declaration Form">
                                <img
                                    src="/images/e_tax_16.png"
                                    alt="VAT Declaration Form"
                                    style={{
                                        maxWidth: '500px',
                                        maxHeight: '355px',
                                        width: 'auto',
                                        height: 'auto',
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                    }}
                                />
                            </ImageModal>
                        </div>
                        <div style={{ margin: '1rem 0', textAlign: 'center' }}>
                            <ImageModal src="/images/e_tax_17.png" alt="VAT Declaration Saved">
                                <img
                                    src="/images/e_tax_17.png"
                                    alt="VAT Declaration Saved"
                                    style={{
                                        maxWidth: '500px',
                                        maxHeight: '355px',
                                        width: 'auto',
                                        height: 'auto',
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                    }}
                                />
                            </ImageModal>
                        </div>
                    </div>
                    <p className="content-paragraph">
                        After saving the declaration form and checking that the fields entered were correct, click 'Continue with Upload Annexures'.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step 4: Upload annexures, compare with the declaration form and submit the declaration</h2>
                    <p className="content-paragraph">
                        To support the declaration form, the previously validated and saved annexures must also be uploaded as evidence. The annexures that can be uploaded depend upon the tax type that is being declared. Each annexures tab is uploaded separately.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 8</h3>
                        <p className="content-paragraph">
                            Amahoro continues her VAT declaration as saved above. She uploads 'Sales', 'Local Purchase', 'VAT Importation' and 'VAT Retained' annexures as required. She has no 'Deductible VAT Reverse' to declare in this tax period, so this annexure is not uploaded.
                        </p>
                        <div style={{ margin: '1rem 0', textAlign: 'center' }}>
                            <ImageModal src="/images/e_tax_17.png" alt="Upload Annexures Screen">
                                <img
                                    src="/images/e_tax_17.png"
                                    alt="Upload Annexures Screen"
                                    style={{
                                        maxWidth: '500px',
                                        maxHeight: '355px',
                                        width: 'auto',
                                        height: 'auto',
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                    }}
                                />
                            </ImageModal>
                        </div>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            For each of the applicable annexures, she clicks 'Upload', then 'Choose File'. All annexures are automatically saved in the C: drive, in the 'RRA' folder. Once selected, she clicks submit, and repeats for all relevant annexures.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_18.png" alt="Annexures Uploaded">
                            <img
                                src="/images/e_tax_18.png"
                                alt="Annexures Uploaded"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        After annexures have been uploaded, they can be checked by clicking on 'view', and changed by clicking on 'delete' and then re-uploading. Once all relevant annexures are uploaded and correct, click on 'Compare with Declaration'.
                    </p>
                    <p className="content-paragraph">
                        This allows comparison of information between the declaration and the annexures. If these are equal, then certify that the entries on this declaration are true and correct and confirm understanding that a false declaration may result in prosecution by clicking on 'I accept'. Then submit the declaration by clicking 'Submit'.
                    </p>
                    <p className="content-paragraph">
                        If the declaration and annexures are not equal, it is not possible to submit the declaration. Either the declaration or the annexures must then be changed until they are equal and accurate. To change the declaration form, click 'Modify Declaration'. To change the annexures, click 'Delete' on the relevant annexure, make necessary changes in the annexure's spreadsheet, validate and save as before, and then re-upload the revised annexures. Then follow the same steps as before to certify and submit the declaration.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 9</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Amahoro checks that the values of the declaration form and annexures are equal, certifies that the values are true and correct, then submits the VAT declaration.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_19.png" alt="Declaration Submission">
                            <img
                                src="/images/e_tax_19.png"
                                alt="Declaration Submission"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        There may be a slight delay as the declaration is submitted. If the declaration is submitted successfully, the following screen is loaded.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_tax_20.png" alt="Declaration Success Screen">
                            <img
                                src="/images/e_tax_20.png"
                                alt="Declaration Success Screen"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        For more details on acknowledgement receipts and paying taxes due, <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DomesticDeclaration;

