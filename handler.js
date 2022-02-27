const message = async ({ time, ...rest }) => {
  setTimeout(() => {
    console.log(rest);
    return `${rest.copy} (with a delay)`;
  }, time * 1000);
};

export const hello = async () => {
  console.log(await message({ time: 1, copy: 'Your function executed successfully!' }));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v2.0! ${await message({ time: 1, copy: 'Your function executed successfully!' })}`,
    }),
  };
};
