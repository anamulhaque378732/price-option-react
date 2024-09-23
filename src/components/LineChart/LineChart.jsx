import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentsData = [
        { id: 1, name: 'John', math: 78, physics: 85, bangla: 74, chemistry: 52 },
        { id: 2, name: 'Emma', math: 85, physics: 89, bangla: 82, chemistry: 86 },
        { id: 3, name: 'Liam', math: 92, physics: 90, bangla: 91, chemistry: 36 },
        { id: 4, name: 'Olivia', math: 88, physics: 92, bangla: 85, chemistry: 85 },
        { id: 5, name: 'Noah', math: 76, physics: 78, bangla: 72, chemistry: 65 },
        { id: 6, name: 'Sophia', math: 91, physics: 87, bangla: 88, chemistry: 89 },
        { id: 7, name: 'James', math: 83, physics: 84, bangla: 81, chemistry: 78 },
        { id: 8, name: 'Mia', math: 95, physics: 91, bangla: 93, chemistry: 94 },
        { id: 9, name: 'Isabella', math: 79, physics: 83, bangla: 76, chemistry: 86 },
        { id: 10, name: 'Ethan', math: 87, physics: 88, bangla: 84, chemistry: 45 }
    ];
    return (
        <div>
            <LChart width={500} height={400} data={studentsData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis> </YAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='bangla' stroke='blue'></Line>
                <Line dataKey='physics' stroke='green'></Line>
                <Line dataKey='chemistry' stroke='white'></Line>
            </LChart>
        </div>
    );
};
// recharts web site
export default LineChart;