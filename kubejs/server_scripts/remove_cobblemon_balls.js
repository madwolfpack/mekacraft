// kubejs/server_scripts/remove_cobblemon_balls.js

ServerEvents.recipes(event => {
  const removeList = [
    // Ancient variants
    'cobblemon:ancient_leaden_ball', 'cobblemon:ancient_jet_ball', 'cobblemon:ancient_ivory_ball',
    'cobblemon:ancient_heavy_ball', 'cobblemon:ancient_great_ball', 'cobblemon:ancient_gigaton_ball',
    'cobblemon:ancient_feather_ball', 'cobblemon:ancient_citrine_ball', 'cobblemon:ancient_azure_ball',
    'cobblemon:ancient_verdant_ball', 'cobblemon:ancient_ultra_ball', 'cobblemon:ancient_slate_ball',
    'cobblemon:ancient_roseate_ball', 'cobblemon:ancient_poke_ball', 'cobblemon:ancient_origin_ball',

    // Regular and special balls
    'cobblemon:repeat_ball', 'cobblemon:roseate_ball', 'cobblemon:safari_ball',
    'cobblemon:friend_ball', 'cobblemon:heavy_ball', 'cobblemon:great_ball', 'cobblemon:heal_ball',
    'cobblemon:level_ball', 'cobblemon:love_ball', 'cobblemon:lure_ball', 'cobblemon:citrine_ball',
    'cobblemon:azure_ball', 'cobblemon:beast_ball', 'cobblemon:cherish_ball', 'cobblemon:luxury_ball',
    'cobblemon:master_ball', 'cobblemon:dream_ball', 'cobblemon:moon_ball', 'cobblemon:dusk_ball',
    'cobblemon:fast_ball',

    // Basic balls
    'cobblemon:park_ball', 'cobblemon:poke_ball', 'cobblemon:premier_ball',
    'cobblemon:quick_ball', 'cobblemon:slate_ball', 'cobblemon:sport_ball',
    'cobblemon:timer_ball', 'cobblemon:ultra_ball', 'cobblemon:verdant_ball',
    'cobblemon:dive_ball', 'cobblemon:net_ball', 'cobblemon:nest_ball'
  ]

  removeList.forEach(id => event.remove({ output: id }))
})
