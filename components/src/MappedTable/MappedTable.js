import React from 'react';


function MappedTable({ data, propertyNames }) {

    const styles = {
        container: {
            textAlign: 'center',
        },
        table: {
            margin: '0 auto',
            width: '50%',
            border: '1px solid black'
        },
        head: {
            fontSize: '2em',
            textTransform: 'uppercase',
            borderBottom: '.5px solid rgb(0,0,0,.25)'
        },
        body: {
            backgroundColor: 'rgb(255,255,255,.5)',
            verticalAlign: 'bottom'
        },
        row: {
            height: '50px',
        },
        data: {
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
                    <tr style={styles.row}>{propertyNames.map(val => <th key={`h_${val}`}>{val}</th>)}</tr>
                </thead>
                <tbody style={styles.body}>
                    {filteredData.map((val, i) => (
                    <tr style={styles.row} key={`i_${i}`}>
                        {propertyNames.map(p => <td style={styles.data} key={`i_${i}_${p}`}>{val[p]}</td>)}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MappedTable;
