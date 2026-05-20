import { useState } from 'react'
import {
  BadgeCheck,
  Bike,
  Check,
  ChevronRight,
  Clock3,
  Hammer,
  Image as ImageIcon,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Shovel,
  Sprout,
  Star,
  Trees,
} from 'lucide-react'
import haketusImg from './assets/services/haketus.jpg'
import monkkarityotImg from './assets/services/monkkarityot.jpg'
import moottorisahatyotImg from './assets/services/moottorisahatyot.jpg'
import nurmikonleikkuuImg from './assets/services/nurmikonleikkuu.jpg'
import pihanSiistiminenImg from './assets/services/pihan-siistiminen.jpg'
import raivaustyotImg from './assets/services/raivaustyot.jpg'

const phoneDisplay = '050 404 0521'
const phoneHref = 'tel:+358504040521'
const whatsappHref =
  'https://wa.me/358504040521?text=Hei!%20Haluaisin%20kysy%C3%A4%20pihaty%C3%B6st%C3%A4%20/%20pyyt%C3%A4%C3%A4%20arviota.'
const email = 'jani.haantio@gmail.com'
const emailHref = `mailto:${email}`
const serviceArea =
  'Joensuu, Kontiolahti, Liperi, Ylämylly, Lehmo, Reijola, Hammaslahti, Eno ja Pyhäselkä'
const currentYear = new Date().getFullYear()
const mainServices = [
  'Haketus',
  'Raivaustyöt',
  'Moottorisahatyöt',
  'Puiden kaato',
  'Nurmikonleikkuu',
  'Pihan siistiminen',
]

const images = {
  hero:
    'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=2400&q=82',
  clearing:
    raivaustyotImg,
  chainsaw:
    moottorisahatyotImg,
  chipping:
    haketusImg,
  lawn:
    nurmikonleikkuuImg,
  atv:
    monkkarityotImg,
  cleanup:
    pihanSiistiminenImg,
  before:
    'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=80',
  after:
    'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1000&q=80',
  cta:
    'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1800&q=80',
}

const services = [
  {
    title: 'Raivaustyöt',
    text: 'Vesakot, pusikot, tontin raivaus ja pihan siistiminen tehokkaasti.',
    price: 'Alk. 65 €/h',
    description: 'Vesakot, pusikot, tontin raivaus ja pihan siistiminen.',
    includes: ['Vesakot', 'Pusikot', 'Tontin avaaminen', 'Pihan siistiminen'],
    image: images.clearing,
    Icon: Trees,
  },
  {
    title: 'Moottorisahatyöt',
    text: 'Puiden kaato, oksien katkominen, polttopuut ja poistotyöt.',
    price: 'Alk. 75 €/h',
    description: 'Puiden kaato, oksien katkominen, polttopuut ja poistotyöt.',
    includes: ['Oksien katkominen', 'Polttopuut', 'Puiden poistotyöt', 'Pienet kaadot'],
    image: images.chainsaw,
    Icon: Hammer,
  },
  {
    title: 'Haketus',
    text: 'Oksat, risut ja hakkuujätteet nopeasti siistiksi hakkeeksi.',
    price: 'Alk. 85 €/h',
    minimum: 'Minimiveloitus 120 €',
    description: 'Oksat, risut ja hakkuujätteet nopeasti siistiksi hakkeeksi.',
    includes: ['Oksat', 'Risut', 'Hakkuujätteet', 'Tontin siistiminen'],
    benefits: ['Nopeampi siivous', 'Vähemmän poisvietävää', 'Siistimpi lopputulos', 'Hake hyötykäyttöön'],
    image: images.chipping,
    Icon: Shovel,
    featured: true,
  },
  {
    title: 'Nurmikonleikkuu',
    text: 'Siisti nurmi omakotipihoille, mökeille ja kiireisille perheille.',
    price: 'Alk. 45 €',
    description: 'Omakotitalot, mökit, kertatyöt ja pihan ylläpito.',
    includes: ['Omakotitalot', 'Mökit', 'Kertatyöt', 'Pihan ylläpito'],
    image: images.lawn,
    Icon: Sprout,
  },
  {
    title: 'Mönkkärityöt / kuljetus',
    text: 'Risujen, puiden ja tavaran siirto sekä pienkuljetukset.',
    price: 'Alk. 65 €/h',
    description: 'Risujen, puiden ja tavaran siirto sekä pienkuljetukset.',
    includes: ['Risujen siirto', 'Puut', 'Peräkärrytyöt', 'Pienkuljetukset'],
    image: images.atv,
    Icon: Bike,
  },
  {
    title: 'Pihan siistiminen',
    text: 'Lehdet, risut, oksat ja yleinen pihan siistiminen.',
    price: 'Alk. 55 €/h',
    description: 'Lehdet, risut, oksat ja yleinen pihan siistiminen.',
    includes: ['Lehdet', 'Risut', 'Oksat', 'Yleinen pihan siistiminen'],
    image: images.cleanup,
    Icon: Leaf,
  },
]

const trustItems = [
  ['Selkeä arvio', 'Ennen työn aloitusta', ShieldCheck],
  ['Ei piilokuluja', 'Sovitaan hinta ja työ etukäteen', Clock3],
  ['Paikallinen tekijä', 'Joensuun alueella', MapPin],
  ['Pienetkin työt', 'Onnistuvat joustavasti', BadgeCheck],
] as const

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0c0f0a]/92 backdrop-blur-xl">
      <nav className="container-shell flex h-18 items-center justify-between gap-5" aria-label="Päänavigaatio">
        <a href="#etusivu" className="flex items-center gap-3" aria-label="Haantion Pihapalvelu etusivulle">
          <span className="grid size-12 place-items-center rounded-md bg-[#5f821e] text-white">
            <Trees className="size-7" aria-hidden="true" />
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black tracking-wide text-white">HAANTION</span>
            <span className="block text-sm font-black uppercase tracking-[0.22em] text-[#96bd45]">Pihapalvelu</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-black uppercase tracking-wide text-white/85 lg:flex">
          <a className="transition hover:text-[#96bd45]" href="#palvelut">Palvelut</a>
          <a className="transition hover:text-[#96bd45]" href="#haketus">Haketus</a>
          <a className="transition hover:text-[#96bd45]" href="#kuvat">Kuvat</a>
          <a className="transition hover:text-[#96bd45]" href="#palvelut">Hinnat</a>
          <a className="transition hover:text-[#96bd45]" href="#yhteys">Yhteystiedot</a>
        </div>

        <div className="flex items-center gap-2">
          <a className="btn-primary hidden sm:inline-flex" href={phoneHref}>
            <Phone className="size-4" aria-hidden="true" />
            Soita {phoneDisplay}
          </a>
          <a className="grid size-11 place-items-center rounded-md border border-white/15 text-white lg:hidden" href="#palvelut" aria-label="Siirry palveluihin">
            <Menu className="size-5" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="etusivu"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#0d100b] pt-18 text-white sm:min-h-[820px]"
    >
      <img className="absolute inset-0 -z-20 size-full object-cover" src={images.hero} alt="" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,7,4,0.93)_0%,rgba(5,7,4,0.72)_43%,rgba(5,7,4,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#f7f4ec] to-transparent" />

      <div className="container-shell flex min-h-[690px] items-center py-14 sm:py-18">
        <div className="max-w-4xl">
          <p className="section-kicker text-[#96bd45]">Pihatyöt Joensuussa</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.94] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            Piha kuntoon.
            <span className="block text-[#86ad35]">Ilman turhaa säätöä.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/88 sm:text-2xl">
            Raivaus, moottorisahatyöt, haketus, nurmikonleikkuu ja pihatyöt Joensuun alueella.
          </p>
          <p className="mt-3 max-w-2xl text-sm font-bold uppercase tracking-[0.18em] text-white/68">
            {serviceArea}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={phoneHref}>
              <Phone className="size-5" aria-hidden="true" />
              Soita nyt
            </a>
            <a className="btn-secondary" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="size-5 text-[#96bd45]" aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          <dl className="mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map(([title, text, Icon]) => (
              <div key={title} className="flex items-start gap-3 rounded-md border border-white/12 bg-black/25 p-4 backdrop-blur">
                <Icon className="mt-0.5 size-7 shrink-0 text-[#96bd45]" aria-hidden="true" />
                <div>
                  <dt className="font-black">{title}</dt>
                  <dd className="text-sm text-white/75">{text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="bg-[#15170f] py-4 text-white" aria-label="Luottamustekijät">
      <div className="container-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map(([title, text, Icon]) => (
          <div key={title} className="flex items-center gap-3">
            <Icon className="size-6 shrink-0 text-[#96bd45]" aria-hidden="true" />
            <p className="text-sm"><strong>{title}</strong><span className="block text-white/60">{text}</span></p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  const [openService, setOpenService] = useState(-1)

  return (
    <section id="palvelut" className="bg-[#f7f4ec] py-18 sm:py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Palvelut</p>
          <h2 className="section-title">Kaikki piha- ja raivaustyöt yhdestä paikasta</h2>
          <p className="mt-4 text-lg leading-8 text-[#5c604f]">
            Käytännönläheistä työtä omakotipihoille, mökeille ja tonteille. Selkeä arvio, sovittu aikataulu ja piha valmiiksi ilman ylimääräistä säätöä.
            Pihatyöt Joensuu, haketus Joensuu, raivaustyöt Joensuu, moottorisahatyöt Joensuu, puiden kaato Joensuu ja nurmikonleikkuu Joensuu hoituvat yhdestä numerosta.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, price, minimum, description, includes, benefits, image, Icon, featured }, index) => {
            const isOpen = openService === index

            return (
            <article
              key={title}
              className={`group overflow-hidden rounded-lg border bg-white shadow-sm transition duration-300 ${
                featured
                  ? 'border-[#ec7b23]/55 shadow-[0_22px_60px_rgba(236,123,35,0.18)]'
                  : 'border-[#d9d2c2] hover:shadow-xl'
              }`}
            >
              <button
                type="button"
                className="w-full text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#9fc15a]/40"
                aria-expanded={isOpen}
                aria-controls={`service-panel-${index}`}
                onClick={() => setOpenService(isOpen ? -1 : index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img className="size-full object-cover transition duration-500 group-hover:scale-105" src={image} alt="" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
                  {featured && <span className="absolute left-3 top-3 rounded bg-[#ec7b23] px-3 py-1 text-xs font-black uppercase tracking-wide text-white">Suosittu</span>}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className={`size-9 shrink-0 ${featured ? 'text-[#ec7b23]' : 'text-[#5f821e]'}`} aria-hidden="true" />
                    <ChevronRight className={`mt-1 size-6 shrink-0 text-[#5f821e] transition duration-300 ${isOpen ? 'rotate-90' : ''}`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-black uppercase text-[#15170f]">{title}</h3>
                  <p className="mt-2 leading-7 text-[#5c604f]">{text}</p>
                </div>
              </button>

              <div
                id={`service-panel-${index}`}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className={`border-t p-6 ${featured ? 'border-[#ec7b23]/30 bg-[#15170f] text-white' : 'border-[#e1dacb] bg-[#fbfaf6]'}`}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className={`text-xs font-black uppercase tracking-[0.22em] ${featured ? 'text-[#f4a261]' : 'text-[#5f821e]'}`}>Hinta alkaen</p>
                        <p className={`mt-1 text-3xl font-black ${featured ? 'text-[#f4a261]' : 'text-[#15170f]'}`}>{price}</p>
                        {minimum && <p className="mt-1 text-sm font-bold text-white/72">{minimum}</p>}
                      </div>
                    </div>
                    <p className={`mt-4 leading-7 ${featured ? 'text-white/78' : 'text-[#5c604f]'}`}>{description}</p>

                    <div className="mt-5 grid gap-5">
                      <div>
                        <p className={`text-sm font-black uppercase tracking-wide ${featured ? 'text-white' : 'text-[#15170f]'}`}>Sisältää</p>
                        <ul className="mt-3 grid gap-2">
                          {includes.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <Check className={`size-4 shrink-0 ${featured ? 'text-[#f4a261]' : 'text-[#5f821e]'}`} aria-hidden="true" />
                              <span className={featured ? 'text-white/82' : 'text-[#3d4233]'}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {benefits && (
                        <div>
                          <p className="text-sm font-black uppercase tracking-wide text-white">Hyödyt</p>
                          <ul className="mt-3 grid gap-2">
                            {benefits.map((item) => (
                              <li key={item} className="flex items-center gap-2">
                                <Check className="size-4 shrink-0 text-[#f4a261]" aria-hidden="true" />
                                <span className="text-white/82">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a className="btn-primary" href={phoneHref} onClick={(event) => event.stopPropagation()}>
                        <Phone className="size-4" aria-hidden="true" />
                        Soita nyt
                      </a>
                      <a className={featured ? 'btn-secondary' : 'inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#cfc7b7] bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-[#15170f] transition hover:bg-[#f7f4ec]'} href={whatsappHref} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                        <MessageCircle className={`size-4 ${featured ? 'text-[#96bd45]' : 'text-[#5f821e]'}`} aria-hidden="true" />
                        Pyydä arvio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            )
          })}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-[#5c604f]">
          Lopullinen hinta riippuu työn laajuudesta, kohteesta ja kalustotarpeesta. Saat aina selkeän arvion ennen työn aloittamista.
        </p>
      </div>
    </section>
  )
}

function Haketus() {
  return (
    <section id="haketus" className="bg-[#15170f] py-18 text-white sm:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="section-kicker text-[#96bd45]">Haketus Joensuu</p>
          <h2 className="mt-3 text-4xl font-black uppercase leading-tight sm:text-6xl">
            Haketin tekee risukasasta käyttökelpoista haketta.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/78">
            Oksat, risut ja hakkuujätteet nopeasti siistiksi hakkeeksi. Haketus säästää kuljetuksia, nopeuttaa pihan siivousta ja jättää jäljen, joka näyttää heti valmiilta.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Nopea siivous paikan päällä', 'Vähemmän risujen kuljetusta', 'Kate poluille ja istutuksille', 'Ammattimainen kalusto mukana'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 p-4">
                <Check className="size-5 shrink-0 text-[#96bd45]" aria-hidden="true" />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={phoneHref}>
              <Phone className="size-5" aria-hidden="true" />
              Soita nyt
            </a>
            <a className="btn-secondary" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="size-5 text-[#96bd45]" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/6 p-3">
            <img className="h-[340px] w-full rounded-md object-cover" src={images.chipping} alt="Haketusta pihatyömaalla" loading="lazy" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-md bg-[#243015] p-4">
              <strong className="block text-3xl text-[#96bd45]">1</strong>
              <span className="text-sm text-white/75">kasa risuja</span>
            </div>
            <div className="rounded-md bg-[#243015] p-4">
              <strong className="block text-3xl text-[#96bd45]">1</strong>
              <span className="text-sm text-white/75">siisti haketus</span>
            </div>
            <div className="rounded-md bg-[#243015] p-4">
              <strong className="block text-3xl text-[#96bd45]">0</strong>
              <span className="text-sm text-white/75">turhaa vaivaa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BeforeAfter() {
  return (
    <section id="kuvat" className="bg-white py-18 sm:py-24">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="section-kicker">Ennen ja jälkeen</p>
            <h2 className="section-title">Tulos näkyy heti pihassa</h2>
          </div>
          <a className="inline-flex items-center gap-2 rounded-md border border-[#cfc7b7] px-5 py-3 font-black uppercase tracking-wide text-[#15170f] hover:bg-[#f7f4ec]" href="#yhteys">
            <ImageIcon className="size-5 text-[#5f821e]" aria-hidden="true" />
            Pyydä arvio
          </a>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {[
            ['Ennen', images.before, 'Raivattava, umpeenkasvanut pihan reuna'],
            ['Jälkeen', images.after, 'Siistitty ja avarampi piha käyttöön'],
          ].map(([label, src, alt]) => (
            <figure key={label} className="relative overflow-hidden rounded-lg bg-[#15170f]">
              <img className="h-[330px] w-full object-cover sm:h-[430px]" src={src} alt={alt} loading="lazy" />
              <figcaption className="absolute bottom-4 left-4 rounded bg-black/75 px-4 py-2 text-sm font-black uppercase tracking-wide text-white">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section id="miksi" className="bg-[#f0eadf] py-18 sm:py-24">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">Miksi valita meidät</p>
          <h2 className="section-title">Pieni tai iso työ, tehdään kunnolla.</h2>
          <p className="mt-4 text-lg leading-8 text-[#5c604f]">
            Paikallinen tekijä, käytännönläheinen ote ja selkeä yhteydenpito. Työ arvioidaan etukäteen ja tehdään sovitusti.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {['Rehellinen palvelu', 'Selkeä hinnoittelu', 'Ei piilokuluja', 'Paikallinen tekijä', 'Pienetkin työt onnistuvat'].map((item) => (
            <div key={item} className="rounded-lg border border-[#d9d2c2] bg-white p-5">
              <Check className="size-6 rounded-full bg-[#5f821e] p-1 text-white" aria-hidden="true" />
              <p className="mt-4 font-black text-[#15170f]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsFaq() {
  const faqs = [
    ['Mitä alueita palvelette?', `Toimimme Joensuussa ja lähialueilla: ${serviceArea}. Kysy rohkeasti, jos kohde on hieman kauempana.`],
    ['Hoituuko pienetkin työt?', 'Kyllä. Yksittäiset risukasat, oksien katkomiset, nurmikonleikkuu ja pienet siivoukset ovat tavallisia keikkoja.'],
    ['Mitä haketuksella voi tehdä?', 'Haketuksella oksat, risut ja hakkuujätteet muuttuvat nopeasti siistiksi hakkeeksi, jota voi hyödyntää esimerkiksi katteena.'],
    ['Miten hinnoittelu toimii?', 'Saat selkeän arvion ennen työn aloittamista. Lopullinen hinta riippuu työn laajuudesta, kohteesta ja kalustotarpeesta.'],
  ]

  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-2">
        <div>
          <p className="section-kicker">Asiakkailta</p>
          <h2 className="section-title">Luotettava apu, kun piha pitää saada kuntoon</h2>
          <div className="mt-8 grid gap-4">
            {[
              'Piha siistiytyi nopeasti ja sovittu aikataulu piti. Haketus säästi monta kuormaa poisvietävää.',
              'Hyvä yhteydenpito ja reilu hinta. Työ tehtiin juuri niin kuin sovittiin.',
            ].map((quote) => (
              <blockquote key={quote} className="rounded-lg border border-[#d9d2c2] bg-[#f7f4ec] p-6">
                <div className="flex gap-1 text-[#ec7b23]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}
                </div>
                <p className="mt-4 text-lg font-medium leading-8 text-[#32362a]">"{quote}"</p>
              </blockquote>
            ))}
          </div>
        </div>

        <div>
          <p className="section-kicker">Usein kysyttyä</p>
          <h2 className="section-title">Selkeät vastaukset ennen yhteydenottoa</h2>
          <div className="mt-8 divide-y divide-[#d9d2c2] rounded-lg border border-[#d9d2c2] bg-white">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group p-5" open={question === 'Mitä alueita palvelette?'}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-[#15170f]">
                  {question}
                  <ChevronRight className="size-5 shrink-0 text-[#5f821e] transition group-open:rotate-90" aria-hidden="true" />
                </summary>
                <p className="mt-3 leading-7 text-[#5c604f]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCta() {
  return (
    <section id="yhteys" className="relative isolate overflow-hidden bg-[#15170f] py-18 pb-28 text-white sm:py-24">
      <img className="absolute inset-0 -z-20 size-full object-cover opacity-35" src={images.cta} alt="" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-[#15170f]/70" />
      <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="section-kicker text-[#96bd45]">Ota yhteyttä</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-tight sm:text-6xl">
            Tarvitsetko apua pihatöissä?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
            Soita tai lähetä viesti, niin katsotaan työ ja annetaan selkeä arvio ennen aloitusta.
          </p>
        </div>
        <div className="rounded-lg border border-white/12 bg-black/35 p-6 backdrop-blur">
          <div className="grid gap-3">
            <a className="btn-primary w-full" href={phoneHref}><Phone className="size-5" aria-hidden="true" />Soita {phoneDisplay}</a>
            <a className="btn-secondary w-full" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="size-5 text-[#96bd45]" aria-hidden="true" />WhatsApp</a>
            <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white/78 transition hover:bg-white/8 hover:text-white" href={emailHref}><Mail className="size-5 text-[#96bd45]" aria-hidden="true" />{email}</a>
          </div>
          <p className="mt-5 flex items-start gap-3 text-white/72"><MapPin className="mt-1 size-5 shrink-0 text-[#96bd45]" aria-hidden="true" />Palvelemme alueella: {serviceArea}.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0c0f0a] pb-24 pt-10 text-white sm:pb-10">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr_1.2fr]">
        <div>
          <a className="flex items-center gap-3" href="#etusivu">
            <Trees className="size-9 text-[#96bd45]" aria-hidden="true" />
            <span>
              <span className="block font-black uppercase">Haantion Pihapalvelu</span>
              <span className="block text-sm text-white/58">Pihatyöt, raivaus ja haketus Joensuun alueella</span>
            </span>
          </a>
          <p className="mt-5 text-sm leading-6 text-white/58">
            © {currentYear} Haantion Pihapalvelu. Kaikki oikeudet pidätetään.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#96bd45]">Yhteys</h2>
          <div className="mt-4 grid gap-3">
            <a className="flex items-center gap-2 font-black text-white hover:text-[#96bd45]" href={phoneHref}><Phone className="size-5 text-[#96bd45]" aria-hidden="true" />{phoneDisplay}</a>
            <a className="flex items-center gap-2 text-white/75 hover:text-white" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="size-5 text-[#96bd45]" aria-hidden="true" />WhatsApp</a>
            <a className="flex items-center gap-2 text-white/62 hover:text-white" href={emailHref}><Mail className="size-5 text-[#96bd45]" aria-hidden="true" />{email}</a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#96bd45]">Palvelualue</h2>
          <p className="mt-4 leading-7 text-white/72">{serviceArea}</p>
          <h2 className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-[#96bd45]">Palvelut</h2>
          <p className="mt-3 leading-7 text-white/72">{mainServices.join(', ')}</p>
        </div>
      </div>
    </footer>
  )
}

function MobileBottomCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0c0f0a]/96 p-3 shadow-[0_-16px_35px_rgba(0,0,0,0.28)] backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a className="btn-primary min-h-12" href={phoneHref}>
          <Phone className="size-4" aria-hidden="true" />
          Soita
        </a>
        <a className="btn-secondary min-h-12" href={whatsappHref} target="_blank" rel="noreferrer">
          <MessageCircle className="size-4 text-[#96bd45]" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Haketus />
        <BeforeAfter />
        <WhyChooseUs />
        <TestimonialsFaq />
        <ContactCta />
      </main>
      <Footer />
      <MobileBottomCta />
    </>
  )
}
