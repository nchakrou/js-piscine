async function getJSON(path, params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const url = query ? `${path}?${query}` : path;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.json();
    if (result.error) {
      throw new Error(result.error)
    }
    return result.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
