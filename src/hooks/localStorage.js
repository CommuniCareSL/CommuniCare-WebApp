export const getStoredData = () => {
  const token = localStorage.getItem("token");
  const sabhaId = localStorage.getItem("sabhaId");
  const role = localStorage.getItem("role");
  const departmentId = localStorage.getItem("departmentId");

  return { token, sabhaId, role, departmentId };
};

export const clearStoredData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("sabhaId");
  localStorage.removeItem("role");
  localStorage.removeItem("departmentId");
  localStorage.clear();//clear everything stored
};
