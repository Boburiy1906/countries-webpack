
const request = async (resource) => {
  const request = await fetch(resource);
  const data = request.json();
  return data;
};
export default request;