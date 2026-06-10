// ────────────────────────────────────────────────────────────────
// CONTENT: texto del sitio en ES + EN.
//
// Para Tesi: este archivo es el ÚNICO lugar donde editar copy,
// datos de obras y entradas del blog.
//
// Para agregar una pieza:
//   1. Subir la foto a /public/assets/obra/<serie>/<id>.jpg
//   2. Agregar un objeto al array `pieces` de la serie correspondiente
//
// Para agregar una entrada al blog (Textos):
//   1. Agregar un objeto al array `items` de `textos`
//   2. El `id` se convierte en la URL: /textos/<id>
// ────────────────────────────────────────────────────────────────

export const ASSETS = {
  portrait: "/assets/portrait.jpg",
  heroVideo: {
    mp4:    "/assets/video/hero.mp4",
    webm:   "/assets/video/hero.webm",
    poster: "/assets/video/hero-poster.jpg",
  },
}

// Variante del hero: "video" | "portrait" | "text"
// Cambiar a "video" cuando tengamos el video del Artist Statement
export const HERO_VARIANT = "portrait"

export const CONTENT = {
  es: {
    brand: {
      name:      "Tesi Gómez Castelli",
      tagline1:  "Arte textil que despliega mundos.",
      tagline2:  "Del plano al volumen.",
      email:     "tesi@tesistudio.com",
      tiendaUrl: "https://tienda.tesistudio.com",
      social: [
        { label: "Instagram", handle: "@tesistudio",    href: "https://instagram.com/tesistudio" },
        { label: "TikTok",    handle: "@iamtesistudio", href: "https://tiktok.com/@iamtesistudio" },
        { label: "Pinterest", handle: "tgcastelli",     href: "https://ar.pinterest.com/tgcastelli/" },
        { label: "YouTube",   handle: "@TesiStudio",    href: "https://youtube.com/@TesiStudio" },
      ],
    },
    nav: {
      home:      "Inicio",
      portfolio: "Portfolio",
      about:     "About",
      textos:    "Textos",
      contacto:  "Contacto",
      tienda:    "Tienda",
    },
    home: {
      eyebrow: "Buenos Aires · arte textil",
      lede: "Mi práctica parte del bordado y la moldería, oficios de precisión y tiempo, para explorar cómo un objeto contiene ya, en plano, la forma que será: diseño esas articulaciones, sus movimientos.",
    },
    portfolio: {
      eyebrow:    "Portfolio",
      title:      "Obra",
      lede:       "La obra se organiza en dos series. Cada una trabaja desde un mismo sistema, el pasaje del plano al volumen, a escalas distintas.",
      seriesNav:  "Series",
      nextSeries: "Siguiente serie",
      view:       "Ver pieza",
    },
    series: [
      {
        id:     "miniaturas",
        eyebrow: "Serie · 01",
        title:  "Miniaturas",
        lede:   "Figuras como pequeños talismanes, montados sobre hoja de oro, habitan dentro de una caja de acrílico hecha a mano.",
        pieces: [
          { id: "min-01", image: "/assets/obra/miniaturas/min-01.jpg", title: "[Pieza s/t]", year: "2025", materials: "bordado sobre textil · hoja de oro · acrílico", dims: "12 × 9 × 9 cm", desc: "Talismán bordado, montado sobre hoja de oro, dentro de cápsula de acrílico hecha a mano." },
          { id: "min-02", image: "/assets/obra/miniaturas/min-02.jpg", title: "[Pieza s/t]", year: "2025", materials: "bordado · hoja de oro · acrílico", dims: "10 × 8 × 8 cm", desc: "Figura bordada hilo por hilo. La lámina de oro debajo reflecta el bordado contra la cápsula." },
          { id: "min-03", image: "/assets/obra/miniaturas/min-03.jpg", title: "[Pieza s/t]", year: "2024", materials: "bordado sobre lino · hoja de oro · acrílico", dims: "14 × 10 × 10 cm", desc: "Pieza más extensa de la serie. El plano bordado se proyecta dentro del cubo de acrílico." },
          { id: "min-04", image: "/assets/obra/miniaturas/min-04.jpg", title: "[Pieza s/t]", year: "2024", materials: "bordado · hoja de oro · acrílico", dims: "9 × 7 × 7 cm", desc: "Talismán cerrado. Estudio de brillo contra opacidad dentro del cubo." },
        ],
      },
      {
        id:     "ventana",
        eyebrow: "Serie · 02",
        title:  "Ventana",
        lede:   "La infancia sagrada se vuelve imagen; algunos son recuerdos claros y otros son solo texturas, brillo contra opacidad. También hay una ventana de nada.",
        pieces: [
          { id: "ven-01", image: "/assets/obra/ventana/ven-01.jpg", title: "[Pieza s/t]", year: "2026", materials: "bordado · hilos elastizados · marco", dims: "40 × 28 cm", desc: "Ventana de un recuerdo claro. Bordado figurativo sobre fondo translúcido." },
          { id: "ven-02", image: "/assets/obra/ventana/ven-02.jpg", title: "[Pieza s/t]", year: "2026", materials: "bordado · textil técnico · marco", dims: "40 × 28 cm", desc: "Ventana de textura. Brillo contra opacidad, sin figura: el recuerdo perdió contorno." },
          { id: "ven-03", image: "/assets/obra/ventana/ven-03.jpg", title: "[Ventana de nada]", year: "2026", materials: "textil · marco", dims: "40 × 28 cm", desc: "Una ventana sin bordado. La superficie como ausencia, no como vacío." },
        ],
      },
    ],
    about: {
      eyebrow:       "About me",
      statementHead: "Artist statement",
      statement: [
        "Trabajo en el pasaje del plano al volumen: el momento exacto en que una superficie deja de ser plana y se despliega en forma. Mi práctica parte del bordado y la moldería, oficios de precisión y tiempo, y de una investigación sobre perspectivas plegables que nació en los libros pop-up de mi infancia: mundos enteros que emergían de una página con un solo movimiento.",
        "No me interesa decorar una superficie, sino enriquecerla, y volver protagonista a lo que suele quedar escondido: el pliegue, el reverso, el secreto. Bordo en miniatura dentro de cápsulas que guardan y muestran a la vez, y expando esa misma lógica hacia la pared y el objeto.",
        "Lo que busco no es que una obra complete un espacio, sino que lo habite. Que quien la mira sienta primero un flechazo por lo bello y lo que brilla, y después el deseo de proteger su propia curiosidad más íntima. Hago piezas pensadas para ser atesoradas: pequeños territorios donde lo secreto, por fin, ocupa el centro.",
      ],
      bio: [
        "Tesi Gómez Castelli es artista textil; vive y trabaja entre Buenos Aires y Asunción. Se formó como diseñadora de indumentaria y textil en Buenos Aires, donde encontró en la materialidad, el color y la tridimensión su lenguaje propio.",
        "Su práctica parte del bordado y la moldería, oficios de precisión y tiempo, para investigar el pasaje del plano al volumen: cómo una superficie contiene ya la forma que será y se despliega con un solo movimiento. Esa pregunta nació en los libros pop-up de su infancia y, con los años, se volvió sistema: el estudio de perspectivas plegables que atraviesa toda su obra. Trabaja en series a distintas escalas, de la miniatura bordada que habita cápsulas de acrílico a la pieza que se expande hacia la pared y el espacio.",
        "No busca decorar la superficie, sino enriquecerla, y volver protagonista al secreto: el pliegue, el reverso, lo que suele quedar oculto. Hoy desarrolla obra propia desde su estudio y recibe encargos de coleccionistas privados e interioristas de distintos países.",
      ],
    },
    textos: {
      eyebrow:    "Textos",
      title:      "Pensamiento y proceso",
      lede:       "Espacio para desarrollar pensamiento y actualidad de obra. Ensayos breves del estudio.",
      categories: ["Todos", "Pensamiento", "Proceso", "Obra"],
      read:       "Leer entrada →",
      items: [
        {
          id:       "origen-identidad",
          n:        "01",
          category: "Pensamiento",
          date:     "15 May 2026",
          title:    "Origen e identidad",
          dek:      "Reflexiones personales y artísticas sobre origen e identidad.",
          excerpt:  "Nací y me crié en una casa de burgueses. Mis papás no habían tenido infancias sencillas y por eso se dedicaron a revertir esa historia… Tuve una niñez privilegiada en donde el juego y la fantasía creó y sigue recreando imágenes de posibilidades y de mundos miniaturas que me causan placer.",
          body: [
            "Nací y me crié en una casa de burgueses. Mis papás no habían tenido infancias sencillas y por eso se dedicaron a revertir esa historia y, bueno, una clase media trabajadora que se podía profesionalizar, siendo los primeros profesionales de primera generación de profesionales de la historia de su familia, lograron a través de la educación cambiar el destino mío, cómo me podían presentar al mundo, cómo yo me iba a poder parar frente al mundo.",
            "Tuve una niñez privilegiada en donde el juego y la fantasía creó y sigue recreando imágenes de posibilidades y de mundos miniaturas que me causan placer, dentro de los cuales me causa placer hurgar. Habitar durante esos instantes en donde uno entra. A veces entro de forma espontánea, no es algo planificado.",
            "Esta infancia que me forjó con una identidad libre, feliz, divertida, también hizo que tomara conciencia, en cierto momento de mi vida, de una particularidad o de las particularidades que me definían, pero una de ellas estaba expuesta frente al mundo. Y lo que suele ocurrir cuando una particularidad es literal es que las personas que tuvimos la oportunidad de crecer en entornos en donde nos pudimos desarrollar identitariamente, no tengamos como esa etiqueta que es lo primero que se ve.",
            "Entonces, a mí nunca me pesó, porque yo viví y me crié en un entorno de mucho amor y de mucho valor, tener una portada, como la tenemos todos. Quizás mi portada era más visible y siento que no tomé conciencia nunca de forma negativa acerca de esto.",
            "A partir del paso del tiempo, yo fui experimentando momentos y situaciones de muchísimo dolor que fueron un poco maleando mi umbral también. Yo creo que en mi adolescencia yo, por primera vez, relacioné mi dolor físico con el dolor del alma. Y hasta ese entonces esas dos partes estaban separadas. Yo podía sostener un cuerpo sin que me pesara el alma.",
            "A lo largo de los años yo me fui desarrollando por intereses y con total libertad. Siempre fui un poco la oveja negra de la familia, siempre fui muy bochinchera y mi lado artístico siempre afloró, mi lado más de expresión artística siempre estuvo como prioridad para mí.",
            "De alguna forma, fui tomando decisiones como joven adulta que me fueron acercando a una introspección que podía analizar la materia, la colorimetría, la forma, la tridimensión, el pensamiento, la magia de los sueños como mecanismo para vivir. Ahí es cuando yo encontré en la carrera de diseño textil y de indumentaria el mecanismo a través del cual podía expresarme mejor.",
            "Parte de mi despertar transformador fue conocer a Victoria Ocampo. Me pareció siempre, a partir de ese momento, no puedo dejar de pensar en ella como alguien que admiro, como una mujer fascinante que se encargaba de incubar ideas, ambientes propicios para lograr cosas, en comunidad.",
            "Hacerme cargo por primera vez de algo propio fue mi enfermedad. Hacerme cargo de mi enfermedad y buscar la manera de cambiar mi realidad, obtener una respuesta y surtir efecto me devolvió la felicidad, me devolvió la vida, la energía y creo que a partir de ese momento, con cada capa de la vida íntima, yo pude hacerme cargo de un montón de decisiones que tenía que revisar.",
            "Y bueno, una de esas fue la de volver a lo que me hace feliz y en donde brillo más, que es el arte textil.",
          ],
        },
        {
          id:       "memoria-artistica",
          n:        "02",
          category: "Proceso",
          date:     "Buenos Aires · 2018",
          title:    "Memoria artística",
          dek:      "Texto de Turquesa Topper, Trabajo de Investigación Final, 2018, Buenos Aires.",
          excerpt:  "El proyecto está sostenido por aristas. Se han involucrado los conceptos en la presentación, evidencia que el proyecto posee un proceso reflexivo profundo que consideramos le otorga solidez.",
          body: [
            "El proyecto está sostenido por aristas. Se han involucrado los conceptos en la presentación, evidencia que el proyecto posee un proceso reflexivo profundo que consideramos le otorga solidez.",
            "REF3, proyecto final de Teresita Gómez Castelli, tiene su cartografía. En la requisición de la información apta, en la cual es evidente la importancia del proceso en las distintas articulaciones de los signos.",
            "Es de destacar la puesta espacial realizada por la alumna para su exposición. Resulta evidente su compromiso con la singularidad propia de su rol como diseñadora.",
            "El libro es una especie de pieza estético-comunicacional. La sensibilidad de todas y cada una de las piezas, de las proyecciones y de las aristas nos permiten compartir con placer el desarrollo de una diseñadora que supera su ámbito disciplinario y brilla en cualquier opacidad.",
          ],
          attribution: "Turquesa Topper · Trabajo de Investigación Final, 2018 · Buenos Aires",
        },
        {
          id:       "reflexion-real",
          n:        "03",
          category: "Pensamiento",
          date:     "14 May 2026",
          title:    "Reflexión sobre lo real",
          dek:      "Pensamiento filosófico sobre realidad y transformación.",
          excerpt:  "Ya no hay miedo en lo colectivo, por desaparecer. Pero en cuanto uno encuentra algo que lo apasiona, le quema el pecho por volver verbo lo que es capaz de imaginar.",
          body: [
            "Ya no hay miedo en lo colectivo, por desaparecer. Pero en cuanto uno encuentra algo que lo apasiona, le quema el pecho por volver verbo lo que es capaz de imaginar. Ahí es donde buscamos revertir el rol de la liquidez: pero durante este período de espectador silencioso con deseos de \"ya no estar allí\", olvidamos los mecanismos y su compás.",
            "Volver a la realidad puede ser un acto de coraje, pero denota mayor valentía la constancia, ante esa máquina insaciable que es hoy \"lo real\". Si me analizo, me descompongo, y preciso pasar del estado líquido al sólido. ¿Cómo descomponer lo líquido? Imagino ese intersticio necesario para volverlo sólido.",
          ],
        },
        {
          id:       "apoptosis",
          n:        "04",
          category: "Pensamiento",
          date:     "15 May 2026",
          title:    "Apoptosis ≠ Angiogénesis",
          dek:      "Células que desencadenan su autodestrucción, y otras que se multiplican.",
          excerpt:  "Angiogénesis: proceso biológico mediante el cual se forman nuevos vasos sanguíneos a partir de otros preexistentes = crecimiento = multiplicación = avance sobre el territorio.",
          body: [
            "Apoptosis: células que desencadenan su autodestrucción. Apoptosis ≠ Angiogénesis.",
            "Angiogénesis: proceso biológico mediante el cual se forman nuevos vasos sanguíneos a partir de otros preexistentes = crecimiento = multiplicación = avance sobre el territorio = ¿qué pasa si es igual de suicida que las células apoptóticas?",
            "Como la angiogénesis operó en mí, así opero yo: germino, incubo y expando. Me gusta investigar la apropiación del territorio donde trabajo.",
            "Y luego la inyección. Que lo inflamó todo para volverlo a la medida de su \"realidad\". Permanece, sigue sin ser \"nada\". Sigue existiendo y allí = es algo. Tengo que volver a aquel baúl donde me acosté y recordé mi primera internación a modo de juego, tenía 4 años. Tengo que volver para hacérselo bello a Tesi.",
          ],
        },
        {
          id:       "vanishing-point",
          n:        "05",
          category: "Pensamiento",
          date:     "16 May 2026",
          title:    "Vanishing Point",
          dek:      "Sobre desaparecer, escapar, y los puntos de fuga.",
          excerpt:  "Me gustó leerlo en inglés. 'To vanish' = des-aparecer. 'Punto de fuga' = es-capar de la vista. La desaparición como un deseo de ya no estar allí, también es escapar.",
          body: [
            "Me gustó leerlo en inglés. 'To vanish' = des-aparecer. 'Punto de fuga' = es-capar de la vista.",
            "La desaparición como un deseo de ya no estar allí, también es escapar.",
          ],
        },
        {
          id:       "rastros",
          n:        "06",
          category: "Pensamiento",
          date:     "16 May 2026",
          title:    "De todo lo que desaparece quedan rastros",
          dek:      "Sobre las desapariciones avisadas y las espontáneas, y lo que el tacto recuerda.",
          excerpt:  "¿Qué me provocan esos rastros? Hay desapariciones que tienen previo aviso, otras son espontáneas. Existen aquellas por las cuales luchamos quizás años.",
          body: [
            "¿Qué me provocan esos rastros? Hay desapariciones que tienen previo aviso, como cuando cerró Book Depository. Otras desapariciones son espontáneas. Existen aquellas por las cuales luchamos quizás años.",
            "Yo con los rastros hago memoria: están en mis dedos, los puedo recordar, vuelven a pasar por mi corazón, con el tacto.",
          ],
        },
      ],
    },
    contacto: {
      eyebrow:       "Contacto",
      lede:          "Si querés conversar sobre la obra, encargar una pieza, o escribir sobre el trabajo, escribime directo. Respondo en uno o dos días.",
      formName:      "Nombre",
      formEmail:     "Email",
      formMessage:   "Mensaje",
      formMessagePh: "Contame brevemente qué te interesa.",
      send:          "Enviar mensaje",
      sent:          "Gracias. Te respondo personalmente en uno o dos días.",
      directs: [
        ["Email",     "tesi@tesistudio.com", "mailto:tesi@tesistudio.com"],
        ["Instagram", "@tesistudio ↗",               "https://instagram.com/tesistudio"],
        ["TikTok",    "@iamtesistudio ↗",            "https://tiktok.com/@iamtesistudio"],
        ["Pinterest", "tgcastelli ↗",                "https://ar.pinterest.com/tgcastelli/"],
        ["YouTube",   "@TesiStudio ↗",               "https://youtube.com/@TesiStudio"],
      ],
    },
    footer: { rights: "© Teresita Gómez Castelli · Buenos Aires" },
  },

  en: {
    brand: {
      name:      "Tesi Gómez Castelli",
      tagline1:  "Textile art that unfolds worlds.",
      tagline2:  "From plane to volume.",
      email:     "tesi@tesistudio.com",
      tiendaUrl: "https://tienda.tesistudio.com",
      social: [
        { label: "Instagram", handle: "@tesistudio",    href: "https://instagram.com/tesistudio" },
        { label: "TikTok",    handle: "@iamtesistudio", href: "https://tiktok.com/@iamtesistudio" },
        { label: "Pinterest", handle: "tgcastelli",     href: "https://ar.pinterest.com/tgcastelli/" },
        { label: "YouTube",   handle: "@TesiStudio",    href: "https://youtube.com/@TesiStudio" },
      ],
    },
    nav: { home: "Home", portfolio: "Portfolio", about: "About", textos: "Writing", contacto: "Contact", tienda: "Shop" },
    home: {
      eyebrow: "Buenos Aires · textile art",
      lede: "My practice begins with embroidery and pattern-making, crafts of precision and time, to explore how an object already contains, in plane, the form it will become: I design those articulations, their movements.",
    },
    portfolio: {
      eyebrow: "Portfolio", title: "Work",
      lede: "The work is organised in two series. Each works from the same system, the passage from plane to volume, at different scales.",
      seriesNav: "Series", nextSeries: "Next series", view: "View piece",
    },
    series: [
      {
        id: "miniaturas", eyebrow: "Series · 01", title: "Miniatures",
        lede: "Figures like small talismans, mounted on gold leaf, inhabit a handmade acrylic case.",
        pieces: [
          { id: "min-01", image: "/assets/obra/miniaturas/min-01.jpg", title: "[Untitled piece]", year: "2025", materials: "embroidery on textile · gold leaf · acrylic", dims: "12 × 9 × 9 cm", desc: "Embroidered talisman mounted on gold leaf, inside a handmade acrylic capsule." },
          { id: "min-02", image: "/assets/obra/miniaturas/min-02.jpg", title: "[Untitled piece]", year: "2025", materials: "embroidery · gold leaf · acrylic", dims: "10 × 8 × 8 cm", desc: "Figure embroidered thread by thread. The gold leaf reflects the work against the capsule." },
          { id: "min-03", image: "/assets/obra/miniaturas/min-03.jpg", title: "[Untitled piece]", year: "2024", materials: "embroidery on linen · gold leaf · acrylic", dims: "14 × 10 × 10 cm", desc: "Most extensive piece in the series. The embroidered plane projects inside the acrylic cube." },
          { id: "min-04", image: "/assets/obra/miniaturas/min-04.jpg", title: "[Untitled piece]", year: "2024", materials: "embroidery · gold leaf · acrylic", dims: "9 × 7 × 7 cm", desc: "A closed talisman. Study of shimmer against opacity inside the cube." },
        ],
      },
      {
        id: "ventana", eyebrow: "Series · 02", title: "Window",
        lede: "Sacred childhood becomes image; some are clear memories, others are only textures: shimmer against opacity. There is also a window of nothing.",
        pieces: [
          { id: "ven-01", image: "/assets/obra/ventana/ven-01.jpg", title: "[Untitled piece]", year: "2026", materials: "embroidery · elasticised thread · frame", dims: "40 × 28 cm", desc: "Window of a clear memory. Figurative embroidery on translucent ground." },
          { id: "ven-02", image: "/assets/obra/ventana/ven-02.jpg", title: "[Untitled piece]", year: "2026", materials: "embroidery · technical textile · frame", dims: "40 × 28 cm", desc: "Window of texture. Shimmer against opacity, without figure: the memory lost its contour." },
          { id: "ven-03", image: "/assets/obra/ventana/ven-03.jpg", title: "[Window of nothing]", year: "2026", materials: "textile · frame", dims: "40 × 28 cm", desc: "A window without embroidery. Surface as absence, not as void." },
        ],
      },
    ],
    about: {
      eyebrow: "About me", statementHead: "Artist statement",
      statement: [
        "I work in the passage from plane to volume: the exact moment a surface stops being flat and unfolds into form. My practice grows out of embroidery and pattern-making, crafts of precision and time, and out of a research into folding perspectives that began with the pop-up books of my childhood: whole worlds that rose from a flat page with a single movement.",
        "I'm not interested in decorating a surface, but in enriching it, and in giving the leading role to what usually stays hidden: the fold, the reverse, the secret. I embroider in miniature inside capsules that both keep and reveal, and I expand that same logic toward the wall and the object.",
        "What I seek is not for a piece to complete a space, but to inhabit it. For whoever looks at it to feel, first, a flush of attraction to the beautiful and the luminous, and then the desire to protect their own most intimate curiosity. I make pieces meant to be treasured: small territories where the secret, at last, takes center stage.",
      ],
      bio: [
        "Tesi Gómez Castelli is a textile artist living and working between Buenos Aires and Asunción. She trained as a fashion and textile designer in Buenos Aires, where she found her own language in materiality, colour and three-dimensionality.",
        "Her practice grows out of embroidery and pattern-making, crafts of precision and time, to investigate the passage from plane to volume: how a surface already contains the form it will become and unfolds with a single movement. That question began with the pop-up books of her childhood and, over the years, became a system: the study of folding perspectives that runs through all her work. She works in series at different scales, from miniatures embroidered inside acrylic capsules to pieces that expand toward the wall and the surrounding space.",
        "She does not seek to decorate a surface, but to enrich it, and to give the leading role to the secret: the fold, the reverse, what usually stays hidden. Today she develops her own work from her studio and takes commissions from private collectors and interior designers across several countries.",
      ],
    },
    textos: {
      eyebrow: "Writing", title: "Thought and process",
      lede: "Space for developing thought and the studio's current work. Short essays from the studio.",
      categories: ["All", "Thought", "Process", "Work"],
      read: "Read entry →",
      items: [
        { id: "origen-identidad",  n: "01", category: "Thought",  date: "15 May 2026", title: "Origin and identity",                       dek: "Personal and artistic reflections on origin and identity.",                  excerpt: "I was born and raised in a bourgeois household. My parents had not had easy childhoods, and so they devoted themselves to reversing that history…",     body: ["…"] },
        { id: "memoria-artistica", n: "02", category: "Process",  date: "Buenos Aires · 2018", title: "Artistic memory",                   dek: "Text by Turquesa Topper, Final Research Work, 2018, Buenos Aires.",         excerpt: "The project is held together by edges. Concepts have been involved in the presentation, evidence that the project possesses a deep reflective process.", body: ["…"], attribution: "Turquesa Topper · Final Research Work, 2018 · Buenos Aires" },
        { id: "reflexion-real",    n: "03", category: "Thought",  date: "14 May 2026", title: "On the real",                               dek: "Philosophical thought on reality and transformation.",                       excerpt: "There is no longer collective fear of disappearing. But as soon as one finds something that excites them, the chest burns to turn imagination into verb.",  body: ["…"] },
        { id: "apoptosis",         n: "04", category: "Thought",  date: "15 May 2026", title: "Apoptosis ≠ Angiogenesis",                  dek: "Cells that trigger their own self-destruction, and others that multiply.",  excerpt: "Angiogenesis: a biological process by which new blood vessels are formed from pre-existing ones = growth = multiplication = advance over territory.",     body: ["…"] },
        { id: "vanishing-point",   n: "05", category: "Thought",  date: "16 May 2026", title: "Vanishing Point",                           dek: "On disappearing, escaping, and vanishing points.",                          excerpt: "I liked reading it in English. 'To vanish' = to dis-appear. 'Punto de fuga' = to es-cape from view.",                                                  body: ["…"] },
        { id: "rastros",           n: "06", category: "Thought",  date: "16 May 2026", title: "Of everything that disappears, traces remain", dek: "On forewarned disappearances and spontaneous ones, and what touch remembers.", excerpt: "What do those traces stir in me? Some disappearances are announced. Others are spontaneous.",                                                        body: ["…"] },
      ],
    },
    contacto: {
      eyebrow: "Contact",
      lede: "If you'd like to talk about the work, commission a piece, or write about the practice, write to me directly. I reply within a day or two.",
      formName: "Name", formEmail: "Email", formMessage: "Message",
      formMessagePh: "Tell me briefly what interests you.",
      send: "Send message", sent: "Thank you. I'll reply personally within a day or two.",
      directs: [
        ["Email",     "tesi@tesistudio.com", "mailto:tesi@tesistudio.com"],
        ["Instagram", "@tesistudio ↗",               "https://instagram.com/tesistudio"],
        ["TikTok",    "@iamtesistudio ↗",            "https://tiktok.com/@iamtesistudio"],
        ["Pinterest", "tgcastelli ↗",                "https://ar.pinterest.com/tgcastelli/"],
        ["YouTube",   "@TesiStudio ↗",               "https://youtube.com/@TesiStudio"],
      ],
    },
    footer: { rights: "© Teresita Gómez Castelli · Buenos Aires" },
  },
}
