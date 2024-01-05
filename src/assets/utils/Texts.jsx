const MY_AGE = Math.floor((new Date() - new Date(2001, 1, 5)) / 3.15576e+10);

export const menu = [
	{
		es: 'Sobre mi 👨‍💻',
		en: 'About me 👨‍💻',
		ref: '#about',
		color: 'border-red-500',
	},
	{
		es: 'Experiencia 🧠',
		en: 'Experience 🧠',
		ref: '#experience',
		color: 'border-yellow-500',
	},
	{
		es: 'Usos 🎒',
		en: 'Uses 🎒',
		ref: '#uses',
		color: 'border-orange-500',
	},
	{
		es: 'Trabajo 💼',
		en: 'Work 💼',
		ref: '#work',
		color: 'border-blue-500',
	},
	{
		es: 'Contacto 📞',
		en: 'Contact 📞',
		ref: '#contact',
		color: 'border-green-500',
	},
	{
		es: 'CV 📝',
		en: 'Resume 📝',
		ref: '/resume.pdf',
		color: 'border-violet-600',
	},
];

export const presentation = [
	{
		es: '¡Hola!, un placer conocerte 👋, soy',
		en: 'Hello!, nice to meet you 👋, I am',
	},
	{
		es: 'Un apasionado del desarrollo de aplicaciones. Me encanta convertir ideas en soluciones tecnológicas elegantes y que ayuden a los demás. 🎯',
		en: 'A passionate about application development. I love turning ideas into elegant technological solutions that help others. 🎯',
	},
	{
		es: 'Mi pasión es dar vida a las ideas creando aplicaciones que no solo resuelven problemas, sino que también ayuden a los demás. Soy un alguien que busca aprender día a día, siempre en búsqueda de nuevas aventuras, tanto profesionales como personales. En mi tiempo libre, me sumerjo en diversos cursos, disfruto de la compañía de mis amigos y de salir a conocer nuevos lugares. 🤓',
		en: 'My passion is to give life to ideas by creating applications that not only solve problems, but also help others. I am someone who seeks to learn day by day, always in search of new adventures, both professional and personal. In my free time, I immerse myself in various courses, I enjoy the company of my friends and going out to discover new places. 🤓',
	},
	{
		es: 'Lugares donde podrás encontrarme 👇🏼🌎',
		en: 'Places where you can find me 👇🏼🌎',
	},
];

export const about = [
	{
		es:
			`¡Hola!, mi nombre es <span class='font-bold dark:text-yellow-300 duration-1000'>Héctor Saldaña Espinoza</span>,
			 actualmente tengo ${MY_AGE} años, soy un amante del desarrollo de aplicaciones o páginas en la web con herramientas tecnológicas, así como por el diseño web. 🎒
			 <br />
			 <br />
			 Me encanta mucho escuchar todo tipo de música, en especial las baladas en inglés, la clásica, rock, boleros y el rap, me gusta visitar nuevos lugares como también conocer nuevas personas, me encanta la ciudad, me gusta aprender y ser autodidacta aprendiendo nuevas cosas en internet como en cursos, videos y blogs.
			 <br />
			 <br />
			 La creación de contenido, leer libros (aunque necesito leer más), ver películas de comedia o sobre guerras mundiales, series interesantes, jugar videojuegos, hacer ejercicio, pasar tiempo de caridad con mi familia, novia y amigos, me encanta escribir, así como también ayudar a las demás personas. <strong>Dime, ¿tenemos algo en común? 🥳</strong>
		`,
		en:
			`
			Hello!, my name is <span class='font-bold dark:text-yellow-300 duration-1000'>Héctor Saldaña Espinoza</span>,
			I am currently ${MY_AGE} years old, I am a lover of application development or pages on the web with technological tools, as well as web design. 🎒
			<br />
			<br />
			I really love listening to all kinds of music, especially English ballads, classical, rock, boleros and rap, I like to visit new places as well as meet new people, I love the city, I like to learn and be self-taught learning new things on the internet as in courses, videos and blogs.
			<br />
			<br />
			The creation of content, reading books (although I need to read more), watching comedy movies or about world wars, interesting series, playing video games, exercising, spending charity time with my family, girlfriend and friends, I love writing, as well as helping other people. <strong>Tell me, do we have something in common? 🥳</strong>
		`,
	},
	{
		es: `La palabra <strong class='dark:text-yellow-300 duration-1000'>Saldes</strong>, la cree en combinación de mis dos apellidos <span class='font-bold dark:text-yellow-300 duration-1000'>Sal</span>daña y <span class='font-bold dark:text-yellow-500 duration-1000'>Es</span>pinoza. Debido a que la ñ en español me daba problemas en algunas plataformas y sistemas. Digamos que es mi nombre de usuario común. 😅`,
		en: `The word <strong class='dark:text-yellow-300 duration-1000'>Saldes</strong>, I created in combination of my two surnames. Due to the letter ñ in spanish it gave me problems in some platforms and systems. Let's say that is my username common. 😅`,
	},
	{
		es: 'Tecnologías, herramientas y frameworks que uso',
		en: 'Technologies, tools and frameworks that I use',
	},
];

export const experience = [
	{ es: 'Educación 📗', en: 'Education 📗' },
	{
		education: [
			{
				es: {
					grade: 'Técnico Profesional Media Superior en Informática',
					school: 'Colegio Nacional de Educación Profesional Técnica',
					year: 'Agosto 2016 - Julio 2019',
					place: 'Morelos, México',
				},
				en: {
					grade: 'Professional Technician in Computer Science',
					school: 'Colegio Nacional de Educación Profesional Técnica',
					year: 'August 2016 - July 2019',
					place: 'Morelos, México',
				},
			},

			{
				es: {
					grade: 'Técnico Superior Universitario en Desarrollo de Software Multiplataforma',
					school: 'Universidad Tecnológica Emiliano Zapata',
					year: 'Septiembre 2019 – Agosto 2021',
					place: 'Morelos, México',
				},
				en: {
					grade: 'Multiplatform Software Development Technician',
					school: 'Universidad Tecnológica Emiliano Zapata',
					year: 'September 2019 – August 2021',
					place: 'Morelos, México',
				},
			},

			{
				es: {
					grade: 'Ingeniero en Desarrollo y Gestión de Software',
					school: 'Universidad Tecnológica Emiliano Zapata',
					year: 'Septiembre 2021 – Abril 2023',
					place: 'Morelos, México',
				},
				en: {
					grade: 'Software Development and Management Engineer',
					school: 'Universidad Tecnológica Emiliano Zapata',
					year: 'September 2021 – April 2023',
					place: 'Morelos, México',
				},
			},


		],
	},
	{ es: 'Profesional 📒', en: 'Professional 📒' },
	{
		professional: [

			{
				es:{
					grade: 'Desarrollador Fullstack',
					company: 'Freight Ideas S.A. de C.V.',
					year: 'Diciembre 2022 – Presente',
					place: 'CDMX, México',
					text: 'Desarrollador en el proyecto Verifica-t en relación con la facturación.',

				},
				en:{
					grade: 'Fullstack Developer',
					company: 'Freight Ideas S.A. de C.V.',
					year: 'December 2022 – Present',
					place: 'México City, México',
					text: 'Developer on the project Verifica-t related with invoices and billings.',
				}
			},



			{
				es:{
					grade: 'Desarrollador Fullstack',
					company: 'Novopatent I.S.S.C.',
					year: 'Mayo 2021 – Agosto 2021',
					place: 'Morelos, México',
					text: 'Desarrollo de una plataforma web para la consulta de propiedad intelectual.',

				},
				en:{
					grade: 'Fullstack Developer',
					company: 'Novopatent I.S.S.C.',
					year: 'May 2021 – August 2021',
					place: 'Morelos, México',
					text: 'Develop of a web platform for search of intellectual property.',
				}
			},


			{
				es:{
					grade: 'Diseñador',
					company: 'Viajemos a Morelos',
					year: 'Julio 2018 – Enero 2020',
					place: 'Morelos, México',
					text: 'Diseño de flyers para eventos, fiestas y publicidad para hoteles.',
				},
				en:{
					grade: 'Designer',
					company: 'Viajemos a Morelos',
					year: 'July 2018 – January 2020',
					place: 'Morelos, México',
					text: 'Design of flyers for events, parties, and publicity for hotels.',
				}
			},

		],
	},

];

export const uses = [
	{
		title: {
			es: 'Aplicaciones móviles',
			en: 'Mobile apps',
		},
		items: [
			{
				name: 'Tiktok',
				img: 'https://play-lh.googleusercontent.com/Ui_-OW6UJI147ySDX9guWWDiCPSq1vtxoC-xG17BU2FpU0Fi6qkWwuLdpddmT9fqrA=w240-h480-rw',
				colorBackground: 'dark:bg-black',
				colorText: '',
			},
			{
				name: 'Addidas Running',
				img: 'https://play-lh.googleusercontent.com/OvUa9t26bXhCbKJDZK_RpRAnJFHOvr_HuD32Kb8MjULM2jDG_DD_ZoHZx_Du8ejqyAOI',
				colorBackground: 'dark:bg-[#00999e]',
				colorText: '',
			},
			{
				name: 'Pinterest',
				img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
				colorBackground: 'dark:bg-[#e60024]',
				colorText: 'dark:',
			},
			{
				name: 'Uber',
				img: 'https://i.pinimg.com/736x/7e/0d/0c/7e0d0c81b2350f630e3d2bd58c2ca888.jpg',
				colorBackground: 'dark:bg-white',
				colorText: 'dark:text-black',
			},
			{
				name: 'Google Workspace',
				img: 'https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png',
				colorBackground: 'dark:bg-white',
				colorText: 'dark:text-black',
			},
			{
				name: 'Instagram',
				img: 'https://pbs.twimg.com/media/EK9dCmZVAAAaDME.jpg:large',
				colorBackground: 'dark:bg-[#b13891]',
				colorText: '',
			},
		],
	},
	{
		title: {
			es: 'Sistemas operativos',
			en: 'Operating systems',
		},
		items: [
			{
				name: 'Linux',
				img: 'https://marcas-logos.net/wp-content/uploads/2020/03/Linux-logo-1.jpg',
				colorBackground: 'dark:bg-[#fbc001]',
				colorText: 'dark:text-black',
			},
			{
				name: 'Android',
				img: 'https://vanderpaola.files.wordpress.com/2019/08/android_logo_stacked__rgb_.5.jpg',
				colorBackground: 'dark:bg-[#3ddb84]',
				colorText: 'dark:text-black',
			},
			{
				name: 'Windows',
				img: 'https://i.blogs.es/a632d3/microsoft-windows-logo/1366_2000.png',
				colorBackground: 'dark:bg-[#02bcf5]',
				colorText: '',
			},
		],
	},
	{
		title: {
			es: 'Aplicaciones web',
			en: 'Web apps',
		},
		items: [
			{
				name: 'Tumblr',
				img: 'http://store-images.s-microsoft.com/image/apps.7771.14420356529270456.a0e62d2f-10e7-480b-b5a1-cb70a39b4d1b.c709c9e1-9ae6-4ef8-b83b-802b291f1380',
				colorBackground: 'dark:bg-black',
				colorText: 'dark:text-[#d05397]',
			},
			{
				name: 'YouTube',
				img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/768px-YouTube_social_white_square_%282017%29.svg.png',
				colorBackground: 'dark:bg-[#fe0000]',
				colorText: '',
			},
			{
				name: 'Discord',
				img: 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-4-1.png',
				colorBackground: 'dark:bg-[#5865f2]',
				colorText: '',
			},
			{
				name: 'Platzi',
				img: 'https://play-lh.googleusercontent.com/4RqG3k2Ouy4WXJAptapdG_AnOGXopn7XCVuiwIAeTBTfVHo3_KXCAdSzzQdCMB_Fzts7',
				colorBackground: 'dark:bg-black',
				colorText: '',
			},{
				name: 'OpenAI',
				img: 'https://yt3.googleusercontent.com/UqT_vCkJIn1P2fH1pchr6lbe3xeEekY61h4bUpJkVuityqKOEtUYcNy3pLiJ5OKdj4uKA81FWE8=s900-c-k-c0x00ffffff-no-rj',
				colorBackground: 'dark:bg-black',
				colorText: '',
			},
		],
	},
	{
		title: {
			es: 'Aplicaciones escritorio',
			en: 'Desktop apps',
		},
		items: [
			{
				name: 'Google Chrome',
				img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/480px-Google_Chrome_icon_%28February_2022%29.svg.png',
				colorBackground: 'dark:bg-[#4286f5]',
				colorText: '',
			},
			{
				name: 'JetBrains',
				img: 'https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png',
				colorBackground: 'dark:bg-black',
				colorText: '',
			},
			{
				name: 'Spotify',
				img: 'https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs=w240-h480-rw',
				colorBackground: 'dark:bg-black',
				colorText: '',
			},
		],
	},
	{
		title: {
			es: 'Escritorio',
			en: 'Setup',
		},
		items: [
			{
				link: '',
				name: 'iMac 2013',
				img: 'https://pconemexico.com.mx/cdn/shop/products/iMacA1418201321-53.webp?v=1681754332',
				colorBackground: 'dark:bg-gray-600',
				colorText: 'dark:text-[]',
			},
			{
				link: 'https://a.co/d/0FFnnih',
				name: 'Alexa',
				img: 'https://m.media-amazon.com/images/I/518oegAw+TS._AC_SL1000_.jpg',
				colorBackground: 'dark:bg-sky-500',
				colorText: 'dark:text-[]',
			},
			{
				link: 'https://a.co/d/9yqlqSs',
				name: 'Headphones',
				img: 'https://m.media-amazon.com/images/I/61WaGgUV7JL._AC_SL1500_.jpg',
				colorBackground: 'dark:bg-black',
				colorText: '',
			},
		],
	},
	{
		description: {
			es: 'Esto es para la página ',
			en: 'This for the site ',
		},
	},
];

export const work = [
	{
		img: 'https://www.muycomputer.com/wp-content/uploads/2020/02/Telegram.png',
		title: {
			es: 'MyUnsplashBot | Bot en Telegram',
			en: 'MyUnsplashBot | Telegram Bot',
		},
		description: {
			es: 'Creación de un bot en Telegram, para la visualización y búsqueda, obtener fotos aleatorias de imágenes con uso de la API de la plataforma Unsplash.',
			en: 'Creation of a Telegram Bot, for visualization and search, get random photos of images with use of the API of the Unsplash platform.',
		},
		link: 'https://t.me/MyUnsplashBot',
		built: ['Node.js'],
	},
	{
		img: 'https://miro.medium.com/max/2000/1*jfdwtvU6V6g99q3G7gq7dQ.png',
		title: {
			es: 'Creación de contenido en internet',
			en: 'Internet content creation',
		},
		description: {
			es: 'Estoy empezando a tomarle el gusto por la escritura, por lo que estoy creando contenido en publicaciones de Medium, para diferentes enfoques no solo tecnológicos.',
			en: 'I\'m starting to get a taste for writing, so I\'m creating content in Medium publications, for different approaches not only technological.',
		},
		link: 'https://medium.com/@HectorSaldes',
		built: ['Medium'],
	},
	{
		img: 'https://maxcdn.icons8.com/download/misc/icons8-header/ouch-cover.jpg',
		title: {
			es: 'LIBER | Aplicación web de recursos',
			en: 'LIBER | Resource web application',
		},
		description: {
			es: 'Estoy trabajando actualmente en una plataforma que debido a una brecha de seguridad, se pueden descargar iconos y guardar imágenes totalmente gratis en mi aplicación web llamada LIBER.',
			en: 'I am currently working on a platform that, due to a security breach, you can download icons and save images totally free in my web application called LIBER.',
		},
		link: 'https://hectorsaldes.github.io/liber/#/',
		built: ['React.js', 'PrimeReact'],
	},
];

export const contact = [
	{ es: '¿Charlar un rato?', en: 'Chat for a while?' },
	{
		es: 'Puedes mandarme un mensaje ya sea para una oportunidad de trabajo, un consejo, ayuda motivacional, o para platicar un rato de algún tema random. No dudes en hacerlo, puedes hacerlo con confianza y soy muy abierto.',
		en: 'You can send me a message for a job opportunity, an advice, motivational help, or for char for a while about any random topic. Don\'t doubt do it, you can do it with confidence and I am very free.',
	},
	{
		es: 'Intentaré responderte a la velocidad de la luz ⚡🏃‍♂️, dije lo intentaré, jsjs.',
		en: 'I will try to answer to speed of the light  ⚡🏃‍♂️, I said I will try, haha.',
	},
	{ es: '¡Manda un saludo!', en: 'Send a greeting!' },
];

export const snack = [
	{
		es: '¿Diseño incorrecto?, dímelo en los issues de GitHub aquí 🧑‍🎨',
		en: 'Incorrect design?, tell me on the issues on GitHub here 🧑‍🎨',
	}, {
		es: '¿Quieres dejarme un comentario sobre mi CV?, aquí 📝',
		en: 'Do you want to let me a comment about my resume?, here 📝',
	}, {
		es: 'Página web escrita desde un teclado con amor. Hector 💥',
		en: 'Web page written from a keyboard with love. Hector 💥',
	},
];
