interface ICalculateProgress {
  currentProgress: number;
  maxProgress: number;
}

export const calculateProgress = ({
  currentProgress,
  maxProgress,
}: ICalculateProgress) => {
  if (currentProgress <= 0) return 0;
  if (currentProgress >= 100) return 100;

  return Math.floor((maxProgress / 100) * currentProgress);
};
