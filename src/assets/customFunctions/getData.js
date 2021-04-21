export const getData = async (path) => {
  const response = await fetch(path);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
