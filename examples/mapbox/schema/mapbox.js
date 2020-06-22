cube(`Mapbox`, {
  sql: `SELECT * FROM public.Mapbox`,

  joins: {
    MapboxCoords: {
      sql: `${CUBE}.iso_a3 = ${MapboxCoords}.iso_a3`,
      relationship: `belongsTo`,
    },
  },

  dimensions: {
    name: {
      sql: 'name_long',
      type: 'string',
    },

    geometry: {
      sql: 'geometry',
      type: 'string',
    },
  },
});
