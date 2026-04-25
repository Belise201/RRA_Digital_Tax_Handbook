import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { FileText } from 'lucide-react';

const PayeExplanation = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Explanation of PAYE",
      content: [
        {
          type: "heading",
          text: "What is PAYE?"
        },
        {
          type: "paragraph",
          text: "PAYE is tax on employment income. PAYE is an efficient way of collecting taxes on income earned by employees."
        },
        {
          type: "paragraph",
          text: "PAYE is required to be withheld by employers on behalf of their employees. This is to save employees having to each declare their own income. Instead, the employers must declare and pay PAYE on behalf of their employees."
        },
        {
          type: "heading",
          text: "Who must register for PAYE?"
        },
        {
          type: "paragraph",
          text: "Any taxpayer who pays its employees in cash, benefits-in-kind or allowances is required to register for PAYE and declare and pay PAYE on their employees' behalf."
        },
        {
          type: "heading",
          text: "Example 27"
        },
        {
          type: "paragraph",
          text: "Amahoro owns a small shop. She has one employee, Ubumwe. Amahoro must withhold, declare and pay PAYE on Ubumwe's employment income. This is done by Amahoro on behalf of Ubumwe so Ubumwe does not need to declare or pay any further taxes on this income."
        },
        {
          type: "paragraph",
          text: "In the event that an employer has special authorisation from the Government of Rwanda that they are not required to declare and pay taxes on income, (check on Explanation of PAYE), their employees are required to register with RRA, and declare and pay PAYE on their own behalf."
        },
        {
          type: "heading",
          text: "What are the obligations of PAYE registered taxpayers?"
        },
        {
          type: "paragraph",
          text: "Employers are required to provide each employee with a statement each tax period showing:"
        },
        {
          type: "list",
          items: [
            "The employee's name.",
            "The amount and type(s) of income received.",
            "The amount of PAYE and RSSB contributions that have been withheld and paid on their behalf."
          ]
        },
        {
          type: "heading",
          text: "Which types of employment income are taxable?"
        },
        {
          type: "paragraph",
          text: "Payments in cash refer to monetary payments in notes or electronically in any currency. Payments in kind refer to non-monetary payments of goods or services."
        },
        {
          type: "paragraph",
          text: "Taxable employment income includes all payments to an employee in cash or in kind such as:"
        },
        {
          type: "list",
          items: [
            "Wages, salary, leave pay, sick pay and medical allowance, payment in lieu of leave, fees, commissions, bonuses, gratuity and incentives.",
            "Allowances including any cost of living, subsistence, entertainment, accommodation, rent, or travel allowance.",
            "Payments to the employee for their acceptance to work in any conditions of employment.",
            "Payments for redundancy, loss or termination of employment.",
            "Other payments made in respect of current, previous or future employment."
          ]
        },
        {
          type: "heading",
          text: "Which types of employment income are exempt?"
        },
        {
          type: "paragraph",
          text: "Employment income that is exempt from taxation includes:"
        },
        {
          type: "list",
          items: [
            "Reimbursement of expenses incurred by the employee if wholly and exclusively for business activities of the employer.",
            "Retirement contributions or pension payments made by the employer on behalf of the employee to Rwanda Social Security Board (RSSB).",
            "Retirement contributions made by the employer on behalf of the employee and/or contributions made by the employee to a qualified pension fund to a maximum of 10% of the employee's employment income or FRW 1,200,000 per year, whichever is lower.",
            "Employment income received by an employee who is not a citizen of Rwanda from a foreign government or NGO under an agreement signed by the Government of Rwanda and when the income is received in performance of aid services in Rwanda."
          ]
        },
        {
          type: "heading",
          text: "What is the valuation method for benefits in kind?"
        },
        {
          type: "paragraph",
          text: "Benefits in kind can be more difficult to value than regular employment income. As a result, the valuation of benefits in kind includes:"
        },
        {
          type: "list",
          items: [
            "Providing an employee with access to and use of a motor vehicle during a tax period is valued at 10% of the employment income, excluding benefits in kind.",
            "Providing an employee with accommodation during a tax period is valued at 20% of the employment income, excluding benefits in kind.",
            "For a benefit on a loan including advance on salary exceeding three (3) months' salary given to an employee valued a difference between interests calculated at a rate of interests offered to commercial banks by National Bank of Rwanda and the actual interests paid by employee."
          ]
        },
        {
          type: "paragraph",
          text: "Note that a rent of a house or motor vehicle directly paid by an employer for an employee is taxed as any other employment income."
        },
        {
          type: "heading",
          text: "Example 28"
        },
        {
          type: "paragraph",
          text: "Innocent employs one employee called Ubumwe. In one tax period, Innocent pays Ubumwe FRW 35,000 in salary, a transport allowance of FRW 5,000 and provides Ubumwe with accommodation to live in."
        },
        {
          type: "paragraph",
          text: "The FRW 35,000 salary and the FRW 5,000 transport allowance are fully taxable. The accommodation benefit in kind that Ubumwe is provided with is valued at 20% of the taxable employment income. This is calculated as: (FRW 35,000 + FRW 5,000) * 20% = FRW 8,000."
        },
        {
          type: "paragraph",
          text: "Therefore, the total taxable income that Innocent must declare PAYE for on behalf of Ubumwe is: FRW 35,000 + FRW 5,000 + FRW 8,000 = FRW 48,000"
        },
        {
          type: "heading",
          text: "What are the different types of employees?"
        },
        {
          type: "paragraph",
          text: "There are three types of employees for the purposes of declaring PAYE. These are: permanent employees, casual labourers and employees with more than one employer."
        },
        {
          type: "paragraph",
          text: "All employees are regarded as permanent employees unless they fulfil the criteria for casual labourers or employees with more than one employer."
        },
        {
          type: "paragraph",
          text: "A casual labourer is an employee who performs unskilled labour activities, who does not use machinery or equipment requiring special skills, and who is engaged by an employer for not longer than thirty days during a tax period."
        },
        {
          type: "paragraph",
          text: "If an employee is employed by more than one employer, the employer who pays an annual professional income arising from a permanent work or from a longer contract than other employers may offer is referred to as the 'first employer'."
        },
        {
          type: "heading",
          text: "What are the tax rates for 'permanent' employees?"
        },
        {
          type: "paragraph",
          text: "There are different marginal tax rates for permanent employees depending upon their taxable employment income. The groupings of income are called tax brackets. The tax rates for each tax bracket are:"
        },
        {
          type: "table",
          headers: ["Monthly taxable income", "Marginal Tax Rate"],
          rows: [
            ["FRW 0 to FRW 60,000", "0%"],
            ["FRW 60,001 to FRW 100,000", "10%"],
            ["FRW 100,001 to FRW 200,000", "20%"],
            ["Above FRW 200,000", "30%"]
          ]
        },
        {
          type: "paragraph",
          text: "It is important to note that these tax rates are marginal. This means that for each person each month, the first FRW 60,000 that they earn is taxed at 0%, the next FRW 40,000 they earn is taxed at 10%, the next FRW 140,000 they earn is taxed at 20%and any remaining income is taxed at 30%. This means that no taxpayer is made worse off by receiving income in a higher tax bracket."
        },
        {
          type: "heading",
          text: "Example 29"
        },
        {
          type: "paragraph",
          text: "Amahoro employs two full-time employees, Rukundo and Lucie. Rukundo's monthly taxable income is FRW 40,000. Lucie's monthly taxable income is FRW 300,000. Amahoro declares PAYE on their behalf."
        },
        {
          type: "paragraph",
          text: "Rukundo's FRW 40,000 taxable income is in the first tax bracket. The first FRW 60,000 is taxed at 0%. The monthly PAYE tax due on behalf of Rukundo is: (FRW 40,000 * 0= FRW 0."
        },
        {
          type: "paragraph",
          text: "Lucie's FRW 360,000 taxable income is in the fourth tax bracket. The first FRW 60,000 is taxed at 0%, the next FRW 40,000 is taxed at 10%, the next FRW 100,000 is taxed on 20%, the remaining FRW 100,000 is taxed at 30%. The monthly PAYE tax due on behalf of Lucie is: (FRW 60,000 * 0) + (FRW 40,000 * 10%) + (FRW 100,000 * 20%) + (FRW 100,000 * 30%) = FRW 0 + FRW 4,000 + FRW 20,000 + FRW 30,000= FRW 54,000."
        },
        {
          type: "heading",
          text: "What are the tax rates for 'casual labourers'?"
        },
        {
          type: "paragraph",
          text: "Similarly, there are different marginal tax rates for casual employees depending upon their taxable employment income. The groupings of income are called tax brackets. The tax rates for each tax bracket are:"
        },
        {
          type: "table",
          headers: ["Monthly taxable income", "Marginal Tax Rate"],
          rows: [
            ["FRW 0 to FRW 60,000", "0%"],
            ["Above FRW 60,001", "15%"]
          ]
        },
        {
          type: "heading",
          text: "Example 30"
        },
        {
          type: "paragraph",
          text: "Lucie employs Roy in an unskilled role on a temporary basis. Roy works for less than thirty days and Lucie pays him taxable income of FRW 80,000. As Roy is a casual labourer, the first FRW 60,000 is taxed at a rate of 0%, and the remaining FRW 20,000 is taxed at a rate of 15%."
        },
        {
          type: "paragraph",
          text: "The PAYE due on behalf of Roy is: (FRW 60,000 * 0) + (FRW 20,000 * 15%) = FRW 0 + FRW 3,000 = FRW3,000."
        },
        {
          type: "heading",
          text: "What are the tax rates for 'employees with more than one employer'?"
        },
        {
          type: "paragraph",
          text: "The first employer declares the employee as a 'permanent employee' as normal. Any additional employers must withhold PAYE at the rate of 30% on all taxable income."
        },
        {
          type: "paragraph",
          text: "This may mean that the employee pays a higher amount of tax than would normally be expected if the income had come from just one employer. Resident individuals in Rwanda are able to claim a refund for excess Income Tax paid if the tax refund payable exceeds FRW 5,000."
        },
        {
          type: "heading",
          text: "Example 31"
        },
        {
          type: "paragraph",
          text: "Charles works separately for two employers, Lucie and Fred. Charles receives monthly taxable income of FRW 120,000 from Lucie and FRW 100,000 from Fred. As he has a permanent contract from Lucie, Lucie is the first employer who declares PAYE as normal on behalf of Charles. The PAYE due declared by Lucie on behalf of Charles is: (FRW 60,000 * 0) +(FRW 40,000 * 10%) + (FRW 20,000 * 20%) = FRW 0 + FRW 4,000+FRW 4,000= FRW 8,000"
        },
        {
          type: "paragraph",
          text: "As Fred is not the first employer of Charles, he withholds PAYE of 30% on Charles' monthly taxable income. Fred withholds FRW 100,000 * 30% = FRW 30,000."
        },
        {
          type: "paragraph",
          text: "This shows that Charles has contributed PAYE equal to FRW 8,000+FRW 30,000=FRW 38,000"
        },
        {
          type: "paragraph",
          text: "Assume that taxable income of FRW 220,000 came from one employer and computed as per normal PAYE brackets. The PAYE due would have been FRW 30,000."
        },
        {
          type: "paragraph",
          text: "Charles is entitled to submit a Personal Income Tax (PIT) declaration to claim a tax refund of FRW 38,000-FRW 30,000=FRW 8,000 since the tax refund payable is more than FRW 5,000."
        },
        {
          type: "heading",
          text: "When is the deadline to declare and pay PAYE?"
        },
        {
          type: "paragraph",
          text: "PAYE is declared and paid on a monthly basis. Alternatively, taxpayers with annual turnover below FRW 200,000,000 may request to declare on a quarterly basis."
        },
        {
          type: "paragraph",
          text: "Whether monthly or quarterly, the PAYE declaration must be submitted and any tax paid by the 15th of the month following the end of the tax period."
        },
        {
          type: "paragraph",
          text: "For monthly, this means that PAYE monthly declarations concerning the tax period between March 1st and March 31st must be declared and paid by April 15th. Then declarations concerning the tax period between April 1st and April 30th must be declared and paid by May 15th and so on throughout the year."
        },
        {
          type: "paragraph",
          text: "The quarters for taxpayers declaring PAYE on a quarterly basis concern the tax period between:"
        },
        {
          type: "list",
          items: [
            "1st January to 31st March must be declared and paid by 15th April.",
            "1st April to 30th June must be declared and paid by 15th July.",
            "1st July to 30th September must be declared and paid by 15th October.",
            "1st October to 31st December must be declared and paid by 15th January."
          ]
        },
        {
          type: "paragraph",
          text: "However, it is important to note that even if PAYE is declared quarterly, RSSB contributions must still be declared on a monthly basis."
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  const renderTable = (table) => (
    <div className="table-container" style={{ margin: '20px 0', overflowX: 'auto' }}>
      <table className="content-table" style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            {table.headers.map((header, index) => (
              <th key={index} style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={{ padding: '12px', border: '1px solid #ddd' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">{currentContent.title}</h1>
              <div className="professional-title-divider"></div>

            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="content-section">
          {currentContent.content.map((item, index) => {
            if (item.type === 'paragraph') {
              return <p key={index} className="content-paragraph">{item.text}</p>;
            } else if (item.type === 'heading') {
              return <h2 key={index} className="content-heading">{item.text}</h2>;
            } else if (item.type === 'list') {
              return (
                <ul key={index} className="minimal-list">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className="content-list-item">{listItem}</li>
                  ))}
                </ul>
              );
            } else if (item.type === 'table') {
              return <div key={index}>{renderTable(item)}</div>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default PayeExplanation;
