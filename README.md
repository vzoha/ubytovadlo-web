# Ubytovadlo — landing web

Statický landing pro [Ubytovadlo](https://github.com/vzoha/ubytovadlo) na **ubytovadlo.cz**.
Žádný build, žádné závislosti — čisté HTML + CSS, hostované na GitHub Pages.

## Struktura

```
index.html            # celá stránka
assets/style.css      # styly
assets/screenshot-*   # snímky UI (kopie z hlavního repa)
CNAME                 # ubytovadlo.cz (custom doména Pages)
.nojekyll             # vypne Jekyll processing
```

## Nasazení na GitHub Pages

1. Založ repo `vzoha/ubytovadlo-web`, pushni obsah této složky.
2. **Settings → Pages → Source: Deploy from a branch**, branch `main`, složka `/ (root)`.
3. **Custom domain:** `ubytovadlo.cz` (CNAME soubor už je v repu), zaškrtni *Enforce HTTPS*.
4. U registrátora domény (Wedos) nastav DNS:
   - `ubytovadlo.cz` → ALIAS/ANAME na `vzoha.github.io`, nebo 4× `A` na GitHub Pages IP
     (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`).
   - `www.ubytovadlo.cz` → `CNAME` na `vzoha.github.io`.
   - `ubytovadlo.com` → přesměrování (redirect) na `ubytovadlo.cz`.

## Waitlist

Formulář v sekci „Pořadník" odkazuje na placeholder endpoint. Před spuštěním:

- **Formspree:** založ formulář, nahraď `action="https://formspree.io/f/REPLACE_WITH_YOUR_ID"` svým ID.
- **nebo Tally:** nahraď celý `<form>` embed kódem z Tally.

Bez doplnění funguje jen mailto fallback pod formulářem.

## Aktualizace screenshotů

Snímky pocházejí z hlavního repa (`docs/screenshot-*.png`). Po jejich obnově je sem zkopíruj do `assets/`.
