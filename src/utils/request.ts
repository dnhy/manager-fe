const { VUE_APP_BASE_API } = process.env;

const myFetch = {
  async post(url: string, data: any) {
    const response = await fetch(VUE_APP_BASE_API + url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  async get(url: string) {
    const response = await fetch(VUE_APP_BASE_API + url);

    return response.json();
  },
};

export { myFetch };
