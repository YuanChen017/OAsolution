import dataset from "../data/data";
import { useState, useEffect } from "react";

const Rewardspoint = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData(dataset);
    }, 500);
  }, []);

  const calculatePoint = (amount) => {
    let point = 0;
    if (amount > 50 && amount <= 100) {
      point += (amount - 50) * 1;
    } else if (amount > 100) {
      point += (amount - 100) * 2 + 50 * 1;
    } else {
      point += 0;
    }
    return point;
  };

  const newdatasetwithpoints = (input) => {
    input.map((ele) => {
      ele.rewardspoint = calculatePoint(ele.purchasecost);
    });
    return input;
  };
  const newdata = newdatasetwithpoints(data);

  const allcustomers = (set) => {
    const customername = new Set();
    const result = [];
    for (let i = 0; i < set.length; i++) {
      if (!customername.has(set[i].customer)) {
        result.push(set[i].customer);
      }
      customername.add(set[i].customer);
    }
    return result;
  };
  const cust = allcustomers(newdata);

  return (
    <div className="datatable">
      <table>
        <tr>
          <th>Customer</th>
          <th>Purchase Amount</th>
          <th>Date</th>
          <th>Reward points</th>
        </tr>
        {newdata.map((ele) => {
          return (
            <tr>
              <td>{ele.customer}</td>
              <td>{ele.purchasecost}</td>
              <td>{ele.purchasedate}</td>
              <td>{ele.rewardspoint}</td>
            </tr>
          );
        })}
      </table>

      <div className="monthly.summary">
        <ul> {cust.map((value) => {})}</ul>
      </div>
    </div>
  );
};

export default Rewardspoint;
