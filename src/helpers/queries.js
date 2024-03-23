const URIColors = import.meta.env.VITE_API_COLOR;

export const createColorAPI = async (color) => {
  try {
    const answer = await fetch(URIColors, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(color),
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const readColorsAPI = async () => {
  try {
    const answer = await fetch(URIColors);
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const obtainColorTaskAPI = async (id) => {
  try {
    const answer = await fetch(`${URIColors}/${id}`);
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const dltColorAPI = async (id) => {
  try {
    const answer = await fetch(`${URIColors}/${id}`, {
      method: "DELETE",
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const editColorAPI = async (color, id) => {
  try {
    const answer = await fetch(`${URIColors}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(color),
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
};
