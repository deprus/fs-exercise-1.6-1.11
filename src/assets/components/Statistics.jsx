import StatisticsLine from './StatisticLine';

export default function Statistics({
  good,
  neutral,
  bad,
  all,
  average,
  positive,
  feedback,
}) {
  if (feedback) {
    return (
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback given</p>;
  }
}
