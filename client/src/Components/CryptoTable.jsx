import React from "react";

const CryptoTable = ({ datas,onCoinClick }) => {
  return (
    <div>
      <table className="App">
        <thead>
          <th>exchanges</th>

          <th>24th volume</th>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={data.id} onClick={()=>onCoinClick(data)}>
              <td>
                <span
                  style={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {index + 1} .
                  <img
                    src={data.icon}
                    alt={data.name}
                    style={{ marginRight: "8px" }}
                  />
                  <h6>{data.name}</h6>
                </span>
              </td>

              <td>
                <h4>{`$${(data.volume / 1e9).toFixed(2)} billion`}</h4>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
