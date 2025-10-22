ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:chemical_conversion",
    "input": {
      "count": 1,
      "item": "cobblemon:pink_apricorn"
    },
    "output": {
      "amount": 10,
      "id": "kubejs:pink_apricorn_infusion"
    }
  });
});

ServerEvents.recipes(event => {
event.custom({
      "type": "mekanism:metallurgic_infusing",
      "chemical_input": {
        "amount": 180,
        "chemical": "kubejs:pink_apricorn_infusion"
      },
      "item_input": {
        "count": 1,
        "item": "cobblemon:azure_ball"
      },
      "output": {
        "id": "cobblemon:roseate_ball",
        "count": 1
      }
    });
  });


ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "item": "cobblemon:pink_apricorn"
    },
    "output": {
      "id": "kubejs:pink_apricorn_compressed",
      "count": 1
    }
  });
});



ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:chemical_conversion",
    "input": {
      "count": 1,
      "item": "kubejs:pink_apricorn_compressed"
    },
    "output": {
      "amount": 40,
      "id": "kubejs:pink_apricorn_infusion"
    }
  });
});
