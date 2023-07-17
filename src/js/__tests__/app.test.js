import showColorIndication from '../app';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 49 }, 'wounded'],
  [{ name: 'Маг', health: 16 }, 'wounded'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
  [{ name: 'Маг', health: 14 }, 'critical'],
  [{ name: 'Маг', health: 0 }, 'critical'],
  [{ name: 'Маг', health: -100 }, 'critical'],
])(('should be healthy for %s level with %i data'), (data, expected) => {
  const result = showColorIndication(data);
  expect(result).toBe(expected);
});
