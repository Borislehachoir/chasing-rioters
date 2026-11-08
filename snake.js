/* ============================================================
   SNAKE - VERSION 3 : trois objets qui se parlent
   ------------------------------------------------------------
   Même jeu que la version 0. Le serpent existe maintenant comme
   une chose : il a un nom, il tient son propre état, et on lui
   PARLE au lieu d'aller fouiller dedans.

   Deux nouveautés arrivées presque gratuitement, et c'est tout
   l'intérêt : le score, et une deuxième pomme.
   ============================================================ */

const COLONNES = 16;
const LIGNES = 16;
const CASE = 45;

/* Images : chargées une seule fois. Les GIF sont découpés en bandes de `frames` images côte à côte */
const img = (src, frames = 1, ms = 100) => Object.assign(new Image(), { src, frames, ms });
const IMG_RIOTER = img('sprites/animation-rioter-sheet.png', 24, 70);
const IMG_CRS = img('sprites/animation-crs-sheet.png', 8, 100);
const IMG_TATMA = img('sprites/animation-tatma-sheet.png', 8, 100);
const IMG_68 = img('sprites/animation-mai68-sheet.png', 24, 10);
const IMG_PIEGE = img('sprites/animation-piege-sheet.png', 8, 100);
const IMG_DOREE = img('sprites/animation-doree-sheet.png', 8, 100);
const IMG_CIVIL = img('sprites/animation-civil-sheet.png', 8, 100);
const IMG_MUR = img('sprites/mur.png');

/* Un sprite DANS la case (x, y), proportions gardées, centré ; `filtre` change la teinte */
function sprite(ctx, image, x, y, filtre = 'none') {
  const w = image.naturalWidth / image.frames, h = image.naturalHeight;
  const k = CASE / Math.max(w, h);
  const f = Math.floor(Date.now() / image.ms) % image.frames;
  ctx.filter = filtre;
  ctx.drawImage(image, f * w, 0, w, h, x * CASE + (CASE - w * k) / 2, y * CASE + (CASE - h * k) / 2, w * k, h * k);
  ctx.filter = 'none';
}

/* Sons : un fichier absent de sons/ = silence */
const son = (nom, boucle) => {
  const a = new Audio('sons/' + nom + '.mp3');
  a.loop = !!boucle;
  const jouer = () => { a.currentTime = 0; a.play().catch(() => {}); };
  jouer.stop = () => a.pause();
  return jouer;
};

const SONS = {
  willofthepeople: son('willofthepeople', true), 
  hungergames: son('hungergames', true),  
  noheavennohell: son('noheavennohell', true),
  depart: son('depart'),
  grenade: son('grenade'), 
  civil: son('civil'),
  piege: son('piege'),
  placeholder: son('placeholder')
};

let musique = 'willofthepeople';

/* Réglages : des listes d'objets, choisies depuis le panneau */
const SKINS = [
  { nom: 'CRS classique', img: IMG_CRS, filtre: 'none' },
  { nom: 'Tätma Traque', img: IMG_TATMA, filtre: 'none' },
  { nom: 'Mai 68', img: IMG_68, filtre: 'none' }
];
const FLECHES = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
const CONFIGS = [
  { nom: 'Flèches + ZQSD', touches: [FLECHES, { q: [-1, 0], d: [1, 0], z: [0, -1], s: [0, 1] }] },
  { nom: 'Flèches + IJKL', touches: [FLECHES, { j: [-1, 0], l: [1, 0], i: [0, -1], k: [0, 1] }] },
  { nom: 'ZQSD + Flèches', touches: [{ q: [-1, 0], d: [1, 0], z: [0, -1], s: [0, 1] }, FLECHES] }
];
const FONDS = [
  { nom: 'Nuit', couleur: '#0c1a24' },
  { nom: 'Bitume', couleur: '#2b2b2b' },
  { nom: 'Fumigènes', couleur: '#3a2a3f' }
];

const SENS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const auHasard = () => SENS[Math.floor(Math.random() * SENS.length)];

const PUBS = {
  gaz: 'Lacrymosa™ : « La meilleure musique, depuis derrière votre bouclier »',
  matraque: 'Lamatraque™ : « Créatrice de lien social depuis les années 1950 !»',
  franck: 'Salut, c\est Franck Leboeuf™ : « Vous aussi, vous voulez vendre votre voiture ? </br> Alors rendez-vous sur vendezvotrevoiture.fr ! »',
  Gamma: 'Gamma™ : « La lessive poids lourds (pour les camions)»',
  complot: 'pasdesmoutons.com™ : « Ils vous cachent des choses ! </br> Nous on vous dit la vérité (tant que vous vous abonnez à la newsletter pour 50 euros par mois) »',
  sirion: 'Sirionn_™ : « Soutenez une artiste locale, venez claquer vos primes ! »',
  trist: 'Tristanchois™ : « Soutenez un petit artiste indé\', venez claquer vos primes ! »',
  Carglass: 'Carglass™ : « Salut, c\'est Olivier de Carglass !  </br> Vous croyez que cette impact est trop petit et que cela ne vaut pas le coup de s\'en occuper ? »',
  situations: 'Otis™ : « Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. </br> Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. </br> Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi.</br> Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... </br> Parce que quand on a le goût de la chose, </br> quand on a le goût de la chose bien faite, le beau geste, </br> parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. </br> Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu </br> ; et je dis merci à la vie, </br> je lui dis merci, je chante la vie, je danse la vie... </br> je ne suis qu’amour ! </br> Et finalement, quand des gens me disent </br> </br> « Mais comment fais-tu pour avoir cette humanité ? », </br> je leur réponds très simplement que c’est ce goût de l’amour, </br> ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique... </br> mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi. »'
};


/* ============================================================
   LE SERPENT - il sait où il est, et où il va.
   ============================================================ */
class Serpent {
  constructor(x, y, longueur = 3, skin = SKINS[0]) {
    this.cases = [];
    for (let i = 0; i < longueur; i++) {
      this.cases.push({ x: x - i, y: y });
    }
    this.dx = 1;
    this.dy = 0;
    this.vivant = true;
    this.score = 0;
    this.skin = skin;
  }

  get tete() {
    return this.cases[0];
  }

  /* On lui DEMANDE s'il occupe une case. On ne lit pas ses tableaux. */
  occupe(x, y) {
    return this.cases.some(c => c.x === x && c.y === y);
  }

  marquer(points) {
    this.score += points;
  }

  touchee(autre) {
    autre.vivant = false;
  }

  tourner(dx, dy) {
    if (dx === -this.dx && dy === -this.dy) return;   // demi-tour interdit
    this.dx = dx;
    this.dy = dy;
  }

  /* Grandir, c'est recopier sa queue : la case en trop sera
     « consommée » par le prochain déplacement. */
  mange() {
    const queue = this.cases[this.cases.length - 1];
    this.cases.push({ x: queue.x, y: queue.y });
  }

  raccourcir(n) {
    if (this.cases.length - n < 2) {
      this.vivant = false;
      return;
    }
    this.cases.splice(-n);
  }

  avance(plateau) {
    const suivante = plateau.caseSuivante(this.tete, this.dx, this.dy);

    if (suivante === null || this.occupe(suivante.x, suivante.y)) {
      this.vivant = false;
      return;
    }

    this.cases.unshift(suivante);
    this.cases.pop();
  }

  dessiner(ctx) {
    for (const c of this.cases) {
      sprite(ctx, this.skin.img, c.x, c.y, this.skin.filtre);
    }
  }
}


class MiniSerpent extends Serpent {
  constructor(x, y) {
    super(x, y, 1, { img: IMG_CRS, filtre: 'hue-rotate(90deg) saturate(3)' });
    this.n = 0;
  }

  agir(plateau) {
    if (this.n++ % 2) return;

    if (Math.random() < 0.2) this.tourner(...auHasard());
    const c = plateau.caseSuivante(this.tete, this.dx, this.dy);
    if (plateau.occupants.some(o => o.occupe(c.x, c.y))) this.tourner(...auHasard());
    else this.avance(plateau);
  }
}


class PiloteClavier {
  constructor(serpent, touches) {
    this.serpent = serpent;
    this.touches = touches;
  }

  touche(key) {
    const sens = this.touches[key];
    if (sens) this.serpent.tourner(...sens);
  }
}


/* ============================================================
   LA POMME - elle sait où elle est, et sait aller ailleurs.
   `occupe` porte le MÊME nom que chez le serpent : c'est ce qui
   permet au plateau de leur parler sans savoir à qui il parle.
   ============================================================ */
class Pomme {
  constructor(plateau) {
    this.x = 0;
    this.y = 0;
    this.points = 10;
    this.img = IMG_RIOTER;
    this.filtre = 'none';
    this.son = SONS.placeholder;
    this.placer(plateau);
  }

  occupe(x, y) {
    return this.x === x && this.y === y;
  }

  /* Ce qui arrive quand la tête me touche : c'est MON affaire, pas celle du plateau. */
  touchee(serpent, plateau) {
    serpent.mange();
    serpent.marquer(this.points);
    this.son();
    this.placer(plateau);
  }

  agir(plateau) { }

  placer(plateau) {
    const c = plateau.caseLibre();
    this.x = c.x;
    this.y = c.y;
  }

  dessiner(ctx) {
    sprite(ctx, this.img, this.x, this.y, this.filtre);
  }
}


/* Une pomme dorée EST une pomme : elle hérite de tout, et ne dit que ce qui change. */
class PommeDoree extends Pomme {
  constructor(plateau) {
    super(plateau);
    this.points = 50;
    this.img = IMG_DOREE;
    this.filtre = 'hue-rotate(300deg) saturate(2)';
    this.son = SONS.grenade;
  }
}


/* Le même message que la pomme, une autre réponse. */
class Piege extends Pomme {
  constructor(plateau) {
    super(plateau);
    this.img = IMG_PIEGE;
    this.son = SONS.piege;
  }

  touchee(serpent, plateau) {
    serpent.raccourcir(2);
    this.son();
    this.placer(plateau);
  }
}


class Civil extends Pomme {
  constructor(plateau) {
    super(plateau);
    this.points = +25;
    this.img = IMG_CIVIL;
    this.son = SONS.civil;
  }

  touchee(serpent, plateau) {
    serpent.mange()
    serpent.marquer(this.points);
    this.son();
    this.placer(plateau);
  }
}


class PommeQuiBouge extends Pomme {
  constructor(plateau) {
    super(plateau);
    this.n = 0;
    this.filtre = 'hue-rotate(60deg)';
  }

  agir(plateau) {
    if (++this.n % 4) return;
    const [dx, dy] = auHasard();
    const c = plateau.caseSuivante(this, dx, dy);
    if (!plateau.occupants.some(o => o.occupe(c.x, c.y))) {
      this.x = c.x;
      this.y = c.y;
    }
  }
}


/* Pas une pomme : aucun héritage. Mais il répond aux mêmes messages, et le plateau n'en sait pas plus. */
class Mur {
  constructor(cases) {
    this.cases = cases.map(([x, y]) => ({ x: x, y: y }));
  }

  occupe(x, y) {
    return this.cases.some(c => c.x === x && c.y === y);
  }

  touchee(serpent) {
    serpent.vivant = false;
  }

  agir(plateau) { }

  dessiner(ctx) {
    for (const c of this.cases) {
      ctx.drawImage(IMG_MUR, c.x * CASE, c.y * CASE, CASE, CASE);
    }
  }
}


/* Un mur qui fabrique ses cases : tout le tour du plateau, sauf les trous.
   Le passage d'un bord à l'autre existait déjà dans caseSuivante : on n'y touche pas. */
class Bordure extends Mur {
  constructor(plateau, trous) {
    const cases = [];
    for (let x = 0; x < plateau.colonnes; x++) {
      for (let y = 0; y < plateau.lignes; y++) {
        const auBord = x === 0 || y === 0 || x === plateau.colonnes - 1 || y === plateau.lignes - 1;
        const trou = trous.some(([tx, ty]) => tx === x && ty === y);
        if (auBord && !trou) cases.push([x, y]);
      }
    }
    super(cases);
  }
}


/* Pas une case, mais les mêmes messages : 83 tours (~10 s) d'écran masqué, toutes les 400 tours */
class Publicite {
  constructor() {
    this.t = 300;
    this.choisir();
  }

  choisir() {
    const textes = Object.values(PUBS);
    this.scroll = 0;
    this.texte = textes[Math.floor(Math.random() * textes.length)];
    const places = [[1 / 6, 1 / 4], [0.02, 0.02], [0.31, 0.02], [0.02, 0.48], [0.31, 0.48]];   // centre, haut gauche, haut droite, bas gauche, bas droite (en fraction du plateau)
    [this.x, this.y] = places[Math.floor(Math.random() * places.length)];
  }

  occupe() { return false; }

  touchee() { }

  agir(plateau) {
    this.t = (this.t + 1) % 400;
    if (this.t === 0) this.choisir();
  }

  dessiner(ctx) {
    if (this.t >= 63) return;
    const L = COLONNES * CASE, k = L / 480, x = this.x * L, y = this.y * L;
    ctx.fillStyle = '#f2c14e';
    ctx.fillRect(x, y, 320 * k, 240 * k);
    ctx.fillStyle = '#08121a';
    ctx.textAlign = 'center';
    ctx.font = 'bold ' + 26 * k + 'px system-ui, sans-serif';
    ctx.fillText('PAUSE PUB', x + 210 * k, y + 110 * k);
    ctx.font = 16 * k + 'px system-ui, sans-serif';
    const lignes = [''];
    for (const mot of this.texte.replaceAll('</br>', ' <br> ').split(/\s+/)) {
      let i = lignes.length - 1;
      if (mot === '<br>' || ctx.measureText(lignes[i] + mot).width > 290 * k)
        lignes.push('');
      if (mot !== '<br>') lignes[lignes.length - 1] += mot + ' ';
    }

    ctx.save();
    ctx.beginPath();
    ctx.rect(x + 15 * k, y + 115 * k, 290 * k, 55 * k);
    ctx.clip();

    lignes.forEach((ligne, i) =>
      ctx.fillText(ligne, x + 160 * k, y + (125 + i * 20 - this.scroll) * k)
    );

    ctx.restore();
    this.scroll = Math.min(this.scroll + 0.75, Math.max(0, lignes.length * 20 - 55));
    ctx.fillText('Reprise dans ' + Math.ceil((63 - this.t) * 0.12) + ' s', x + 160 * k, y + 190 * k);
  }
}


/* ============================================================
   LE PLATEAU - il ne connaît pas l'intérieur des autres.
   Il pose des questions et transmet des messages.
   ============================================================ */
class Plateau {
  constructor(colonnes, lignes, ctx, joueurs = 2) {
    this.colonnes = colonnes;
    this.lignes = lignes;
    this.ctx = ctx;
    this.reglages = { skin: 0, touches: 0, fond: 0, joueurs: joueurs };
    this.initialiser();
  }

  /* Le seul endroit où naît une partie : le constructeur et rejouer() l'appellent. */
  initialiser() {
    this.enJeu = false; 
    this.musiqueLancee = false;
    const c = this.colonnes, l = this.lignes, m = n => Math.round(n * c / 24);   // m() : une position pensée pour 24 cases, adaptée à la taille du plateau
    this.serpents = [[m(8), m(8)], [m(8), m(16)]].slice(0, this.reglages.joueurs).map(([x, y]) => new Serpent(x, y));
    this.choses = [];
    this.ajouter(new Bordure(this, [[c / 2, 0], [c / 2, l - 1], [0, l / 2], [c - 1, l / 2]]));
    this.ajouter(new Mur([10, 11, 12, 13, 14].map(x => [m(x), l / 2])));
    this.ajouter(new MiniSerpent(m(18), m(5)));
    this.ajouter(new Pomme(this));
    this.ajouter(new Pomme(this));
    this.ajouter(new PommeDoree(this));
    this.ajouter(new Piege(this));
    this.ajouter(new Civil(this));
    this.ajouter(new PommeQuiBouge(this));
    this.ajouter(new Publicite());
    this.equiper();
   
  }

  equiper() {
    const r = this.reglages;
    this.serpents.forEach((s, i) => { s.skin = SKINS[(r.skin + i) % SKINS.length]; });
    this.pilotes = this.serpents.map((s, i) => new PiloteClavier(s, CONFIGS[r.touches].touches[i]));
  }

  regler(cle, i) {
    this.reglages[cle] = Number(i);
    this.equiper();
  }

  ajouter(chose) {
    this.choses.push(chose);
  }

  demarrer() {
   if (this.enJeu) return;
  this.enJeu = true;
  SONS.depart();
  setTimeout(() => {
  if (this.enJeu && !this.fini && !this.musiqueLancee) {
    SONS[musique]();
    this.musiqueLancee = true;
  }
}, 4500);
  }

  get fini() {
    return this.serpents.every(s => !s.vivant);
  }

  /* Tout ce qui peut occuper une case répond à `occupe`. */
  get occupants() {
    return [...this.serpents, ...this.choses];
  }

  caseLibre() {
    while (true) {
      const x = Math.floor(Math.random() * this.colonnes);
      const y = Math.floor(Math.random() * this.lignes);
      if (!this.occupants.some(o => o.occupe(x, y))) {
        return { x: x, y: y };
      }
    }
  }

  /* 🧱 LE SEUL ENDROIT QUI CONNAÎT LES BORDS.
     Un mur qui tue, ce serait `return null` au lieu du modulo. */
  caseSuivante(depuis, dx, dy) {
    return {
      x: (depuis.x + dx + this.colonnes) % this.colonnes,
      y: (depuis.y + dy + this.lignes) % this.lignes
    };
  }

  tour() {
    if (this.enJeu && this.fini) SONS[musique].stop();
    if (this.enJeu && !this.fini) {
      for (const s of this.serpents) {
        if (!s.vivant) continue;
        s.avance(this);
        if (!s.vivant) continue;
        for (const o of this.occupants) {      // le même message, chacun sa réponse
          if (o !== s && o.occupe(s.tete.x, s.tete.y)) o.touchee(s, this);
        }
      }
      for (const chose of this.choses) chose.agir(this);
    }
    this.dessiner();
  }

  rejouer() {
    this.initialiser();
    SONS[musique].stop();
  }

  dessiner() {
    const ctx = this.ctx;
    ctx.fillStyle = FONDS[this.reglages.fond].couleur;
    ctx.fillRect(0, 0, this.colonnes * CASE, this.lignes * CASE);

    for (const o of this.occupants) {
      o.dessiner(ctx);
    }

    ctx.fillStyle = '#7fa3b8';
    ctx.font = '22px system-ui, sans-serif';
    this.serpents.forEach((s, i) => {
      const nom = this.serpents.length > 1 ? 'J' + (i + 1) : 'Score';
      ctx.textAlign = i === 0 ? 'left' : 'right';
      ctx.fillText(nom + ' : ' + s.score, i === 0 ? CASE + 8 : this.colonnes * CASE - CASE - 8, CASE * 2);
    });

    if (!this.enJeu) {
      ctx.fillStyle = '#ffffff';
      ctx.font = '20px system-ui, sans-serif';
      ctx.textAlign = 'center';
     ctx.fillText('ESPACE pour commencer', this.colonnes * CASE / 2, this.lignes * CASE / 2 - 40);
    }

    if (this.fini) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(0, 0, this.colonnes * CASE, this.lignes * CASE);
      ctx.fillStyle = '#ffffff';
      ctx.font = '28px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Perdu  -  R pour rejouer',
        this.colonnes * CASE / 2, this.lignes * CASE / 2);
    }
  }
}


/* ============================================================
   LE DÉMARRAGE
   ------------------------------------------------------------
   `window.plateau` est délibéré : c'est ce qui permet d'ouvrir la
   console et de parler au jeu pendant qu'il tourne.
       plateau.serpent.cases
       plateau.serpent.tourner(0, -1)
       Object.getOwnPropertyNames(Object.getPrototypeOf(plateau.serpent))
   ============================================================ */
const canvas = document.getElementById('jeu');
const plateau = new Plateau(COLONNES, LIGNES, canvas.getContext('2d'), 1);
window.plateau = plateau;
document.getElementById('intro').showModal();

document.addEventListener('keydown', e => {
  if (document.getElementById('intro').open) return;
  if (e.target.tagName === 'SELECT') return;
  for (const pilote of plateau.pilotes) pilote.touche(e.key);
  if (e.key === 'r' || e.key === 'R') plateau.rejouer();
  else if (e.code === 'Space') plateau.demarrer();
  if (e.key.startsWith('Arrow') || e.code === 'Space') e.preventDefault();
});

for (const [cle, liste] of [['skin', SKINS], ['touches', CONFIGS], ['fond', FONDS]]) {
  const choix = document.getElementById(cle);
  liste.forEach((o, i) => choix.add(new Option(o.nom, i)));
  choix.onchange = () => { plateau.regler(cle, choix.value); choix.blur(); };
}

const boutons = document.querySelectorAll('[data-joueurs]');
boutons.forEach(b => b.onclick = () => {
  plateau.regler('joueurs', b.dataset.joueurs);
  plateau.rejouer();
  boutons.forEach(x => x.classList.toggle('actif', x === b));
  b.blur();
});

const panneau = document.getElementById('panneau');
document.getElementById('reglages').onclick = e => {
  panneau.hidden = !panneau.hidden;
  e.currentTarget.blur();
};

document.getElementById('musique').onchange = e => {
  SONS[musique].stop();
  musique = e.target.value;
  if (plateau.enJeu && !plateau.fini) {
    SONS[musique]();
    plateau.musiqueLancee = true;
  }
};

setInterval(() => plateau.tour(), 120);
