interface SignatureCounterProps {
  current: number;
  goal: number;
}

const SignatureCounter = ({ current, goal }: SignatureCounterProps) => {
  const percentage = Math.min((current / goal) * 100, 100);
  
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Signatures Collected</p>
      <div className="flex items-end justify-between">
        <span className="signature-number">{formatNumber(current)}</span>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Goal</p>
          <p className="text-lg font-semibold text-foreground">{formatNumber(goal)} signatures</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Help us reach more citizens — every signature counts
      </p>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SignatureCounter;
