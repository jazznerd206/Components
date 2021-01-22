import React from 'react';


function MappedTable({ data, propertyNames }) {

    const styles = {
        container: {
            textAlign: 'center',
            background: 'red'
        },
        table: {
            margin: '0 auto',
            width: '50%',
            border: '1px solid black'
        },
        head: {
            fontSize: '2em',
            fontVariant: 'small-caps'
        }

    }

    let filteredData = data.map(v =>
        Object.keys(v)
          .filter(k => propertyNames.includes(k))
          .reduce((acc, key) => ((acc[key] = v[key]), acc), {})
      );

    return (
        <div style={styles.container}>
            <table style={styles.table}>
                <thead style={styles.head}>
                    <tr>{propertyNames.map(val => <th key={`h_${val}`}>{val}</th>)}</tr>
                </thead>
                <tbody>
                    {filteredData.map((val, i) => (
                    <tr key={`i_${i}`}>
                        {propertyNames.map(p => <td key={`i_${i}_${p}`}>{val[p]}</td>)}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MappedTable;
