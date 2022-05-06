import './TableRow.css';

export const TableRow = ({ specName, specVal, index }) => {

    return (
        <tr>
            <td key={index}>{specName} :</td>
            <td key={index}>{specVal}</td>
        </tr>
    );
};