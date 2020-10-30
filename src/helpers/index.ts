export const cloneArray = (arr: any) => {
  return arr.map((val: []) => [...val]);
};

export const generateRenderData = (data: any, maxCount: number) => {
  const clonedData = cloneArray(data);
  return clonedData.map((colors: [Object]) => {
    while (colors.length < maxCount) colors.push({});
    return colors;
  });
};
