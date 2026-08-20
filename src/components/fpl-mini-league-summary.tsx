interface placing {
  name: string;
  gameweekPoints: number;
  overallPoints: number;
}

type Props = placing[];

export default function FplMiniLeagueSummary(props: Props) {
  return (
    <>
      <h2>Gameweek in a nutshell</h2>
      {/* <table>
        <tbody>
            <tr><td>Highest scorer: </td><td>Name</td><td>Value</td></tr>
            <tr><td>Transfer regret: </td><td>Name</td><td>Value</td></tr>
            <tr><td>Bench regret: </td><td>Name</td></tr>
            <tr><td>Highest captain score: </td><td>Name</td><td>Value</td></tr>
            <tr><td>Poorest captain score: </td><td>Name</td><td>Value</td></tr>
            <tr><td></td><td>Name</td><td>Value</td></tr>
            <tr><td></td><td>Name</td><td>Value</td></tr>
        </tbody>
      </table> */}

      <h2>Top 5</h2>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>GW pts</td>
            <td>Overall</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>GW pts</td>
            <td>Overall</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>GW pts</td>
            <td>Overall</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>GW pts</td>
            <td>Overall</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>GW pts</td>
            <td>Overall</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
