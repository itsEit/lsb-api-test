export const onlineCharacters = `
SELECT 
	c.charname,
	cs.nameflags,
	c.pos_zone,
	c.gmlevel,
	ls1.name AS ls1name,
	ls2.name AS ls2name,
	ls1.color AS ls1color,
	ls2.color AS ls2color,
	s.linkshellrank1 AS ls1rank,
	s.linkshellrank2 AS ls2rank,
	cs.mjob,
	cs.sjob,
	cs.mlvl,
	cs.slvl,
	c.mentor,
	cj.charid,
	cj.unlocked,
	cj.genkai,
	cj.war,
	cj.mnk,
	cj.whm,
	cj.blm,
	cj.rdm,
	cj.thf,
	cj.pld,
	cj.drk,
	cj.bst,
	cj.brd,
	cj.rng,
	cj.sam,
	cj.nin,
	cj.drg,
	cj.smn,
	cj.blu,
	cj.cor,
	cj.pup,
	cj.dnc,
	cj.sch,
	cj.geo,
	cj.run,
	z.name AS zonename,
	(SELECT COUNT(*) FROM char_vars AS cv WHERE cv.charid = c.charid AND cv.varname LIKE '%gmhidden%') AS ishidden
FROM accounts_sessions AS s
LEFT JOIN chars AS c ON s.charid = c.charid
LEFT JOIN linkshells AS ls1 ON s.linkshellid1 = ls1.linkshellid
LEFT JOIN linkshells AS ls2 ON s.linkshellid2 = ls2.linkshellid
LEFT JOIN char_stats AS cs ON s.charid = cs.charid
LEFT JOIN char_jobs AS cj ON s.charid = cj.charid
LEFT JOIN zone_settings AS z ON c.pos_zone = z.zoneid
ORDER BY c.gmlevel DESC, c.charname ASC;
`;

export const onlineCharacter = `
SELECT
	c.charname,
	cs.nameflags,
	c.pos_zone,
	c.gmlevel,
	ls1.name AS ls1name,
	ls2.name AS ls2name,
	ls1.color AS ls1color,
	ls2.color AS ls2color,
	s.linkshellrank1 AS ls1rank,
	s.linkshellrank2 AS ls2rank,
	cs.mjob,
	cs.sjob,
	cs.mlvl,
	cs.slvl,
	c.mentor,
	cj.charid,
	cj.unlocked,
	cj.genkai,
	cj.war,
	cj.mnk,
	cj.whm,
	cj.blm,
	cj.rdm,
	cj.thf,
	cj.pld,
	cj.drk,
	cj.bst,
	cj.brd,
	cj.rng,
	cj.sam,
	cj.nin,
	cj.drg,
	cj.smn,
	cj.blu,
	cj.cor,
	cj.pup,
	cj.dnc,
	cj.sch,
	cj.geo,
	cj.run,
	z.name AS zonename,
	(SELECT COUNT(*) FROM char_vars AS cv WHERE cv.charid = c.charid AND cv.varname LIKE '%gmhidden%') AS ishidden
FROM accounts_sessions AS s
LEFT JOIN chars AS c ON s.charid = c.charid
LEFT JOIN linkshells AS ls1 ON s.linkshellid1 = ls1.linkshellid
LEFT JOIN linkshells AS ls2 ON s.linkshellid2 = ls2.linkshellid
LEFT JOIN char_stats AS cs ON s.charid = cs.charid
LEFT JOIN char_jobs AS cj ON s.charid = cj.charid
LEFT JOIN zone_settings AS z ON c.pos_zone = z.zoneid
WHERE c.charName = ?
ORDER BY c.gmlevel DESC, c.charname ASC;
`;
