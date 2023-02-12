import React from "react";
import { useRecoilValue } from "recoil";
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
import { rememberTokenState } from "../../stores/rememberToken";
import Router from "next/router";

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
  const rememberToken = useRecoilValue(rememberTokenState);
  console.log(rememberToken);
  const labels = [
    "2023-02-6",
    "2023-02-7",
    "2023-02-8",
    "2023-02-9",
    "2023-02-10",
    "2023-02-11",
    "2023-02-12",
  ];
  // chart1
  const data1 = {
    labels,
    datasets: [
      {
        label: "炭水化物",
        data: [12, 19, 3, 5, 2, 3, 8],
        backgroundColor: ["rgba(255, 99, 132, 0.6)"],
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
      {
        label: "脂質",
        data: [1, 9, 31, 15, 12, 13, 9],
        backgroundColor: ["rgba(54, 162, 235, 0.6)"],
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
      {
        label: "タンパク質",
        data: [20, 18, 30, 15, 21, 19, 22],
        backgroundColor: ["rgba(255, 206, 86, 0.6)"],
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

  // chart2
  const data2 = {
    labels,
    id: 2,
    datasets: [
      {
        type: "line" as const,
        label: "カロリー",
        borderColor: "rgba(255, 99, 132, 0.8)",
        borderWidth: 2,
        fill: false,
        data: [48, 26, 78, 21, 98, 34, 45],
      },
      {
        type: "bar" as const,
        label: "体重",
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        data: [72, 73, 71, 69, 68, 69, 67],
      },
    ],
  };

  // const labels1 = [
  //   "2023-02-6",
  //   "2023-02-7",
  //   "2023-02-8",
  //   "2023-02-9",
  //   "2023-02-10",
  //   "2023-02-11",
  //   "2023-02-12",
  // ];

  // const data3 = {
  //   labels1,
  //   id: 3,
  //   datasets: [
  //     {
  //       type: "line" as const,
  //       label: "カロリー",
  //       borderColor: "rgba(255, 99, 132, 0.8)",
  //       borderWidth: 2,
  //       fill: false,
  //       data: [48, 26, 78, 21, 98, 34, 45],
  //     },
  //     {
  //       type: "bar" as const,
  //       label: "体重",
  //       backgroundColor: "rgba(75, 192, 192, 0.8)",
  //       data: [72, 73, 71, 69, 68, 69, 67],
  //     },
  //     // {
  //     //   type: "bar" as const,
  //     //   label: "炭水化物",
  //     //   backgroundColor: "rgba(1, 192, 192, 0.8)",
  //     //   data: [32, 43, 67, 56, 8, 21, 43],
  //     // },
  //   ],
  // };

  // const labels2 = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];

  // const data5 = {
  //   labels2,
  //   id: 5,
  //   datasets: [
  //     {
  //       type: "line" as const,
  //       label: "Dataset 1",
  //       borderColor: "rgb(255, 99, 132)",
  //       borderWidth: 2,
  //       fill: false,
  //       data: [23, 54, 12, 32, 43, 54, 21],
  //     },
  //     {
  //       type: "bar" as const,
  //       label: "Dataset 2",
  //       backgroundColor: "rgb(75, 192, 192)",
  //       data: [23, 12, 23, 34, 45, 123, 23],
  //       borderColor: "white",
  //       borderWidth: 2,
  //     },
  //     {
  //       type: "bar" as const,
  //       label: "Dataset 3",
  //       backgroundColor: "rgb(53, 162, 235)",
  //       data: [1, 2, 3, 4, 5, 6, 7],
  //     },
  //   ],
  // };

  /** グラフデータ */
  // const graphData = {
  //   labels: [
  //     ["2019年", "1月"],
  //     ["2019年", "2月"],
  //     ["2019年", "3月"],
  //     ["2019年", "4月"],
  //     ["2019年", "5月"],
  //     ["2019年", "6月"],
  //     ["2019年", "7月"],
  //     ["2019年", "8月"],
  //     ["2019年", "9月"],
  //     ["2019年", "10月"],
  //     ["2019年", "11月"],
  //     ["2019年", "12月"],
  //   ],
  //   datasets: [
  //     {
  //       type: "bar",
  //       yAxisID: "y-axis-precipitation",
  //       data: [
  //         16, 42, 117.5, 90.5, 120.5, 225, 193, 110, 197, 529.5, 156.5, 76.5,
  //       ],
  //       backgroundColor: "rgba(30, 144, 255, 1)",
  //       label: "合計降水量(mm)",
  //     },
  //     {
  //       type: "bar",
  //       yAxisID: "y-axis-precipitation",
  //       data: [
  //         52.3, 56.1, 117.5, 124.5, 137.8, 167.7, 153.5, 168.2, 209.9, 197.8,
  //         92.5, 51,
  //       ],
  //       backgroundColor: "rgba(30, 144, 255, 0.2)",
  //       label: "合計降水量例年値(mm)",
  //     },
  //     {
  //       type: "line",
  //       yAxisID: "y-axis-temperature",
  //       data: [
  //         5.6, 7.2, 10.6, 13.6, 20, 21.8, 24.1, 28.4, 25.1, 19.4, 13.1, 8.5,
  //       ],
  //       label: "平均気温",
  //       lineTension: 0,
  //       fill: false,
  //       borderColor: "rgba(255, 0, 0, 1)",
  //     },
  //     {
  //       type: "line",
  //       yAxisID: "y-axis-temperature",
  //       data: [
  //         5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25, 26.4, 22.8, 17.5, 12.1, 7.6,
  //       ],
  //       label: "平均気温の平年値",
  //       lineTension: 0,
  //       fill: false,
  //       borderColor: "rgba(255, 0, 0, 0.2)",
  //     },
  //   ],
  // };

  // /** グラフオプション */
  // const graphOption = {
  //   scales: {
  //     xAxes: [
  //       {
  //         scaleLabel: {
  //           display: true,
  //           labelString: "2019年",
  //         },
  //       },
  //     ],
  //     yAxes: [
  //       {
  //         id: "y-axis-precipitation",
  //         position: "right",
  //         scaleLabel: {
  //           display: true,
  //           labelString: "合計降水量(mm)",
  //         },
  //         // ticks: {
  //         //   beginAtZero: true,
  //         //   callback: function (value, index, values) {
  //         //     return `${value}(mm)`;
  //         //   },
  //         // },
  //       },
  //       {
  //         id: "y-axis-temperature",
  //         position: "left",
  //         scaleLabel: {
  //           display: true,
  //           labelString: "平均気温(℃)",
  //         },
  //         // ticks: {
  //         //   beginAtZero: true,
  //         //   callback: function (value, index, values) {
  //         //     return `${value}(℃)`;
  //         //   },
  //         // },
  //       },
  //     ],
  //   },
  // };

  // const option = {
  //   scales: {
  //     xAxes: [],
  //     yAxes: [],
  //   },
  // };

  const onClickAddFood = () => {
    Router.push("/mypage/food-register");
  };

  return (
    <>
      <HeadTitle title={"my-page | "} />
      <Header />
      <div className="py-16">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex justify-between">
            <div className="text-3xl mb-8">食事管理</div>
            <button
              onClick={onClickAddFood}
              className="block bg-[rgba(134,111,54,0.75)] rounded px-2 outline-none border-none hover:opacity-80"
            >
              食べたものを登録
            </button>
          </div>
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
            {/* <Chart type="bar" data={data3} />
            <Chart type="bar" data={data5} /> */}
            {/* <Bar data={data2} options={graphOption} /> */}
            {/* <Bar data={graphData} options={graphOption} /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPage;
