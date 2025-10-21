ServerEvents.recipes(event => {
  // Shaped crafting recipe for Spacial Core
  event.shaped('kubejs:spacial_core', [
    'GEG',
    'ODO',
    'GEG'
  ], {
    G: 'minecraft:gold_ingot',
    E: 'minecraft:ender_eye',
    O: 'minecraft:obsidian',
    D: 'minecraft:diamond'
  })
})
