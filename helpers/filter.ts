export const trackTitleFilter = (searchQuery: string) => (track: { title: string; }) => track.title?.toLowerCase().includes(searchQuery.toLowerCase());

