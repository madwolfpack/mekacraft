ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:chemical_conversion",
    "input": {
      "count": 1,
      "item": "cobblemon:black_apricorn"
    },
    "output": {
      "amount": 10,
      "id": "kubejs:black_apricorn_infusion"
    }
  });
});

ServerEvents.recipes(event => {
event.custom({
      "type": "mekanism:metallurgic_infusing",
      "chemical_input": {
        "amount": 200,
        "chemical": "kubejs:black_apricorn_infusion"
      },
      "item_input": {
        "count": 1,
        "item": "cobblemon:roseate_ball"
      },
      "output": {
        "id": "cobblemon:slate_ball",
        "count": 1
      }
    });
  });


ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "item": "cobblemon:black_apricorn"
    },
    "output": {
      "id": "kubejs:black_apricorn_compressed",
      "count": 1
    }
  });
});



ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:chemical_conversion",
    "input": {
      "count": 1,
      "item": "kubejs:black_apricorn_compressed"
    },
    "output": {
      "amount": 40,
      "id": "kubejs:black_apricorn_infusion"
    }
  });
});
