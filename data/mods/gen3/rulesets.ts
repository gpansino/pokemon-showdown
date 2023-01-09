export const Rulesets: {[k: string]: ModdedFormatData} = {
	standard: {
		effectType: 'ValidatorRule',
		name: 'Standard',
		desc: "The standard ruleset for all offical Smogon singles tiers (Ubers, OU, etc.)",
		ruleset: ['Sleep Clause Mod', 'Switch Priority Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['future'],
		unbanlist: ['budew', 'roserade', 'ambipom', 'mismagius', 'honchkrow', 'chingling', 'bonsly',
			'mimejr', 'happiny', 'munchlax', 'mantyke', 'weavile', 'magnezone', 'lickilicky', 'rhyperior',
			'tangrowth', 'electivire', 'magmortar', 'togekiss', 'yanmega', 'leafeon', 'glaceon', 'gliscor',
			'mamoswine', 'porygonz', 'gallade', 'probopass', 'dusknoir', 'froslass',
		]
	},
};
