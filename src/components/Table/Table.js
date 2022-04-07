import { TableRow } from "./TableRow";
import { TableHeadItem } from "./TableHead";

export const Table = ({ tHeadData, tBodyData, customClass }) => {

    return (
        <table className={customClass}>
            <thead>
                <tr>
                    {tHeadData.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tBodyData.map((dataItems, index) => {
                    const { spec_name, spec_value } = dataItems;
                    return <TableRow key={index} specName={spec_name} specVal={spec_value}/>;
                })}
            </tbody>
        </table>
    );
};