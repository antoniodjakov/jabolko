# Јаболко.мк

Едноставна статичка GitHub Pages страница за јаболков сидер и јаболков оцет.

## Датотеки

- `index.html` - содржина на страницата и таб панели.
- `styles.css` - респонзивен распоред и визуелен стил.
- `script.js` - пристапно префрлување меѓу табови.
- `assets/` - локални слики и favicon.
- `CNAME` - конфигурација за доменот `jabolko.mk`.

## Објавување на GitHub Pages

1. Креирај GitHub репозиториум.
2. Испрати ја оваа папка во репозиториумот.
3. Во GitHub отвори `Settings` -> `Pages`.
4. Постави изворот за објавување да биде главната папка на гранката, најчесто `main` и `/`.
5. Потврди дека сопствениот домен е `jabolko.mk`.
6. Вклучи HTTPS откако GitHub ќе го издаде сертификатот.

## DNS белешки

За основниот домен `jabolko.mk`, GitHub Pages моментално ги документира овие `A` записи:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Ако сакаш и `www.jabolko.mk`, креирај `CNAME` DNS запис за `www` што покажува кон твојот стандарден GitHub Pages домен, на пример `YOUR-USERNAME.github.io`.

Референца: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
