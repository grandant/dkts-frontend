export const useFilters = (element: any, current: Ref<string[]>, audience: Ref<string[]>, genre: Ref<string[]>) => {
  const isCurrent = current.value.length === 0 || element.filter.includes("true");
  const selectedAudiences =
    audience.value.length === 0 || audience.value.some((filter) => element.filter.includes(filter));
  const selectedGenres = genre.value.length === 0 || genre.value.some((filter) => element.filter.includes(filter));

  return isCurrent && selectedAudiences && selectedGenres;
};
