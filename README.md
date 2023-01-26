# Vypracování úkolu

## Zadání

Zadání: Cílem je vytvořit jednoduchou webovou stránku se seznamem zemí a jazyků, které v dané zemi jsou k dispozici. Data, se kterými budete pracovat jsou k dispozici na endpointu: https://countries.trevorblades.com/

Použij React (CRA nebo Next.js) a udělej základní setup projektu, aby se v rámci projektu dobře pracovalo s GraphQL. Klienta můžeš zvolit jakého chceš, vhodné je, aby klient šel použít pomocí React Hooks. Celý kód by měl být napsaný v Typescriptu.

Commituj tak, jak bys commitoval do reálného projektu, takže rozděl commity do logických celků atd. Cílem není udělat obrovskou super aplikaci, ale to nejjednoduší nejefektivnější řešení (méně je více, když nepočítám závislosti, knihovny).

#### Popis aplikace

- Na hlavní straně bude výpis všech zemí s vybranými dostupnými informacemi o dané zemi. U dané země budou vypsány i jazyky, které jsou v dané zemi k dispozici. Protože dotaz na jazyky může být časově náročný, je potřeba, aby se nestahovala data o jazyku v rámci jedné query se všemi daty najednou a jazyky se tedy stahovali ideálně až tehdy, pokud bude konkrétní zem vypsaná ve výpisu – například pokud budu mít stránkování a na každé stránce bude 10 záznamů, aby se stahovali pouze ty jazyky u těch zemí, které jsou vypsány.

Výsledek nemusí být celý funkční, důležité je, jak bys k problému přistupoval. Pokud nebudou všechny věci správně nebo zvolíš špatný tooling, nic se nestane. Jde nám o to, abychom zjistili úroveň tvé zkušenosti s výše používanými technologiemi.

Do kódu můžeš psát komentáře, pokud bys něco dopracoval lépe, nebo abys zdůvodnil svoje rozhodnutí.

## Postup

- ### Commit #1
  Příprava aplikace
