function getMusicTitlesByYear(tracks) {
    // If tracks is not an array, return an empty object.
    if (!Array.isArray(tracks)) {
      return {};
    }
  
    const result = {};
  
    tracks.forEach(track => {
      // Skip if track is not an object.
      if (typeof track !== 'object' || track === null) {
        return;
      }
  
      // Skip track if it does not have both the 'year' and 'title' properties.
      if (!('year' in track) || !('title' in track)) {
        return;
      }
  
      // Optionally, skip track if types are not as expected.
      // Allow year as a number or a string, but title must be a string.
      if ((typeof track.year !== 'number' && typeof track.year !== 'string') ||
          typeof track.title !== 'string') {
        return;
      }
  
      const yearKey = track.year;
      if (!result[yearKey]) {
        result[yearKey] = [];
      }
      result[yearKey].push(track.title);
    });
  
    // Sort the titles alphabetically for each year.
    Object.keys(result).forEach(year => {
      result[year].sort((a, b) => a.localeCompare(b));
    });
  
    return result;
  }
  
  module.exports = { getMusicTitlesByYear };
  