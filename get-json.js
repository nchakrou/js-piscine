async function getJSON(path, params = "") {
  try {
     const query = new URLSearchParams(params).toString()
    const url = query ? `${path}?${query}` : path
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error.message;
  }
}
