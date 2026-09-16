from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')

old = '<p class="v"><span class="num" data-count="3">3</span></p>\n      <span class="k" id="p1k" data-i18n="p1k">AI Advisory</span>'
new = '<p class="v"><span>2+1</span></p>\n      <span class="k" id="p1k" data-i18n="p1k">AI Advisory</span>'
if old in s:
    s = s.replace(old, new, 1)
elif '<p class="v"><span>2+1</span></p>' not in s:
    raise SystemExit('AI Advisory metric pattern not found')

marker = '<style id="final-surface-polish">'
if marker not in s:
    css = '''
<style id="final-surface-polish">
.chisono-card{
  padding:26px 30px;
  background:color-mix(in srgb,var(--bg) 94%,var(--accent-soft) 6%);
  box-shadow:0 4px 24px -14px color-mix(in srgb,var(--accent) 22%,transparent);
}
.cap-unified{
  background:color-mix(in srgb,var(--bg) 94%,var(--accent-soft) 6%);
  box-shadow:0 4px 28px -16px color-mix(in srgb,var(--accent) 20%,transparent);
}
.cap-item{
  background:color-mix(in srgb,var(--bg) 84%,var(--accent-soft) 16%);
  border-color:color-mix(in srgb,var(--accent) 10%,var(--line) 90%);
  box-shadow:0 5px 20px -16px color-mix(in srgb,var(--accent) 22%,transparent);
}
.cap-item-core{
  background:color-mix(in srgb,var(--accent-soft) 44%,var(--bg) 56%);
  border-color:color-mix(in srgb,var(--accent) 20%,var(--line) 80%);
}
.cap-item-icon{
  background:color-mix(in srgb,var(--accent) 12%,var(--accent-soft) 18%,transparent);
}
.persp-card{
  background:color-mix(in srgb,var(--bg) 93%,var(--accent-soft) 7%);
  box-shadow:0 5px 26px -15px color-mix(in srgb,var(--accent) 20%,transparent);
}
.credential-row,.contact-row{
  padding:21px 22px;
  background:color-mix(in srgb,var(--bg) 93%,var(--accent-soft) 7%);
  border-color:color-mix(in srgb,var(--accent) 7%,var(--line) 93%);
  box-shadow:0 5px 22px -16px color-mix(in srgb,var(--accent) 18%,transparent);
}
.credential-icon,.contact-icon{
  box-shadow:0 3px 10px -6px color-mix(in srgb,var(--accent) 55%,transparent);
}
@media (hover:hover) and (pointer:fine){
  .chisono-card:hover,.persp-card:hover{
    background:color-mix(in srgb,var(--accent-soft) 72%,var(--bg) 28%);
  }
  .credential-row:hover,.contact-row:hover{
    background:color-mix(in srgb,var(--accent-soft) 30%,var(--bg) 70%);
  }
}
@media (max-width:560px){
  .chisono-card{padding:24px 22px}
  .credential-row,.contact-row{padding:18px 18px}
}
</style>
'''
    s = s.replace('</head>', css + '\n</head>', 1)

p.write_text(s, encoding='utf-8')
