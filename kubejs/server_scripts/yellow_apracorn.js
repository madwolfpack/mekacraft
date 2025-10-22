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
        "amount": 120,
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


ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "item": "cobblemon:yellow_apricorn"
    },
    "output": {
      "id": "kubejs:yellow_apricorn_compressed",
      "count": 1
    }
  });
});



ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:chemical_conversion",
    "input": {
      "count": 1,
      "item": "kubejs:yellow_apricorn_compressed"
    },
    "output": {
      "amount": 40,
      "id": "kubejs:yellow_apricorn_infusion"
    }
  });
});
