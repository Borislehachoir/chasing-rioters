# Annexe — Prompts IA de Chasing Rioters

Salut ! Vous retrouverez les prompts que j'ai utilisés dans ce document !  Les outils utilisés étaient **ChatGPT** pour les images et les suggestions de code, et **ElevenLabs** pour la synthèse vocale.

## Prompts de création visuelle et de voix conservés dans le brouillon


J'ai repris le style de vos sprites. 

Je ne le précise pas ici, mais j'ai fait ces prompts en lui demandant ceci : 
*"j'aimerais ton aide : je voudrais générer deux gif sans arrière-plan, et en pixel art, dans le style de ceux que je te joint ci-dessus. Un avec un CRS en train de courir, et un autre avec une jeune homme portant un masque FFP2 en position idle.* 

*si tu peux me poser des questions très précises pour réaliser le prompt le plus précis et le plus complet possible, je t'en serais très reconnaissant.*

*merciiii"*

l'IA m'a donc proposé une trentaine de questions pour créer les deux prompts que vous lirez ci-dessous. 

### SPRITESHEET DU CRS

Create a **production-ready 2D pixel art animation sprite sheet** depicting a French CRS riot police officer running energetically toward the RIGHT.


ART DIRECTION

Use the attached reference image as the primary visual reference for the pixel art language, simplicity, compactness, pixel density, and retro arcade aesthetic.

The sprite should resemble an authentic character from a classic top-down or three-quarter-view 2D action-adventure video game, inspired by 1990s handheld and 16-bit arcade games.

- Authentic handcrafted pixel art, not pixelated digital painting.
- Compact, readable, slightly chibi-like proportions, while retaining recognizable realistic French riot police equipment.
- Three-quarter side view, predominantly facing RIGHT.
- Bold pure-black pixel outlines.
- Flat colors, extremely limited palette, approximately 8–12 functional colors including shading and outlines.
- Sharp square pixels, consistent pixel grid, absolutely no anti-aliasing.
- Minimal shading with simple clusters of 1–3 colors per surface.
- No gradients, no smooth edges, no glow, no texture noise.
- Strong and readable silhouette, even at very small display sizes.

CHARACTER DESIGN

A recognizable French CRS riot police officer, wearing contemporary French anti-riot protective equipment.

Essential visible features:

- Dark navy blue and charcoal-gray protective uniform.
- Large rounded dark riot helmet.
- Dark transparent or gray-tinted protective face visor.
- Padded shoulder, elbow, chest and knee protection.
- Heavy black tactical boots.
- A recognizable rigid riot shield held in front of the torso with one arm.
- A black riot baton attached to the belt or carried securely without interfering with the shield or running animation.
- The shield must remain consistently positioned throughout the animation.
- The face and facial expression must not be identifiable because of the helmet and visor.
- Subtle French CRS uniform cues through equipment shape and silhouette, rather than tiny lettering.

Keep equipment simplified to a few unmistakable shapes. No photorealistic detail. The riot shield should be the most recognizable accessory.

 ANIMATION

Create EXACTLY 8 sequential animation frames representing ONE complete, seamless running cycle.

The officer is running aggressively and dynamically toward the RIGHT, as if chasing someone in a fast-paced 2D arcade game.

The animation must communicate urgency, momentum and weight.

Frame-by-frame motion guidance:

1. Right leg extended forward, opposite leg extended backward, torso leaning forward, shield held firmly.
2. Front foot approaches the ground, body lowers slightly, arms and equipment shift subtly.
3. Passing pose, legs moving beneath the body, torso compressed.
4. Powerful push-off, opposite knee rising, body beginning to lift.
5. Mirrored extended-stride pose with opposite leg forward.
6. Second landing and compression, subtle shield bounce.
7. Second passing pose, legs transitioning beneath the body.
8. Second push-off, returning naturally to frame 1.

Additional animation requirements:

- Clearly alternating leg positions.
- Energetic running movement with a slightly forward-leaning torso.
- Subtle helmet and shield bounce.
- Equipment must feel heavy but must not deform or change shape.
- Feet must have visible contact and airborne phases.
- The character runs IN PLACE and does not move horizontally across the sprite sheet.
- Character proportions, colors, helmet, shield, baton, and costume remain perfectly consistent.
- No duplicated frames.
- Perfect seamless looping between frame 8 and frame 1.

SPRITE SHEET LAYOUT

Generate a single horizontal sprite sheet.

- EXACTLY 8 frames.
- EXACTLY 8 columns and 1 row.
- Each frame is EXACTLY 64 × 64 pixels.
- Final canvas: EXACTLY 512 × 64 pixels.
- Every frame occupies its own independent 64 × 64 pixel cell.
- No padding, no margins, no borders, no spacing between cells.
- No grid lines or frame numbers.
- Keep the character centered horizontally within each cell.
- Maintain a consistent ground baseline across all frames.
- Avoid clipping the helmet, shield, baton or feet.

TRANSPARENCY AND SHADOW

The entire background must be truly transparent, using an alpha channel.

Do not render white, black, colored or checkerboard backgrounds.

Include a tiny, detached, dark-gray pixel-art ground shadow beneath the officer, using a simplified flattened oval shape.

The shadow should be minimal and visually consistent across the animation, with subtle size changes during airborne phases.

No floor, platform, environment or scenery.

SMALL-SCALE READABILITY

The character must remain identifiable when reduced to approximately 15 × 15 display pixels.

Prioritize:

- A bold, unmistakable riot police helmet silhouette.
- A visually distinct shield.
- Strong contrast between dark equipment and transparency.
- Simplified oversized body shapes.
- Clear separation between arms and legs.
- No unnecessary microdetails.

OUTPUT

One clean, tightly aligned, horizontal 8-frame pixel art sprite sheet, designed for direct use in a 2D browser game or web animation.

PNG with true transparency, nearest-neighbor pixel edges, no interpolation, no compression artifacts, no visual noise.

No text, captions, logos, watermarks, motion blur, particle effects or additional characters.

### SPRITESHEET DU MANIFESTANT


Create a **production-ready 2D pixel art idle animation sprite sheet** featuring a young adult man wearing a light-blue FFP2 face mask, standing in a slightly tense but neutral posture.

This character must look as though he belongs in EXACTLY THE SAME RETRO 2D VIDEO GAME as the previously described French CRS riot police sprite.

ART DIRECTION

Use the attached reference image as the primary reference for style, pixel density, proportions, palette simplicity, and retro video game aesthetics.

Match the CRS sprite in:

- Pixel density and grid consistency.
- Character scale and apparent height.
- Bold black outlines.
- Minimal flat-color shading.
- Compact, simplified 2D arcade proportions.
- Three-quarter side-view perspective.
- Overall visual complexity and silhouette readability.

Visual inspiration: classic 1990s 16-bit and handheld action-adventure video games, with small, highly readable character sprites.

Use authentic, manually crafted-looking pixel art rather than a high-resolution illustration converted into pixels.

No anti-aliasing, gradients, soft lighting, subpixel details, smooth edges or texture effects.

CHARACTER DESIGN

A young adult man with an average build and a neutral urban appearance.

No specific ethnicity or skin tone is required; choose a natural, consistent skin-tone palette.

The character is shown from a THREE-QUARTER SIDE VIEW, facing LEFT.

HEAD AND HAIR

- Short-to-medium curly brown hair.
- Clearly recognizable curly silhouette, represented by a few chunky pixel clusters.
- Hair color: medium to dark brown.
- Avoid drawing individual hair strands.
- Face partially covered by a fitted FFP2 respirator mask.

FACE MASK

- A clearly visible FFP2-style protective face mask.
- Mask color: Malibu blue, HEX #67BCF0.
- The mask covers both nose and mouth.
- Simplified angular respirator shape.
- Tiny darker-blue shading pixels to suggest mask folds and depth.
- Simple dark mask straps around the sides of the face.
- The blue mask must remain clearly identifiable at small sizes.
- The mask must not deform, change size, or change color between animation frames.

CLOTHING

HOODIE:

- Slate-gray hoodie, HEX #5A5E6B.
- Loose but not oversized.
- Long sleeves.
- Hood visible behind the neck.
- One simplified front pocket if pixel resolution allows.
- Slightly darker slate-gray shading.
- No patterns, writing or logos.

JEANS:

- Classic medium-blue denim jeans.
- Straight or slightly relaxed fit.
- Darker blue pixel clusters for minimal shading.
- No realistic fabric texture.

SNEAKERS:

- Clean white sneakers.
- Each sneaker has TWO clearly distinguishable red stripes on the outer side.
- Stripe color: dark red, HEX #BB0B0B.
- Simplified retro sneaker silhouette.
- Dark or neutral outsole.
- Stripes should be recognizable without relying on tiny details.

POSTURE AND PERSONALITY

The young man is standing still, facing LEFT in a three-quarter view.

He has a neutral urban appearance but a slightly tense, guarded or uncomfortable body posture.

- Shoulders slightly raised.
- Arms close to the body.
- Hands relaxed but subtly clenched.
- Knees minimally bent.
- Head slightly lowered.
- No smile or exaggerated facial expression.
- He should appear alert and reserved, rather than frightened or aggressive.

The posture must feel natural and grounded.

IDLE ANIMATION

Create EXACTLY 8 sequential frames representing a subtle, seamless idle animation.

The character remains stationary throughout the cycle.

The animation consists of gentle breathing, minor shoulder movement, slight body tension and ONE natural blink.

Frame-by-frame motion guidance:

1. Neutral standing pose, shoulders slightly raised, eyes open.
2. Chest and shoulders rise by approximately one pixel as he inhales.
3. Breathing reaches its highest point, slight tension in the arms.
4. Shoulders begin settling, body returning toward neutral.
5. Neutral pose, eyes begin closing.
6. Brief blink, eyes closed for one frame, with no mask movement.
7. Eyes reopen, tiny relaxation of the shoulders.
8. Body returns smoothly to the initial pose, preparing the loop.

Animation requirements:

- Subtle, readable breathing using only approximately 1–2 pixels of vertical movement.
- Extremely restrained shoulder and arm animation.
- A natural blink, represented with minimal pixel changes.
- No stepping, walking, jumping or arm swinging.
- Feet remain planted at exactly the same ground positions.
- The character must not move across the canvas.
- No changes to clothing design, hair shape, mask color, shoe stripes or body proportions.
- The first and last frames must transition seamlessly.
- Preserve character silhouette consistency across all frames.

SPRITE SHEET LAYOUT

Create one horizontal sprite sheet with EXACTLY 8 animation frames.

- 8 columns and 1 row.
- Each frame occupies EXACTLY 64 × 64 pixels.
- Final canvas dimensions: EXACTLY 512 × 64 pixels.
- No spacing, padding, grid lines or visible frame borders.
- Character centered within each individual frame.
- Character height and scale consistent with the CRS sprite.
- Feet aligned along one consistent baseline.
- No clipping of hair, arms or sneakers.
- Same pixel density as the CRS sprite.

BACKGROUND AND SHADOW

Use a genuinely transparent background with alpha transparency.

Include one small, flattened, dark-gray pixel-art shadow beneath the feet.

The shadow should be slightly detached from the shoes and remain stable throughout the idle animation.

No ground plane, environment, background colors or checkerboard pattern.

COLOR PALETTE

Use a highly restricted retro arcade color palette.

Preserve these essential clothing colors accurately:

- FFP2 mask: #67BCF0
- Hoodie: #5A5E6B
- Sneaker stripes: #BB0B0B

Other colors should be carefully selected to remain harmonious with these three values.
Use pure-black outlines, neutral white sneakers, blue jeans, brown hair and minimal skin-tone shading.
Avoid warm grading, yellow color casts, sepia tones, film grain, dithering noise and unnecessary texture.

SMALL-SCALE READABILITY

Design for a 64 × 64 source sprite that may be displayed as small as approximately 15 × 15 pixels on a website.
The most recognizable visual elements should be:

1. Curly brown hair silhouette.
2. Bright Malibu-blue protective mask.
3. Slate-gray hoodie.
4. Blue jeans.
5. White sneakers with red side stripes.

Prioritize strong silhouettes, high contrast and simple pixel clusters.
Do not rely on tiny details to communicate identity.

OUTPUT

One professional-quality, production-ready, horizontal 8-frame idle animation sprite sheet.
Exact output resolution: 512 × 64 pixels.
PNG RGBA with genuine alpha transparency.
Perfectly crisp square pixels, nearest-neighbor scaling, consistent outlines and no anti-aliasing.
No labels, captions, logos, borders, backgrounds, motion effects, extra characters or watermarks.


### SPRITESHEET CIVIL / PIEGE / POMME DOREE 

> [!NOTE]
> Les images sont toutes retrouvables dans le dossier inspirations

j'aurai besoin de ton aide pour faire un prompt qui produire une pritesheet à partir de celle-ci. je veux que tu me poses des questions très précises (une quinzaine) pour faire en sorte de conserver au mieux le nombre de frames, les dimensions de ce personnage et les proportions de l'image. 


pour ton contexte, j'ai utilisé ce prompt-là pour une ancienne version de cette image. on retrouve certains keypoints je pense que ça peut t'aider à me guider : 

Create a production-ready 2D pixel art idle animation sprite sheet featuring a young adult man wearing a light-blue FFP2 face mask, standing in a slightly tense but neutral posture.

This character must look as though he belongs in EXACTLY THE SAME RETRO 2D VIDEO GAME as the previously described French CRS riot police sprite.
ART DIRECTION
Use the attached reference image as the primary reference for style, pixel density, proportions, palette simplicity, and retro video game aesthetics.

Match the CRS sprite in:
- Pixel density and grid consistency.
- Character scale and apparent height.
- Bold black outlines.
- Minimal flat-color shading.
- Compact, simplified 2D arcade proportions.
- Three-quarter side-view perspective.
- Overall visual complexity and silhouette readability.
Visual inspiration: classic 1990s 16-bit and handheld action-adventure video games, with small, highly readable character sprites.

Use authentic, manually crafted-looking pixel art rather than a high-resolution illustration converted into pixels.

No anti-aliasing, gradients, soft lighting, subpixel details, smooth edges or texture effects.
CHARACTER DESIGN
A young adult man with an average build and a neutral urban appearance.

No specific ethnicity or skin tone is required; choose a natural, consistent skin-tone palette.

The character is shown from a THREE-QUARTER SIDE VIEW, facing LEFT.
HEAD AND HAIR
- Short-to-medium curly brown hair.
- Clearly recognizable curly silhouette, represented by a few chunky pixel clusters.
- Hair color: medium to dark brown.
- Avoid drawing individual hair strands.
- Face partially covered by a fitted FFP2 respirator mask.
FACE MASK
- A clearly visible FFP2-style protective face mask.
- Mask color: Malibu blue, HEX #67BCF0.
- The mask covers both nose and mouth.
- Simplified angular respirator shape.
- Tiny darker-blue shading pixels to suggest mask folds and depth.
- Simple dark mask straps around the sides of the face.
- The blue mask must remain clearly identifiable at small sizes.
- The mask must not deform, change size, or change color between animation frames.
CLOTHING
HOODIE:
- Slate-gray hoodie, HEX #5A5E6B.
- Loose but not oversized.
- Long sleeves.
- Hood visible behind the neck.
- One simplified front pocket if pixel resolution allows.
- Slightly darker slate-gray shading.
- No patterns, writing or logos.
JEANS:
- Classic medium-blue denim jeans.
- Straight or slightly relaxed fit.
- Darker blue pixel clusters for minimal shading.
- No realistic fabric texture.
SNEAKERS:
- Clean white sneakers.
- Each sneaker has TWO clearly distinguishable red stripes on the outer side.
- Stripe color: dark red, HEX #BB0B0B.
- Simplified retro sneaker silhouette.
- Dark or neutral outsole.
- Stripes should be recognizable without relying on tiny details.
POSTURE AND PERSONALITY
The young man is standing still, facing LEFT in a three-quarter view.

He has a neutral urban appearance but a slightly tense, guarded or uncomfortable body posture.
- Shoulders slightly raised.
- Arms close to the body.
- Hands relaxed but subtly clenched.
- Knees minimally bent.
- Head slightly lowered.
- No smile or exaggerated facial expression.
- He should appear alert and reserved, rather than frightened or aggressive.
The posture must feel natural and grounded.
IDLE ANIMATION
Create EXACTLY 8 sequential frames representing a subtle, seamless idle animation.

The character remains stationary throughout the cycle.

The animation consists of gentle breathing, minor shoulder movement, slight body tension and ONE natural blink.

Frame-by-frame motion guidance:
1. Neutral standing pose, shoulders slightly raised, eyes open.
2. Chest and shoulders rise by approximately one pixel as he inhales.
3. Breathing reaches its highest point, slight tension in the arms.
4. Shoulders begin settling, body returning toward neutral.
5. Neutral pose, eyes begin closing.
6. Brief blink, eyes closed for one frame, with no mask movement.
7. Eyes reopen, tiny relaxation of the shoulders.
8. Body returns smoothly to the initial pose, preparing the loop.
Animation requirements:
- Subtle, readable breathing using only approximately 1–2 pixels of vertical movement.
- Extremely restrained shoulder and arm animation.
- A natural blink, represented with minimal pixel changes.
- No stepping, walking, jumping or arm swinging.
- Feet remain planted at exactly the same ground positions.
- The character must not move across the canvas.
- No changes to clothing design, hair shape, mask color, shoe stripes or body proportions.
- The first and last frames must transition seamlessly.
- Preserve character silhouette consistency across all frames.
SPRITE SHEET LAYOUT
Create one horizontal sprite sheet with EXACTLY 8 animation frames.
- 8 columns and 1 row.
- Each frame occupies EXACTLY 64 × 64 pixels.
- Final canvas dimensions: EXACTLY 512 × 64 pixels.
- No spacing, padding, grid lines or visible frame borders.
- Character centered within each individual frame.
- Character height and scale consistent with the CRS sprite.
- Feet aligned along one consistent baseline.
- No clipping of hair, arms or sneakers.
- Same pixel density as the CRS sprite.
BACKGROUND AND SHADOW
Use a genuinely transparent background with alpha transparency.

Include one small, flattened, dark-gray pixel-art shadow beneath the feet.

The shadow should be slightly detached from the shoes and remain stable throughout the idle animation.

No ground plane, environment, background colors or checkerboard pattern.
COLOR PALETTE
Use a highly restricted retro arcade color palette.

Preserve these essential clothing colors accurately:
- FFP2 mask: #67BCF0
- Hoodie: #5A5E6B
- Sneaker stripes: #BB0B0B
Other colors should be carefully selected to remain harmonious with these three values.

Use pure-black outlines, neutral white sneakers, blue jeans, brown hair and minimal skin-tone shading.

Avoid warm grading, yellow color casts, sepia tones, film grain, dithering noise and unnecessary texture.
SMALL-SCALE READABILITY
Design for a 64 × 64 source sprite that may be displayed as small as approximately 15 × 15 pixels on a website.

The most recognizable visual elements should be:
1. Curly brown hair silhouette.
2. Bright Malibu-blue protective mask.
3. Slate-gray hoodie.
4. Blue jeans.
5. White sneakers with red side stripes.
Prioritize strong silhouettes, high contrast and simple pixel clusters.

Do not rely on tiny details to communicate identity.
OUTPUT
One professional-quality, production-ready, horizontal 8-frame idle animation sprite sheet.

Exact output resolution: 512 × 64 pixels.

PNG RGBA with genuine alpha transparency.

Perfectly crisp square pixels, nearest-neighbor scaling, consistent outlines and no anti-aliasing.

No labels, captions, logos, borders, backgrounds, motion effects, extra characters or watermarks.


je te mets aussi des images des personnages que j'aimerais générer en pj

je veux : 
- un flic infiltré (deuxième et troisième image)
- un petit vieux avec une canne (images 4 et 5)
- un jeune homme éborgné (image 6 et 7)

voilà merci beaaaaucoup !!


### GENERATION DEPART.MP3 (sur ElevenLabs, prompt généré par ChatGPT)

A highly realistic elderly French male voice, around 75–85 years old, with an authentic native Metropolitan French accent.

Deep, aged, slightly raspy and gravelly voice, with a subtle natural vocal tremor, occasional breathiness and the distinctive texture of an elderly man's vocal cords.

He sounds like a grumpy, stubborn, old-fashioned French grandfather who is easily outraged by the absurdity of modern life.

Extremely sarcastic, indignant, theatrical and effortlessly funny, with a strong sense of dry French irony.

His voice carries decades of experience, impatience and a tendency to complain loudly about ridiculous situations.

He is slightly out of breath, as if he has just been running away from something.

His delivery is spontaneous and conversational, with exaggerated disbelief, irritated sighs, subtle vocal cracks and expressive changes in pitch.

He can stretch certain words dramatically to express intense sarcasm, especially when expressing outrage or disapproval.

Authentic elderly French male voice, natural human imperfections, believable emotional delivery.

Not cartoonish, not robotic, not overly frail, not a caricature. No artificial announcer voice.


## Prompts de programmation transmis à ChatGPT

### Choix musical (texte transmis)

> saluuut, j'aimerais que tu t'inspires du fonctionnement du menu réglages actuel pour ajouter une Class Setlist avec son propre menu déroulant en HTML. Son principe serait assez simple. on utiliserait un documentEventListener avec un onclick pour vérifier quel SONS l'utilisateur aura choisi dans le menu déroulant des musiques (ça donnerait un truc comme "if this.SONS.track ==== the song I chose in the <select> item, then play this song in the game instead of the default one" ou quelque chose du genre). Si j'appuie sur "Megalovania", je veux que, quand je lancerais ma partie, au lieu de willofthepeople, ça lance megalovania.
>
> j'aimerais que tu fasses ça avec le moins de lignes de codes et avec la méthode la plus simple que tu connaisses possibles. Si quelque chose n'est pas clair, ou que tu as une meilleure idée pour réaliser cette setlist au mieux en respectant la phrase juste avant (sur la longueur et la simplicité du code), je suis totalement preneur.
>
> Un énorme merci pour tout ce que tu m'as aidé à accomplir jusqu'à maintenant d'ailleurs !

### Erreur de son (texte transmis)

```text
j'ai ça en erreur :

Uncaught TypeError: this.son is not a function
    at Pomme.touchee (snake.js:198:10)
    at Plateau.tour (snake.js:479:58)
    at snake.js:569:27
snake.js:237 Uncaught TypeError: this.son is not a function
    at Piege.touchee (snake.js:237:10)
    at Plateau.tour (snake.js:479:58)
    at snake.js:569:27

ça se matérialise par le fait que j'ai plus de collision avec plusieurs des manifestants
```

### Publicités

Je n'ai pas conservé le prompt mot à mot. J'ai demandé une fonction qui fasse défiler les textes de publicités, gère les retours à la ligne automatiquement et prenne en compte les sauts de ligne explicites, après des essais infructueux avec `<br>` et l'agrandissement de la boîte.
