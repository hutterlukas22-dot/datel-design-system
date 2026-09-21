# DATEL design system

Design system DATA ELEKTRONIK pro web **datel.cz**, nové podstránky a tiskoviny.

**Styleguide:** https://hutterlukas22-dot.github.io/datel-design-system/
**Pravidla a hodnoty v textu:** [DESIGN.md](DESIGN.md)

## Co je v repozitáři

| Soubor | Obsah |
|---|---|
| `index.html` + 7 stránek | styleguide: základy, typografie, komponenty, obsahové bloky, tokeny a pravidla, ukázka podstránky (desktop, mobil) |
| [`DESIGN.md`](DESIGN.md) | kompletní popis systému — barvy, písmo, tvar, komponenty, bloky, pravidla, implementace |
| [`css/tokens.css`](css/tokens.css) | CSS proměnné (`--dtl-*`) — barvy, písmo, rohy, stíny, tlačítka, pattern, pravítka |
| [`css/brand.css`](css/brand.css) | hotové prvky (`.dtl-*`) — štítek, nadpisy, tlačítka, karta, odrážky, pattern, pravítka, tabulka |
| [`assets/logo/`](assets/logo/) | logo ve 20 variantách (s claimem / bez, horizontální / vertikální, barevné, bílé, černé, symbol) |
| [`assets/icons/`](assets/icons/) | 20 ikon — sada značky, kontaktní ikony, odrážka |
| [`assets/pattern.svg`](assets/pattern.svg), [`ruler-l.svg`](assets/ruler-l.svg), [`ruler-r.svg`](assets/ruler-r.svg) | pattern (čistá dlaždice) a pravítka |

`css/styleguide.css` a `js/styleguide.js` patří jen k prohlížení styleguidu, na web se nepřebírají.

## Použití na webu

```html
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap">
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/brand.css">
```

Písmo **Satoshi** se načítá z [Fontshare](https://www.fontshare.com/fonts/satoshi) (licence ITF Free Font License),
soubory písma proto v repozitáři nejsou.

## Úpravy

Stránky styleguidu jsou obyčejné HTML s vloženými styly — upravují se přímo. Při změně hodnoty upravte
i `DESIGN.md` a `css/tokens.css`, aby zůstaly v souladu.

Stáhnout vše: **Code → Download ZIP**, nebo
https://github.com/hutterlukas22-dot/datel-design-system/archive/refs/heads/main.zip

Referenční implementace: podstránka [Kalibrace a justáž měřidel](https://hutterlukas22-dot.github.io/datel-kalibrace/)
([kód](https://github.com/hutterlukas22-dot/datel-kalibrace)).
