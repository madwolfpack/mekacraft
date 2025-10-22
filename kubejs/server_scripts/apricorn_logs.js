ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:sawing",
    "input": {
      "tag": "cobblemon:apricorn_logs"
    },
    "main_output": {
      "id": "cobblemon:apricorn_planks",
      "count": 6
    },
    "secondary_output": {
      "id": "mekanism:sawdust"
    },
    "secondary_chance": 0.25
  })
})
