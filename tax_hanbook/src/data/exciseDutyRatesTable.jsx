import React from 'react';

/** Product × rate table used on Excise summary (expandable FAQ answer). */
export function ExciseDutyRatesTable() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', fontSize: '0.9rem' }}>
      <thead>
        <tr style={{ backgroundColor: '#f0f0f0' }}>
          <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>
            Products
          </th>
          <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>
            Tax Rate
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Juice from fruits, vegetables or other plants whose local raw material content, is at least 30% by weight
            of its constituents, including water
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>10%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Other juices from fruits, vegetables or other plants
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>39%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Lemonades, sodas and other juices</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>39%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Flavoured or coloured syrups and other preparations intended to be consumed as beverages after simple
            dilution with water (in the form of powder or granules)
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>39%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Beer whose local raw material content, excluding water, is at least 70% by weight of its constituents
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>40%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Other beers</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>65%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Wine whose local raw material content, excluding water, is at least 70% by weight of its constituents
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>40%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Other wines</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            70% of the value of a litre not exceeding FRW 40,000
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Brandies, liquors and whiskies whose local raw material content, excluding water, is at least 70% by weight
            of its constituents
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>60%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Other brandies, liquors and whiskies</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            70% of the value of a litre not exceeding FRW 150,000
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Other fermented beverages</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>65%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Other alcoholic beverages with local raw material content
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>30%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Cigarettes</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            36% of retail price tax inclusive of a pack of 20 rods plus FRW 230 per pack
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Cigar and similar products containing tobacco or tobacco substitutes
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>160%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Electronic cigarette</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 30,000 per unit</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Cartridge with liquid for use in electronic cigarette
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 24,400 per unit</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Premium oil (excluding benzene)</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 183 per litre</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Gas oil</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 150 per litre</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Lubricants or fluids for motor vehicle and machinery maintenance
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>37%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Vehicles with an engine capacity of less than 1500 cc or hybrid vehicles which are not more than three
            years of age from the date of manufacture
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>5%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Vehicles with an engine capacity of between 1500 and 2500 cc or hybrid vehicles which are more than three
            years of age but not more than eight years of age from the date of manufacture
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>10%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Vehicles with an engine capacity above 2500 cc or hybrid vehicles which are more than eight years of age
            from the date of manufacture
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>15%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Sweets and chewing gums</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 322/kg</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Chocolates</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 1,930/kg</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Cosmetics and beauty products</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>15%</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Telephone communications</td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            12% for the first year (2026)
            <br />
            14% during the second year (2026)
            <br />
            15% from the third year (2027) and above
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
            Amount or commission charged on financial transactions
          </td>
          <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>15% from 1st July 2027</td>
        </tr>
      </tbody>
    </table>
  );
}
