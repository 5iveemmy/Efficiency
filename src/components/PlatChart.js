import React, { Component } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const ForChart = styled.div`
  margin-top: 24px;
  border: 1px solid #ecebf5;
  box-sizing: border-box;
  border-radius: 10px;
  width: 1018px;
`;

const ChartWrap = styled.div`
  /* width: 20px; */
`;

const ForChartWrap = styled.div`
  display: flex;
`;

const ChartArea = styled.div`
  border-right: 1px solid #ecebf5;
  padding: 24px;
  width: 847px;
`;

const TheTime = styled.div`
  padding: 24px;
`;

const ForTime = styled.div`
  background: #fafafa;
  border: 1px solid #ecebf5;
  box-sizing: border-box;
  border-radius: 10px;
  width: 187px;
  height: 116px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ForTimeWrap = styled.div``;

const Resp = styled.span`
  font-size: 14px;
  color: #696d8c;
`;

const Mins = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding-top: 8px;
`;

const ChartTop = styled.div``;

const ChartTopLeft = styled.div``;

const Avrt = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const AvGreen = styled.div`
  width: 70px;
  height: 28px;
  border-radius: 4px;
  background: rgba(37, 187, 135, 0.1);
`;

const AvGreenWrap = styled.div`
  padding: 4px 12px;
`;

const GreenText = styled.span`
  color: #25bb87;
  font-size: 12px;
  font-weight: 600;
`;

const ChartTopRight = styled.div``;

class PlatChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        xaxis: {
          categories: ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [50, 40, 30, 20, 10],
        },
      ],
    };
  }

  render() {
    return (
      <ForChart>
        <ForChartWrap>
          <ChartArea>
            <ChartTop>
              <ChartTopLeft>
                <Avrt>Average Response Time</Avrt>
                <AvGreen>
                  <AvGreenWrap>
                    <GreenText>+4.14%</GreenText>
                  </AvGreenWrap>
                </AvGreen>
              </ChartTopLeft>
              <ChartTopRight></ChartTopRight>
            </ChartTop>
            <ChartWrap>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
              />
            </ChartWrap>
          </ChartArea>
          <TheTime>
            <ForTime>
              <ForTimeWrap>
                <Resp>Average Response Time</Resp>
                <Mins>30 Mins</Mins>
              </ForTimeWrap>
            </ForTime>
          </TheTime>
        </ForChartWrap>
      </ForChart>
    );
  }
}

export default PlatChart;
