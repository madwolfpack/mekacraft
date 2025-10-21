// kubejs/startup_scripts/apricorn_infusions.js
StartupEvents.registry('mekanism:chemical', event => {
  const infusions = [
    ['red_apricorn_infusion',   0xff3b3b],
    ['blue_apricorn_infusion',  0x3b70ff],
    ['black_apricorn_infusion', 0x2b2b2b],
    ['yellow_apricorn_infusion',0xffe539],
    ['pink_apricorn_infusion',  0xff80c0],
    ['green_apricorn_infusion', 0x3bff6b],
    ['white_apricorn_infusion', 0xffffff]
  ];

  infusions.forEach(([id, tint]) => {
    event.create(`kubejs:${id}`, 'infuse_type')
         .tint(tint)
         .displayName(id.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()));
  });
});
