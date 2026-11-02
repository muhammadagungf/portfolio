export const person = {
  name: 'Muhammad Agung Firdaus',
  shortName: 'Agung Firdaus',
  handle: 'PORTFOLIO',
  role: 'Staff Administrasi',
  location: 'Driyorejo, Gresik',
  phone: '6285854293058',
  email: 'agungfirdaus135@gmail.com',
  linkedin: '',
};

export const nav = [
  {label: 'Profil', href: '#profil'},
  {label: 'Pengalaman', href: '#pengalaman'},
  {label: 'Pendidikan', href: '#pendidikan'},
  {label: 'Keahlian', href: '#keahlian'},
  {label: 'Kontak', href: '#kontak'},
];

export const bio = [
  'Staff Administrasi · Admin Sales & Ekspedisi',
  'Saya memiliki pengalaman di bidang administrasi sales dan ekspedisi di PT Wings Surya sejak Desember 2019, didukung pengalaman sebelumnya di bidang operasional produksi dan packing. Lulusan S1 Teknik Informatika yang terbiasa bekerja secara individu maupun tim, disiplin, mampu beradaptasi, dan siap terus belajar serta berkembang.',
];

export const experiences: {role: string; company: string; period: string; description: string}[] = [
  {
    role: 'Admin Sales Division & Ekspedisi',
    company: 'PT Wings Surya',
    period: 'Desember 2019 – Sekarang',
    description: 'Berpengalaman bekerja pada bidang administrasi sales dan ekspedisi.',
  },
  {
    role: 'Operator Flexo',
    company: 'PT Pabrik Kertas Tjiwi Kimia',
    period: 'November 2012 – November 2016',
    description: 'Pengalaman kerja di bidang operasional mesin flexo pada industri kertas.',
  },
  {
    role: 'Packing',
    company: 'PT Karunia Alam Segar',
    period: 'Mei 2012 – Agustus 2012',
    description: 'Pengalaman kerja pada bagian packing.',
  },
];

export const education: {school: string; level: string; period: string; description: string}[] = [
  {
    school: 'Universitas Islam Majapahit',
    level: 'Sarjana Teknik Informatika',
    period: 'Selesai 2018',
    description: 'Pendidikan tinggi di bidang Teknik Informatika.',
  },
  {
    school: 'SMKN 1 Jetis Mojokerto',
    level: 'Teknik Perbaikan Body Otomotif',
    period: 'Selesai 2012',
    description: 'Pendidikan kejuruan di bidang perbaikan body otomotif.',
  },
];

export const skills: string[] = [
  'Microsoft Access',
  'Microsoft Word',
  'Microsoft Excel',
  'Internet Applications',
  'WordPress',
  'Web Design',
  'Blogging',
  'Database Design',
  'Manajemen Waktu',
  'Bersosialisasi',
  'Bahasa Inggris',
];

/**
 * Every expression is registered to the same 2:3 bust framing, padded to a
 * square, so they swap in place. A file that fails to load falls back to the base face.
 */
export const faces = {
  base: {src: `${import.meta.env.BASE_URL}faces/base.webp`, mood: 'chill'},
  l_left: {src: `${import.meta.env.BASE_URL}faces/l_left.webp`, mood: 'watching you'},
  l_right: {src: `${import.meta.env.BASE_URL}faces/l_right.webp`, mood: 'watching you'},
  x_cross: {src: `${import.meta.env.BASE_URL}faces/x_cross.webp`, mood: 'suspicious'},
  x_tongue: {src: `${import.meta.env.BASE_URL}faces/x_tongue.webp`, mood: 'goofy'},
  x_shock: {src: `${import.meta.env.BASE_URL}faces/x_shock.webp`, mood: 'startled'},
  x_laugh: {src: `${import.meta.env.BASE_URL}faces/x_laugh.webp`, mood: 'cackling'},
  x_skeptic: {src: `${import.meta.env.BASE_URL}faces/x_skeptic.webp`, mood: 'unconvinced'},
  x_whistle: {src: `${import.meta.env.BASE_URL}faces/x_whistle.webp`, mood: 'innocent'},
  x_smug: {src: `${import.meta.env.BASE_URL}faces/x_smug.webp`, mood: 'smug'},
  x_dizzy: {src: `${import.meta.env.BASE_URL}faces/x_dizzy.webp`, mood: 'seeing stars'},
  g_grimace: {src: `${import.meta.env.BASE_URL}faces/g_grimace.webp`, mood: 'being squeezed'},
  g_ouch: {src: `${import.meta.env.BASE_URL}faces/g_ouch.webp`, mood: 'OW'},
  g_squish: {src: `${import.meta.env.BASE_URL}faces/g_squish.webp`, mood: 'pinched'},
} as const;

export type FaceKey = keyof typeof faces;
export const releaseFaces: FaceKey[] = ['x_tongue', 'x_laugh', 'x_skeptic', 'x_whistle', 'x_smug', 'x_cross'];

export const rig = {
  disc: {x: 0.5, y: 0.58, r: 0.41},
  nose: {x: 0.505, y: 0.505, r: 0.04},
  cheeks: [
    {x: 0.385, y: 0.53},
    {x: 0.625, y: 0.53},
  ],
  face: {x: 0.5, y: 0.51, rx: 0.175, ry: 0.23},
  hairLine: 0.26,
  sides: 0.19,
};
