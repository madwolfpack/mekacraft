ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:chemical_conversion",
    "input": {
      "count": 1,
      "item": "cobblemon:blue_apricorn"
    },
    "output": {
      "amount": 10,
      "id": "kubejs:blue_apricorn_infusion"
    }
  });
});

ServerEvents.recipes(event => {
event.custom({
      "type": "mekanism:metallurgic_infusing",
      "chemical_input": {
        "amount": 100,
        "chemical": "kubejs:blue_apricorn_infusion"
      },
      "item_input": {
        "count": 1,
        "item": "cobblemon:verdant_ball"
      },
      "output": {
        "id": "cobblemon:azure_ball",
        "count": 1
      }
    });
  });