import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  LineElement,
  LineController,
  BarController,
} from "chart.js";
import { Bar, Chart } from "react-chartjs-2";

import { Footer, Header, HeadTitle } from "../../components/layouts";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export const MyPage = () => {
  const data1 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        // borderWidth: 1,
      },
    ],
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data2 = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Dataset 1",
        borderColor: "rgba(255, 99, 132, 0.8)",
        borderWidth: 2,
        fill: false,
        data: [48, 26, 78, 21, 98, 34, 45],
      },
      {
        type: "bar" as const,
        label: "Dataset 2",
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        data: [42, 4, 82, 9, 32, 43, 21],
      },
      {
        type: "bar" as const,
        label: "Dataset 3",
        backgroundColor: "rgba(53, 162, 235, 0.8)",
        data: [13, 91, 8, 35, 62, 33, 12],
      },
    ],
  };
  return (
    <>
      <HeadTitle title={"my-page | "} />
      <Header />
      <div className="py-4">
        <div className="container max-w-screen-lg mx-auto">
          <div>content</div>
          <div>
            <Bar
              data={data1}
              width={400}
              height={200}
              options={
                {
                  // maintainAspectRatio: false,
                }
              }
            />
            <Chart type="bar" data={data2} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPage;
