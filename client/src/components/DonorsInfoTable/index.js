import React from "react";

export default function CoinTable(props) {
    console.log("CoinTable:", props);
    return (
        <table>
            <thead>
                <tr>
                    <th>contributorFirstName</th>
                    <th>contributorLastName</th>
                    <th> Amount </th>
                    {/* <th> <button onClick={() => props.sortBy("amount")}>Amount </button> */}
                    {/* </th> */}
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.campaignNames.map(row => (
                        <tr key={row.objectID}>
                            <td>{row.contributorFirstName}</td>
                            <td>{row.contributorLastName}</td>
                            <td>{row.amount}</td>
                            <td>{row.date}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table >
    )
}

