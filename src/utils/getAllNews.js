export const getAllNews = async () => {
    const res = await fetch(
        'https://dummyjson.com/products',
        {
          next: {
            revalidate: 30,
          },
        }
      );
      return res.json();
  };