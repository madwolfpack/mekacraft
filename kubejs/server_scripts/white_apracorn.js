ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:chemical_conversion",
    "input": {
      "count": 1,
      "item": "cobblemon:white_apricorn"
    },
    "output": {
      "amount": 10,
      "id": "kubejs:white_apricorn_infusion"
    }
  });
});

ServerEvents.recipes(event => {
event.custom({
      "type": "mekanism:metallurgic_infusing",
      "chemical_input": {
        "amount": 220,
        "chemical": "kubejs:white_apricorn_infusion"
      },
      "item_input": {
        "count": 1,
        "item": "cobblemon:slate_ball"
      },
      "output": {
        "id": "cobblemon:premier_ball",
        "count": 1
      }
    });
  });


ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "item": "cobblemon:white_apricorn"
    },
    "output": {
      "id": "kubejs:white_apricorn_compressed",
      "count": 1
    }
  });
});



ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:chemical_conversion",
    "input": {
      "count": 1,
      "item": "kubejs:white_apricorn_compressed"
    },
    "output": {
      "amount": 40,
      "id": "kubejs:white_apricorn_infusion"
    }
  });
});
