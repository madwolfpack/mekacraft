ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:chemical_conversion",
    "input": {
      "count": 1,
      "item": "cobblemon:green_apricorn"
    },
    "output": {
      "amount": 10,
      "id": "kubejs:green_apricorn_infusion"
    }
  });
});

ServerEvents.recipes(event => {
event.custom({
      "type": "mekanism:metallurgic_infusing",
      "chemical_input": {
        "amount": 140,
        "chemical": "kubejs:green_apricorn_infusion"
      },
      "item_input": {
        "count": 1,
        "item": "cobblemon:citrine_ball"
      },
      "output": {
        "id": "cobblemon:verdant_ball",
        "count": 1
      }
    });
  });

  
ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "item": "cobblemon:green_apricorn"
    },
    "output": {
      "id": "kubejs:green_apricorn_compressed",
      "count": 1
    }
  });
});



ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:chemical_conversion",
    "input": {
      "count": 1,
      "item": "kubejs:green_apricorn_compressed"
    },
    "output": {
      "amount": 40,
      "id": "kubejs:green_apricorn_infusion"
    }
  });
});
