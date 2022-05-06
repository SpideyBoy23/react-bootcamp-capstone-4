import './TableHead.css';

export const TableHeadItem = ({ item }) => {
    return (
        <td title={item}>
            {item}
        </td>
    );
};
