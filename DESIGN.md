# DATEL — design system

Vizuální jazyk webu **datel.cz** a navazujících podstránek a tiskovin společnosti DATA ELEKTRONIK, spol. s r.o.
Postavený z **Brandmanuálu DATA ELEKTRONIK v1.1** a z produkčního CSS webu, ověřený na podstránce
[Kalibrace a justáž měřidel](https://hutterlukas22-dot.github.io/datel-kalibrace/).

- Styleguide (vizuální podoba všeho níže): https://hutterlukas22-dot.github.io/datel-design-system/
- Tokeny: [`css/tokens.css`](css/tokens.css) · Hotové prvky: [`css/brand.css`](css/brand.css) · Assety: [`assets/`](assets/)

> Tento dokument je zdroj pravdy v textové podobě. Je psaný i pro AI asistenty (Claude, Cursor, Copilot…):
> při návrhu nebo kódování UI pro DATEL se řiďte pravidly níže a hodnoty berte z `css/tokens.css`.

---

## 1. Pravidla, která drží systém pohromadě

1. **Jedna zelená akce na obrazovku.** Zelená znamená „hlavní konverze“. Druhá zelená na stejné stránce hodnotu první maže.
2. **Modrá je navigační, ne konverzní.** „Zjistit více“, „Vybrat variantu“, odkazy, ikony.
3. **Fialová je plocha a nadpis, ne odstavec.** Hero, citace, patička, první část nadpisu a štítek. Odstavce jsou šedé `#707070`.
4. **Verzálky jen na štítek a CTA.** Nadpisy vždy sentence case.
5. **Každá sekce má stejnou anatomii:** štítek → nadpis → perex → obsah → jedna akce.
6. **Dva rohy zaoblené, dva ostré.** Pravý horní a levý dolní, 20 px (štítky a pole 10 px). Tlačítka, karty, obrázky, pole formuláře. Symetrický rádius identitu okamžitě rozbije.
7. **Hover se zvedá.** Tlačítko o 5 px nahoru + barevný stín ve své vlastní barvě. Karty stejně. Žádné jiné animace.
8. **Ikony ze sady značky.** Dvoutónové: kresba `#008FCD`, výplň `#B4E2F6`. Linkové zelené jen u kontaktních údajů. Žádné emoji, žádné vícebarevné ilustrace.
9. **Čísla tabulkovými číslicemi.** Parametry, tolerance, rozsahy: `font-variant-numeric: tabular-nums`.
10. **Klikací plocha min. 44 px** na dotyku; focus vždy viditelný: 2 px outline v barvě tlačítka s odstupem 3 px.
11. **Tabulky jednotně, na webu i v tisku.** Viz [Tabulky](#tabulky).

---

## 2. Logo

Kompletní sada z logopacku je v [`assets/logo/`](assets/logo/) (SVG, názvy shodné s logopackem klienta).

| Varianta | Použití |
|---|---|
| Logo s claimem · horizontální · barevné na světlý podklad | **primární** — hlavička webu, tiskoviny, prezentace |
| Logo s claimem · vertikální | úzké svislé formáty (bannery, roll-upy) |
| Logo bez claimu · horizontální / vertikální | malé velikosti, kde by claim nebyl čitelný (e-mail, drobné aplikace) |
| Barevné na tmavý podklad | fialové plochy, patička |
| Bílé / černé | jen tam, kde barevné technicky nejde |
| Symbol | favicon, avatar, doplňkový grafický prvek; na tmavém podkladu je fialový čtverec bílý |

- **Logo se vkládá vždy jako celé SVG** — nikdy PNG + claim „Záruka přesného měření“ sázený v HTML textu.
- **Ochranná zóna:** minimálně 2 čtverce ze symbolu na každé straně, v rohu plochy 4 čtverce.

---

## 3. Barvy

| Role | Hex | RGB | CMYK | Token | Použití |
|---|---|---|---|---|---|
| Modrá (primární) | `#008FCD` | 0, 143, 205 | 79, 30, 2, 0 | `--dtl-blue` | značka, odkazy, ikony, druhá část nadpisu, aktivní stavy |
| Fialová (primární) | `#331F5E` | 51, 31, 94 | 96, 100, 28, 20 | `--dtl-violet` | tmavé plochy, patička, první část nadpisu, štítek |
| Zelená (jen CTA) | `#23CE6B` | 35, 206, 107 | 69, 0, 74, 0 | `--dtl-green` | pouze CTA tlačítka a jejich stavy |

**Odstíny modré:** `#E6F4FA` · `#B4E2F6` (výplň ikon, hlavička tabulky) · `#46B9EB` (hovery, ikony, nadpis na fialové) ·
`#008FCD` · `#00658F` (odkazy v odstavci). Podklad modrých sekcí na webu `#DAF1FB`.

**Neutrály:** `#0F1620` hlavní text · `#535353` podnadpisy · `#707070` odstavce a popisky · `#E4E8EE` linky ·
`#F2F5F8` plochy · `#FDFDFD` „bílá“ značky. Čistá černá ani čistá bílá se na obrazovce nepoužívají.

**Veličiny v grafech a osách:** teplota červeně `#E0303A` (světlá `#FCE6E7`), relativní vlhkost modře `#008FCD` (světlá `#DAF1FB`).

**Stavové:** chyba `#C0392B`, podklad chyby `#FDECEA`.

---

## 4. Typografie

Jediné písmo je **Satoshi** v řezech Regular a Bold (+ Medium pro technické údaje). Web ho načítá z
[fontshare.com](https://www.fontshare.com/fonts/satoshi) (licence ITF Free Font License — soubory písma se v tomto
repozitáři nešíří). Fallback: `Manrope`, dál `system-ui`.

| Styl | Velikost / řádek | Řez | Barva | Pozn. |
|---|---|---|---|---|
| Štítek | 14/20, +0.1em | 700, verzálky | `#331F5E` (na fialové bílý) | vždy s linkou vlevo 56 × 3 px v barvě textu |
| H1 | 56/1.08, −0.015em | 700 | 1. část `#331F5E`, 2. část `#008FCD` | na fialové bílá + `#46B9EB`; mobil 34/1.15 |
| H2 | 38/1.12, −0.01em | 700 | stejné střídání jako H1 | nad ním vždy štítek; mobil 26/1.2 |
| H3 | 22/1.25 | 700 | `#535353` | nadpis karty nebo bloku; mobil 19/1.3 |
| Perex | 19/1.8 | 400 | `#707070` | max. tři řádky; mobil 17/1.6 |
| Odstavec | 16/1.7 (27 px, jako web) | 400 | `#707070` | řádek max. 68 znaků |
| Odrážky | 16/1.5 | 700 | `#707070` | brand asset `odrazka.svg` (modré kolečko s bílou fajfkou), 16 px, mezera 12 px |
| CTA | 14/1, +0.05em | 700, verzálky | na zelené `#331F5E`, na modré a fialové `#FDFDFD` | |
| Popisek, meta | 13/1.55 | 400 | `#707070` | datum, jednotka, poznámka |
| Technický údaj | 15/1.5 | 500 | | tabulkové číslice |

- Dvoubarevný nadpis: druhou část obalte do `<span>` — `<h2 class="dtl-h2">Kalibrace <span>a justáž měřidel</span></h2>`.
- Nikdy víc než dvě velikosti nadpisu v jedné sekci. Kurzíva se nepoužívá, zvýrazňuje se Boldem.
- **Česká sazba:** nezlomitelná mezera po jednopísmenných předložkách a před jednotkou (20 °C, 5 m),
  české uvozovky „takto“, pomlčka – ne spojovník, rozsahy 10–20.

---

## 5. Tvar a prostor

- **Rohy:** `border-radius: 0 20px 0 20px` (tlačítka, karty, obrázky) a `0 10px 0 10px` (štítky, pole, drobné prvky).
  Nikdy plný rádius na všech čtyřech rozích. Výjimka: tabulka má rohy hranaté (zaoblená smí být karta, ve které leží).
- **Mřížka:** kontejner 1200 px, gutter 24 px, 12 sloupců. Zlomy 640 / 960 / 1200 / 1600 px (shodné s webem).
- **Rytmus sekcí:** 96 px desktop, 56 px mobil. Spacing škála po 4 px: 4 · 8 · 16 · 24 · 32 · 48 · 64 · 96.
- **Stíny:** karta `0 3px 6px rgba(0,0,0,.12)`; hover CTA `0 5px 20px rgba(35,206,107,.36)`, modré `0 5px 20px rgba(0,143,205,.2)`.

---

## 6. Pattern a pravítko

**Pattern** ([`assets/pattern.svg`](assets/pattern.svg)) — motiv plošného spoje. Čistá rapportová dlaždice
**235,25 × 262,5 px**, opakuje se do všech stran (`background-repeat: repeat`), žádné skládání obrázků ani záporné okraje.
Krytí se nastavuje **na celou plochu**: na bílé **20 %**, na fialové **50 %**. Zdrojová dlaždice z Brand_assety
obsahuje motiv 1,75× a při skládání se zdvojí — nepoužívat.

**Pravítko** ([`assets/ruler-l.svg`](assets/ruler-l.svg), [`ruler-r.svg`](assets/ruler-r.svg)) — měřítko podél svislého
okraje sekce. Vždy **50 % krytí**, přesně na hraně obrazovky a u dolní hrany sekce, 37 × 864 px (na vyšší sekci se opakuje).
Dodané SVG je levé pravítko, pravé je zrcadlo — rysky vždy začínají u hrany obrazovky. Používá se v hero, záhlaví
podstránky, formuláři a patičce; lze kombinovat s patternem (pravítko leží nad ním).

```html
<section class="dtl-violet dtl-rulers">
  <div class="dtl-pattern"></div>
  …
</section>
```

---

## 7. Komponenty

### Tlačítka
`font: 700 14px/20px Satoshi` · `padding: 19px 40px` (malé `9px 40px`) · verzálky, prostrkání .05em ·
rohy `0 20px 0 20px` · `transition: .2s ease-in-out`.

| Varianta | Třída v `brand.css` | Pozadí | Text | Hover |
|---|---|---|---|---|
| CTA (výchozí) | `.dtl-btn` | `#23CE6B` | `#331F5E` | `#2DE37A`, zvednutí 5 px, zelený stín |
| Navigační | `.dtl-btn--blue` | `#008FCD` | `#FDFDFD` | `#46B9EB`, modrý stín |
| Na světlé plochy | `.dtl-btn--violet` | `#331F5E` | `#FDFDFD` | fialový stín |
| Přes fotku/pattern | `.dtl-btn--white` | bílá 40 % + rámeček 2 px | `#FDFDFD` | modrý stín |
| Neaktivní | `[disabled]` | `#E4E8EE` | `#9AA3AE` | — |

Tlačítko odeslání formuláře má kolem sebe průhledný zelený rámeček (`rgba(35,206,107,.35)`), **rovnoměrně
po celém obvodu** a se stejnými rohy. Stavy focus a disabled web zatím nedefinuje — jsou navržené zde.

### Formulářová pole
Rohy `0 10px 0 10px`, placeholder `#9AA3AE`, focus `1px #008FCD` + 3px halo, chyba červeně s textem pod polem.

### Štítky, odkazy, drobečky
Štítky (BESTSELLER, NOVINKA, AKCE…) verzálky s rohy `0 10px 0 10px`. Odkaz v textu se podtrhává až na hover
(v odstavci barvou `#00658F`). Drobečková navigace s modrou šipkou.

### Ikony
Sada v [`assets/icons/`](assets/icons/): měření teploty, vlhkosti, vodní aktivity, CO₂, diferenčního tlaku,
nízkého rosného bodu, tlaku, kalibrační laboratoř, servis, 30 let na trhu, nejpřesnější měřidla, komplikované
požadavky a (od 09/2026) data logger, digitální přístroj, odporový teploměr. Plné tvary ve dvou tónech na mřížce
24 × 24 — světlou výplň nikdy nevynechávejte ani nepřebarvujte. Blok výhod: 6 na řádek, ikona 80 px, pod ní
nadpis verzálkami 700 17/24 fialový a text 14/22 `#707070`, vše na střed. Minimum 24 px.
Kontaktní ikony (`phone`, `mail`, `map`) jsou samostatná linková rodina v zelené, 12–16 px, vždy vedle textu.

### Tabulky
Jeden styl pro všechny tabulky — parametry produktů, rozsahy akreditace, kalibrační body, objednací čísla —
na webu i v tiskovinách. Třída `.dtl-table` v `brand.css`.

| | |
|---|---|
| Hlavička | výplň `#B4E2F6`, text Satoshi 700 18/25 `#535353`, bez verzálek, svisle na střed |
| Tělo | `#FDFDFD`, text 400 16/27 `#707070`; název položky v prvním sloupci tučně `#535353` |
| Mřížka | 1 px `#9D9D9D` mezi všemi buňkami i kolem celé tabulky; sloučené buňky mají linku kolem celé plochy |
| Rohy | hranaté |
| Buňka | odsazení 14 × 20 px, zarovnání vlevo, tabulkové číslice |
| Důraz | jen tučným řezem — bez zebry, bez barevných hodnot, bez podbarvení řádků |
| Mobil | tabulka se nezmenšuje, posouvá se vodorovně (`.dtl-table-wrap`) |

### Karty
Pozadí `#FDFDFD`, rohy `0 20px 0 20px`, stín `0 3px 6px rgba(0,0,0,.12)`, na hover zvednutí a modrý stín.
Karta s fotkou má fotku nahoře s rohem `0 20px 0 0`.

---

## 8. Obsahové bloky

- **Hlavička sekce:** štítek → (12 px) nadpis → (10 px) perex → (22 px) akce. Rytmus se nemění napříč webem.
- **Sekce:** bílá, modrá (`#DAF1FB`) nebo fialová s patternem 50 % a pravítky.
- **Karty:** produkt (štítek, název, popis, akce), služba, článek (datum), číslo („30 let“), dlaždice odvětví.
- **Reference:** citace na fialové, jméno a firma pod ní. Loga zákazníků a výrobců **monochromaticky**,
  barva se ukáže při najetí myší.
- **Kontaktní osoba:** fotka, jméno, funkce, zelené kontakty, jedna akce.
- **Grafy a osy rozsahů:** teplota červeně, vlhkost modře; hodnoty tabulkovými číslicemi.
- Nové bloky se skládají z těchto, nevymýšlejí se nové.

---

## 9. Přístupnost

- Modrá `#008FCD` na bílé má kontrast 3,4:1 — vyhoví pro text od 24 px a pro ikony, ne pro běžný text.
  Odkazy v odstavci proto `#00658F` (5,6:1) nebo podtržené.
- Zelená `#23CE6B` nese vždy tmavý text — fialovou `#331F5E` (6,7:1), nikdy bílý.
- Focus vždy viditelný, klikací plocha min. 44 px.

---

## 10. Implementace na webu datel.cz

- Web počítá v **rem, kde 1rem = 10 px na 1920 px** a na menších šířkách se zmenšuje. Hodnoty v tomto dokumentu
  jsou v px (pro 1920); na webu je pište v rem (16 px = 1.6rem).
- Web stojí na **UIkit** (`uk-grid`, `uk-width-*`, `uk-accordion`), zlomy 640 / 960 / 1200.
- Nové třídy pište s vlastní předponou (`.dtl-`, na podstránce Kalibrace `.kal-`), aby nic z webu nepřepsaly.
- Několik prvků webu (claim, vyhledávání, nadpisy menu v patičce) se sází písmem Inter — sjednotit na Satoshi
  (viz `assets/css/datel-font-fix.css` v repozitáři [datel-kalibrace](https://github.com/hutterlukas22-dot/datel-kalibrace)).
- Web podbarvuje sudé řádky všech tabulek (`table tbody tr:nth-child(2n)`) — jednotný styl tabulek to ruší.
- Sticky prvek uvnitř sekce s `overflow: hidden` nefunguje — použijte `overflow: clip`.
- Referenční implementace: [datel-kalibrace](https://github.com/hutterlukas22-dot/datel-kalibrace).

---

## 11. K ověření u klienta

- Manuál uvádí primární modrou `#008FCD`, dodané logo SVG má `#008ECC`. Systém drží `#008FCD`; doporučeno sjednotit i zdrojová loga.
- Text na zelených CTA: manuál a systém fialový `#331F5E`, produkční web zatím černý.
- Stavy focus a disabled tlačítek jsou navržené nově (web je nedefinuje).
