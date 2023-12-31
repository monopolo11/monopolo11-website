export const LEGACY_ROUTES = [
  'valheimDiscord.php',
  'unit2',
  'tab.php',
  'tabla.php',
  'tablad.php',
  'tools.php',
  'unit.php',
  'unit2.php',
  'superheroname.php',
  'probandoalv.php',
  'probandoalv.html',
  'potencia.php',
  'misc.php',
  'index.php',
  'dpnm.php',
  'dpna.php',
  'decipher.php',
  'daycalcres.php',
  'daycalc2.php',
  'daycalc.php',
  'countdownres.php',
  'countdownarr.php',
  'countdown.php',
  'cipher.php',
  'selaco',
  'netadmin',
  'login',
  'juego',
  'igo',
  'TBC',
  'READS',
  'Consignor',
];

export const SITE_TITLE = "Monopolo11's website - ";
export const SENTRY_DSN =
  'https://c384559c278f3aa919dff5b9614a6a17@o1320744.ingest.sentry.io/4505950818861056';

export interface LinkInterface {
  link: string;
  label: string;
  footerOnly?: boolean;
  headerOnly?: boolean;
  links?: LinkInterface[];
}

export const AppRoutes: LinkInterface[] = [
  { link: '/', label: 'Home' },
  { link: '/calculadora-de-conjuntos', label: 'Calculadora de Conjuntos' },
];
