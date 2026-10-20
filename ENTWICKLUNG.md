[![Herzintelligenz: Dein Herz erklärt sich selbst](herzintelligenz_vorschau.jpg)](https://nosz.github.io/herzintelligenz/)

# Herzintelligenz: Projektnotizen (Entwicklung)

> **Diese Datei ist nur für die Entwicklung und wird nicht hochgeladen** (steht in `.gitignore`, ebenso der Ordner `tests`). Die Startseite für Besucher ist `README.md`. (eine Datei, offline lauffähig, Version 1.2.0, Stand 20.10.2026). Einfach im Browser öffnen oder auf einem Webserver ablegen.

> **Veröffentlichung:** GitHub-Repository `herzintelligenz` (Benutzer `nosz`), Adresse `https://nosz.github.io/herzintelligenz/`. Alle Dateien der Liste unten ins Hauptverzeichnis des Repositories legen, dazu den **Ordner `flags`** (34 Dateien, 33 Flaggen und die Lizenz); der Ordner `tests` bleibt lokal, GitHub Pages auf den Hauptzweig stellen. Bei anderer Adresse in `index.html` (canonical, og:url, og:image, twitter:image, `HOME`) und in dieser README anpassen.

## Inhalt
Quiz-Lernspiel mit **8 kleinen Lektionen** rund um das menschliche Herz und der Figur **Herzi**, einem kleinen süßen Pixel-Herz, das der beste Freund des Nutzers ist: freundlich, humorvoll, hat den Nutzer sehr lieb und spricht ihn immer mit „du“ an. Die App gibt es in **33 Sprachen**, wählbar oben im Menü über ein Fenster mit Suchfeld und drei Gruppen (Eigenname je Sprache; Suche auch nach deutschem oder englischem Namen): **Deutsch und Mundarten** (Deutsch, Österreichisch, Schweizerisch, Schwäbisch, Bayrisch, Hessisch, Sächsisch, Plattdeutsch, Berlinerisch), **Europa** (English, Français, Italiano, Español, Português (Portugal), Nederlands, Vlaams (Belgisch), Svenska, Norsk, Polski, Čeština, Hrvatski, Magyar, Moldovenească (Moldawisch), Українська, Русский, Ελληνικά, Türkçe) und **Weltweit** (Español Argentina, Português Brasil, 中文, 日本語, Tiếng Việt, বাংলা). Jede Sprache hat eine kleine Flagge als eigene SVG-Datei im Ordner `flags` (Länderflaggen aus der Bibliothek flag-icons, MIT-Lizenz, Datei `flags/flag-icons-LICENSE.txt`; die Mundarten zeigen die selbst gezeichneten Farben ihrer Region). Die Wahl wird gespeichert; Herzi, die Urkunde und der App-Name oben („Herzintelligenz“ in der jeweiligen Sprache) folgen der gewählten Sprache. Moldawisch ist Rumänisch (Republik Moldau), Belgisch ist Flämisch.

| Nr. | Lektion | Fragen |
|---|---|---|
| 1 | Hallo, ich bin dein Herz | 3 |
| 2 | So bin ich gebaut | 4 |
| 3 | Zwei Kreisläufe, ein Herz | 4 |
| 4 | Mein Taktgeber (mit der Frage „Wie oft hab ich für dich geschlagen?“ und dem Herzrechner) | 4 |
| 5 | Wenn ich aus dem Takt komme | 4 |
| 6 | Herzen im Tierreich | 4 |
| 7 | Wer hat mich entdeckt? | 4 |
| 8 | Bossrunde: Herz-Profi | 5 |

- **Kopfzeile:** „Herzintelligenz / Norbert Szpak“, Herzschläge-Zähler, aufklappbare Sprachwahl, Sprachwahl, Teilen, Hell/Dunkel (kein Knopf zum Entfernen von Herzi).
- **Herzi:** kleines Pixel-Herz mit Augen, Wangen und Füßchen, das im Takt pocht. Es schaut ab und zu vorbei (rein dekorativ, nicht klickbar): läuft quer, schaut vom Rand, erzählt Herz-Fakten und Zuspruch, erzählt Witze mit Pointe, pocht „Bumm-bumm“, tanzt, klettert die Wand hoch, geht kopfüber an der Decke, schwebt mit Luftballon davon oder taucht mit Funken aus dem Nichts auf (Puff). Der Start ist immer Herzi mitten im Bild mit Herzchen, danach Begrüßung oder Namensfrage (drängender, höchstens sechsmal) und Lob. Herzi spricht immer in der eingestellten Menüsprache; beim Sprachwechsel meldet es sich gleich neu. Sprechblasen verdecken nie einen Kopf. Aus bei „Bewegung reduzieren“. Test mit Adresse `?lauf=quer|gucken|sagen|fakt|witz|herzschlag|tanz|puff|kletter|decke|ballon|hallo|name|gruss|lob|kuss`.
- **Quiz mit interessanten Fragen:** Überraschendes über das Herz (Herzzeiten, Oktopus mit drei Herzen, Blauwal, Etruskerspitzmaus, Sinusknoten, Harvey, Ibn an-Nafīs), damit der Nutzer staunt und stolz auf sein Herz ist.
- **Herzrechner** in der Lektion „Mein Takt“: Alter eintragen, Herzi sagt, wie oft es schon geschlagen hat (etwa 70 Schläge pro Minute).
- **Sprache im Link:** Teilen, Link kopieren, WhatsApp, E-Mail und Urkunde teilen verwenden immer die Adresse mit der eingestellten Sprache, z. B. `https://nosz.github.io/herzintelligenz/?lang=it`; wer den Link öffnet, sieht die App gleich in dieser Sprache (hat Vorrang vor der gespeicherten Sprache). Die Adresse im Browser trägt ebenfalls immer `?lang=<Code>`. Codes: de, at, ch, swg, bay, hes, sax, nds, ber, en, fr, it, es, pt, nl, vls, sv, no, pl, cs, hr, hu, mo, uk, ru, el, tr, esar, ptbr, zh, ja, vi, bn; auch Kurzformen wie `pt-BR`, `es-AR`, `nl-BE`, `ro`, `nb` werden erkannt.
- **Interessante Links** (Abschnittsname in jeder Sprache übersetzt): Karten mit Links zu Energietankstelle (https://nosz.github.io/energietankstelle), Challenge-App (https://nosz.github.io/challenge-app/), BabyLove (https://nosz.github.io/babylove) und Mutige Kinderherzen (https://www.mutige-kinderherzen.de/); dazu die Wikipedia-Quelle. **Alle Links zu anderen Seiten öffnen in einem eigenen Browser-Tab.**
- **Impressum** ganz unten in jeder Ansicht, mit Link zu https://nosz.github.io/energietankstelle/impressum.html.
- **Spielmechanik:** 10 Herzschläge je richtiger Antwort, 1 bis 3 Sterne je Lektion, 5 Ränge von „Herzchen“ bis „Herzintelligenz-Meister“, Konfetti, Hell- und Dunkelmodus.
- **Urkunden:** je Lektion eine Herz-Urkunde mit den Quiz-Fragen und richtigen Antworten, zum Abschluss die Meisterurkunde (PNG speichern oder drucken). Sprache der Urkunde = Menüsprache. Unterschrieben „Herzi“.
- **Teilen:** der größte, gefüllte Knopf auf Ergebnisseite, Urkunden-Seite (auch Meister), Urkunden-Übersicht und Lektionskarten; Text je Lektion mit Link zur App.
- **Installieren-Knopf, PWA:** installierbar, läuft offline, Update-Hinweis. Dateien (alle ins Hauptverzeichnis): `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `favicon.png`, `apple-touch-icon.png`, `herzintelligenz_vorschau.jpg` und der Ordner `flags/` (`<Sprachcode>.svg`). Bei jeder neuen Version `VERSION` in `index.html` **und** `sw.js` gemeinsam erhöhen.

## Marke und Look
Farben nach der Vorlage des Auftraggebers: Magenta (`#c2187f`), Violett (`#6a1fa0`, `#2a0e45`) und Weiß, dazu ein Hauch Gold (`#ffc83d`). Herzi ist eine selbst gezeichnete Pixelgrafik (11 x 16). Das Symbol der Energietankstelle (lila Herz mit Zapfsäule) ist als SVG nachgezeichnet. Die Seite ist vom Auftraggeber Norbert Szpak genehmigt.

## Quellen
- Wikipedia: Herz, https://de.wikipedia.org/wiki/Herz (abgerufen 20.10.2026); zum Weiterlesen: https://de.wikipedia.org/wiki/Herzzyklus
- Die Witze und Sprüche von Herzi sind erfunden (Humor); Zahlen und Fakten stammen aus dem Wikipedia-Artikel.

## Bekannte Grenzen
- Die App ersetzt keinen ärztlichen Rat (Hinweis steht in der App).
- **Dialekte (Österreichisch, Schweizerisch, Schwäbisch, Bayrisch, Hessisch, Sächsisch, Plattdeutsch, Berlinerisch) und Italienisch sind liebevoll gemeint, keine Rechtschreibnorm; Muttersprachler sollten die Texte gegenlesen**, ebenso die englischen Texte.
- Dialekte, Italienisch und alle weiteren Fremdsprachen sind nicht von Muttersprachlern geprüft. Die Vorschau beim Teilen (Bild und Titel) ist in allen Sprachen die deutsche, weil die Seite nur eine Datei ist. „Belgisch“ wurde als Flämisch, „Moldawisch“ als Rumänisch (Republik Moldau) umgesetzt.
- Links zu den Partnerseiten hängen davon ab, dass die Seiten online sind.

## Änderungen
- 1.2.2 (20.10.2026): Fuß: statt „Norbert Szpak“ jetzt der Link „Created by Norbert“ (gleiches Design wie Impressum, öffnet https://nosz.github.io/norbert-szpak in einem neuen Tab). Die Kopfzeile zeigt weiter den Namen.
- 1.2.0 (20.10.2026): Flaggen als eigene SVG-Dateien im Ordner `flags` (aus flag-icons) statt in `index.html`, App-Name oben bricht auf dem Handy um.
- 1.2.1 (20.10.2026): Sprachsuche überarbeitet: Suchbegriff wird in Name und Kürzel markiert, Treffer nach Relevanz sortiert (Namensanfang vor Wortanfang vor Beiname), Treffer über Beinamen zeigen den gefundenen Begriff unter dem Namen, mehrere Suchwörter, Trefferzähler, Esc leert zuerst das Suchfeld. Auf dem Handy öffnet das Fenster oben mit fester Höhe, das Suchfeld bleibt bei wenigen Treffern an derselben Stelle.
- 1.1.1 (20.10.2026): Sprachwahl auf dem Handy in einer Spalte, ohne seitliches Scrollen.
- 1.1.0 (20.10.2026): **22 neue Sprachen** (insgesamt 33: Französisch, Spanisch, Argentinisch, Portugiesisch, Brasilianisch, Niederländisch, Flämisch, Schwedisch, Norwegisch, Polnisch, Tschechisch, Kroatisch, Ungarisch, Moldawisch, Ukrainisch, Russisch, Griechisch, Türkisch, Chinesisch, Japanisch, Vietnamesisch, Bengalisch), neue Sprachwahl mit Suchfeld und Gruppen, Herzrechner rechnet bei Japanisch und Chinesisch in 万 und 億.
- Zusätzlich in 1.1.0: Sprachwahl mit Flaggen, Sprachlink `?lang=` beim Teilen und Öffnen, App-Name „Herzintelligenz“ in jeder Sprache übersetzt, Abschnitt „Interessante Links“ statt „Mehr von Norbert“.
- 1.0.1 (20.10.2026): Mundart-Texte in der Oberfläche (Österreichisch, Berlinerisch, Sächsisch) näher am Dialekt, eigene Urkunden-Überschriften je Mundart, Herzrechner meldet falsche Eingaben in der eingestellten Sprache, kein Knopf mehr zum Entfernen von Herzi.
- 1.0.0 (20.10.2026): erste Fassung mit 8 Lektionen, Herzi, 11 Sprachen, Herzrechner, Links, Impressum, Urkunden und Teilen.
