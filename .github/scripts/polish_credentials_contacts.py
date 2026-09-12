from pathlib import Path
import re

p = Path('index.html')
s = p.read_text(encoding='utf-8')

pattern = re.compile(r'  /\* ============ section 08 contacts ============ \*/\n.*?\n</style>', re.S)
replacement = '''  /* ============ section 08 contacts ============ */
  .contact-list{border:1px solid var(--line);border-radius:24px;overflow:hidden;background:color-mix(in srgb,var(--bg) 96%,var(--accent-soft) 4%);box-shadow:none}
  .contact-row{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;padding:18px 20px;min-width:0;color:var(--ink);background:transparent;border:0;width:100%;text-align:left;cursor:pointer;font:inherit;transition:background var(--dur-s) var(--ease)}
  .contact-row + .contact-row{border-top:1px solid var(--line)}
  .contact-icon{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:none;color:var(--accent);background:color-mix(in srgb,var(--accent-soft) 58%,transparent)}
  .contact-icon svg{width:21px;height:21px}
  .contact-copy{display:flex;flex-direction:column;gap:3px;min-width:0}
  .contact-label{font-family:var(--display);font-size:14.5px;font-weight:700;line-height:1.35;color:var(--ink)}
  .contact-meta{font-family:var(--mono);font-size:10px;letter-spacing:.045em;color:var(--ink-soft);line-height:1.4}
  .contact-arrow{font-family:var(--sans);font-size:22px;line-height:1;color:var(--accent);opacity:.72;transition:transform var(--dur-s) var(--ease),opacity var(--dur-s) var(--ease)}
  @media (hover:hover) and (pointer:fine){.contact-row:hover{background:color-mix(in srgb,var(--accent-soft) 34%,transparent)}.contact-row:hover .contact-arrow{transform:translateX(3px);opacity:1}}
  @media (max-width:560px){.contact-list{border-radius:20px}.contact-row{padding:16px 17px;gap:12px}.contact-icon{width:34px;height:34px}.contact-label{font-size:14px}.contact-meta{font-size:9.5px}}

</style>'''
s, n = pattern.subn(replacement, s, count=1)
if n != 1:
    raise SystemExit('contacts CSS block not found')

replacements = [
    ('<span class="contact-label">LinkedIn</span><span class="contact-arrow" aria-hidden="true">&gt;</span>',
     '<span class="contact-copy"><span class="contact-label">LinkedIn</span><span class="contact-meta" data-i18n="contact_linkedin_meta">Profilo professionale</span></span><span class="contact-arrow" aria-hidden="true">&gt;</span>'),
    ('<span class="contact-label">Email</span><span class="contact-arrow" aria-hidden="true">&gt;</span>',
     '<span class="contact-copy"><span class="contact-label">Email</span><span class="contact-meta" data-i18n="contact_email_meta">Contatto diretto</span></span><span class="contact-arrow" aria-hidden="true">&gt;</span>'),
    ('<span class="contact-label">Google Skills</span><span class="contact-arrow" aria-hidden="true">&gt;</span>',
     '<span class="contact-copy"><span class="contact-label">Google Skills</span><span class="contact-meta" data-i18n="contact_skills_meta">Certificazioni e learning profile</span></span><span class="contact-arrow" aria-hidden="true">&gt;</span>')
]
for old, new in replacements:
    if old not in s:
        raise SystemExit('contact HTML target not found')
    s = s.replace(old, new, 1)

def insert_translation(block_start, values):
    global s
    start = s.find(block_start)
    if start < 0:
        raise SystemExit(f'language block not found: {block_start}')
    end = s.find('\n    },', start)
    chunk = s[start:end]
    if 'contact_linkedin_meta:' in chunk:
        return
    m = re.search(r'sec_contacts:"[^"]+",', chunk)
    if not m:
        raise SystemExit(f'sec_contacts missing: {block_start}')
    pos = start + m.end()
    s = s[:pos] + ' ' + values + s[pos:]

insert_translation('it: {', 'contact_linkedin_meta:"Profilo professionale", contact_email_meta:"Contatto diretto", contact_skills_meta:"Certificazioni e learning profile",')
insert_translation('en: {', 'contact_linkedin_meta:"Professional profile", contact_email_meta:"Direct contact", contact_skills_meta:"Credentials and learning profile",')
insert_translation('fr: {', 'contact_linkedin_meta:"Profil professionnel", contact_email_meta:"Contact direct", contact_skills_meta:"Certifications et profil de formation",')

if '<style id="footer-final-polish">' not in s:
    s = s.replace('</head>', '<style id="footer-final-polish">footer{padding-bottom:52px}@media(max-width:900px){footer{padding-bottom:48px}}</style>\n</head>', 1)

p.write_text(s, encoding='utf-8')
