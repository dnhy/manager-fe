const { VUE_APP_BASE_API } = process.env;

const myFetch = {
  async post(url: string, data: any, headers?) {
    const response = await fetch(VUE_APP_BASE_API + url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  async get(url: string, headers?) {
    const response = await fetch(VUE_APP_BASE_API + url, {
      headers: {
        ...headers,
      },
    });

    return response.json();
  },
};

export { myFetch };
