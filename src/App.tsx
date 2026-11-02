import {useCallback, useRef, useState} from 'react';
import {bio, education, experiences, faces, nav, person, skills} from './content';
import {FaceCanvas, type Mood} from './face/FaceCanvas';
import {useTheme} from './hooks';

const DISC = '#2f4bf0';

function Header({dark, onToggle}: {dark: boolean; onToggle: () => void}) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/90 px-5 py-4 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#beranda" className="font-display text-sm font-black tracking-tight">
          AGUNG<span className="text-disc">.</span>
        </a>
        <nav aria-label="Navigasi utama" className="flex max-w-[78vw] items-center gap-1 overflow-x-auto">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-mute transition hover:bg-line hover:text-ink md:px-4 md:text-xs">
              {item.label}
            </a>
          ))}
          <button type="button" onClick={onToggle} aria-label="Ganti tema" aria-pressed={dark} className="ml-1 flex h-8 w-12 shrink-0 items-center rounded-full bg-sun p-1">
            <span className={`${dark ? 'translate-x-4' : ''} size-6 rounded-full bg-ink transition-transform`} />
          </button>
        </nav>
      </div>
    </header>
  );
}

function SectionTitle({eyebrow, title, detail}: {eyebrow: string; title: string; detail: string}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-disc">{eyebrow}</p>
      <h2 className="font-display text-3xl font-black tracking-[-0.045em] md:text-5xl">{title}</h2>
      <p className="mt-3 max-w-xl text-sm leading-7 text-mute">{detail}</p>
    </div>
  );
}

function EmptyCard({title, detail}: {title: string; detail: string}) {
  return (
    <div className="rounded-3xl border border-dashed border-line bg-field/60 p-6 md:p-8">
      <p className="font-display text-lg font-bold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-mute">{detail}</p>
    </div>
  );
}

export default function App() {
  const [dark, toggle] = useTheme();
  const stageRef = useRef<HTMLDivElement>(null);
  const [mood, setMood] = useState<Mood>({face: 'base', patience: 100, pulls: 0});
  const [tilt, setTilt] = useState({x: 0, y: 0});
  const onHeroMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({x: ((event.clientY - rect.top) / rect.height - 0.5) * -7, y: ((event.clientX - rect.left) / rect.width - 0.5) * 9});
  };
  const resetTilt = () => setTilt({x: 0, y: 0});
  const onMood = useCallback((next: Mood) => setMood(next), []);

  return (
    <div className="min-h-screen overflow-hidden bg-page text-ink">
      <Header dark={dark} onToggle={toggle} />

      <section id="beranda" onPointerMove={onHeroMove} onPointerLeave={resetTilt} className="hero-3d relative isolate mx-auto flex min-h-[680px] max-w-[1600px] flex-col justify-center overflow-hidden px-5 py-14 sm:px-6 sm:py-16 md:min-h-[690px] md:px-10 md:py-20">
        <div className="hero-copy relative z-10 max-w-2xl pb-[260px] sm:pb-[300px] md:pb-0">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-field/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-mute">
            <span className="size-2 rounded-full bg-disc" /> Portfolio profesional
          </p>
          <h1 className="font-display text-[clamp(42px,7.2vw,100px)] font-black leading-[0.94] tracking-[-0.065em]">
            Halo, saya<br /><span className="marker">{person.shortName}.</span>
          </h1>
          <p className="mt-7 max-w-lg text-xl font-semibold tracking-tight md:text-2xl">{person.role}</p>
          <p className="mt-3 max-w-lg text-sm leading-7 text-mute md:text-base">{bio[1]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kontak" className="rounded-full bg-disc px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:scale-[1.03]">Hubungi saya ↗</a>
            <a href="#profil" className="rounded-full border border-line px-6 py-3 text-xs font-bold uppercase tracking-wider transition hover:bg-line">Lihat profil</a>
          </div>
          <p className="mt-7 text-xs font-medium text-mute">⌖ {person.location}</p>
        </div>

        <div ref={stageRef} className="stage absolute bottom-[-2%] right-[2%] z-0 aspect-square w-[min(76vw,360px)] sm:w-[min(78vw,440px)] md:bottom-[-8%] md:right-[5%] md:w-[min(46vw,620px)]" style={{transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(24px)`, transition: "transform 220ms ease-out"}} />
        <div className="pointer-events-none absolute bottom-5 left-6 z-10 text-[10px] font-semibold uppercase tracking-widest text-mute md:left-10">
          Coba tarik wajah Otis · {mood.pulls} interaksi
        </div>
        <FaceCanvas stageRef={stageRef} discColor={DISC} onMood={onMood} />
      </section>

      <main className="relative z-10 border-t border-line bg-page">
        <section id="profil" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <SectionTitle eyebrow="01 / Tentang saya" title="Profil singkat" detail="Perkenalan dan informasi dasar untuk membantu rekruter mengenal saya." />
          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-ink p-7 text-page md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sun">Perkenalan</p>
              <h3 className="mt-5 max-w-xl font-display text-2xl font-bold leading-tight tracking-tight md:text-4xl">{person.name}</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-page/70">Saya berdomisili di {person.location} dan menargetkan kesempatan berkarier sebagai {person.role}. Portfolio ini menjadi tempat untuk menampilkan latar belakang, kemampuan, dan hasil pekerjaan secara terstruktur.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="rounded-3xl border border-line p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-mute">Domisili</p>
                <p className="mt-3 text-lg font-bold">{person.location}</p>
              </div>
              <div className="rounded-3xl border border-line p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-mute">Posisi yang dituju</p>
                <p className="mt-3 text-lg font-bold">{person.role}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pengalaman" className="scroll-mt-24 border-t border-line bg-field/40">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
            <SectionTitle eyebrow="02 / Perjalanan karier" title="Pengalaman kerja" detail="Riwayat pekerjaan dan tanggung jawab profesional." />
            {experiences.length ? (
              <div className="grid gap-4 md:grid-cols-2">{experiences.map((item) => <article key={item.role + item.company} className="rounded-3xl border border-line p-7"><p className="text-xs font-bold text-disc">{item.period}</p><h3 className="mt-3 text-xl font-bold">{item.role}</h3><p className="mt-1 text-sm text-mute">{item.company}</p><p className="mt-4 text-sm leading-7 text-mute">{item.description}</p></article>)}</div>
            ) : <EmptyCard title="Detail pengalaman belum ditambahkan" detail="Bagian ini siap diisi dengan nama perusahaan, posisi, periode kerja, dan tanggung jawab setelah data pengalaman kerja diberikan." />}
          </div>
        </section>

        <section id="pendidikan" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <SectionTitle eyebrow="03 / Latar belakang" title="Pendidikan" detail="Riwayat pendidikan formal maupun pelatihan yang relevan." />
          {education.length ? (
            <div className="grid gap-4 md:grid-cols-2">{education.map((item) => <article key={item.school + item.level} className="rounded-3xl border border-line p-7"><p className="text-xs font-bold text-disc">{item.period}</p><h3 className="mt-3 text-xl font-bold">{item.school}</h3><p className="mt-1 text-sm text-mute">{item.level}</p><p className="mt-4 text-sm leading-7 text-mute">{item.description}</p></article>)}</div>
          ) : <EmptyCard title="Data pendidikan belum ditambahkan" detail="Tambahkan nama sekolah atau kampus, jurusan, dan tahun pendidikan agar bagian ini siap ditinjau oleh rekruter." />}
        </section>

        <section id="keahlian" className="scroll-mt-24 border-y border-line bg-field/40">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
            <SectionTitle eyebrow="04 / Kompetensi" title="Keahlian" detail="Kemampuan yang relevan dengan pekerjaan administrasi." />
            {skills.length ? <div className="flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="rounded-full border border-line bg-page px-5 py-3 text-sm font-semibold">{skill}</span>)}</div> : <EmptyCard title="Daftar keahlian belum ditambahkan" detail="Kita bisa menambahkan kemampuan yang benar-benar kamu kuasai, misalnya aplikasi perkantoran, pengarsipan, pengolahan data, atau administrasi dokumen setelah kamu konfirmasi." />}
          </div>
        </section>

        <section id="kontak" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2rem] bg-disc p-8 text-white md:p-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">05 / Kontak</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-black leading-tight tracking-[-0.05em] md:text-6xl">Mari terhubung.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">Untuk informasi lebih lanjut atau kesempatan kerja, silakan hubungi saya melalui WhatsApp atau email.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`https://wa.me/${person.phone}`} target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-disc transition hover:scale-[1.03]">WhatsApp ↗</a>
              <a href={`mailto:${person.email}`} className="rounded-full border border-white/40 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10">Kirim email ↗</a>
            </div>
            <div className="mt-12 grid gap-5 border-t border-white/20 pt-7 text-sm sm:grid-cols-2">
              <div><p className="text-[10px] font-bold uppercase tracking-widest text-white/60">WhatsApp</p><p className="mt-2 font-semibold">+{person.phone}</p></div>
              <div><p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Email</p><p className="mt-2 break-all font-semibold">{person.email}</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-7 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 text-xs text-mute sm:flex-row">
          <p className="font-semibold text-ink">{person.name}</p>
          <p>Portfolio pribadi · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
