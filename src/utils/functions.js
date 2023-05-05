export const formatDate = (dateString) => {
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const findUser = async (id) => {};
