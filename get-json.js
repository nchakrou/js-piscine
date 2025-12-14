async function getJSON(path, params = "") {
  try {
    const response = await fetch(path + params);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error.message;
  }
}
