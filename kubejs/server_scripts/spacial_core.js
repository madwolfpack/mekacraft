ServerEvents.recipes(event => {
  // Shaped crafting recipe for Spacial Core
  event.shaped(Item.of('kubejs:spacial_core', 4), [
    ' A ',
    'BCB',
    ' A '
  ], 
  {
    A: 'mekanism:basic_control_circuit',
    B: 'minecraft:iron_ingot',
    C: 'minecraft:chest',

  })
})
