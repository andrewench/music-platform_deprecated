export const isAllFieldsFilled = (data: string[]): boolean => {
  return data.every((item) => item.length > 0);
};
