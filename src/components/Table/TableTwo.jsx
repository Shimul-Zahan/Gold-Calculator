const TableTwo = () => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                <colgroup>
                    <col className="w-5" />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="w-5" />
                </colgroup>
                <thead>
                    <tr className="">
                        <th className="p-3">LoanID</th>
                        <th className="p-3">ClientID</th>
                        <th className="p-3">LoanAmount</th>
                        <th className="p-3">DateIssued</th>
                        <th className="p-3">DueDate</th>
                        <th className="p-3">InterestRate</th>
                        <th className="p-3">DueDate</th>
                        <th className="p-3">DueDate</th>
                        <th className="p-3">DueDate</th>
                    </tr>
                </thead>
                <tbody className="border-b ">
                    <tr>
                        <td className="px-3 py-2">
                            <p>Dwight Adams</p>
                        </td>
                        <td className="px-3 py-2">
                            <p>Dwight Adams</p>
                        </td>
                        <td className="px-3 py-2">
                            <p className="">Spirit Media</p>
                        </td>
                        <td className="px-3 py-2">
                            <p>555-873-9812</p>
                        </td>
                        <td className="px-3 py-2">
                            <p>dwight@adams.com</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableTwo;
