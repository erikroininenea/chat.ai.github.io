// script.js

const meddelandeInput = document.getElementById('meddelande-input');
const meddelandeContainer = document.getElementById('chat-messages');

const fordefinieradeFragorSvar = [
    { fraga: 'Jag vill ha korv', svar: 'https://www.youtube.com/embed/pdJrOvjbcR8?si=v74tgAUmXyF_iAsp' },
    { fraga: 'jag vill ha en egen måne', svar: 'https://www.youtube.com/embed/HInYeg78sMU?si=BxYFje0RgSulIHw8' },
    // Lägg till fler frågor och YouTube-länkar här
    { fraga: 'Hej', svar: 'Hej! Hur kan jag hjälpa dig?' },
    { fraga: 'Vad är din favoritfärg?', svar: 'Min favoritfärg är blå.' },
    { fraga: 'Vad heter du?', svar: 'Jag är en chattbot.' },
    // Lägg till fler frågor och svar här
    { fraga: 'Hur gammal är du?', svar: 'Jag är bara en datorprogram, så jag har ingen ålder.' },
    { fraga: 'Vad är meningen med livet?', svar: 'Det är en djup fråga! Svaret är 42, enligt boken "Galaxens vägledande handbok för liftare".' },
    { fraga: 'Fuck you', svar: 'Håll käften' },
    { fraga: 'Vem är jag?', svar: 'Jag vet inte.' },
    { fraga: '1+1', svar: '2' },
    { fraga: 'Håll käften', svar: 'Håll käften din jävla palsternacka!' },
    { fraga: '1+2', svar: '3' },
    { fraga: '2+1', svar: '3' },
    { fraga: 'Vem är Robin pagoldh?', svar: 'En 25 årig man som bor i eskilstuna, fyller år den 14 februari på alla hjärtans dag och gllar hallonhjärtan.' },
    { fraga: 'Vem är Robin pagoldh', svar: 'En 25 årig man som bor i eskilstuna, fyller år den 14 februari på alla hjärtans dag och gllar hallonhjärtan.' },
    { fraga: 'Vem skapade dig?', svar: 'Den 11 årige Erik Roininen. Han är fotbollsspelare och fritids programerare.' },
    { fraga: 'Vem är Erik Roininen?', svar: 'Den 11 årige Erik Roininen. Han är fotbollsspelare och fritids programerare.' },
    { fraga: 'Vem är Eriks pappa?', svar: 'Ari-pekka Roininen bor i eskilstuna och jobbar på säkralarm.' },
    { fraga: 'Vem är Erik Roininen', svar: 'Den 13 årige Erik Roininen. Han är fotbollsspelare och fritids programerare.' },
    { fraga: 'Vem skapade dig', svar: 'Den 13 årige Erik Roininen. Han är fotbollsspelare och fritids programerare.' },
    { fraga: 'vart ligger köping?', svar: 'I västmalands län' },
    { fraga: 'Katten Schiba', svar: 'En katt som bor hos Anneli pihlava och Ari-pekka Roininen' },
    { fraga: 'Jag vill ha körv', svar: 'https://www.youtube.com/embed/pdJrOvjbcR8?si=v74tgAUmXyF_iAsp' },
    { fraga: 'Skapa en simple grundläggande start html', svar: 'Jag kan tyvär inte det' },
    { fraga: 'Vart ligger köping', svar: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46472.513193987994!2d15.983983272321806!3d59.51027667972981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c2b0ccfdd8d53%3A0x400fef341e48200!2zS8O2cGluZw!5e0!3m2!1ssv!2sse!4v1696070354457!5m2!1ssv!2sse' },
    // Lägg till fler frågor och svar här
    { fraga: 'Vart ligger eskilstuna', svar: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65052.88517117265!2d16.424148316725958!3d59.36796344076385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e93b30aa1e85f%3A0x400fef341e48dd0!2sEskilstuna!5e0!3m2!1ssv!2sse!4v1696070546522!5m2!1ssv!2sse' },
    { fraga: 'När släpptes FC 24', svar: '29 september 2023' },
    { fraga: 'När släpptes EA FC 24', svar: '29 september 2023' },
    { fraga: 'vem är din skapare', svar: 'Den 13 årige Erik Roininen. Han är en fotbollsspelare och fritids programerare.' },
    { fraga: 'FC 24', svar: 'Släpptes 29 september 2023' },
    { fraga: 'ok', svar: 'Jag är glad att få hjälpa dig :)' },
    { fraga: 'tack', svar: 'Jag är glad att få hjälpa dig :)' },
    { fraga: 'a', svar: 'a, ok' },
    { fraga: 'skibidi', svar: 'skibidi toilet?' },
    { fraga: 'nej', svar: 'ok :(' },
    { fraga: 'FC 24', svar: 'Släpptes 29 september 2023' },
    { fraga: 'SONY', svar: 'Sony Corporation är ett japanskt multinationellt teknikkonglomerat som är ett av världens största i sina branscher.'}
];

function slumpmassigtSvar(meddelande) {
    meddelande = meddelande.toLowerCase();
    for (let i = 0; i < fordefinieradeFragorSvar.length; i++) {
        const fraga = fordefinieradeFragorSvar[i].fraga.toLowerCase();
        if (meddelande.includes(fraga)) {
            return fordefinieradeFragorSvar[i].svar;
        }
    }
    return 'Jag förstår inte. Kan du vara snäll och formulera om din fråga?';
}

function laggTillSvarElement(element) {
    const meddelandeDiv = document.createElement('div');
    meddelandeDiv.className = 'meddelande-svar';
    meddelandeDiv.appendChild(element);
    meddelandeContainer.appendChild(meddelandeDiv);
}

function skickaMeddelande() {
    const meddelande = meddelandeInput.value;
    if (meddelande.trim() === '') {
        return; // Ignorera tomma meddelanden
    }

    laggTillAnvandarMeddelande(meddelande);

    const svar = slumpmassigtSvar(meddelande);

    if (svar.startsWith('https://www.google.com/maps/')) {
        const iframeTagg = document.createElement('iframe');
        iframeTagg.src = svar;
        iframeTagg.width = '100%'; // Bredd på kartan (kan justeras efter behov)
        iframeTagg.height = '300'; // Höjd på kartan (kan justeras efter behov)
        iframeTagg.allowFullscreen = true;
        iframeTagg.className = 'chatt-iframe';
        laggTillSvarElement(iframeTagg);
    } else if (svar.startsWith('https://www.youtube.com/')) {
        const iframeTagg = document.createElement('iframe');
        iframeTagg.src = svar;
        iframeTagg.width = '560'; // Bredd på videon (kan justeras efter behov)
        iframeTagg.height = '315'; // Höjd på videon (kan justeras efter behov)
        iframeTagg.allowFullscreen = true;
        iframeTagg.className = 'chatt-iframe';
        laggTillSvarElement(iframeTagg);
    } else {
        laggTillSvar(svar);
    }

    meddelandeInput.value = '';
    meddelandeContainer.scrollTop = meddelandeContainer.scrollHeight;
}

function laggTillAnvandarMeddelande(meddelande) {
    const meddelandeDiv = document.createElement('div');
    meddelandeDiv.className = 'meddelande-anvandare';
    meddelandeDiv.textContent = meddelande;
    meddelandeContainer.appendChild(meddelandeDiv);
}

function laggTillSvar(svar) {
    const meddelandeDiv = document.createElement('div');
    meddelandeDiv.className = 'meddelande-svar';
    meddelandeDiv.textContent = svar;
    meddelandeContainer.appendChild(meddelandeDiv);
}




