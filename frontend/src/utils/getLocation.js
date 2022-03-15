export const getLocation = () => {
  const { pathname, hash, search } = window.location;

  return {
    pathname,
    hash,
    search
  };
}