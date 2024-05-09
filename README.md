# FullStack Projektiraportti - MusicDB REST API Web Application

 
## Sisällysluettelo

[1	Yleistä tietoa projektista](#yleistä-tietoa-projektista)

[2	Käytettyjä tekniikoita ja erikoisuuksia](#käytettyjä-tekniikoita-ja-erikoisuuksia)

[3	Design ja rakenne](#design-ja-rakenne)

[4 Linkit](#linkit)

[4.1 Verkkosivun osoite](#verkkosivun-osoite)

[4.2 Linkki GitHub repositorioon](#linkki-github-repositorioon)

[4.3 Linkki projektin videoesitykseen](#linkki-projektin-videoesitykseen)


# Yleistä tietoa projektista

Projektini on musiikki tietokantaan perustuva Web sovellus, jossa käyttäjä voi etsiä kappaleita tai albumeita eri hakuehdoin. Sovelluksessa käyttäjä voi myös tallentaa kahdella eri tavalla albumeita omaan henkilökohtaiseen kirjastoonsa. Tallennettuja albumeita voidaan poistaa ja niiden tietoja voidaan jälkikäteen muokata tai päivittää.
Valitsin musiikki tietokannan aiheeksi, koska siihen perustuva projekti vaikutti it-selleni mieluisimmalta. On ollut jo pidempään suunnitelmissa hyödyntää Last.FM sivuston API:a, mutta sopivaa aikaa ei ole ollut, joten päätin tässä projektissa vih-doin perehtyä kyseiseen API:hin. 

# Käytettyjä tekniikoita ja erikoisuuksia

Projektissa on käytetty muutamia tekniikoita, kuten Node.js, Express.js, sekä MongoDB ja Mongoose. Tyylittelyyn on hyödynnetty Bootstrap:iä sekä hieman CSS:ää. Käyttöliittymä on muuten rakennettu perinteisesti HTML:llä. Last.fm API toimii Web sovelluksen taustalla ja sen avulla haetaan tiedot albumeista ja artisteista. 

# Design ja rakenne

Halusin, että verkkosivuni olisi yksinkertaiset ja ymmärrettävät. Pääpaino ja panostus olisi toiminnoissa. Web sovelluksessa pääpainona on, että käyttäjä pystyy hakemaan hakusanalla, kuten albumin, biisin tai artistin nimellä tietoja, jotka tulostuvat sivustolle omina bootstrapillä tyyliteltyinä ”kortteina” (cards). Korteissa on omat ”Save” napit, joita painamalla käyttäjä voi tallentaa albumin omaan tallennettujen albumien kirjastoon, joka näkyy sivuston alareunassa listana. 

Käyttäjä voi myös manuaalisesti tallentaa albumeita täyttämällä lomakkeen, jossa teksti-kenttinä ovat ”title” eli albumin tai kappaleen nimi, ”artist” eli esittäjän tai tekijän nimi sekä ”year” eli julkaisuvuosi. Valitettavasti Last.fm API ei tarjoa tietoa julkaisuvuosista, joten julkaisuvuotta ei saanut näkyviin kortteihin eikä albumikirjastoon, ellei sitä manuaalisesti etsinyt ja lisännyt. 
Tallennettuja albumeita käyttäjä voi jälkikäteen muokata painamalla ”Edit” nappia tai poistaa painamalla ”Delete” nappia. Albumikirjastoon tallennettua tietoa muokataan lomakkeella (form).

# Linkit

## Verkkosivun osoite

https://projekti-2-musicdb-restapi.onrender.com/

## Linkki GitHub repositorioon

https://github.com/AleMayry/Projekti-2-MusicDB-RESTAPI

## Linkki projektin videoesitykseen

