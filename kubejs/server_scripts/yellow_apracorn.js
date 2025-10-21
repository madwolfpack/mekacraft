ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:chemical_conversion",
    "input": {
      "count": 1,
      "item": "cobblemon:yellow_apricorn"
    },
    "output": {
      "amount": 10,
      "id": "kubejs:yellow_apricorn_infusion"
    }
  });
});

ServerEvents.recipes(event => {
event.custom({
      "type": "mekanism:metallurgic_infusing",
      "chemical_input": {
        "amount": 100,
        "chemical": "kubejs:yellow_apricorn_infusion"
      },
      "item_input": {
        "count": 1,
        "item": "cobblemon:poke_ball"
      },
      "output": {
        "id": "cobblemon:citrine_ball",
        "count": 1
      }
    });
  });