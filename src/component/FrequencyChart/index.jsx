import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
const data = [
    {
      name: "June", 
      Nick_Gapinski: 1018,
      Andrew_Hamlett: 1013,
      Mitchell_Harms: 453,
      Braeden_Haesemeyer: 0
    },
    {
      "name": "July", 
      Nick_Gapinski: 1386,
      Andrew_Hamlett: 1321,
      Mitchell_Harms: 624,
      Braeden_Haesemeyer: 0
    
    },
    {
      name: "August", 
      Nick_Gapinski: 1392,
      Andrew_Hamlett: 1522,
      Mitchell_Harms: 798,
      Braeden_Haesemeyer: 665
    },
    {
      name: "September", 
      Nick_Gapinski: 643,
      Andrew_Hamlett: 772,
      Mitchell_Harms: 388,
      Braeden_Haesemeyer: 360,
    }
  ]
  

const FrequencyChart = () => { 
    return (
        <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Andrew_Hamlett" stackId="a" fill="#DEEFB7" />
        <Bar dataKey="Nick_Gapinski" stackId="a" fill="#414288" />
        <Bar dataKey="Mitchell_Harms" stackId="a" fill="#F17F29" />
        <Bar dataKey="Braeden_Haesemeyer" stackId="a" fill="#65DEF1" />
       
        </BarChart>
    )
}

export default FrequencyChart