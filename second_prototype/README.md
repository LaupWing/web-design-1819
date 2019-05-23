# Web design case: Marie van Driessen
Voor dit vak heb ik een een exclusief design website gemaakt marie van driessen. Marie van Driessen is doof en voor haar. Ik heb mij voornamelijk gefocussed op het ervaring van een podcast voor haar een stuk levendiger en plezieriger maken. 

## Table of contents
*   [Caption Website](#caption-website)
    *   [Uitleg Product](#uitleg-product)
        *   [Sprekers](#sprekers)
        *   [Caption](#caption)
        *   [Equalizer](#equalizer)
        *   [Time indicator en play/pause button](#time-indicator-en-play/pause-button)
*   [Feedback en Iteratie](#feedback-en-iteratie)
    *   [Feedback](#feedback)
        *   [Feedback Eerste gesprek met Marie van Driessen](#feedback-eerste-gesprek-met-marie-van-driessen)
        *   [Feedback van klasgenoot: Karin](#feedback-van-klasgenoot-karin)
        *   [Feedback van klasgenoot: Tjebbe](#feedback-van-klasgenoot-tjebbe)
        *   [Feedback van klasgenoot: Stein](#feedback-van-klasgenoot-stein)
    *   [Iteratie](#iteratie)
        *   [Equalizer gaat nu mee het achtergrond muziek](#equalizer-gaat-nu-mee-het-achtergrond-muziek)
        *   [Zie alle captions](#zie-alle-captions)
*   [To Do List](#to-do-list)

## Caption Website
Link prototype: https://affectionate-minsky-ccb177.netlify.com/

![home page](./img/readme/landingpage.png)

De bedoeling van deze website is om een saaie caption van een podcast wat levendiger te maken. Dit word gedaan door aan de hand van de toonhoogtes en hoe mensen iets zeggen de caption zo te stylen dat de captions mee gaan met de spreker. Door het gebruik van verschillende fonts, kleuren en tekst maninupulatie's word dit effect bereikt. 

### Uitleg Product
![caption](./img/readme/caption_started.png)
#### Sprekers
Alle sprekers in de podcast (inclusief de intro) word bovin de website weergeven. Wanneer een spreker aan het praten is dan word het icoontje van de spreker uitgelicht.
![caption](./img/readme/sprekers.png)
#### Caption
Het hele zin word eerst weergeven. De captions licht op tegelijk met de spreker. Elke woord gaat mee met spreker aan de hand van hoe hard de spreker praat en hoe hij iets zegt.
![caption](./img/readme/caption_zelf.png)
#### Equalizer
Door de equalizer kan je zien of er een achtergrond nummer aan het draaien is. Wanneer de equalizer weg is dan is er ook geen achtergrond muziek meer.
![caption](./img/readme/equalizer.png)
#### Time indicator en play/pause button
Een indicator van hoe lang de podcast nog duurt en links heb je een play pause button.
![caption](./img/readme/play_pause.png)


Gebruikte Fonts:
*   Monoton
    *   Deze font geeft een soort van een showbusiness gevoel (word voornamelijk alleen gebruikt voor de intro)
*   Arial
    *   Font voor naam van de spreker
*   Concert One
    *   Default caption font
*   Pirate One
    *   Sigaar font
*   Great Vibes   
    *   Spaanse achtige feel font

```html
<link href="https://fonts.googleapis.com/css?family=Concert+One|Monoton|Pirata+One|Great+Vibes&display=swap" rel="stylesheet">
```

## Feedback en iteratie
### Feedback
#### Feedback Eerste gesprek met Marie van Driessen
*   Laat Geluiden zien die normaal niet in een caption te zien valt(zoals achterground muziek etc.)
*   Captions met de snelheid van de spreker mee laten gaan.

#### Feedback van klasgenoot: Karin
*   Equalizer moet stoppen wanneer achtergrond muziek ook stopt
*   Tekst gaat te snel. Wat als ik ben vergeten wat hij/zij heeft gezegd?

#### Feedback van klasgenoot: Tjebbe
*   Waveform toepasse op de hoogte en hardheid van hoe iemand praat
*   User interface interessanter maken
    *   Word wellicht teveel omdat er niet per se veel bij hoeft

#### Feedback van klasgenoot: Stein
*   Tekst gaat veelste snel, ik vergeet al snel wat ze hebben gezegd omdat de tekst verdwijnt.

### Iteratie
####  Equalizer gaat nu mee het achtergrond muziek
De equalizer stopt nu ook wanneer het achtergrond muziekje eindigt.

####  Zie alle captions
Nu heeft de gebruiker de optie om all captions te bekijken die er tot het huidige playtime werd weergeven. De podcast word dan gepauzeerd zodat de gebruiker rustig kan kijken wat er allemaal gezegd werd, of de captions herlezen.  
![caption](./img/readme/allcaps.png)

## To Do List
- [ ] Voeg een snelheid button om de audio en de captions te vetragen/versnellen