import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import sched from "../../assets/schedule.svg";

const ForChart = styled.div`
  margin-top: 24px;
  border: 1px solid #ecebf5;
  border-radius: 10px;
  width: 1018px;
`;

const ChartWrap = styled.div``;

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

const TimeFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const ForTime = styled.div`
  background: #fafafa;
  border: 1px solid #ecebf5;
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

const ChartTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const ChartTopLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 269px;
  align-items: center;
`;

const ChartHead = styled.p`
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

const ChartTopRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 272px;
  align-items: center;
`;

const High = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HighColor = styled.div`
  width: 10px;
  height: 10px;
  background-color: #3e68ff;
  border-radius: 2px;
`;

const HighText = styled.p`
  font-size: 14px;
  padding-left: 8px;
  font-weight: 500;
`;

const Month = styled.div`
  border: 1px solid #e1e1eb;
  border-radius: 8px;
  width: 148px;
  height: 38px;
`;

const MonthWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

const This = styled.p`
  font-size: 14px;
`;

const Sched = styled.img``;

const Time = ({ resp, time }) => {
  return (
    <TheTime>
      <ForTime>
        <ForTimeWrap>
          <Resp>{resp}</Resp>
          <Mins>{time}</Mins>
        </ForTimeWrap>
      </ForTime>
    </TheTime>
  );
};

const Rpr = () => {
  return (
    <ForChart>
      <ForChartWrap>
        <ChartArea>
          <ChartTop>
            <ChartTopLeft>
              <ChartHead>Replies per resolution</ChartHead>
              <AvGreen>
                <AvGreenWrap>
                  <GreenText>+4.14%</GreenText>
                </AvGreenWrap>
              </AvGreen>
            </ChartTopLeft>
            <ChartTopRight>
              <High>
                <HighColor></HighColor>
                <HighText>High Priority</HighText>
              </High>
              <Month>
                <MonthWrap>
                  <This>This Month</This>
                  <Sched src={sched} alt="schedule" />
                </MonthWrap>
              </Month>
            </ChartTopRight>
          </ChartTop>
          <ChartWrap>
            <Chart
              series={[
                {
                  name: "series-1",
                  data: [50, 40, 30, 20, 10],
                },
              ]}
              options={{
                chart: {
                  toolbar: {
                    show: false,
                  },
                },
                stroke: {
                  width: 5,
                  curve: "smooth",
                  colors: "#3E68FF",
                },
                markers: {
                  size: 5,
                  colors: "#fff",
                },
                xaxis: {
                  categories: [
                    "jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                  ],
                },
              }}
              type="line"
              width="100%"
            />
          </ChartWrap>
        </ChartArea>
        <TimeFlex>
          <Time resp="Average Replies" time="30 Mins" />
          <Time resp="Response Time" time="1 Hour 30 Mins" />
        </TimeFlex>
      </ForChartWrap>
    </ForChart>
  );
};

export default Rpr;
